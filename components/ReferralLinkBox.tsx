"use client";

import { useState } from "react";

export function ReferralLinkBox({
  link,
  copyLabel,
  copiedLabel,
}: {
  link: string;
  copyLabel: string;
  copiedLabel: string;
}) {
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
    <div className="flex gap-2 sm:gap-3">
      <input
        readOnly
        value={link}
        className="input caption tabular min-w-0 py-2.5"
        onFocus={(e) => e.currentTarget.select()}
      />
      <button
        type="button"
        onClick={handleCopy}
        className="btn btn-primary shrink-0 px-4 py-3 sm:px-5"
      >
        {copied ? copiedLabel : copyLabel}
      </button>
    </div>
  );
}
