"use client";

import { useEffect, useRef } from "react";

// Cloudflare's documented "always passes" test key. Used until a real one
// is set, so the widget renders in development — it proves nothing.
export const TURNSTILE_TEST_SITE_KEY = "1x00000000000000000000AA";

const SCRIPT_SRC =
  "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";

declare global {
  interface Window {
    turnstile?: {
      render: (el: HTMLElement, options: Record<string, unknown>) => string;
      reset: (id?: string) => void;
    };
  }
}

/**
 * The Cloudflare Turnstile checkbox, rendered explicitly so React controls
 * when it mounts. No package for this: it is one script tag and one call.
 */
export function Turnstile({
  siteKey,
  onToken,
}: {
  siteKey: string;
  onToken: (token: string | null) => void;
}) {
  const holder = useRef<HTMLDivElement>(null);
  const widgetId = useRef<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    function render() {
      if (cancelled || !holder.current || !window.turnstile) return;
      if (widgetId.current) return;
      widgetId.current = window.turnstile.render(holder.current, {
        sitekey: siteKey,
        theme: "dark",
        callback: (token: string) => onToken(token),
        // A token is single-use and expires; drop it so the form asks again.
        "expired-callback": () => onToken(null),
        "error-callback": () => onToken(null),
      });
    }

    if (window.turnstile) {
      render();
      return () => {
        cancelled = true;
      };
    }

    const existing = document.querySelector<HTMLScriptElement>(
      `script[src="${SCRIPT_SRC}"]`
    );
    if (existing) {
      existing.addEventListener("load", render);
      return () => {
        cancelled = true;
        existing.removeEventListener("load", render);
      };
    }

    const script = document.createElement("script");
    script.src = SCRIPT_SRC;
    script.async = true;
    script.defer = true;
    script.addEventListener("load", render);
    document.head.appendChild(script);

    return () => {
      cancelled = true;
    };
  }, [siteKey, onToken]);

  return <div ref={holder} className="flex justify-center" />;
}
