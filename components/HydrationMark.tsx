"use client";

import { useEffect } from "react";

/**
 * Stamps <html data-hydrated> once React is running on the client.
 *
 * The scroll-reveal hides content until JavaScript says otherwise, which
 * means a script that never loads — a stale cached page pointing at a
 * previous build's chunks, a blocked request — would leave everything
 * below the hero invisible. globals.css uses this attribute to cancel a
 * CSS safety net that otherwise fades the content in on its own.
 */
export function HydrationMark() {
  useEffect(() => {
    document.documentElement.setAttribute("data-hydrated", "");
  }, []);
  return null;
}
