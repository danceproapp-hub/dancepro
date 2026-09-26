"use client";

import { useEffect, useState } from "react";

// Below `sm` the pillars stack into one column — the width where four
// expanded cards push the signup form a long way down the page.
const COMPACT = "(max-width: 639.98px)";

export function PillarCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  // Both start "expanded, not compact": that is what the server renders,
  // what a visitor sees before hydration, and what they keep if the script
  // never runs. The phone collapse is layered on top rather than assumed,
  // so a dead script can only ever cost the collapsing, never the copy.
  const [compact, setCompact] = useState(false);
  const [open, setOpen] = useState(true);

  useEffect(() => {
    const query = window.matchMedia(COMPACT);
    const apply = () => {
      setCompact(query.matches);
      setOpen(!query.matches);
    };
    apply();
    query.addEventListener("change", apply);
    return () => query.removeEventListener("change", apply);
  }, []);

  return (
    <details
      className="h-full border border-line p-6 transition-all duration-500 hover:-translate-y-0.5 hover:border-gold/50 hover:bg-panel"
      open={open}
      // A plain mirror of what the browser did. Reading `compact` here
      // instead would capture a stale value on the render that collapses
      // the card and immediately re-open it. Desktop is protected by the
      // summary being non-interactive there, not by this handler.
      onToggle={(event) => setOpen(event.currentTarget.open)}
    >
      <summary
        className="pillar-summary"
        // Not a control on desktop, so not a tab stop there either.
        tabIndex={compact ? 0 : -1}
      >
        <h3 className="text-gold">{title}</h3>
        <span className="pillar-mark" aria-hidden="true" />
      </summary>
      <p className="pillar-body mt-2 text-muted">{description}</p>
    </details>
  );
}
