import type { Locale } from "./config";
import { en, type Dictionary } from "./dictionaries/en";
import { es } from "./dictionaries/es";
import { it } from "./dictionaries/it";
import { de } from "./dictionaries/de";
import { ru } from "./dictionaries/ru";
import { uk } from "./dictionaries/uk";
import { pl } from "./dictionaries/pl";
import { zh } from "./dictionaries/zh";
import { ja } from "./dictionaries/ja";

// Typed as Record<Locale, …>, so adding a locale to config.ts without a
// dictionary is a build error rather than a blank page.
const DICTIONARIES: Record<Locale, Dictionary> = {
  en,
  es,
  it,
  de,
  ru,
  uk,
  pl,
  zh,
  ja,
};

export function getDictionary(locale: Locale): Dictionary {
  return DICTIONARIES[locale] ?? en;
}

/**
 * One string per plural category. English, German, Italian and Spanish use
 * only `one` and `other`; Russian, Ukrainian and Polish genuinely need
 * `few` and `many` as well ("1 танцор", "3 танцора", "5 танцоров");
 * Chinese and Japanese use `other` throughout.
 */
export interface PluralForms {
  one: string;
  few: string;
  many: string;
  other: string;
}

/** Pick the right plural form for `n` using the locale's own rules. */
export function plural(locale: Locale, n: number, forms: PluralForms): string {
  switch (new Intl.PluralRules(locale).select(n)) {
    case "one":
      return forms.one;
    case "few":
      return forms.few;
    case "many":
      return forms.many;
    default:
      // "two" and "zero" exist in other languages but not in ours.
      return forms.other;
  }
}

/** Fill {placeholders} in a translated string. */
export function fill(
  template: string,
  values: Record<string, string | number>
): string {
  return template.replace(/\{(\w+)\}/g, (match, key) =>
    key in values ? String(values[key]) : match
  );
}

/**
 * What ProfileForm needs: the profile strings plus the three label maps
 * for role, level and looking-for. Narrower than the whole Dictionary so
 * the unrelated page copy is not serialized into the RSC payload. Kept
 * nested because `profile.lookingFor` (a field label) and `lookingFor`
 * (the option labels) would otherwise collide.
 */
export type ProfileFormDictionary = Pick<
  Dictionary,
  "profile" | "roles" | "levels" | "lookingFor"
>;

export function profileFormDictionary(t: Dictionary): ProfileFormDictionary {
  return {
    profile: t.profile,
    roles: t.roles,
    levels: t.levels,
    lookingFor: t.lookingFor,
  };
}

export type { Dictionary };
export * from "./config";
