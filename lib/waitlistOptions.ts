export const ROLE_OPTIONS = [
  { value: "leader", label: "Leader" },
  { value: "follower", label: "Follower" },
  { value: "both", label: "Both" },
] as const;

export const LEVEL_OPTIONS = [
  { value: "beginner", label: "Beginner" },
  { value: "intermediate", label: "Intermediate" },
  { value: "advanced", label: "Advanced" },
  { value: "competitive", label: "Competitive" },
  { value: "professional", label: "Professional" },
] as const;

export const LOOKING_FOR_OPTIONS = [
  "Competition partner",
  "Practice partner",
  "Social dance partner",
  "Performance partner",
  "Coach",
  "Students",
  "Other",
] as const;

// Levels that only mean something on a competitive circuit.
export const COMPETITIVE_ONLY_LEVELS = ["competitive", "professional"];

// Only asked when "Competition partner" is selected.
export const COMPETITION_PARTNER_OPTION = "Competition partner";

export const COMPETITION_DIVISION_OPTIONS = [
  "Amateur",
  "Pro-Am",
  "Professional",
] as const;

export const REFERRAL_STORAGE_KEY = "dancepro_ref";
