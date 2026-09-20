import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { DANCE_STYLES, type DanceStyleCategory } from "@/lib/danceStyles";
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
    title: t.danceStyles.metaTitle,
    description: t.danceStyles.metaDescription,
    openGraph: {
      title: t.danceStyles.title,
      description: t.danceStyles.metaDescription,
    },
  };
}

export default async function DanceStylesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = getDictionary(locale);

  // Keyed by the canonical English style name, which is what DANCE_STYLES
  // and the database both use.
  const descriptions: Record<string, string> =
    t.danceStyles.styleDescriptions;

  const categories: {
    key: DanceStyleCategory;
    label: string;
    blurb: string;
  }[] = [
    {
      key: "International",
      label: t.danceStyles.catInternational,
      blurb: t.danceStyles.catInternationalBlurb,
    },
    {
      key: "American",
      label: t.danceStyles.catAmerican,
      blurb: t.danceStyles.catAmericanBlurb,
    },
    {
      key: "Other",
      label: t.danceStyles.catOther,
      blurb: t.danceStyles.catOtherBlurb,
    },
  ];

  return (
    <div className="mx-auto max-w-4xl px-6 py-24">
      <Reveal>
        <Eyebrow>{t.danceStyles.eyebrow}</Eyebrow>
        <h1 className="mb-4">
          {t.danceStyles.title}
        </h1>
        <p className="lead mb-14 max-w-2xl text-muted">
          {t.danceStyles.intro}
        </p>
      </Reveal>

      <div className="flex flex-col gap-16">
        {categories.map((category) => (
          <div key={category.key}>
            <Reveal>
              <h2 className="mb-1">
                {category.label}
              </h2>
              <p className="caption mb-6">{category.blurb}</p>
            </Reveal>
            <div className="grid gap-6 sm:grid-cols-2">
              {DANCE_STYLES.filter(
                (style) => style.category === category.key
              ).map((style, index) => (
                <Reveal key={style.name} delay={index * 70}>
                  <div className="h-full border border-line p-5 transition-all duration-500 hover:-translate-y-0.5 hover:border-gold/50 hover:bg-panel">
                    {/* The discipline name itself stays as dancers say it. */}
                    <h3 className="mb-2 text-gold">{style.name}</h3>
                    <p className="text-muted">
                      {descriptions[style.name] ?? style.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        ))}
      </div>

      <Reveal className="mt-16 text-center">
        <p className="mx-auto mb-6 text-muted">{t.danceStyles.closing}</p>
        <Link
          href={`/${locale}#join`}
          className="btn btn-primary btn-lift inline-block px-8 py-4"
        >
          {t.danceStyles.cta}
        </Link>
      </Reveal>
    </div>
  );
}
