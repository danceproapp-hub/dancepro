"use client";

import { useEffect, useRef } from "react";

// Cloudflare's documented "always passes" test key. Used until a real one
// is set, so the widget renders in development — it proves nothing.
export const TURNSTILE_TEST_SITE_KEY = "1x00000000000000000000AA";

const SCRIPT_SRC =
  "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";

// How long to wait before treating a silent widget as a failure. Cloudflare
// normally answers in a second or two; a challenge that is still thinking
// after this has, in practice, stopped. Without this the widget can spin
// forever and the dancer never learns why they cannot submit.
const STALL_MS = 20_000;

declare global {
  interface Window {
    turnstile?: {
      render: (el: HTMLElement, options: Record<string, unknown>) => string;
      reset: (id?: string) => void;
      remove: (id?: string) => void;
    };
  }
}

/**
 * The Cloudflare Turnstile checkbox, rendered explicitly so React controls
 * when it mounts. No package for this: it is one script tag and one call.
 *
 * Every way this can fail ends in onError, because the failures are not
 * hypothetical: a dancer on a VPN can be judged a bot and never offered a
 * way to prove otherwise, and in some countries challenges.cloudflare.com
 * is not reachable at all. Both must surface as something the form can
 * explain, rather than a spinner that never resolves.
 */
export function Turnstile({
  siteKey,
  onToken,
  onError,
}: {
  siteKey: string;
  onToken: (token: string | null) => void;
  onError: () => void;
}) {
  const holder = useRef<HTMLDivElement>(null);
  const widgetId = useRef<string | null>(null);

  // Held in refs so that a caller passing an inline function cannot tear
  // down and re-create the widget on every render.
  const tokenCb = useRef(onToken);
  const errorCb = useRef(onError);
  tokenCb.current = onToken;
  errorCb.current = onError;

  useEffect(() => {
    let cancelled = false;
    let stallTimer: ReturnType<typeof setTimeout> | null = null;

    function fail() {
      if (cancelled) return;
      if (stallTimer) clearTimeout(stallTimer);
      tokenCb.current(null);
      errorCb.current();
    }

    function render() {
      if (cancelled || !holder.current || !window.turnstile) return;
      if (widgetId.current) return;

      stallTimer = setTimeout(fail, STALL_MS);

      widgetId.current = window.turnstile.render(holder.current, {
        sitekey: siteKey,
        theme: "dark",
        callback: (token: string) => {
          if (stallTimer) clearTimeout(stallTimer);
          tokenCb.current(token);
        },
        // A token is single-use and expires; drop it so the form asks again.
        "expired-callback": () => tokenCb.current(null),
        "error-callback": fail,
        "timeout-callback": fail,
        "unsupported-callback": fail,
      });
    }

    if (window.turnstile) {
      render();
      return () => {
        cancelled = true;
        if (stallTimer) clearTimeout(stallTimer);
      };
    }

    const existing = document.querySelector<HTMLScriptElement>(
      `script[src="${SCRIPT_SRC}"]`
    );
    if (existing) {
      existing.addEventListener("load", render);
      existing.addEventListener("error", fail);
      return () => {
        cancelled = true;
        if (stallTimer) clearTimeout(stallTimer);
        existing.removeEventListener("load", render);
        existing.removeEventListener("error", fail);
      };
    }

    const script = document.createElement("script");
    script.src = SCRIPT_SRC;
    script.async = true;
    script.defer = true;
    script.addEventListener("load", render);
    // Cloudflare unreachable — blocked, filtered, or simply offline. Say so
    // rather than leaving an empty space where a checkbox should be.
    script.addEventListener("error", fail);
    document.head.appendChild(script);

    // If the script neither loads nor errors — a connection that hangs
    // rather than refuses — nothing above ever fires. Catch that too.
    const loadTimer = setTimeout(() => {
      if (!window.turnstile) fail();
    }, STALL_MS);

    return () => {
      cancelled = true;
      clearTimeout(loadTimer);
      if (stallTimer) clearTimeout(stallTimer);
      script.removeEventListener("load", render);
      script.removeEventListener("error", fail);
      if (widgetId.current && window.turnstile) {
        window.turnstile.remove(widgetId.current);
        widgetId.current = null;
      }
    };
  }, [siteKey]);

  return <div ref={holder} className="flex justify-center" />;
}
