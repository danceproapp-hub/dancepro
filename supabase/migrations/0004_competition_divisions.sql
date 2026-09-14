-- Competition division, asked only of dancers seeking a competition partner.
--
-- Stored as an array because dancers commonly compete in more than one
-- division at once — Pro-Am with a teacher while also looking for an
-- amateur partner is a normal combination.

alter table public.waitlist_signups
  add column if not exists competition_divisions text[] not null default '{}';

-- Adding a parameter changes the signature, so "create or replace" would
-- leave the old function in place as an overload and PostgREST would reject
-- every call as ambiguous. Drop it first.
drop function if exists public.update_waitlist_profile(text,text,text,text,text,text[],text[]);

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
    role        = coalesce(p_role, role),
    level       = coalesce(p_level, level),
    styles      = coalesce(p_styles, styles),
    looking_for = coalesce(p_looking_for, looking_for),
    -- Divisions only mean something alongside "Competition partner", so an
    -- explicit empty array clears them rather than being ignored.
    competition_divisions = coalesce(p_divisions, competition_divisions)
  where referral_code = p_code;

  get diagnostics v_found = row_count;
  return v_found;
end; $$;

revoke all on function public.update_waitlist_profile(text,text,text,text,text,text[],text[],text[]) from public;
grant execute on function public.update_waitlist_profile(text,text,text,text,text,text[],text[],text[]) to anon;
