"use client";

import { useEffect } from "react";

/**
 * Stamps <html data-hydrated> once React is running on the client.
 *
 * The scroll-reveal animation hides content until JavaScript adds
 * `is-visible`. Until this attribute appears, globals.css fades that content
 * in on its own after a short delay — so a slow connection, a cold start or
 * a script that fails to load can delay the reveal, but never hide the page.
 */
export function HydrationMark() {
  useEffect(() => {
    document.documentElement.setAttribute("data-hydrated", "");
  }, []);
  return null;
}
