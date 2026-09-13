export type DanceStyleCategory = "International" | "American" | "Other";

export interface DanceStyleInfo {
  name: string;
  category: DanceStyleCategory;
  description: string;
}

// Keep in sync with supabase/migrations/0001_waitlist.sql
export const DANCE_STYLES: DanceStyleInfo[] = [
  {
    name: "International Latin",
    category: "International",
    description:
      "Cha Cha, Samba, Rumba, Paso Doble, and Jive — the five-dance Latin standard danced under WDSF and World DanceSport rules, built on sharp technique and rhythmic precision.",
  },
  {
    name: "International Standard",
    category: "International",
    description:
      "Waltz, Tango, Viennese Waltz, Foxtrot, and Quickstep, danced in closed hold with the smooth, traveling frame that defines competitive ballroom's most classical discipline.",
  },
  {
    name: "American Smooth",
    category: "American",
    description:
      "The American take on Waltz, Tango, Foxtrot, and Viennese Waltz, with open choreography and solo work woven into the closed-hold frame.",
  },
  {
    name: "American Rhythm",
    category: "American",
    description:
      "Cha Cha, Rumba, East Coast Swing, Bolero, and Mambo, danced with the grounded, expressive style of the American syllabus.",
  },
  {
    name: "Social Ballroom",
    category: "Other",
    description:
      "Foxtrot, Waltz, and swing danced socially rather than competitively — the everyday partner dancing found at weddings, socials, and studio parties.",
  },
  {
    name: "Argentine Tango",
    category: "Other",
    description:
      "The improvisational, embrace-led tango of Buenos Aires milongas, prized for its connection and musicality rather than fixed patterns.",
  },
  {
    name: "Salsa",
    category: "Other",
    description:
      "High-energy Latin partner dancing built on fast footwork, turn patterns, and sharp musical timing across On1 and On2 styles.",
  },
  {
    name: "Bachata",
    category: "Other",
    description:
      "The close-connection Dominican partner dance built on side-to-side steps and hip movement, popular on social floors worldwide.",
  },
  {
    name: "Other",
    category: "Other",
    description:
      "Any other partner style — West Coast Swing, Zouk, Country Two-Step, and beyond. Tell us what you dance when you join.",
  },
];
