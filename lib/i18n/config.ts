// Chosen by where competitive ballroom actually is, not by general web
// traffic: the Russian-speaking bloc, Ukraine, Poland, China and Japan all
// carry far more dancers than their share of the web would suggest.
export const LOCALES = [
  "en",
  "es",
  "it",
  "de",
  "ru",
  "uk",
  "pl",
  "zh",
  "ja",
] as const;

export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "en";

// Shown in the switcher, each in its own language.
export const LOCALE_NAMES: Record<Locale, string> = {
  en: "English",
  es: "Español",
  it: "Italiano",
  de: "Deutsch",
  ru: "Русский",
  uk: "Українська",
  pl: "Polski",
  zh: "中文",
  ja: "日本語",
};

/**
 * Which writing system each locale needs a typeface for. Instrument Serif
 * and DM Sans cover Latin only, so Cyrillic and CJK pages get their own
 * faces — see app/[locale]/layout.tsx and globals.css.
 */
export type Script = "latin" | "cyrillic" | "sc" | "jp";

export const LOCALE_SCRIPT: Record<Locale, Script> = {
  en: "latin",
  es: "latin",
  it: "latin",
  de: "latin",
  pl: "latin",
  ru: "cyrillic",
  uk: "cyrillic",
  zh: "sc",
  ja: "jp",
};

export const LOCALE_COOKIE = "NEXT_LOCALE";

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}

/**
 * Pick the best locale from an Accept-Language header.
 *
 * Language, not country: the header is what the visitor actually reads,
 * whereas an IP would only say where they happen to be. A Spanish speaker
 * competing in Germany should still get Spanish.
 */
export function matchLocale(acceptLanguage: string | null): Locale {
  if (!acceptLanguage) return DEFAULT_LOCALE;

  const ranked = acceptLanguage
    .split(",")
    .map((part) => {
      const [tag, ...params] = part.trim().split(";");
      const q = params.find((p) => p.trim().startsWith("q="));
      return {
        tag: tag.trim().toLowerCase(),
        q: q ? Number.parseFloat(q.split("=")[1]) || 0 : 1,
      };
    })
    .sort((a, b) => b.q - a.q);

  for (const { tag } of ranked) {
    // "es-419", "es-MX" and "es" all resolve to Spanish. Note this sends
    // zh-TW and zh-HK to the Simplified dictionary; a Traditional variant
    // would need its own locale rather than a region subtag.
    const base = tag.split("-")[0];
    if (isLocale(base)) return base;
  }

  return DEFAULT_LOCALE;
}
