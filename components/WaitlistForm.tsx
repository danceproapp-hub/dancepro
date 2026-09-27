"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { REFERRAL_STORAGE_KEY } from "@/lib/waitlistOptions";
import { DANCE_STYLES } from "@/lib/danceStyles";
import { Turnstile, TURNSTILE_TEST_SITE_KEY } from "@/components/Turnstile";
import type { Dictionary, Locale } from "@/lib/i18n";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const SITE_KEY =
  process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || TURNSTILE_TEST_SITE_KEY;

interface Errors {
  firstName?: string;
  email?: string;
  styles?: string;
  age?: string;
  parentEmail?: string;
}

type AgeGroup = "" | "adult" | "minor";

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
  const [token, setToken] = useState<string | null>(null);
  const [age, setAge] = useState<AgeGroup>("");
  const [parentEmail, setParentEmail] = useState("");
  const [pendingFor, setPendingFor] = useState<string | null>(null);
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
    if (!age) next.age = t.errAge;
    // Under 16 cannot consent for themselves, so we need somewhere to ask.
    if (age === "minor") {
      if (!parentEmail.trim()) next.parentEmail = t.errParentEmail;
      else if (!EMAIL_PATTERN.test(parentEmail.trim()))
        next.parentEmail = t.errParentEmail;
    }

    setErrors(next);
    if (Object.keys(next).length > 0) return;

    setSubmitting(true);
    setFormError(null);

    try {
      // Through our own route, not straight to the database: that is
      // where the Turnstile token is checked.
      const response = await fetch("/api/join", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: firstName.trim(),
          email: email.trim(),
          styles,
          ref: refCodeRef.current,
          token,
          isMinor: age === "minor",
          parentEmail: parentEmail.trim(),
          locale,
        }),
      });

      if (!response.ok) {
        const { error } = (await response
          .json()
          .catch(() => ({ error: "" }))) as { error?: string };
        setFormError(
          error === "minors_unavailable" ? t.minorsUnavailable : t.errGeneric
        );
        setSubmitting(false);
        setToken(null);
        return;
      }

      const result = (await response.json()) as {
        code?: string;
        pending?: boolean;
        parentEmail?: string;
      };

      // A minor has no place to see yet: it exists once a parent agrees.
      if (result.pending) {
        setPendingFor(result.parentEmail ?? parentEmail.trim());
        setSubmitting(false);
        return;
      }

      router.push(
        `/${locale}/welcome?code=${encodeURIComponent(result.code ?? "")}`
      );
    } catch {
      setFormError(t.errGeneric);
      setSubmitting(false);
      setToken(null);
    }
  }

  if (pendingFor) {
    return (
      <div
        id="join"
        className="mx-auto max-w-xl border border-gold/40 bg-panel p-6 text-center sm:p-8"
      >
        <h2 className="text-[22px] sm:text-[26px]">{t.pendingTitle}</h2>
        <p className="mx-auto mt-3 max-w-md text-muted">
          {t.pendingBody.replace("{email}", pendingFor)}
        </p>
      </div>
    );
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

      <div className="flex flex-col gap-2">
        <span className="label">{t.ageLabel}</span>
        <div className="flex flex-wrap gap-2" role="radiogroup" aria-label={t.ageLabel}>
          {([["adult", t.age16], ["minor", t.ageUnder16]] as const).map(
            ([value, label]) => (
              <button
                key={value}
                type="button"
                aria-pressed={age === value}
                onClick={() => setAge(value)}
                className="chip"
              >
                {label}
              </button>
            )
          )}
        </div>
        {errors.age && (
          <p className="caption text-red-400" role="alert">
            {errors.age}
          </p>
        )}
      </div>

      {age === "minor" && (
        <div className="flex flex-col gap-2">
          <label htmlFor="parentEmail" className="label">
            {t.parentEmail}
          </label>
          <input
            id="parentEmail"
            type="email"
            autoComplete="off"
            value={parentEmail}
            onChange={(e) => setParentEmail(e.target.value)}
            className={`input ${errors.parentEmail ? "is-invalid" : ""}`}
          />
          {errors.parentEmail && (
            <p className="caption text-red-400" role="alert">
              {errors.parentEmail}
            </p>
          )}
        </div>
      )}

      {formError && (
        <p role="alert" className="caption text-red-400">
          {formError}
        </p>
      )}

      <Turnstile siteKey={SITE_KEY} onToken={setToken} />

      <button
        type="submit"
        disabled={submitting}
        className="btn btn-primary btn-lift mt-1 px-8 py-4"
      >
        {submitting ? t.submitting : t.submit}
      </button>

      <p className="caption mx-auto text-center">
        {t.footnote}{" "}
        <a
          href={`/${locale}/privacy`}
          className="underline-offset-4 transition hover:text-paper hover:underline"
        >
          {t.privacyLink}
        </a>
      </p>
    </form>
  );
}

