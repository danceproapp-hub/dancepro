import type { Metadata } from "next";
import Link from "next/link";
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
    title: t.howItWorks.metaTitle,
    description: t.howItWorks.metaDescription,
    openGraph: {
      title: t.howItWorks.title,
      description: t.howItWorks.metaDescription,
    },
  };
}

export default async function HowItWorksPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = getDictionary(locale);

  const steps = [
    { title: t.howItWorks.s1Title, description: t.howItWorks.s1Body },
    { title: t.howItWorks.s2Title, description: t.howItWorks.s2Body },
    { title: t.howItWorks.s3Title, description: t.howItWorks.s3Body },
    { title: t.howItWorks.s4Title, description: t.howItWorks.s4Body },
    { title: t.howItWorks.s5Title, description: t.howItWorks.s5Body },
    { title: t.howItWorks.s6Title, description: t.howItWorks.s6Body },
  ];

  return (
    <div className="mx-auto max-w-3xl px-6 py-24">
      <Reveal>
        <Eyebrow>{t.howItWorks.eyebrow}</Eyebrow>
        <h1 className="mb-4">
          {t.howItWorks.title}
        </h1>
        <p className="lead mb-14 text-muted">{t.howItWorks.intro}</p>
      </Reveal>

      <ol className="flex flex-col gap-10">
        {steps.map((step, index) => (
          <Reveal key={step.title} delay={index * 70}>
            <li className="group flex gap-6">
              <span className="font-display tabular text-3xl text-gold transition-transform duration-500 group-hover:-translate-y-0.5">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="mb-2">{step.title}</h3>
                <p className="text-muted">
                  {step.description}
                </p>
              </div>
            </li>
          </Reveal>
        ))}
      </ol>

      <Link
        href={`/${locale}#join`}
        className="btn btn-primary btn-lift inline-block px-8 py-4 mt-12"
      >
        {t.howItWorks.cta}
      </Link>
    </div>
  );
}
