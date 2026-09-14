-- Dance styles move into step 1.
--
-- Styles are the most useful field for matching and cost a single tap, so
-- they are worth asking for up front. Everything else stays optional in
-- step 2.

drop function if exists public.join_waitlist(text,text,text);

create or replace function public.join_waitlist(
  p_first_name text,
  p_email      text,
  p_styles     text[] default '{}',
  p_ref        text default null
) returns text
language plpgsql security definer set search_path = public as $$
declare v_code text;
begin
  insert into waitlist_signups (first_name, email, styles, referred_by)
  values (
    trim(p_first_name),
    lower(trim(p_email)),
    coalesce(p_styles, '{}'),
    nullif(trim(coalesce(p_ref,'')), '')
  )
  returning referral_code into v_code;
  return v_code;
exception when unique_violation then
  -- Returning signup: keep their place, but let them correct their styles.
  update waitlist_signups
     set styles = coalesce(nullif(p_styles, '{}'), styles)
   where lower(email) = lower(trim(p_email))
  returning referral_code into v_code;
  return v_code;
end; $$;

-- Styles are collected in step 1 now, so completeness only depends on the
-- fields step 2 actually asks for.
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
    (w.city is not null and w.country is not null
       and w.role is not null and w.level is not null)
  from waitlist_signups w
  where w.referral_code = p_code;
$$;

revoke all on function public.join_waitlist(text,text,text[],text) from public;
grant execute on function public.join_waitlist(text,text,text[],text) to anon;
grant execute on function public.waitlist_status(text) to anon;
