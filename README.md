# DancePro — Founding Members Waitlist

A professional networking and partner-finding platform for ballroom and
DanceSport dancers. This repository is the marketing site and founding
member waitlist that comes before the iOS app.

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

The site runs at `http://localhost:3000`.

## Environment variables

Both variables are public by design — the Supabase anon key is safe to ship
to the browser because every write goes through security-definer RPC
functions, and the waitlist table itself has no anonymous read/write/delete
policy (see the migration below).

| Variable | Description |
| --- | --- |
| `NEXT_PUBLIC_SUPABASE_URL` | Your Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Your Supabase project's anon/public API key |

Never commit a `service_role` key anywhere in this repo.

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

The anon key ships to the browser, so anyone can call Supabase directly with
it. `waitlist_signups` has **no** anonymous `select`, `update`, or `delete`
policy — the only way in or out for anonymous clients is through three
`security definer` functions:

- `join_waitlist(...)` — inserts a signup and returns a referral code. If the
  email already exists, it returns that signup's existing code instead of
  erroring.
- `waitlist_status(p_code)` — returns position, total signups, and referral
  count for a given referral code.
- `waitlist_count()` — returns the total signup count for the homepage's
  social proof line.

The client code never runs `select` against `waitlist_signups` — check
[`lib/supabase.ts`](lib/supabase.ts).

## Pages

- `/` — landing page and waitlist signup form
- `/welcome` — post-signup confirmation, waitlist position, referral link
- `/how-it-works` — how the network functions
- `/dance-styles` — supported dance styles (also an SEO surface)
- `/founding-members` — the founding member program

## Deployment

Import this repository into Vercel and set the two environment variables
above in the project settings. No other configuration is required.
