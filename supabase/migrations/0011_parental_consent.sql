-- Parental consent for dancers under 16.
--
-- A minor's row is created inert: it holds a place but is excluded from
-- every count and from the referral tally until a parent or guardian
-- clicks the link we email them. Nothing else in the app changes shape.

alter table public.waitlist_signups
  add column if not exists is_minor boolean not null default false,
  add column if not exists parent_email text,
  add column if not exists consent_token text,
  add column if not exists consent_granted_at timestamptz;

alter table public.waitlist_signups
  drop constraint if exists waitlist_minor_needs_parent,
  add constraint waitlist_minor_needs_parent
    check (not is_minor or parent_email is not null),
  drop constraint if exists waitlist_parent_email_shape,
  add constraint waitlist_parent_email_shape
    check (
      parent_email is null
      or parent_email ~ '^[^@[:space:]]+@[^@[:space:]]+\.[^@[:space:]]+$'
    );

create unique index if not exists waitlist_consent_token_idx
  on public.waitlist_signups (consent_token)
  where consent_token is not null;

-- gen_random_bytes lives in the extensions schema, which a function with
-- search_path = public cannot see. gen_random_uuid is built in.
create or replace function public.new_consent_token()
returns text language sql volatile as $$
  select replace(gen_random_uuid()::text, '-', '')
      || replace(gen_random_uuid()::text, '-', '');
$$;

-- One predicate, used everywhere, so "counts" can never drift from
-- "confirmed": an adult always counts, a minor only once consented.
create or replace function public.waitlist_is_confirmed(w public.waitlist_signups)
returns boolean language sql immutable as $$
  select not w.is_minor or w.consent_granted_at is not null;
$$;

-- Signup for an under-16. Separate from join_waitlist rather than a new
-- parameter on it: changing that function's return type would mean
-- dropping it, and it is what the live site calls.
create or replace function public.join_waitlist_minor(
  p_first_name   text,
  p_email        text,
  p_styles       text[] default '{}',
  p_ref          text default null,
  p_parent_email text default null
) returns jsonb
language plpgsql security definer set search_path = public as $$
declare
  v_code   text;
  v_token  text;
  v_name   text := trim(coalesce(p_first_name, ''));
  v_email  text := lower(trim(coalesce(p_email, '')));
  v_parent text := lower(trim(coalesce(p_parent_email, '')));
begin
  if v_name = '' then
    raise exception 'A first name is required.' using errcode = 'check_violation';
  end if;

  if v_email !~ '^[^@[:space:]]+@[^@[:space:]]+\.[^@[:space:]]+$' then
    raise exception 'A valid email address is required.' using errcode = 'check_violation';
  end if;

  if v_parent !~ '^[^@[:space:]]+@[^@[:space:]]+\.[^@[:space:]]+$' then
    raise exception 'A parent or guardian email is required.' using errcode = 'check_violation';
  end if;

  if v_parent = v_email then
    raise exception 'The parent email must differ from the dancer email.' using errcode = 'check_violation';
  end if;

  if coalesce(array_length(p_styles, 1), 0) = 0 then
    raise exception 'Pick at least one dance style.' using errcode = 'check_violation';
  end if;

  v_token := new_consent_token();

  insert into waitlist_signups
    (first_name, email, styles, referred_by, is_minor, parent_email, consent_token)
  values
    (v_name, v_email, p_styles, nullif(trim(coalesce(p_ref,'')), ''), true, v_parent, v_token)
  returning referral_code into v_code;

  return jsonb_build_object('code', v_code, 'token', v_token);
exception when unique_violation then
  -- Already signed up: hand back the existing place and a fresh token so
  -- the parent can be asked again, rather than creating a duplicate.
  update waitlist_signups
     set parent_email = v_parent,
         is_minor = true,
         consent_token = new_consent_token()
   where lower(email) = v_email
  returning referral_code, consent_token into v_code, v_token;
  return jsonb_build_object('code', v_code, 'token', v_token);
end; $$;

-- Clicked by the parent. Idempotent: a second click is still a success.
create or replace function public.confirm_parent_consent(p_token text)
returns boolean
language plpgsql security definer set search_path = public as $$
declare v_found boolean;
begin
  update waitlist_signups
     set consent_granted_at = coalesce(consent_granted_at, now())
   where consent_token = p_token;

  get diagnostics v_found = row_count;
  return v_found;
end; $$;

-- Counts now mean confirmed places.
create or replace function public.waitlist_count()
returns bigint language sql security definer set search_path = public as $$
  select count(*) from waitlist_signups w where waitlist_is_confirmed(w);
$$;

create or replace function public.waitlist_status(p_code text)
returns table (
  "position" bigint, total bigint, referrals bigint, profile_complete boolean,
  styles text[], city text, country text, role text, level text,
  looking_for text[], competition_divisions text[]
) language sql security definer set search_path = public as $$
  select
    (select count(*) from waitlist_signups w2
      where w2.created_at <= w.created_at and waitlist_is_confirmed(w2)),
    (select count(*) from waitlist_signups w3 where waitlist_is_confirmed(w3)),
    (select count(*) from waitlist_signups r
      where r.referred_by = w.referral_code and waitlist_is_confirmed(r)),
    (w.city is not null and w.country is not null and w.role is not null),
    w.styles, w.city, w.country, w.role, w.level,
    w.looking_for, w.competition_divisions
  from waitlist_signups w
  where w.referral_code = p_code;
$$;

-- Granted to anon only because the routes still fall back to the
-- publishable key; migration 0010 revokes all three together once
-- SUPABASE_SERVICE_ROLE_KEY is set. The consent token is a 256-bit
-- secret, so it is the authorisation here regardless of which key calls.
revoke all on function public.join_waitlist_minor(text,text,text[],text,text) from public;
revoke all on function public.confirm_parent_consent(text) from public;
grant execute on function public.join_waitlist_minor(text,text,text[],text,text) to anon;
grant execute on function public.confirm_parent_consent(text) to anon;
