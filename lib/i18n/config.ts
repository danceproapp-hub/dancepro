export const LOCALES = ["en", "es", "it", "de"] as const;

export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "en";

// Shown in the switcher, each in its own language.
export const LOCALE_NAMES: Record<Locale, string> = {
  en: "English",
  es: "Español",
  it: "Italiano",
  de: "Deutsch",
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
    // "es-419", "es-MX" and "es" all resolve to Spanish.
    const base = tag.split("-")[0];
    if (isLocale(base)) return base;
  }

  return DEFAULT_LOCALE;
}
