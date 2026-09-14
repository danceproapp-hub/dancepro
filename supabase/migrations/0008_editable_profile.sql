-- Return the saved profile so the welcome page can show it back and let
-- the dancer edit it.
--
-- Previously the form was hidden once profile_complete flipped true, which
-- meant anyone who saved location and role but skipped division or
-- "looking for" could never add them — the form was gone for good.

drop function if exists public.waitlist_status(text);

create or replace function public.waitlist_status(p_code text)
returns table (
  "position"            bigint,
  total                 bigint,
  referrals             bigint,
  profile_complete      boolean,
  styles                text[],
  city                  text,
  country               text,
  role                  text,
  level                 text,
  looking_for           text[],
  competition_divisions text[]
)
language sql security definer set search_path = public as $$
  select
    (select count(*) from waitlist_signups w2 where w2.created_at <= w.created_at),
    (select count(*) from waitlist_signups),
    (select count(*) from waitlist_signups r where r.referred_by = w.referral_code),
    (w.city is not null and w.country is not null and w.role is not null),
    w.styles,
    w.city,
    w.country,
    w.role,
    w.level,
    w.looking_for,
    w.competition_divisions
  from waitlist_signups w
  where w.referral_code = p_code;
$$;

grant execute on function public.waitlist_status(text) to anon;

-- Editing must be able to clear a field, not only add to it, so the update
-- now distinguishes "not supplied" (null) from "cleared" (empty).
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
declare v_found boolean;
begin
  update waitlist_signups set
    city        = coalesce(nullif(trim(coalesce(p_city,'')), ''), city),
    country     = coalesce(nullif(trim(coalesce(p_country,'')), ''), country),
    role        = coalesce(nullif(p_role, ''), role),
    level       = case when p_level is null then level
                       else nullif(p_level, '') end,
    styles      = coalesce(p_styles, styles),
    looking_for = coalesce(p_looking_for, looking_for),
    competition_divisions = coalesce(p_divisions, competition_divisions)
  where referral_code = p_code;

  get diagnostics v_found = row_count;
  return v_found;
end; $$;

grant execute on function public.update_waitlist_profile(text,text,text,text,text,text[],text[],text[]) to anon;
