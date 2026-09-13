"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { COUNTRIES } from "@/lib/countries";
import { DANCE_STYLES } from "@/lib/danceStyles";
import {
  LEVEL_OPTIONS,
  LOOKING_FOR_OPTIONS,
  REFERRAL_STORAGE_KEY,
  ROLE_OPTIONS,
} from "@/lib/waitlistOptions";
import { joinWaitlist } from "@/lib/supabase";

interface FormState {
  firstName: string;
  email: string;
  city: string;
  country: string;
  styles: string[];
  role: string;
  level: string;
  lookingFor: string[];
}

const INITIAL_STATE: FormState = {
  firstName: "",
  email: "",
  city: "",
  country: "",
  styles: [],
  role: "",
  level: "",
  lookingFor: [],
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Errors = Partial<Record<keyof FormState, string>>;

function toggleValue(list: string[], value: string): string[] {
  return list.includes(value) ? list.filter((v) => v !== value) : [...list, value];
}

export function WaitlistForm() {
  const router = useRouter();
  const [form, setForm] = useState<FormState>(INITIAL_STATE);
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

  function validate(current: FormState): Errors {
    const next: Errors = {};
    if (!current.firstName.trim()) next.firstName = "First name is required.";
    if (!current.email.trim()) next.email = "Email is required.";
    else if (!EMAIL_PATTERN.test(current.email.trim()))
      next.email = "Enter a valid email address.";
    if (!current.city.trim()) next.city = "City is required.";
    if (!current.country) next.country = "Select your country.";
    if (current.styles.length === 0)
      next.styles = "Select at least one dance style.";
    if (!current.role) next.role = "Select a role.";
    if (!current.level) next.level = "Select your level.";
    if (current.lookingFor.length === 0)
      next.lookingFor = "Select at least one option.";
    return next;
  }

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    const validationErrors = validate(form);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setSubmitting(true);
    setFormError(null);

    try {
      const code = await joinWaitlist({
        firstName: form.firstName.trim(),
        email: form.email.trim(),
        city: form.city.trim(),
        country: form.country,
        role: form.role,
        level: form.level,
        styles: form.styles,
        lookingFor: form.lookingFor,
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
      className="mx-auto flex max-w-2xl flex-col gap-6 rounded-2xl border border-line bg-ink-raised p-6 sm:p-10"
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="First name" htmlFor="firstName" error={errors.firstName}>
          <input
            id="firstName"
            type="text"
            autoComplete="given-name"
            value={form.firstName}
            onChange={(e) => setForm({ ...form, firstName: e.target.value })}
            className={inputClass(!!errors.firstName)}
          />
        </Field>

        <Field label="Email" htmlFor="email" error={errors.email}>
          <input
            id="email"
            type="email"
            autoComplete="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className={inputClass(!!errors.email)}
          />
        </Field>

        <Field label="City" htmlFor="city" error={errors.city}>
          <input
            id="city"
            type="text"
            autoComplete="address-level2"
            value={form.city}
            onChange={(e) => setForm({ ...form, city: e.target.value })}
            className={inputClass(!!errors.city)}
          />
        </Field>

        <Field label="Country" htmlFor="country" error={errors.country}>
          <select
            id="country"
            value={form.country}
            onChange={(e) => setForm({ ...form, country: e.target.value })}
            className={inputClass(!!errors.country)}
          >
            <option value="">Select a country</option>
            {COUNTRIES.map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field label="Dance styles" htmlFor="styles" error={errors.styles}>
        <div className="flex flex-wrap gap-2">
          {DANCE_STYLES.map((style) => {
            const active = form.styles.includes(style.name);
            return (
              <Chip
                key={style.name}
                label={style.name}
                active={active}
                onClick={() =>
                  setForm({ ...form, styles: toggleValue(form.styles, style.name) })
                }
              />
            );
          })}
        </div>
      </Field>

      <Field label="Role" htmlFor="role" error={errors.role}>
        <div className="flex flex-wrap gap-3" role="radiogroup" aria-label="Role">
          {ROLE_OPTIONS.map((option) => (
            <label
              key={option.value}
              className={`cursor-pointer rounded-full border px-5 py-2 text-sm transition ${
                form.role === option.value
                  ? "border-gold bg-gold text-ink"
                  : "border-line text-paper-dim hover:border-gold/60"
              }`}
            >
              <input
                type="radio"
                name="role"
                value={option.value}
                checked={form.role === option.value}
                onChange={() => setForm({ ...form, role: option.value })}
                className="sr-only"
              />
              {option.label}
            </label>
          ))}
        </div>
      </Field>

      <Field label="Level" htmlFor="level" error={errors.level}>
        <select
          id="level"
          value={form.level}
          onChange={(e) => setForm({ ...form, level: e.target.value })}
          className={inputClass(!!errors.level)}
        >
          <option value="">Select your level</option>
          {LEVEL_OPTIONS.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </Field>

      <Field label="Looking for" htmlFor="lookingFor" error={errors.lookingFor}>
        <div className="flex flex-wrap gap-2">
          {LOOKING_FOR_OPTIONS.map((option) => {
            const active = form.lookingFor.includes(option);
            return (
              <Chip
                key={option}
                label={option}
                active={active}
                onClick={() =>
                  setForm({
                    ...form,
                    lookingFor: toggleValue(form.lookingFor, option),
                  })
                }
              />
            );
          })}
        </div>
      </Field>

      {formError && (
        <p role="alert" className="text-sm text-red-400">
          {formError}
        </p>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="mt-2 rounded-full bg-gold px-8 py-4 text-center font-medium text-ink transition hover:bg-gold-dim disabled:opacity-60"
      >
        {submitting ? "Joining..." : "Join the Founding Members"}
      </button>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  error,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={htmlFor} className="text-sm text-paper-dim">
        {label}
      </label>
      {children}
      {error && (
        <p className="text-sm text-red-400" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

function Chip({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className={`rounded-full border px-4 py-2 text-sm transition ${
        active
          ? "border-gold bg-gold text-ink"
          : "border-line text-paper-dim hover:border-gold/60"
      }`}
    >
      {label}
    </button>
  );
}

function inputClass(hasError: boolean): string {
  return `rounded-lg border bg-ink px-4 py-3 text-paper outline-none transition focus:border-gold ${
    hasError ? "border-red-400" : "border-line"
  }`;
}
