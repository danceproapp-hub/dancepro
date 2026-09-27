import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { emailConfigured, sendParentConsentEmail } from "@/lib/email";
import { isLocale, DEFAULT_LOCALE } from "@/lib/i18n";

const VERIFY_URL =
  "https://challenges.cloudflare.com/turnstile/v0/siteverify";

/**
 * Signup runs here rather than in the browser.
 *
 * The browser holds a publishable Supabase key, so a script could call
 * join_waitlist directly and skip the form entirely — a captcha on the
 * form alone would stop nothing. Moving the call server-side is what
 * makes the check meaningful; migration 0010 then revokes the anon
 * grant so this route is the only way in.
 */
export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "bad_request" }, { status: 400 });
  }

  const firstName = typeof body.firstName === "string" ? body.firstName : "";
  const email = typeof body.email === "string" ? body.email : "";
  const styles = Array.isArray(body.styles)
    ? body.styles.filter((s): s is string => typeof s === "string")
    : [];
  const ref = typeof body.ref === "string" ? body.ref : null;
  const token = typeof body.token === "string" ? body.token : "";
  const isMinor = body.isMinor === true;
  const parentEmail =
    typeof body.parentEmail === "string" ? body.parentEmail : "";
  const locale =
    typeof body.locale === "string" && isLocale(body.locale)
      ? body.locale
      : DEFAULT_LOCALE;

  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (secret) {
    const form = new URLSearchParams({ secret, response: token });
    const ip =
      request.headers.get("cf-connecting-ip") ??
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
    if (ip) form.set("remoteip", ip);

    try {
      const verify = await fetch(VERIFY_URL, { method: "POST", body: form });
      const outcome = (await verify.json()) as { success?: boolean };
      if (!outcome.success) {
        return NextResponse.json({ error: "captcha" }, { status: 400 });
      }
    } catch {
      // Cloudflare unreachable: fail closed rather than wave everyone through.
      return NextResponse.json({ error: "captcha" }, { status: 503 });
    }
  }

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  // Service role once it is set, so the anon grant can be revoked. Until
  // then the publishable key still works, because anon still has it.
  const key =
    process.env.SUPABASE_SERVICE_ROLE_KEY ??
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !key) {
    return NextResponse.json({ error: "server" }, { status: 500 });
  }

  const supabase = createClient(url, key, {
    auth: { persistSession: false },
  });

  // An under-16 needs a parent's confirmation, and that confirmation
  // arrives by email. With no mailbox configured there is no way to ask,
  // so refuse rather than store a child's details that can never be
  // confirmed.
  if (isMinor && !emailConfigured()) {
    return NextResponse.json({ error: "minors_unavailable" }, { status: 503 });
  }

  // The database functions do the real validation; they raise on a blank
  // name, a malformed address or no styles.
  if (isMinor) {
    const { data, error } = await supabase.rpc("join_waitlist_minor", {
      p_first_name: firstName,
      p_email: email,
      p_styles: styles,
      p_ref: ref,
      p_parent_email: parentEmail,
    });

    if (error || !data) {
      return NextResponse.json({ error: "rejected" }, { status: 400 });
    }

    const { token: consentToken } = data as { code: string; token: string };
    const origin = new URL(request.url).origin;
    const sent = await sendParentConsentEmail({
      to: parentEmail,
      dancerName: firstName,
      confirmUrl: `${origin}/${locale}/consent?token=${encodeURIComponent(
        consentToken
      )}`,
      locale,
    });

    if (!sent) {
      return NextResponse.json({ error: "email_failed" }, { status: 502 });
    }

    // No code back: the dancer has no place to see until a parent agrees.
    return NextResponse.json({ pending: true, parentEmail });
  }

  const { data, error } = await supabase.rpc("join_waitlist", {
    p_first_name: firstName,
    p_email: email,
    p_styles: styles,
    p_ref: ref,
  });

  if (error) {
    return NextResponse.json({ error: "rejected" }, { status: 400 });
  }

  return NextResponse.json({ code: data as string });
}
