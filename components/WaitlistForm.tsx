"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { REFERRAL_STORAGE_KEY } from "@/lib/waitlistOptions";
import { DANCE_STYLES } from "@/lib/danceStyles";
import { joinWaitlist } from "@/lib/supabase";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

interface Errors {
  firstName?: string;
  email?: string;
  styles?: string;
}

export function WaitlistForm() {
  const router = useRouter();
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [styles, setStyles] = useState<string[]>([]);
  const [errors, setErrors] = useState<Errors>({});
  const [submitting, setSubmitting] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const refCodeRef = useRef<string | null>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const refFromUrl = params.get("ref");
    if (refFromUrl) {
      window.localStorage.setItem(REFERRAL_STORAGE_KEY, refFromUrl);
      refCodeRef.current = refFromUrl;
    } else {
      refCodeRef.current = window.localStorage.getItem(REFERRAL_STORAGE_KEY);
    }
  }, []);

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    const next: Errors = {};
    if (!firstName.trim()) next.firstName = "First name is required.";
    if (!email.trim()) next.email = "Email is required.";
    else if (!EMAIL_PATTERN.test(email.trim()))
      next.email = "Enter a valid email address.";
    if (styles.length === 0) next.styles = "Pick at least one style.";

    setErrors(next);
    if (Object.keys(next).length > 0) return;

    setSubmitting(true);
    setFormError(null);

    try {
      const code = await joinWaitlist({
        firstName: firstName.trim(),
        email: email.trim(),
        styles,
        ref: refCodeRef.current,
      });
      router.push(`/welcome?code=${encodeURIComponent(code)}`);
    } catch {
      setFormError(
        "Something went wrong submitting the form. Please try again in a moment."
      );
      setSubmitting(false);
    }
  }

  return (
    <form
      id="join"
      onSubmit={handleSubmit}
      className="mx-auto flex max-w-xl flex-col gap-5 rounded-2xl border border-line bg-ink-raised p-6 sm:p-8"
    >
      <div className="flex flex-col gap-2">
        <label htmlFor="firstName" className="text-sm text-paper-dim">
          First name
        </label>
        <input
          id="firstName"
          type="text"
          autoComplete="given-name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className={inputClass(!!errors.firstName)}
        />
        {errors.firstName && (
          <p className="text-sm text-red-400" role="alert">
            {errors.firstName}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-sm text-paper-dim">
          Email
        </label>
        <input
          id="email"
          type="email"
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={inputClass(!!errors.email)}
        />
        {errors.email && (
          <p className="text-sm text-red-400" role="alert">
            {errors.email}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <span className="text-sm text-paper-dim">
          Dance styles <span className="opacity-60">— pick any that apply</span>
        </span>
        <div className="flex flex-wrap gap-2">
          {DANCE_STYLES.map((style) => {
            const active = styles.includes(style.name);
            return (
              <button
                key={style.name}
                type="button"
                aria-pressed={active}
                onClick={() =>
                  setStyles(
                    active
                      ? styles.filter((s) => s !== style.name)
                      : [...styles, style.name]
                  )
                }
                className={`rounded-full border px-4 py-2 text-sm transition ${
                  active
                    ? "border-gold bg-gold text-ink"
                    : "border-line text-paper-dim hover:border-gold/60"
                }`}
              >
                {style.name}
              </button>
            );
          })}
        </div>
        {errors.styles && (
          <p className="text-sm text-red-400" role="alert">
            {errors.styles}
          </p>
        )}
      </div>

      {formError && (
        <p role="alert" className="text-sm text-red-400">
          {formError}
        </p>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="mt-1 rounded-full bg-gold px-8 py-4 text-center font-medium text-ink transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-dim hover:shadow-[0_12px_32px_-8px_rgba(201,162,75,0.45)] disabled:opacity-60"
      >
        {submitting ? "Joining..." : "Join the Founding Members"}
      </button>

      <p className="text-center text-xs text-paper-dim">
        Takes ten seconds. You can add your dance details after.
      </p>
    </form>
  );
}

function inputClass(hasError: boolean): string {
  return `rounded-lg border bg-ink px-4 py-3 text-paper outline-none transition focus:border-gold ${
    hasError ? "border-red-400" : "border-line"
  }`;
}
