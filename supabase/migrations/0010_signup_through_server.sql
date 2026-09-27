-- Close the direct path to join_waitlist.
--
-- The publishable key ships to every browser, so anyone could call this
-- function straight from a console and skip the form — which is why a
-- captcha on the form alone protected nothing. Signup now goes through
-- /api/join, which verifies the Turnstile token and calls this with the
-- service role.
--
-- APPLY ONLY AFTER SUPABASE_SERVICE_ROLE_KEY is set in Vercel, or signup
-- breaks: the route falls back to the publishable key until then.

revoke execute on function public.join_waitlist(text, text, text[], text) from anon;
revoke execute on function public.join_waitlist_minor(text, text, text[], text, text) from anon;
revoke execute on function public.confirm_parent_consent(text) from anon;

-- Reads stay open: they return counts and a single row by referral code,
-- never the table itself.
