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
}: {
  code: string;
  styles: string[];
  profile: WaitlistProfile;
  complete: boolean;
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
  const [justSaved, setJustSaved] = useState(false);
  const [errors, setErrors] = useState<Errors>({});
  const [error, setError] = useState<string | null>(null);

  const hasProfile = complete || Boolean(saved.city && saved.role);

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    // Without these two the entry tells us nothing, and saving silently
    // did nothing at all before — it just claimed success.
    const next: Errors = {};
    if (!form.city.trim()) next.location = "Add your city so we can match you locally.";
    if (!form.role) next.role = "Pick the role you dance.";
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
      setJustSaved(true);
      setOpen(false);
    } catch {
      setError("Couldn't save that just now. Please try again in a moment.");
    } finally {
      setSaving(false);
    }
  }

  // Nothing saved yet, and not currently editing.
  if (!open && !hasProfile) {
    return (
      <div className="w-full rounded-2xl border border-line bg-ink-raised p-6 text-center sm:p-8">
        <h2 className="font-serif text-xl text-paper">
          Want your first matches ready at launch?
        </h2>
        <p className="mx-auto mt-2 max-w-md text-sm text-paper-dim">
          Add where you dance, your role and what you're looking for, and we'll
          have compatible partners lined up the day you get access. Takes about
          a minute.
        </p>
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="mt-5 rounded-full border border-gold/60 px-6 py-2.5 text-sm text-gold transition-all duration-300 hover:border-gold hover:bg-gold hover:text-ink"
        >
          Add my details
        </button>
      </div>
    );
  }

  // Saved, and not currently editing: show it back, with a way in.
  if (!open && hasProfile) {
    const standard = socialOnly
      ? LEVEL_OPTIONS.find((o) => o.value === saved.level)?.label
      : saved.divisions.join(", ");
    const roleLabel = ROLE_OPTIONS.find((o) => o.value === saved.role)?.label;

    return (
      <div
        className={`w-full rounded-2xl border bg-ink-raised p-6 text-left sm:p-8 ${
          justSaved ? "border-gold/40" : "border-line"
        }`}
      >
        <div className="flex flex-wrap items-baseline justify-between gap-3">
          <h2 className="font-serif text-xl text-paper">
            {justSaved ? "Saved." : "Your details"}
          </h2>
          <button
            type="button"
            onClick={() => {
              setJustSaved(false);
              setOpen(true);
            }}
            className="text-sm text-gold underline-offset-4 transition hover:underline"
          >
            Edit my details
          </button>
        </div>

        <dl className="mt-4 flex flex-col gap-2 text-sm">
          <Row label="Dance styles" value={styles.join(", ")} />
          <Row
            label="Location"
            value={[saved.city, saved.country].filter(Boolean).join(", ")}
          />
          <Row label="Role" value={roleLabel} />
          <Row label={socialOnly ? "Level" : "Division"} value={standard} />
          <Row label="Looking for" value={saved.lookingFor.join(", ")} />
        </dl>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full flex-col gap-6 rounded-2xl border border-line bg-ink-raised p-6 text-left sm:p-8"
    >
      <div className="flex flex-col gap-2">
        <LocationInput
          value={{ city: form.city, country: form.country }}
          onChange={(next) =>
            setForm({ ...form, city: next.city, country: next.country })
          }
        />
        {errors.location && (
          <p className="text-sm text-red-400" role="alert">
            {errors.location}
          </p>
        )}
      </div>

      <Field label="Role" error={errors.role}>
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

      {/* A dancer's standard, in whichever vocabulary fits them. */}
      {socialOnly ? (
        <Field label="Level">
          <select
            value={form.level}
            onChange={(e) => setForm({ ...form, level: e.target.value })}
            className={inputClass}
            aria-label="Level"
          >
            <option value="">Select your level</option>
            {levelOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </Field>
      ) : (
        <Field label="Your division">
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

      <Field label="Looking for">
        <div className="flex flex-wrap gap-2">
          {lookingForOptions.map((option) => (
            <Chip
              key={option}
              label={option}
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
        <p role="alert" className="text-sm text-red-400">
          {error}
        </p>
      )}

      <div className="flex flex-wrap gap-3">
        <button
          type="submit"
          disabled={saving}
          className="flex-1 rounded-full bg-gold px-8 py-3.5 text-center font-medium text-ink transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-dim disabled:opacity-60"
        >
          {saving ? "Saving..." : "Save my details"}
        </button>
        {hasProfile && (
          <button
            type="button"
            onClick={() => {
              setForm(saved);
              setErrors({});
              setOpen(false);
            }}
            className="rounded-full border border-line px-6 py-3.5 text-sm text-paper-dim transition hover:border-gold/60 hover:text-paper"
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}

function Row({ label, value }: { label: string; value?: string }) {
  return (
    <div className="flex flex-wrap gap-x-3 border-b border-line/60 pb-2 last:border-0">
      <dt className="min-w-32 text-paper-dim">{label}</dt>
      <dd className="text-paper">{value || <span className="text-paper-dim">—</span>}</dd>
    </div>
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
      <span className="text-sm text-paper-dim">{label}</span>
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

const inputClass =
  "rounded-lg border border-line bg-ink px-4 py-3 text-paper outline-none transition focus:border-gold";
