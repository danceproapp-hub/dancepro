import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

/**
 * The parent's confirmation. A POST, not a GET: mail scanners follow
 * links in emails, and consent has to be a deliberate act, not something
 * a spam filter can do on a parent's behalf.
 */
export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "bad_request" }, { status: 400 });
  }

  const token = typeof body.token === "string" ? body.token : "";
  if (!token) {
    return NextResponse.json({ error: "bad_request" }, { status: 400 });
  }

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key =
    process.env.SUPABASE_SERVICE_ROLE_KEY ??
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !key) {
    return NextResponse.json({ error: "server" }, { status: 500 });
  }

  const supabase = createClient(url, key, { auth: { persistSession: false } });
  const { data, error } = await supabase.rpc("confirm_parent_consent", {
    p_token: token,
  });

  if (error || data !== true) {
    return NextResponse.json({ error: "unknown_token" }, { status: 400 });
  }

  return NextResponse.json({ confirmed: true });
}
