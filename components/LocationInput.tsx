"use client";

import { useEffect, useRef, useState } from "react";

export interface LocationValue {
  city: string;
  country: string;
}

interface Suggestion {
  city: string;
  region: string;
  country: string;
}

// Open-Meteo's geocoding service: free, no API key, CORS-enabled.
const ENDPOINT = "https://geocoding-api.open-meteo.com/v1/search";

interface GeocodeResult {
  name?: string;
  admin1?: string;
  country?: string;
}

export function LocationInput({
  value,
  onChange,
}: {
  value: LocationValue;
  onChange: (next: LocationValue) => void;
}) {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const boxRef = useRef<HTMLDivElement>(null);

  // Close the dropdown when clicking outside it.
  useEffect(() => {
    function onPointerDown(event: MouseEvent) {
      if (boxRef.current && !boxRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onPointerDown);
    return () => document.removeEventListener("mousedown", onPointerDown);
  }, []);

  useEffect(() => {
    const term = query.trim();
    if (term.length < 2) {
      setSuggestions([]);
      return;
    }

    const controller = new AbortController();
    const timer = setTimeout(async () => {
      setLoading(true);
      try {
        const url = `${ENDPOINT}?name=${encodeURIComponent(term)}&count=6&language=en&format=json`;
        const res = await fetch(url, { signal: controller.signal });
        const data = (await res.json()) as { results?: GeocodeResult[] };

        setSuggestions(
          (data.results ?? [])
            .filter((r): r is GeocodeResult & { name: string; country: string } =>
              Boolean(r.name && r.country)
            )
            .map((r) => ({
              city: r.name,
              region: r.admin1 ?? "",
              country: r.country,
            }))
        );
      } catch {
        // Aborted or offline — leave whatever the dancer typed usable as-is.
      } finally {
        setLoading(false);
      }
    }, 250);

    return () => {
      clearTimeout(timer);
      controller.abort();
    };
  }, [query]);

  function choose(s: Suggestion) {
    onChange({ city: s.city, country: s.country });
    setQuery("");
    setSuggestions([]);
    setOpen(false);
  }

  const selectedLabel = value.city
    ? value.country
      ? `${value.city}, ${value.country}`
      : value.city
    : "";

  return (
    <div className="flex flex-col gap-2" ref={boxRef}>
      <label htmlFor="location" className="text-sm text-paper-dim">
        Location
      </label>

      <div className="relative">
        <input
          id="location"
          type="text"
          autoComplete="off"
          placeholder="Start typing your city"
          value={open || !selectedLabel ? query : selectedLabel}
          onFocus={() => {
            setOpen(true);
            if (selectedLabel && !query) setQuery(value.city);
          }}
          onChange={(e) => {
            setQuery(e.target.value);
            setOpen(true);
            // Typing again clears the confirmed pick until they choose one.
            if (value.city) onChange({ city: "", country: "" });
          }}
          className="w-full rounded-lg border border-line bg-ink px-4 py-3 text-paper outline-none transition focus:border-gold"
        />

        {open && query.trim().length >= 2 && (
          <ul className="absolute z-20 mt-1 max-h-60 w-full overflow-auto rounded-lg border border-line bg-ink-raised shadow-xl">
            {loading && suggestions.length === 0 && (
              <li className="px-4 py-3 text-sm text-paper-dim">Searching...</li>
            )}

            {!loading && suggestions.length === 0 && (
              <li className="px-4 py-3 text-sm text-paper-dim">
                No match — we'll use what you typed.
              </li>
            )}

            {suggestions.map((s, i) => (
              <li key={`${s.city}-${s.region}-${s.country}-${i}`}>
                <button
                  type="button"
                  onClick={() => choose(s)}
                  className="flex w-full flex-col items-start gap-0.5 px-4 py-2.5 text-left transition hover:bg-gold/10"
                >
                  <span className="text-sm text-paper">{s.city}</span>
                  <span className="text-xs text-paper-dim">
                    {[s.region, s.country].filter(Boolean).join(", ")}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

    </div>
  );
}
