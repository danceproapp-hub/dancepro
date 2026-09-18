import type { Locale } from "./config";
import { en, type Dictionary } from "./dictionaries/en";
import { es } from "./dictionaries/es";
import { it } from "./dictionaries/it";
import { de } from "./dictionaries/de";

const DICTIONARIES: Record<Locale, Dictionary> = { en, es, it, de };

export function getDictionary(locale: Locale): Dictionary {
  return DICTIONARIES[locale] ?? en;
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
