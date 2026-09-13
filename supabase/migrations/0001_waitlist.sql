-- DancePro waitlist schema, RLS, and RPC functions.
-- Anonymous clients never select/update/delete waitlist_signups directly —
-- all access goes through the security-definer functions below.

create table public.dance_styles (
  id          uuid primary key default gen_random_uuid(),
  name        text not null unique,
  category    text not null check (category in ('International','American','Other')),
  sort_order  int  not null default 0
);

insert into public.dance_styles (name, category, sort_order) values
  ('International Latin',    'International', 1),
  ('International Standard', 'International', 2),
  ('American Smooth',        'American',      3),
  ('American Rhythm',        'American',      4),
  ('Social Ballroom',        'Other',         5),
  ('Argentine Tango',        'Other',         6),
  ('Salsa',                  'Other',         7),
  ('Bachata',                'Other',         8),
  ('Other',                  'Other',         9);

create table public.waitlist_signups (
  id             uuid primary key default gen_random_uuid(),
  first_name     text not null,
  email          text not null,
  city           text not null,
  country        text not null,
  role           text not null check (role in ('leader','follower','both')),
  level          text not null check (level in ('beginner','intermediate','advanced','competitive','professional')),
  styles         text[] not null default '{}',
  looking_for    text[] not null default '{}',
  referral_code  text not null unique default encode(gen_random_bytes(4), 'hex'),
  referred_by    text,
  created_at     timestamptz not null default now()
);

create unique index waitlist_email_lower_idx on public.waitlist_signups (lower(email));
create index waitlist_referred_by_idx on public.waitlist_signups (referred_by);
create index waitlist_created_at_idx on public.waitlist_signups (created_at);

alter table public.waitlist_signups enable row level security;
alter table public.dance_styles enable row level security;

create policy "styles are public" on public.dance_styles
  for select to anon using (true);

-- Deliberately NO select/update/delete policy on waitlist_signups.
-- Anonymous access goes only through the functions below.

create or replace function public.join_waitlist(
  p_first_name  text,
  p_email       text,
  p_city        text,
  p_country     text,
  p_role        text,
  p_level       text,
  p_styles      text[],
  p_looking_for text[],
  p_ref         text default null
) returns text
language plpgsql security definer set search_path = public as $$
declare v_code text;
begin
  insert into waitlist_signups
    (first_name, email, city, country, role, level, styles, looking_for, referred_by)
  values
    (trim(p_first_name), lower(trim(p_email)), trim(p_city), trim(p_country),
     p_role, p_level, p_styles, p_looking_for, nullif(trim(coalesce(p_ref,'')), ''))
  returning referral_code into v_code;
  return v_code;
exception when unique_violation then
  select referral_code into v_code
    from waitlist_signups where lower(email) = lower(trim(p_email));
  return v_code;
end; $$;

create or replace function public.waitlist_status(p_code text)
returns table (position bigint, total bigint, referrals bigint)
language sql security definer set search_path = public as $$
  select
    (select count(*) from waitlist_signups w2 where w2.created_at <= w.created_at),
    (select count(*) from waitlist_signups),
    (select count(*) from waitlist_signups r where r.referred_by = w.referral_code)
  from waitlist_signups w
  where w.referral_code = p_code;
$$;

create or replace function public.waitlist_count()
returns bigint
language sql security definer set search_path = public as $$
  select count(*) from waitlist_signups;
$$;

revoke all on function public.join_waitlist(text,text,text,text,text,text,text[],text[],text) from public;
grant execute on function public.join_waitlist(text,text,text,text,text,text,text[],text[],text) to anon;
grant execute on function public.waitlist_status(text) to anon;
grant execute on function public.waitlist_count() to anon;
