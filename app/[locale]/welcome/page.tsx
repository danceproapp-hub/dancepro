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
  plural,
  profileFormDictionary,
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
        <h1>
          {t.welcome.notFoundTitle}
        </h1>
        <p className="text-muted">{t.welcome.notFoundBody}</p>
        <Link
          href={`/${locale}`}
          className="btn btn-primary px-6 py-3.5"
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
        <p className="label mb-3">
          {t.welcome.youreIn}
        </p>
        <h1 className="tabular">
          {fill(t.welcome.position, { position: status.position })}
        </h1>
        <p className="mt-3 text-muted">
          {fill(plural(locale, status.total, t.welcome.total), {
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

      {/*
        Deliberately a step quieter than the profile panel above it:
        tighter padding, a 20px heading against 26px, and caption-sized
        body copy. Adding your details is the ask; referring is the
        follow-on.
      */}
      <div className="w-[85%] max-w-md border border-line bg-panel p-5 sm:p-6">
        <h2 className="mb-2 text-[20px]">{t.welcome.moveUp}</h2>
        <p className="caption mb-4">
          {fill(t.welcome.referralMsg, {
            referred: `${status.referrals} ${plural(
              locale,
              status.referrals,
              t.welcome.dancers
            )}`,
          })}
        </p>
        <ReferralLinkBox
          link={referralLink}
          copyLabel={t.welcome.copyLink}
          copiedLabel={t.welcome.copied}
        />
      </div>


      <Link
        href={`/${locale}`}
        className="label underline-offset-4 hover:underline"
      >
        {t.welcome.back}
      </Link>
    </section>
  );
}
