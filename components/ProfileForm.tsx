"use client";

import { useState } from "react";
import { LocationInput } from "@/components/LocationInput";
import {
  LEVEL_OPTIONS,
  LOOKING_FOR_OPTIONS,
  ROLE_OPTIONS,
} from "@/lib/waitlistOptions";
import { updateWaitlistProfile } from "@/lib/supabase";

interface ProfileState {
  city: string;
  country: string;
  role: string;
  level: string;
  lookingFor: string[];
}

const INITIAL_STATE: ProfileState = {
  city: "",
  country: "",
  role: "",
  level: "",
  lookingFor: [],
};

function toggleValue(list: string[], value: string): string[] {
  return list.includes(value) ? list.filter((v) => v !== value) : [...list, value];
}

export function ProfileForm({ code }: { code: string }) {
  const [form, setForm] = useState<ProfileState>(INITIAL_STATE);
  const [open, setOpen] = useState(false);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setSaving(true);
    setError(null);

    try {
      await updateWaitlistProfile({
        code,
        city: form.city.trim(),
        country: form.country,
        role: form.role,
        level: form.level,
        lookingFor: form.lookingFor,
      });
      setSaved(true);
    } catch {
      setError("Couldn't save that just now. Please try again in a moment.");
      setSaving(false);
    }
  }

  if (saved) {
    return (
      <div className="w-full rounded-2xl border border-gold/40 bg-ink-raised p-6 text-center sm:p-8">
        <p className="font-serif text-xl text-paper">Thank you.</p>
        <p className="mt-2 text-sm text-paper-dim">
          Your dance details are saved. We'll use them to line up your first
          matches before launch.
        </p>
      </div>
    );
  }

  if (!open) {
    return (
      <div className="w-full rounded-2xl border border-line bg-ink-raised p-6 text-center sm:p-8">
        <h2 className="font-serif text-xl text-paper">
          Want your first matches ready at launch?
        </h2>
        <p className="mx-auto mt-2 max-w-md text-sm text-paper-dim">
          Add where you dance, your role and your level, and we'll have
          compatible partners lined up the day you get access. Takes about a
          minute, and it's optional.
        </p>
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="mt-5 rounded-full border border-gold/60 px-6 py-2.5 text-sm text-gold transition-all duration-300 hover:border-gold hover:bg-gold hover:text-ink"
        >
          Add my dance details
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full flex-col gap-6 rounded-2xl border border-line bg-ink-raised p-6 text-left sm:p-8"
    >
      <LocationInput
        value={{ city: form.city, country: form.country }}
        onChange={(next) =>
          setForm({ ...form, city: next.city, country: next.country })
        }
      />

      <Field label="Role">
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

      <Field label="Level">
        <select
          value={form.level}
          onChange={(e) => setForm({ ...form, level: e.target.value })}
          className={inputClass}
          aria-label="Level"
        >
          <option value="">Select your level</option>
          {LEVEL_OPTIONS.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </Field>

      <Field label="Looking for">
        <div className="flex flex-wrap gap-2">
          {LOOKING_FOR_OPTIONS.map((option) => (
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

      <button
        type="submit"
        disabled={saving}
        className="rounded-full bg-gold px-8 py-3.5 text-center font-medium text-ink transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-dim disabled:opacity-60"
      >
        {saving ? "Saving..." : "Save my details"}
      </button>
    </form>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <span className="text-sm text-paper-dim">{label}</span>
      {children}
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
