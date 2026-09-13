"use client";

import { useState } from "react";

export function ReferralLinkBox({ link }: { link: string }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(link);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      <input
        readOnly
        value={link}
        className="w-full rounded-lg border border-line bg-ink px-4 py-2 text-sm text-paper-dim"
        onFocus={(e) => e.currentTarget.select()}
      />
      <button
        type="button"
        onClick={handleCopy}
        className="shrink-0 rounded-full bg-gold px-5 py-2 text-sm font-medium text-ink transition hover:bg-gold-dim"
      >
        {copied ? "Copied!" : "Copy link"}
      </button>
    </div>
  );
}
