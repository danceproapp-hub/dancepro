"use client";

import { usePathname, useRouter } from "next/navigation";
import {
  LOCALES,
  LOCALE_COOKIE,
  LOCALE_NAMES,
  isLocale,
  type Locale,
} from "@/lib/i18n/config";

export function LanguageSwitcher({
  locale,
  label,
}: {
  locale: Locale;
  label: string;
}) {
  const router = useRouter();
  const pathname = usePathname();

  function switchTo(next: string) {
    if (!isLocale(next) || next === locale) return;

    // Remember the choice so the browser's Accept-Language doesn't
    // override it on the next visit.
    document.cookie = `${LOCALE_COOKIE}=${next}; path=/; max-age=${
      60 * 60 * 24 * 365
    }; samesite=lax`;

    // Swap only the locale segment, keeping the rest of the path and the
    // query string — a dancer on /welcome?code=ABC stays on their page.
    // Read the query off the URL rather than with useSearchParams, which
    // would force a Suspense bailout on every page carrying the header.
    const segments = pathname.split("/");
    segments[1] = next;
    router.push(`${segments.join("/")}${window.location.search}`);
  }

  return (
    <label className="flex items-center">
      <span className="sr-only">{label}</span>
      <select
        value={locale}
        onChange={(e) => switchTo(e.target.value)}
        aria-label={label}
        className="label cursor-pointer border border-line bg-transparent px-3 py-2 text-muted outline-none transition hover:border-gold hover:text-paper focus:border-gold-dp"
      >
        {LOCALES.map((l) => (
          <option key={l} value={l} className="bg-panel text-paper">
            {LOCALE_NAMES[l]}
          </option>
        ))}
      </select>
    </label>
  );
}
