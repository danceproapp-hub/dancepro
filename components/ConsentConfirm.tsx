"use client";

import { useState } from "react";
import Link from "next/link";
import type { Dictionary } from "@/lib/i18n";

type State = "asking" | "sending" | "done" | "failed";

/**
 * The parent presses a button; we do not confirm on page load. Mail
 * scanners follow links, and consent has to be a deliberate act rather
 * than something a spam filter can do on a parent's behalf.
 */
export function ConsentConfirm({
  token,
  locale,
  t,
}: {
  token: string;
  locale: string;
  t: Dictionary["consent"];
}) {
  const [state, setState] = useState<State>(token ? "asking" : "failed");

  async function confirm() {
    setState("sending");
    try {
      const response = await fetch("/api/consent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token }),
      });
      setState(response.ok ? "done" : "failed");
    } catch {
      setState("failed");
    }
  }

  /*
   * Both endings need a way out. A parent arrives here from an email, so
   * this page is the whole site as far as they are concerned — without a
   * link the browser's back button leads to their inbox and nothing else.
   * The failed copy even tells them to sign up from the homepage, which
   * was not reachable from the page saying it.
   */
  if (state === "done") {
    return (
      <>
        <h1>{t.okTitle}</h1>
        <p className="text-muted">{t.okBody}</p>
        <Link href={`/${locale}`} className="btn btn-primary px-6 py-3.5">
          {t.back}
        </Link>
      </>
    );
  }

  if (state === "failed") {
    return (
      <>
        <h1>{t.badTitle}</h1>
        <p className="text-muted">{t.badBody}</p>
        <Link href={`/${locale}`} className="btn btn-primary px-6 py-3.5">
          {t.back}
        </Link>
      </>
    );
  }

  return (
    <>
      <h1>{t.title}</h1>
      <p className="text-muted">{t.body}</p>
      <button
        type="button"
        onClick={confirm}
        disabled={state === "sending"}
        className="btn btn-primary btn-lift px-8 py-4"
      >
        {state === "sending" ? t.confirming : t.confirm}
      </button>
    </>
  );
}
