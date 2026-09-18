import type { Metadata } from "next";
import Link from "next/link";
import { headers } from "next/headers";
import { notFound } from "next/navigation";
import { ReferralLinkBox } from "@/components/ReferralLinkBox";
import { ProfileForm } from "@/components/ProfileForm";
import { getWaitlistStatus, type WaitlistStatus } from "@/lib/supabase";
import {
  fill,
  getDictionary,
  isLocale,
  profileFormDictionary,
  type Dictionary,
} from "@/lib/i18n";

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = getDictionary(isLocale(locale) ? locale : "en");
  return {
    title: t.welcome.metaTitle,
    description: t.welcome.metaDescription,
    robots: { index: false, follow: false },
  };
}

function tierMessage(referrals: number, t: Dictionary): string {
  // Each tier's copy names its own remaining count, so the sentence reads
  // naturally in languages that inflect differently around numbers.
  const dancers = (n: number) =>
    `${n} ${n === 1 ? t.welcome.dancerOne : t.welcome.dancerMany}`;

  if (referrals < 3) {
    return fill(t.welcome.tierMsgToFirst, {
      referred: dancers(referrals),
      remaining: 3 - referrals,
    });
  }
  if (referrals < 10) {
    return fill(t.welcome.tierMsgToPriority, {
      referred: dancers(referrals),
      remaining: 10 - referrals,
    });
  }
  if (referrals < 25) {
    return fill(t.welcome.tierMsgToVip, {
      referred: dancers(referrals),
      remaining: 25 - referrals,
    });
  }
  return fill(t.welcome.tierMsgMax, { referred: dancers(referrals) });
}

export default async function WelcomePage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ code?: string }>;
}) {
  const [{ locale }, { code }] = await Promise.all([params, searchParams]);
  if (!isLocale(locale)) notFound();
  const t = getDictionary(locale);

  let status: WaitlistStatus | null = null;

  if (code) {
    try {
      status = await getWaitlistStatus(code);
    } catch {
      status = null;
    }
  }

  if (!code || !status) {
    return (
      <section className="mx-auto flex max-w-lg flex-col items-center gap-6 px-6 py-24 text-center">
        <h1 className="font-serif text-3xl text-paper">
          {t.welcome.notFoundTitle}
        </h1>
        <p className="text-paper-dim">{t.welcome.notFoundBody}</p>
        <Link
          href={`/${locale}`}
          className="rounded-full bg-gold px-6 py-3 text-sm font-medium text-ink transition hover:bg-gold-dim"
        >
          {t.welcome.back}
        </Link>
      </section>
    );
  }

  const headerList = await headers();
  const host = headerList.get("host") ?? "dancepro.app";
  const protocol =
    host.startsWith("localhost") || host.startsWith("127.0.0.1")
      ? "http"
      : "https";
  // No locale in the referral link on purpose: the middleware sends whoever
  // opens it to their own language.
  const referralLink = `${protocol}://${host}/?ref=${code}`;

  return (
    <section className="mx-auto flex max-w-2xl flex-col items-center gap-10 px-6 py-20 text-center">
      <div>
        <p className="mb-2 text-sm uppercase tracking-widest text-gold">
          {t.welcome.youreIn}
        </p>
        <h1 className="font-serif text-5xl text-paper sm:text-6xl">
          {fill(t.welcome.position, { position: status.position })}
        </h1>
        <p className="mt-3 text-paper-dim">
          {status.total === 1
            ? t.welcome.totalOne
            : fill(t.welcome.totalMany, {
                total: status.total.toLocaleString(locale),
              })}
        </p>
      </div>

      <ProfileForm
        code={code}
        styles={status.styles}
        profile={status.profile}
        complete={status.profileComplete}
        locale={locale}
        t={profileFormDictionary(t)}
      />

      <div className="w-full rounded-2xl border border-line bg-ink-raised p-6 sm:p-8">
        <h2 className="mb-3 font-serif text-xl text-paper">
          {t.welcome.moveUp}
        </h2>
        <p className="mb-5 text-sm text-paper-dim">
          {tierMessage(status.referrals, t)}
        </p>
        <ReferralLinkBox
          link={referralLink}
          copyLabel={t.welcome.copyLink}
          copiedLabel={t.welcome.copied}
        />
      </div>

      <div className="grid w-full gap-4 text-left sm:grid-cols-3">
        <TierCard
          threshold={3}
          label={t.welcome.tier3}
          met={status.referrals >= 3}
          t={t}
        />
        <TierCard
          threshold={10}
          label={t.welcome.tier10}
          met={status.referrals >= 10}
          t={t}
        />
        <TierCard
          threshold={25}
          label={t.welcome.tier25}
          met={status.referrals >= 25}
          t={t}
        />
      </div>

      <Link
        href={`/${locale}`}
        className="text-sm text-gold underline-offset-4 hover:underline"
      >
        {t.welcome.back}
      </Link>
    </section>
  );
}

function TierCard({
  threshold,
  label,
  met,
  t,
}: {
  threshold: number;
  label: string;
  met: boolean;
  t: Dictionary;
}) {
  return (
    <div
      className={`rounded-xl border p-4 ${
        met ? "border-gold bg-gold/10" : "border-line"
      }`}
    >
      <p className={`font-serif text-lg ${met ? "text-gold" : "text-paper"}`}>
        {fill(t.welcome.referralsLabel, { count: threshold })}
      </p>
      <p className="text-sm text-paper-dim">{label}</p>
    </div>
  );
}
