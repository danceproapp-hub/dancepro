-- Two-step signup.
--
-- Step 1 asks only for a first name and email, so a spot is secured before
-- the visitor can lose interest. The dancer details become an optional
-- profile completed afterwards on the welcome page, which means an
-- abandoned step 2 still leaves a usable signup.

-- Everything except the name and email is now optional.
alter table public.waitlist_signups
  alter column city    drop not null,
  alter column country drop not null,
  alter column role    drop not null,
  alter column level   drop not null;

-- Step 1: name + email only.
drop function if exists public.join_waitlist(text,text,text,text,text,text,text[],text[],text);

create or replace function public.join_waitlist(
  p_first_name text,
  p_email      text,
  p_ref        text default null
) returns text
language plpgsql security definer set search_path = public as $$
declare v_code text;
begin
  insert into waitlist_signups (first_name, email, referred_by)
  values (
    trim(p_first_name),
    lower(trim(p_email)),
    nullif(trim(coalesce(p_ref,'')), '')
  )
  returning referral_code into v_code;
  return v_code;
exception when unique_violation then
  select referral_code into v_code
    from waitlist_signups where lower(email) = lower(trim(p_email));
  return v_code;
end; $$;

-- Step 2: fill in the dancer details, keyed on the referral code the
-- signup already holds. Only overwrites what was actually supplied, so a
-- partially completed profile never blanks out earlier answers.
create or replace function public.update_waitlist_profile(
  p_code        text,
  p_city        text default null,
  p_country     text default null,
  p_role        text default null,
  p_level       text default null,
  p_styles      text[] default null,
  p_looking_for text[] default null
) returns boolean
language plpgsql security definer set search_path = public as $$
declare v_found boolean;
begin
  update waitlist_signups set
    city        = coalesce(nullif(trim(coalesce(p_city,'')), ''), city),
    country     = coalesce(nullif(trim(coalesce(p_country,'')), ''), country),
    role        = coalesce(p_role, role),
    level       = coalesce(p_level, level),
    styles      = coalesce(p_styles, styles),
    looking_for = coalesce(p_looking_for, looking_for)
  where referral_code = p_code;

  get diagnostics v_found = row_count;
  return v_found;
end; $$;

-- waitlist_status also reports whether the optional profile is filled in,
-- so the welcome page knows whether to prompt for it.
drop function if exists public.waitlist_status(text);

create or replace function public.waitlist_status(p_code text)
returns table (
  "position"       bigint,
  total            bigint,
  referrals        bigint,
  profile_complete boolean
)
language sql security definer set search_path = public as $$
  select
    (select count(*) from waitlist_signups w2 where w2.created_at <= w.created_at),
    (select count(*) from waitlist_signups),
    (select count(*) from waitlist_signups r where r.referred_by = w.referral_code),
    (w.city is not null and w.country is not null and w.role is not null
       and w.level is not null and array_length(w.styles, 1) is not null)
  from waitlist_signups w
  where w.referral_code = p_code;
$$;

revoke all on function public.join_waitlist(text,text,text) from public;
revoke all on function public.update_waitlist_profile(text,text,text,text,text,text[],text[]) from public;

grant execute on function public.join_waitlist(text,text,text) to anon;
grant execute on function public.update_waitlist_profile(text,text,text,text,text,text[],text[]) to anon;
grant execute on function public.waitlist_status(text) to anon;
