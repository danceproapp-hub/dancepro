# DancePro — Founding Members Waitlist

A professional networking and partner-finding platform for ballroom and
Latin dancers. This repository is the marketing site and founding
member waitlist that comes before the iOS app.

**Live:** https://dancepro.vercel.app

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS v4
- Supabase (Postgres) for waitlist storage
- Vercel for hosting

No accounts, no auth — this site only collects waitlist signups.

## Local setup

```bash
npm install
cp .env.example .env.local
```

Fill in `.env.local` with your Supabase project's public values (see below),
then:

```bash
npm run dev
```

The site runs at `http://localhost:3000`. Without `.env.local` the pages
still render, but the signup form will fail on submit.

## Environment variables

Both variables are public by design — the Supabase publishable key is safe
to ship to the browser because every write goes through security-definer
RPC functions, and the waitlist table itself has no anonymous
read/write/delete policy (see the migration below).

| Variable | Description |
| --- | --- |
| `NEXT_PUBLIC_SUPABASE_URL` | Your Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Your Supabase publishable key (`sb_publishable_…`) or legacy `anon` JWT |

Both key formats work with `@supabase/supabase-js`. Prefer the shorter
`sb_publishable_…` key: it is the current Supabase default, it rotates
independently, and being ~46 characters it is far less likely to be
silently truncated when pasted into a hosting dashboard.

Never commit a `service_role` key anywhere in this repo.

> These are inlined into the client bundle at **build time**, not read at
> runtime. After changing either value in Vercel you must redeploy **with
> the build cache disabled**, or the old value stays compiled in.

## Database setup

The schema, row-level security policies, and RPC functions live in
[`supabase/migrations/0001_waitlist.sql`](supabase/migrations/0001_waitlist.sql).

Run it against your Supabase project with the Supabase CLI:

```bash
supabase link --project-ref <your-project-ref>
supabase db push
```

Or paste the file's contents into the Supabase SQL editor and run it once.

### Why the RLS setup matters

The publishable key ships to the browser, so anyone can call Supabase
directly with it. `waitlist_signups` has **no** anonymous `select`,
`update`, or `delete` policy — the only way in or out for anonymous
clients is through three `security definer` functions:

- `join_waitlist(...)` — inserts a signup and returns a referral code. If the
  email already exists, it returns that signup's existing code instead of
  erroring.
- `waitlist_status(p_code)` — returns position, total signups, and referral
  count for a given referral code.
- `waitlist_count()` — returns the total signup count for the homepage's
  social proof line.

The client code never runs `select` against `waitlist_signups` — check
[`lib/supabase.ts`](lib/supabase.ts).

Supabase's database linter will flag `waitlist_signups` as "RLS enabled, no
policy" and flag the three functions as anon-callable. Both are intentional
and are the point of this design, not problems to fix.

## Pages

- `/` — landing page and waitlist signup form
- `/welcome` — post-signup confirmation, waitlist position, referral link
- `/how-it-works` — how the network functions
- `/dance-styles` — supported dance styles (also an SEO surface)
- `/founding-members` — the founding member program

The homepage's "Join N dancers already on the list" line stays hidden until
there are at least 25 signups.

## Deployment

The Vercel project is linked to this repository, so every push to `main`
deploys automatically. The two environment variables above are configured
in the Vercel project settings.
