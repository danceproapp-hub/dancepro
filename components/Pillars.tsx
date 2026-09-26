"use client";

import { useEffect, useState } from "react";
import { Reveal } from "@/components/Reveal";

// Below `sm` the pillars stack into one column — the width where four
// expanded cards push the signup form a long way down the page.
const COMPACT = "(max-width: 639.98px)";

export function Pillars({
  items,
}: {
  items: { title: string; description: string }[];
}) {
  // Both start "expanded, not compact": that is what the server renders,
  // what a visitor sees before hydration, and what they keep if the script
  // never runs. The phone collapse is layered on top rather than assumed,
  // so a dead script can only ever cost the collapsing, never the copy.
  const [compact, setCompact] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    const query = window.matchMedia(COMPACT);
    const apply = () => {
      setCompact(query.matches);
      if (query.matches) setOpenIndex(null);
    };
    apply();
    query.addEventListener("change", apply);
    return () => query.removeEventListener("change", apply);
  }, []);

  return (
    <>
      {items.map((item, index) => {
        // Only one open at a time on a phone; on a wide screen they are
        // all open and the summary is not a control at all.
        const open = compact ? openIndex === index : true;

        return (
          <Reveal key={item.title} delay={index * 80}>
            <details
              className="pillar h-full border p-6 transition-all duration-500 hover:-translate-y-0.5 hover:border-gold/50 hover:bg-panel"
              open={open}
              onToggle={(event) => {
                const nowOpen = event.currentTarget.open;
                // Functional update: the handler must not read openIndex,
                // or closing one card to open another would act on a stale
                // value and immediately reopen it.
                setOpenIndex((previous) =>
                  nowOpen ? index : previous === index ? null : previous
                );
              }}
            >
              <summary
                className="pillar-summary"
                // Not a control on desktop, so not a tab stop there either.
                tabIndex={compact ? 0 : -1}
              >
                <h3 className="text-gold">{item.title}</h3>
                <span className="pillar-mark" aria-hidden="true" />
              </summary>
              <p className="pillar-body mt-2 text-muted">{item.description}</p>
            </details>
          </Reveal>
        );
      })}
    </>
  );
}
