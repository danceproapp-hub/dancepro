-- Bring back an "Other" style for West Coast Swing, Zouk, Country and
-- anything else outside the listed disciplines.

insert into public.dance_styles (name, category, sort_order)
values ('Other', 'Other', 7)
on conflict (name) do nothing;
