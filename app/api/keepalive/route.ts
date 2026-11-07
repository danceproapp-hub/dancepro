import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

/**
 * Keeps the database awake.
 *
 * Supabase pauses a free project after about a week without traffic, and
 * it pauses it silently: no warning, and the site keeps serving its
 * pre-rendered pages as though nothing is wrong. Only signup breaks, and
 * only for the dancer trying to sign up. That already happened once, for
 * five weeks, and nothing surfaced it.
 *
 * One read a day is enough to count as activity. It calls waitlist_count,
 * which anon may already call from the home page, so this adds no new
 * exposure: the worst anyone can do by hitting this route is learn a
 * number the home page prints anyway.
 */
export const dynamic = "force-dynamic";

export async function GET() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key =
    process.env.SUPABASE_SERVICE_ROLE_KEY ??
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !key) {
    return NextResponse.json({ ok: false, error: "unconfigured" }, { status: 500 });
  }

  const supabase = createClient(url, key, { auth: { persistSession: false } });
  const { data, error } = await supabase.rpc("waitlist_count");

  if (error) {
    // A non-200 is what makes this visible: Vercel records a failed cron
    // run, so a database that has gone away shows up as a failure in the
    // dashboard rather than as silence.
    return NextResponse.json(
      { ok: false, error: error.message },
      { status: 503 }
    );
  }

  return NextResponse.json({ ok: true, count: data });
}
