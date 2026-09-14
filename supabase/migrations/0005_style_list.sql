-- Narrow the style list to the disciplines that actually have a
-- competitive circuit, plus one "Social Dance" bucket for Salsa, Bachata,
-- Merengue and the rest of the social floor, which have no circuit.
--
-- "International Standard" is renamed "International Ballroom", the name
-- more commonly used in the US.

update public.waitlist_signups
   set styles = array_replace(styles, 'International Standard', 'International Ballroom');

-- Fold the old social-floor entries into the single Social Dance option.
update public.waitlist_signups
   set styles = (
     select coalesce(array_agg(distinct v), '{}')
     from unnest(styles) as v
     where v in ('International Latin','International Ballroom',
                 'American Smooth','American Rhythm','Argentine Tango')
   ) || case
          when styles && array['Salsa','Bachata','Social Ballroom','Other']
          then array['Social Dance'] else '{}'::text[]
        end
 where styles && array['Salsa','Bachata','Social Ballroom','Other',
                       'International Standard'];

delete from public.dance_styles;

insert into public.dance_styles (name, category, sort_order) values
  ('International Latin',    'International', 1),
  ('International Ballroom', 'International', 2),
  ('American Smooth',        'American',      3),
  ('American Rhythm',        'American',      4),
  ('Argentine Tango',        'Other',         5),
  ('Social Dance',           'Other',         6);

-- The profile form needs the styles chosen in step 1 so it can hide the
-- professional options from dancers who only picked Social Dance.
-- Changing the return type means the old function must be dropped first.
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
    (w.city is not null and w.country is not null
       and w.role is not null and w.level is not null),
    w.styles
  from waitlist_signups w
  where w.referral_code = p_code;
$$;

grant execute on function public.waitlist_status(text) to anon;
