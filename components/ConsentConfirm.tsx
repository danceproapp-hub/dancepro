"use client";

import { useState } from "react";
import type { Dictionary } from "@/lib/i18n";

type State = "asking" | "sending" | "done" | "failed";

/**
 * The parent presses a button; we do not confirm on page load. Mail
 * scanners follow links, and consent has to be a deliberate act rather
 * than something a spam filter can do on a parent's behalf.
 */
export function ConsentConfirm({
  token,
  t,
}: {
  token: string;
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

  if (state === "done") {
    return (
      <>
        <h1>{t.okTitle}</h1>
        <p className="text-muted">{t.okBody}</p>
      </>
    );
  }

  if (state === "failed") {
    return (
      <>
        <h1>{t.badTitle}</h1>
        <p className="text-muted">{t.badBody}</p>
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
