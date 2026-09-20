import { Marcellus, Jost, Forum } from "next/font/google";

// Attaching each font's `.variable` class to <html> is what gets its
// @font-face rules emitted and its files self-hosted. globals.css then
// names the families directly ("Marcellus", "Jost", "Forum") rather than
// reading these variables — see the note in @theme for why.

// adjustFontFallback is OFF for the two Latin faces on purpose. next/font
// would otherwise add a metrics-matched local fallback (Times New Roman for
// Marcellus, Arial for Jost) directly after each face — and both of those
// have Cyrillic glyphs. Font fallback is per-glyph and stops at the first
// face that has the glyph, so Russian text would render in adjusted Times
// and never reach Forum. Only the last face in a chain may carry one.

// Display: headings only, always uppercase with letterspacing.
export const display = Marcellus({
  subsets: ["latin", "latin-ext"],
  weight: "400",
  variable: "--font-marcellus",
  display: "swap",
  adjustFontFallback: false,
});

// Body / UI / everything else. latin-ext is not optional: Polish ł, ż, ą
// and friends live there, not in "latin".
export const body = Jost({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-jost",
  display: "swap",
  adjustFontFallback: false,
});

// Cyrillic pages only. Marcellus has no Cyrillic; Forum is the same genre
// (inscriptional Roman capitals) and does. Jost itself covers Cyrillic, so
// this is the same face, just the extra subset, loaded only where needed.
export const displayCyrillic = Forum({
  subsets: ["cyrillic"],
  weight: "400",
  variable: "--font-forum",
  display: "swap",
  preload: false,
});

export const bodyCyrillic = Jost({
  subsets: ["cyrillic"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-jost-cyrillic",
  display: "swap",
  preload: false,
});
