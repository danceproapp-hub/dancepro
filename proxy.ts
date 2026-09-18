import { NextResponse, type NextRequest } from "next/server";
import { LOCALE_COOKIE, isLocale, matchLocale } from "@/lib/i18n/config";

const COOKIE_MAX_AGE = 60 * 60 * 24 * 365;

export default function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const first = pathname.split("/")[1] ?? "";

  // Already on a locale path: remember it, so a dancer who switched to
  // Italian on an English browser keeps getting Italian.
  if (isLocale(first)) {
    const response = NextResponse.next();
    if (request.cookies.get(LOCALE_COOKIE)?.value !== first) {
      response.cookies.set(LOCALE_COOKIE, first, {
        path: "/",
        maxAge: COOKIE_MAX_AGE,
        sameSite: "lax",
      });
    }
    return response;
  }

  // An earlier manual choice beats the browser's header.
  const saved = request.cookies.get(LOCALE_COOKIE)?.value;
  const locale =
    saved && isLocale(saved)
      ? saved
      : matchLocale(request.headers.get("accept-language"));

  // Cloning the URL keeps the query string, which referral links
  // (/?ref=CODE) and the welcome page (/welcome?code=CODE) depend on.
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;

  const response = NextResponse.redirect(url);
  response.cookies.set(LOCALE_COOKIE, locale, {
    path: "/",
    maxAge: COOKIE_MAX_AGE,
    sameSite: "lax",
  });
  return response;
}

export const config = {
  // Skip Next internals and anything with a file extension (icons, OG
  // image, robots) so only real pages get a locale prefix.
  matcher: ["/((?!_next|api|.*\\.).*)"],
};
