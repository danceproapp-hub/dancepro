import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import mark from "@/public/mark.png";
import { WaitlistForm } from "@/components/WaitlistForm";
import { Reveal } from "@/components/Reveal";
import { Pillars } from "@/components/Pillars";
import { Eyebrow } from "@/components/Eyebrow";
import { getWaitlistCount } from "@/lib/supabase";
import { fill, getDictionary, isLocale } from "@/lib/i18n";

export const dynamic = "force-dynamic";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = getDictionary(locale);

  const pillars = [
    { title: t.home.pillarPartnerTitle, description: t.home.pillarPartnerBody },
    { title: t.home.pillarMarketTitle, description: t.home.pillarMarketBody },
    { title: t.home.pillarCoachingTitle, description: t.home.pillarCoachingBody },
    { title: t.home.pillarCompsTitle, description: t.home.pillarCompsBody },
  ];

  const steps = [
    { title: t.home.step1Title, description: t.home.step1Body },
    { title: t.home.step2Title, description: t.home.step2Body },
    { title: t.home.step3Title, description: t.home.step3Body },
    { title: t.home.step4Title, description: t.home.step4Body },
  ];

  const benefits = [
    { title: t.home.benefitBadgeTitle, description: t.home.benefitBadgeBody },
    { title: t.home.benefitAccessTitle, description: t.home.benefitAccessBody },
    { title: t.home.benefitPricingTitle, description: t.home.benefitPricingBody },
    { title: t.home.benefitEventsTitle, description: t.home.benefitEventsBody },
    { title: t.home.benefitVoteTitle, description: t.home.benefitVoteBody },
  ];

  let count = 0;
  try {
    count = await getWaitlistCount();
  } catch {
    count = 0;
  }

  return (
    <div>
      <section className="relative overflow-hidden px-6 pt-24 pb-20 sm:pt-32">
        <div
          aria-hidden
          className="hero-glow pointer-events-none absolute left-1/2 top-0 -z-10 h-[520px] w-[820px] max-w-[140vw] -translate-x-1/2 -translate-y-1/3 bg-[radial-gradient(closest-side,var(--color-gold),transparent)] blur-3xl"
        />

        <div className="mx-auto flex max-w-4xl flex-col items-center gap-8 text-center">
          <Image
            src={mark}
            alt="DancePro"
            width={72}
            height={72}
            priority
            className="enter h-16 w-16 sm:h-[72px] sm:w-[72px]"
          />

          <h1
            className="enter"
            style={{ animationDelay: "120ms" }}
          >
            {t.home.heroTitle}
          </h1>

          <p
            className="enter lead max-w-2xl text-muted"
            style={{ animationDelay: "240ms" }}
          >
            {t.home.heroSubtitle}
          </p>

          <a
            href="#join"
            className="btn btn-primary btn-lift enter px-8 py-4"
            style={{ animationDelay: "360ms" }}
          >
            {t.home.heroCta}
          </a>

          {count >= 25 && (
            <p
              className="enter caption"
              style={{ animationDelay: "460ms" }}
            >
              {fill(t.home.socialProof, {
                count: count.toLocaleString(locale),
              })}
            </p>
          )}
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-6">
        <div className="rule-fade" />
      </div>

      <section className="mx-auto max-w-3xl px-6 py-24">
        <Reveal>
          <Eyebrow>{t.home.ideaEyebrow}</Eyebrow>
          <h2 className="mb-6">
            {t.home.ideaTitle}
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <p className="text-muted">{t.home.ideaBody}</p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-24">
        <Reveal>
          <Eyebrow>{t.home.pillarsEyebrow}</Eyebrow>
          <h2 className="mb-6">
            {t.home.pillarsTitle}
          </h2>
          <p className="mb-12 max-w-2xl text-muted">{t.home.pillarsIntro}</p>
        </Reveal>
        <div className="grid gap-8 sm:grid-cols-2">
          <Pillars items={pillars} />
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-24">
        <Reveal>
          <Eyebrow>{t.home.stepsEyebrow}</Eyebrow>
          <h2 className="mb-12">
            {t.home.stepsTitle}
          </h2>
        </Reveal>
        <div className="grid gap-10 sm:grid-cols-2">
          {steps.map((step, index) => (
            <Reveal key={step.title} delay={index * 90}>
              <div className="group flex gap-5">
                <span className="font-display tabular text-3xl text-gold transition-transform duration-500 group-hover:-translate-y-0.5">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="mb-1.5">{step.title}</h3>
                  <p className="text-muted">
                    {step.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={200}>
          <Link
            href={`/${locale}/how-it-works`}
            className="label mt-10 inline-block underline-offset-4 transition-opacity duration-300 hover:underline hover:opacity-80"
          >
            {t.home.stepsLink} &rarr;
          </Link>
        </Reveal>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-24">
        <Reveal>
          <Eyebrow>{t.home.benefitsEyebrow}</Eyebrow>
          <h2 className="mb-12">
            {t.home.benefitsTitle}
          </h2>
        </Reveal>
        <div className="grid gap-8 sm:grid-cols-2">
          {benefits.map((benefit, index) => (
            <Reveal key={benefit.title} delay={index * 80}>
              <div className="border-l border-gold/40 pl-5 transition-all duration-500 hover:border-gold hover:pl-6">
                <h3 className="mb-1.5">{benefit.title}</h3>
                <p className="text-muted">
                  {benefit.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="px-6 py-24">
        <Reveal>
          <div className="mb-12 text-center">
            <h2>
              {t.home.formTitle}
            </h2>
            <p className="mx-auto mt-3 text-muted">{t.home.formSubtitle}</p>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <WaitlistForm locale={locale} t={t.signup} />
        </Reveal>
      </section>
    </div>
  );
}
