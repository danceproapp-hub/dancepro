-- Level is now asked only of social-only dancers; competitive dancers
-- describe themselves by division instead. So a complete profile can no
-- longer require a level, or every competitive dancer would be prompted
-- for the profile forever.

drop function if exists public.waitlist_status(text);

create or replace function public.waitlist_status(p_code text)
returns table (
  "position"       bigint,
  total            bigint,
  referrals        bigint,
  profile_complete boolean,
  styles           text[]
)
language sql security definer set search_path = public as $$
  select
    (select count(*) from waitlist_signups w2 where w2.created_at <= w.created_at),
    (select count(*) from waitlist_signups),
    (select count(*) from waitlist_signups r where r.referred_by = w.referral_code),
    (w.city is not null and w.country is not null and w.role is not null),
    w.styles
  from waitlist_signups w
  where w.referral_code = p_code;
$$;

grant execute on function public.waitlist_status(text) to anon;
