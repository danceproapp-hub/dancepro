import { notFound } from "next/navigation";

/*
 * Catches anything under a locale that no real route claimed.
 *
 * A segment's not-found.tsx only answers notFound() thrown inside a route
 * that matched — an unmatched URL never reaches the segment at all, so
 * without this Next answers with its own built-in 404: black on white, in
 * English, no header, no footer, nothing to click. Matching here first
 * means our own page renders instead, inside the locale's layout.
 *
 * Real routes are more specific than a catch-all, so /en/how-it-works and
 * the rest are unaffected.
 */
export default function CatchAll() {
  notFound();
}
