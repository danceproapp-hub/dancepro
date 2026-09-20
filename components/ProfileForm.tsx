"use client";

import { useState } from "react";
import { LocationInput } from "@/components/LocationInput";
import {
  COMPETITION_DIVISION_OPTIONS,
  COMPETITION_PARTNER_OPTION,
  COMPETITIVE_ONLY_LEVELS,
  LEVEL_OPTIONS,
  LOOKING_FOR_OPTIONS,
  ROLE_OPTIONS,
} from "@/lib/waitlistOptions";
import { isSocialOnly } from "@/lib/danceStyles";
import { updateWaitlistProfile, type WaitlistProfile } from "@/lib/supabase";
import type { ProfileFormDictionary, Locale } from "@/lib/i18n";

interface Errors {
  location?: string;
  role?: string;
}

function toggleValue(list: string[], value: string): string[] {
  return list.includes(value) ? list.filter((v) => v !== value) : [...list, value];
}

export function ProfileForm({
  code,
  styles,
  profile,
  complete,
  locale,
  t,
}: {
  code: string;
  styles: string[];
  profile: WaitlistProfile;
  complete: boolean;
  locale: Locale;
  t: ProfileFormDictionary;
}) {
  // Social Dance has no competitive circuit. A dancer who picked only that
  // can't compete, so they describe themselves by level and are never
  // offered a competition partner.
  const socialOnly = isSocialOnly(styles);
  const levelOptions = socialOnly
    ? LEVEL_OPTIONS.filter((o) => !COMPETITIVE_ONLY_LEVELS.includes(o.value))
    : LEVEL_OPTIONS;
  const lookingForOptions = socialOnly
    ? LOOKING_FOR_OPTIONS.filter((o) => o !== COMPETITION_PARTNER_OPTION)
    : LOOKING_FOR_OPTIONS;

  const [form, setForm] = useState<WaitlistProfile>(profile);
  const [saved, setSaved] = useState<WaitlistProfile>(profile);
  const [open, setOpen] = useState(false);
  const [saving, setSaving] = useState(false);
  const [errors, setErrors] = useState<Errors>({});
  const [error, setError] = useState<string | null>(null);

  const hasProfile = complete || Boolean(saved.city && saved.role);

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    // Without these two the entry tells us nothing, and saving silently
    // did nothing at all before — it just claimed success.
    const next: Errors = {};
    if (!form.city.trim()) next.location = t.profile.errLocation;
    if (!form.role) next.role = t.profile.errRole;
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    setSaving(true);
    setError(null);

    try {
      await updateWaitlistProfile({
        code,
        city: form.city.trim(),
        country: form.country,
        role: form.role,
        level: socialOnly ? form.level : "",
        lookingFor: form.lookingFor,
        divisions: socialOnly ? [] : form.divisions,
      });
      setSaved(form);
      setOpen(false);
    } catch {
      setError(t.profile.errGeneric);
    } finally {
      setSaving(false);
    }
  }

  // Nothing saved yet, and not currently editing.
  if (!open && !hasProfile) {
    return (
      <div className="w-full border border-line bg-panel p-6 text-center sm:p-8">
        <h2>{t.profile.inviteTitle}</h2>
        <p className="mx-auto mt-3 max-w-md text-muted">
          {t.profile.inviteBody}
        </p>
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="btn btn-secondary mt-6 px-6 py-3.5"
        >
          {t.profile.inviteCta}
        </button>
      </div>
    );
  }

  // Saved, and not currently editing.
  if (!open && hasProfile) {
    return (
      <div className="w-full border border-gold/40 bg-panel p-6 text-center sm:p-8">
        <p className="font-display text-xl uppercase tracking-[0.05em] text-paper">{t.profile.savedTitle}</p>
        <p className="mx-auto mt-2 text-muted">{t.profile.savedBody}</p>
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="label mt-5 underline-offset-4 transition hover:underline"
        >
          {t.profile.editCta}
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full flex-col gap-6 border border-line bg-panel p-6 text-left sm:p-8"
    >
      <div className="flex flex-col gap-2">
        <LocationInput
          value={{ city: form.city, country: form.country }}
          onChange={(next) =>
            setForm({ ...form, city: next.city, country: next.country })
          }
          locale={locale}
          t={t.profile}
        />
        {errors.location && (
          <p className="caption text-red-400" role="alert">
            {errors.location}
          </p>
        )}
      </div>

      <Field label={t.profile.role} error={errors.role}>
        <div
          className="flex flex-wrap gap-3"
          role="radiogroup"
          aria-label={t.profile.role}
        >
          {ROLE_OPTIONS.map((option) => (
            <label
              key={option.value}
              className={`chip ${form.role === option.value ? "is-active" : ""}`}
            >
              <input
                type="radio"
                name="role"
                value={option.value}
                checked={form.role === option.value}
                onChange={() => setForm({ ...form, role: option.value })}
                className="sr-only"
              />
              {t.roles[option.value]}
            </label>
          ))}
        </div>
      </Field>

      {/* A dancer's standard, in whichever vocabulary fits them. */}
      {socialOnly ? (
        <Field label={t.profile.level}>
          <select
            value={form.level}
            onChange={(e) => setForm({ ...form, level: e.target.value })}
            className="input"
            aria-label={t.profile.level}
          >
            <option value="">{t.profile.levelPlaceholder}</option>
            {levelOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {t.levels[option.value]}
              </option>
            ))}
          </select>
        </Field>
      ) : (
        <Field label={t.profile.division}>
          <div className="flex flex-wrap gap-2">
            {COMPETITION_DIVISION_OPTIONS.map((option) => (
              <Chip
                key={option}
                label={option}
                active={form.divisions.includes(option)}
                onClick={() =>
                  setForm({
                    ...form,
                    divisions: toggleValue(form.divisions, option),
                  })
                }
              />
            ))}
          </div>
        </Field>
      )}

      <Field label={t.profile.lookingFor}>
        <div className="flex flex-wrap gap-2">
          {lookingForOptions.map((option) => (
            <Chip
              key={option}
              label={t.lookingFor[option]}
              active={form.lookingFor.includes(option)}
              onClick={() =>
                setForm({
                  ...form,
                  lookingFor: toggleValue(form.lookingFor, option),
                })
              }
            />
          ))}
        </div>
      </Field>

      {error && (
        <p role="alert" className="caption text-red-400">
          {error}
        </p>
      )}

      <div className="flex flex-wrap gap-3">
        <button
          type="submit"
          disabled={saving}
          className="btn btn-primary btn-lift flex-1 px-8 py-4"
        >
          {saving ? t.profile.saving : t.profile.save}
        </button>
        {hasProfile && (
          <button
            type="button"
            onClick={() => {
              setForm(saved);
              setErrors({});
              setOpen(false);
            }}
            className="btn btn-secondary px-6 py-4"
          >
            {t.profile.cancel}
          </button>
        )}
      </div>
    </form>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <span className="label">{label}</span>
      {children}
      {error && (
        <p className="caption text-red-400" role="alert">
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
      className="chip"
    >
      {label}
    </button>
  );
}

