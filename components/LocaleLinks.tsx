"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { LOCALES, LOCALE_NAMES, LOCALE_SHORT } from "@/lib/i18n/config";
import type { Locale } from "@/lib/i18n";

/**
 * The language row, in the footer and at the foot of the phone menu.
 *
 * Plain anchors, not a <select>: a native dropdown is drawn by the
 * operating system, so its open menu never matched anything else here.
 * Anchors also mean the other eight languages exist in the HTML, which a
 * crawler can follow and a reader without JavaScript can still use.
 *
 * Short codes rather than full names, because at full length this row
 * weighed as much as the nav above it and ran to three lines. The full
 * name stays on each link as its title and its accessible name.
 */
export function LocaleLinks({
  locale,
  className = "",
}: {
  locale: Locale;
  className?: string;
}) {
  const pathname = usePathname();

  /*
   * Carry the query string across, but only after mount.
   *
   * useSearchParams() would read it during render and opt every page that
   * renders this row out of static generation — the whole site. The href
   * is right without it anyway; this only adds ?code=… so that switching
   * language on the welcome page keeps the dancer's place instead of
   * landing them on "we couldn't find that link".
   */
  const [search, setSearch] = useState("");
  useEffect(() => setSearch(window.location.search), [pathname]);

  // "/en/how-it-works" -> "/how-it-works", so a switch stays on the page.
  const rest = (pathname ?? `/${locale}`).split("/").slice(2).join("/");
  const suffix = rest ? `/${rest}` : "";

  return (
    /* Spaced by gap alone — no separator characters, so nothing can be
       left dangling at the end of a wrapped line. */
    <nav
      aria-label={LOCALE_NAMES[locale]}
      className={`flex flex-wrap items-center gap-x-4 gap-y-2 ${className}`}
    >
      {LOCALES.map((code) =>
        code === locale ? (
          /* The page you are on is not somewhere to go. */
          <span
            key={code}
            className="lang-current"
            aria-current="true"
            title={LOCALE_NAMES[code]}
          >
            {LOCALE_SHORT[code]}
          </span>
        ) : (
          <a
            key={code}
            href={`/${code}${suffix}${search}`}
            className="lang-link"
            lang={code}
            title={LOCALE_NAMES[code]}
            aria-label={LOCALE_NAMES[code]}
          >
            {LOCALE_SHORT[code]}
          </a>
        )
      )}
    </nav>
  );
}
