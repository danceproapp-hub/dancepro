export type DanceStyleCategory = "International" | "American" | "Other";

export interface DanceStyleInfo {
  name: string;
  category: DanceStyleCategory;
  /** Whether the style has a competitive circuit. */
  competitive: boolean;
  description: string;
}

// Keep in sync with supabase/migrations/0005_style_list.sql
export const DANCE_STYLES: DanceStyleInfo[] = [
  {
    name: "International Latin",
    category: "International",
    competitive: true,
    description:
      "Cha Cha, Samba, Rumba, Paso Doble, and Jive — the five-dance Latin standard danced under international competition rules, built on sharp technique and rhythmic precision.",
  },
  {
    name: "International Ballroom",
    category: "International",
    competitive: true,
    description:
      "Waltz, Tango, Viennese Waltz, Foxtrot, and Quickstep, danced in closed hold with the smooth, traveling frame that defines competitive ballroom's most classical discipline.",
  },
  {
    name: "American Smooth",
    category: "American",
    competitive: true,
    description:
      "The American take on Waltz, Tango, Foxtrot, and Viennese Waltz, with open choreography and solo work woven into the closed-hold frame.",
  },
  {
    name: "American Rhythm",
    category: "American",
    competitive: true,
    description:
      "Cha Cha, Rumba, East Coast Swing, Bolero, and Mambo, danced with the grounded, expressive style of the American syllabus.",
  },
  {
    name: "Argentine Tango",
    category: "Other",
    competitive: true,
    description:
      "The improvisational, embrace-led tango of Buenos Aires milongas, prized for its connection and musicality rather than fixed patterns.",
  },
  {
    name: "Social Dance",
    category: "Other",
    competitive: false,
    description:
      "Salsa, Bachata, Merengue and the rest of the social floor — danced for the night out rather than the scoresheet, led and followed on the spot.",
  },
  {
    name: "Other",
    // Treated as competitive on purpose: "Other" often means West Coast
    // Swing, Zouk or Country, which all have circuits. Wrongly hiding the
    // competition options would be worse than showing an unused one.
    category: "Other",
    competitive: true,
    description:
      "West Coast Swing, Zouk, Country Two-Step and anything else you partner up for. Tell us what you dance when you join.",
  },
];

export const SOCIAL_DANCE = "Social Dance";

/** True when every style the dancer picked has no competitive circuit. */
export function isSocialOnly(styles: string[]): boolean {
  if (styles.length === 0) return false;
  return styles.every(
    (name) => DANCE_STYLES.find((s) => s.name === name)?.competitive === false
  );
}
