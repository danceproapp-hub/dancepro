import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Reveal } from "@/components/Reveal";
import { Eyebrow } from "@/components/Eyebrow";
import { getDictionary, isLocale } from "@/lib/i18n";

// The one address a dancer, or a parent, can write to about their data.
const CONTACT_EMAIL = "danceproapp@gmail.com";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = getDictionary(isLocale(locale) ? locale : "en");
  return {
    title: t.privacy.metaTitle,
    description: t.privacy.metaDescription,
    openGraph: {
      title: t.privacy.title,
      description: t.privacy.metaDescription,
    },
  };
}

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = getDictionary(locale);

  // Named one by one rather than mapped, because each is a different
  // company doing a different job — a reader should be able to tell
  // which is which without counting.
  const processors = [
    t.privacy.sharingSupabase,
    t.privacy.sharingVercel,
    t.privacy.sharingCloudflare,
    t.privacy.sharingOpenMeteo,
    t.privacy.sharingGmail,
  ];

  return (
    <div className="mx-auto max-w-3xl px-6 py-24">
      <Reveal>
        <Eyebrow>{t.privacy.eyebrow}</Eyebrow>
        <h1 className="mb-3">{t.privacy.title}</h1>
        <p className="caption mb-8">{t.privacy.updated}</p>
        <p className="lead mb-14 text-muted">{t.privacy.intro}</p>
      </Reveal>

      <Section title={t.privacy.collectTitle}>
        <p>{t.privacy.collectBody}</p>
        <p>{t.privacy.collectAgeBody}</p>
        <p>{t.privacy.collectRefBody}</p>
      </Section>

      <Section title={t.privacy.whyTitle}>
        <p>{t.privacy.whyBody}</p>
      </Section>

      <Section title={t.privacy.sharingTitle}>
        <p>{t.privacy.sharingBody}</p>
        <ul className="flex flex-col gap-3">
          {processors.map((line) => (
            <li key={line} className="border-l border-gold/40 pl-5">
              {line}
            </li>
          ))}
        </ul>
      </Section>

      <Section title={t.privacy.minorsTitle}>
        <p>{t.privacy.minorsBody}</p>
      </Section>

      <Section title={t.privacy.keepTitle}>
        <p>{t.privacy.keepBody}</p>
      </Section>

      <Section title={t.privacy.cookiesTitle}>
        <p>{t.privacy.cookiesBody}</p>
      </Section>

      <Section title={t.privacy.rightsTitle}>
        <p>{t.privacy.rightsBody}</p>
      </Section>

      <Section title={t.privacy.contactTitle}>
        <p>{t.privacy.contactBody}</p>
        <p>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="text-gold underline-offset-4 transition hover:underline"
          >
            {CONTACT_EMAIL}
          </a>
        </p>
      </Section>
    </div>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-14">
      <h2 className="mb-4">{title}</h2>
      <div className="flex flex-col gap-4 text-muted">{children}</div>
    </section>
  );
}
