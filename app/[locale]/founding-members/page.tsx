import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Reveal } from "@/components/Reveal";
import { Eyebrow } from "@/components/Eyebrow";
import { getDictionary, isLocale } from "@/lib/i18n";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = getDictionary(isLocale(locale) ? locale : "en");
  return {
    title: t.foundingMembers.metaTitle,
    description: t.foundingMembers.metaDescription,
    openGraph: {
      title: t.foundingMembers.title,
      description: t.foundingMembers.metaDescription,
    },
  };
}

export default async function FoundingMembersPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = getDictionary(locale);

  const perks = [
    {
      title: t.foundingMembers.perkBadgeTitle,
      description: t.foundingMembers.perkBadgeBody,
    },
    {
      title: t.foundingMembers.perkAccessTitle,
      description: t.foundingMembers.perkAccessBody,
    },
    {
      title: t.foundingMembers.perkPricingTitle,
      description: t.foundingMembers.perkPricingBody,
    },
    {
      title: t.foundingMembers.perkEventsTitle,
      description: t.foundingMembers.perkEventsBody,
    },
    {
      title: t.foundingMembers.perkVoteTitle,
      description: t.foundingMembers.perkVoteBody,
    },
  ];

  return (
    <div className="mx-auto max-w-3xl px-6 py-24">
      <Reveal>
        <Eyebrow>{t.foundingMembers.eyebrow}</Eyebrow>
        <h1 className="mb-4 font-serif text-4xl text-paper sm:text-5xl">
          {t.foundingMembers.title}
        </h1>
        <p className="mb-14 text-lg text-paper-dim">{t.foundingMembers.intro}</p>
      </Reveal>

      <div className="mb-16 flex flex-col gap-4 text-paper-dim">
        <h2 className="mb-2 font-serif text-2xl text-paper">
          {t.foundingMembers.firstTitle}
        </h2>
        <p>{t.foundingMembers.firstPara1}</p>
        <p>{t.foundingMembers.firstPara2}</p>
      </div>

      <div className="mb-16">
        <h2 className="mb-8 font-serif text-2xl text-paper">
          {t.foundingMembers.perksTitle}
        </h2>
        <div className="grid gap-8 sm:grid-cols-2">
          {perks.map((perk) => (
            <div
              key={perk.title}
              className="border-l border-gold/40 pl-5 transition-all duration-500 hover:border-gold hover:pl-6"
            >
              <h3 className="mb-1 text-paper">{perk.title}</h3>
              <p className="text-sm text-paper-dim">{perk.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-16 flex flex-col gap-4 text-paper-dim">
        <h2 className="mb-2 font-serif text-2xl text-paper">
          {t.foundingMembers.laterTitle}
        </h2>
        <p>{t.foundingMembers.laterBody}</p>
      </div>

      <div className="text-center">
        <a
          href={`/${locale}#join`}
          className="inline-block rounded-full bg-gold px-8 py-4 font-medium text-ink transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-dim hover:shadow-[0_12px_32px_-8px_rgba(201,162,75,0.45)]"
        >
          {t.foundingMembers.cta}
        </a>
      </div>
    </div>
  );
}
