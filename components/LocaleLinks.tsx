"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { LOCALES, LOCALE_NAMES } from "@/lib/i18n/config";
import type { Locale } from "@/lib/i18n";

/**
 * The language row in the footer.
 *
 * Plain anchors, not a <select>: a native dropdown is drawn by the
 * operating system, so its open menu never matched anything else here.
 * Anchors also mean the other eight languages exist in the HTML, which a
 * crawler can follow and a reader without JavaScript can still use.
 */
export function LocaleLinks({ locale }: { locale: Locale }) {
  const pathname = usePathname();

  /*
   * Carry the query string across, but only after mount.
   *
   * useSearchParams() would read it during render and opt every page that
   * renders this footer out of static generation — the whole site. The
   * href is right without it anyway; this only adds ?code=… so that
   * switching language on the welcome page keeps the dancer's place
   * instead of landing them on "we couldn't find that link".
   */
  const [search, setSearch] = useState("");
  useEffect(() => setSearch(window.location.search), [pathname]);

  // "/en/how-it-works" -> "/how-it-works", so a switch stays on the page.
  const rest = (pathname ?? `/${locale}`).split("/").slice(2).join("/");
  const suffix = rest ? `/${rest}` : "";

  return (
    <nav className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 sm:justify-start">
      {LOCALES.map((code, index) => (
        /*
         * The separator trails its own name rather than leading the next
         * one. Grouped the other way, a row that wrapped began with a
         * stray middot sitting in the left margin.
         */
        <span key={code} className="flex items-center gap-x-3">
          {code === locale ? (
            /* The page you are on is not somewhere to go. */
            <span className="lang-current" aria-current="true">
              {LOCALE_NAMES[code]}
            </span>
          ) : (
            <a href={`/${code}${suffix}${search}`} className="lang-link" lang={code}>
              {LOCALE_NAMES[code]}
            </a>
          )}
          {index < LOCALES.length - 1 && (
            <span aria-hidden className="text-line">
              &middot;
            </span>
          )}
        </span>
      ))}
    </nav>
  );
}
