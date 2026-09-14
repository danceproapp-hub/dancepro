-- Validate signups server-side.
--
-- The anon key ships to the browser, so anyone can call join_waitlist
-- directly and skip the form's checks entirely. NOT NULL does not help
-- here: an empty string satisfies it, so blank names, blank emails and
-- "not-an-email" all inserted cleanly.

delete from public.waitlist_signups
 where trim(first_name) = ''
    or email !~ '^[^@[:space:]]+@[^@[:space:]]+\.[^@[:space:]]+$';

alter table public.waitlist_signups
  add constraint waitlist_first_name_not_blank
    check (length(trim(first_name)) > 0),
  add constraint waitlist_email_shape
    check (email ~ '^[^@[:space:]]+@[^@[:space:]]+\.[^@[:space:]]+$');

create or replace function public.join_waitlist(
  p_first_name text,
  p_email      text,
  p_styles     text[] default '{}',
  p_ref        text default null
) returns text
language plpgsql security definer set search_path = public as $$
declare
  v_code  text;
  v_name  text := trim(coalesce(p_first_name, ''));
  v_email text := lower(trim(coalesce(p_email, '')));
begin
  if v_name = '' then
    raise exception 'A first name is required.' using errcode = 'check_violation';
  end if;

  if v_email !~ '^[^@[:space:]]+@[^@[:space:]]+\.[^@[:space:]]+$' then
    raise exception 'A valid email address is required.' using errcode = 'check_violation';
  end if;

  if coalesce(array_length(p_styles, 1), 0) = 0 then
    raise exception 'Pick at least one dance style.' using errcode = 'check_violation';
  end if;

  insert into waitlist_signups (first_name, email, styles, referred_by)
  values (v_name, v_email, p_styles, nullif(trim(coalesce(p_ref,'')), ''))
  returning referral_code into v_code;
  return v_code;
exception when unique_violation then
  update waitlist_signups
     set styles = coalesce(nullif(p_styles, '{}'), styles)
   where lower(email) = v_email
  returning referral_code into v_code;
  return v_code;
end; $$;

-- Location and role are what the profile is actually for, so a save that
-- supplies neither is rejected rather than silently doing nothing.
create or replace function public.update_waitlist_profile(
  p_code        text,
  p_city        text default null,
  p_country     text default null,
  p_role        text default null,
  p_level       text default null,
  p_styles      text[] default null,
  p_looking_for text[] default null,
  p_divisions   text[] default null
) returns boolean
language plpgsql security definer set search_path = public as $$
declare
  v_found boolean;
  v_city  text := nullif(trim(coalesce(p_city, '')), '');
  v_role  text := nullif(p_role, '');
begin
  if v_city is null and v_role is null then
    raise exception 'A city and a role are required.' using errcode = 'check_violation';
  end if;

  update waitlist_signups set
    city        = coalesce(v_city, city),
    country     = coalesce(nullif(trim(coalesce(p_country,'')), ''), country),
    role        = coalesce(v_role, role),
    level       = case when p_level is null then level else nullif(p_level, '') end,
    styles      = coalesce(p_styles, styles),
    looking_for = coalesce(p_looking_for, looking_for),
    competition_divisions = coalesce(p_divisions, competition_divisions)
  where referral_code = p_code;

  get diagnostics v_found = row_count;
  return v_found;
end; $$;

grant execute on function public.join_waitlist(text,text,text[],text) to anon;
grant execute on function public.update_waitlist_profile(text,text,text,text,text,text[],text[],text[]) to anon;

-- Validate role and level inside the function rather than letting the
-- table CHECK fire: PostgREST echoes the whole failing row back on a
-- constraint violation, which would disclose that signup's email to
-- anyone who guessed a referral code.
create or replace function public.update_waitlist_profile(
  p_code        text,
  p_city        text default null,
  p_country     text default null,
  p_role        text default null,
  p_level       text default null,
  p_styles      text[] default null,
  p_looking_for text[] default null,
  p_divisions   text[] default null
) returns boolean
language plpgsql security definer set search_path = public as $$
declare
  v_found boolean;
  v_city  text := nullif(trim(coalesce(p_city, '')), '');
  v_role  text := nullif(p_role, '');
  v_level text := nullif(p_level, '');
begin
  if v_city is null and v_role is null then
    raise exception 'A city and a role are required.' using errcode = 'check_violation';
  end if;

  if v_role is not null and v_role not in ('leader','follower','both') then
    raise exception 'Unknown role.' using errcode = 'check_violation';
  end if;

  if v_level is not null and v_level not in
     ('beginner','intermediate','advanced','competitive','professional') then
    raise exception 'Unknown level.' using errcode = 'check_violation';
  end if;

  update waitlist_signups set
    city        = coalesce(v_city, city),
    country     = coalesce(nullif(trim(coalesce(p_country,'')), ''), country),
    role        = coalesce(v_role, role),
    level       = case when p_level is null then level else v_level end,
    styles      = coalesce(p_styles, styles),
    looking_for = coalesce(p_looking_for, looking_for),
    competition_divisions = coalesce(p_divisions, competition_divisions)
  where referral_code = p_code;

  get diagnostics v_found = row_count;
  return v_found;
end; $$;

grant execute on function public.update_waitlist_profile(text,text,text,text,text,text[],text[],text[]) to anon;
