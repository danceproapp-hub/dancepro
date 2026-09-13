import type { Metadata } from "next";
import Link from "next/link";
import { headers } from "next/headers";
import { ReferralLinkBox } from "@/components/ReferralLinkBox";
import { getWaitlistStatus } from "@/lib/supabase";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Welcome",
  description: "You're on the DancePro founding members waitlist.",
  robots: { index: false, follow: false },
};

function tierMessage(referrals: number): string {
  const dancer = (n: number) => (n === 1 ? "dancer" : "dancers");

  if (referrals < 3) {
    const remaining = 3 - referrals;
    return `You've referred ${referrals} ${dancer(referrals)}. ${remaining} more ${dancer(
      remaining
    )} and you move up the waitlist.`;
  }
  if (referrals < 10) {
    const remaining = 10 - referrals;
    return `You've referred ${referrals} ${dancer(
      referrals
    )} and moved up the list. ${remaining} more for priority access at launch.`;
  }
  if (referrals < 25) {
    const remaining = 25 - referrals;
    return `You've referred ${referrals} ${dancer(
      referrals
    )} and unlocked priority access at launch. ${remaining} more for VIP founding status.`;
  }
  return `You've referred ${referrals} ${dancer(
    referrals
  )} and earned VIP founding status. Thank you for building this with us.`;
}

export default async function WelcomePage({
  searchParams,
}: {
  searchParams: Promise<{ code?: string }>;
}) {
  const { code } = await searchParams;

  let status: { position: number; total: number; referrals: number } | null = null;

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
        <h1 className="font-serif text-3xl text-paper">We couldn&apos;t find that link</h1>
        <p className="text-paper-dim">
          Your waitlist link may have expired or been typed incorrectly. Join the
          founding members from the homepage instead.
        </p>
        <Link
          href="/"
          className="rounded-full bg-gold px-6 py-3 text-sm font-medium text-ink transition hover:bg-gold-dim"
        >
          Back to DancePro
        </Link>
      </section>
    );
  }

  const headerList = await headers();
  const host = headerList.get("host") ?? "dancepro.app";
  const protocol = host.startsWith("localhost") || host.startsWith("127.0.0.1") ? "http" : "https";
  const referralLink = `${protocol}://${host}/?ref=${code}`;

  return (
    <section className="mx-auto flex max-w-2xl flex-col items-center gap-10 px-6 py-20 text-center">
      <div>
        <p className="mb-2 text-sm uppercase tracking-widest text-gold">
          You&apos;re in
        </p>
        <h1 className="font-serif text-5xl text-paper sm:text-6xl">
          You are #{status.position}.
        </h1>
        <p className="mt-3 text-paper-dim">
          {status.total.toLocaleString()} dancers have joined the founding members
          list so far.
        </p>
      </div>

      <div className="w-full rounded-2xl border border-line bg-ink-raised p-6 sm:p-8">
        <h2 className="mb-3 font-serif text-xl text-paper">Move up the list</h2>
        <p className="mb-5 text-sm text-paper-dim">{tierMessage(status.referrals)}</p>
        <ReferralLinkBox link={referralLink} />
      </div>

      <div className="grid w-full gap-4 text-left sm:grid-cols-3">
        <TierCard threshold={3} label="Move up the list" met={status.referrals >= 3} />
        <TierCard
          threshold={10}
          label="Priority access at launch"
          met={status.referrals >= 10}
        />
        <TierCard threshold={25} label="VIP founding status" met={status.referrals >= 25} />
      </div>

      <Link href="/" className="text-sm text-gold underline-offset-4 hover:underline">
        Back to DancePro
      </Link>
    </section>
  );
}

function TierCard({
  threshold,
  label,
  met,
}: {
  threshold: number;
  label: string;
  met: boolean;
}) {
  return (
    <div
      className={`rounded-xl border p-4 ${
        met ? "border-gold bg-gold/10" : "border-line"
      }`}
    >
      <p className={`font-serif text-lg ${met ? "text-gold" : "text-paper"}`}>
        {threshold} referrals
      </p>
      <p className="text-sm text-paper-dim">{label}</p>
    </div>
  );
}
