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
      title: t.foundingMembers.perkVoteTitle,
      description: t.foundingMembers.perkVoteBody,
    },
  ];

  return (
    <div className="mx-auto max-w-3xl px-6 py-24">
      <Reveal>
        <Eyebrow>{t.foundingMembers.eyebrow}</Eyebrow>
        <h1 className="mb-4">
          {t.foundingMembers.title}
        </h1>
        <p className="lead mb-14 text-muted">{t.foundingMembers.intro}</p>
      </Reveal>

      <div className="mb-16">
        <h2 className="mb-8">
          {t.foundingMembers.perksTitle}
        </h2>
        <div className="grid gap-8 sm:grid-cols-2">
          {perks.map((perk) => (
            <div
              key={perk.title}
              className="border-l border-gold/40 pl-5 transition-all duration-500 hover:border-gold hover:pl-6"
            >
              <h3 className="mb-1">{perk.title}</h3>
              <p className="text-muted">{perk.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-16 flex flex-col gap-4 text-muted">
        <h2 className="mb-2">
          {t.foundingMembers.laterTitle}
        </h2>
        <p>{t.foundingMembers.laterBody}</p>
      </div>

      <div className="text-center">
        <a
          href={`/${locale}#join`}
          className="btn btn-primary btn-lift inline-block px-8 py-4"
        >
          {t.foundingMembers.cta}
        </a>
      </div>
    </div>
  );
}
