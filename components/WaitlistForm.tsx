"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { REFERRAL_STORAGE_KEY } from "@/lib/waitlistOptions";
import { DANCE_STYLES } from "@/lib/danceStyles";
import { joinWaitlist } from "@/lib/supabase";
import type { Dictionary, Locale } from "@/lib/i18n";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

interface Errors {
  firstName?: string;
  email?: string;
  styles?: string;
}

export function WaitlistForm({
  locale,
  t,
}: {
  locale: Locale;
  // Only this slice, so the rest of the dictionary stays on the server
  // instead of riding along in the RSC payload.
  t: Dictionary["signup"];
}) {
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
    if (!firstName.trim()) next.firstName = t.errName;
    if (!email.trim()) next.email = t.errEmail;
    else if (!EMAIL_PATTERN.test(email.trim()))
      next.email = t.errEmailInvalid;
    if (styles.length === 0) next.styles = t.errStyles;

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
      router.push(`/${locale}/welcome?code=${encodeURIComponent(code)}`);
    } catch {
      setFormError(t.errGeneric);
      setSubmitting(false);
    }
  }

  return (
    <form
      id="join"
      onSubmit={handleSubmit}
      className="mx-auto flex max-w-xl flex-col gap-5 border border-line bg-panel p-6 sm:p-8"
    >
      <div className="flex flex-col gap-2">
        <label htmlFor="firstName" className="field-label">
          {t.firstName}
        </label>
        <input
          id="firstName"
          type="text"
          autoComplete="given-name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className={`input ${errors.firstName ? "is-invalid" : ""}`}
        />
        {errors.firstName && (
          <p className="caption text-red-400" role="alert">
            {errors.firstName}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="field-label">
          {t.email}
        </label>
        <input
          id="email"
          type="email"
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={`input ${errors.email ? "is-invalid" : ""}`}
        />
        {errors.email && (
          <p className="caption text-red-400" role="alert">
            {errors.email}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <span className="field-label">{t.danceStyles}</span>
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
                className="chip"
              >
                {style.name}
              </button>
            );
          })}
        </div>
        {errors.styles && (
          <p className="caption text-red-400" role="alert">
            {errors.styles}
          </p>
        )}
      </div>

      {formError && (
        <p role="alert" className="caption text-red-400">
          {formError}
        </p>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="btn btn-primary btn-lift mt-1 px-8 py-4"
      >
        {submitting ? t.submitting : t.submit}
      </button>

      <p className="caption mx-auto text-center">{t.footnote}</p>
    </form>
  );
}

