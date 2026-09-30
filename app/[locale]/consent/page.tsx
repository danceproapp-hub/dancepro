import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ConsentConfirm } from "@/components/ConsentConfirm";
import { getDictionary, isLocale } from "@/lib/i18n";

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = getDictionary(isLocale(locale) ? locale : "en");
  return {
    title: t.consent.metaTitle,
    robots: { index: false, follow: false },
  };
}

export default async function ConsentPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ token?: string }>;
}) {
  const [{ locale }, { token }] = await Promise.all([params, searchParams]);
  if (!isLocale(locale)) notFound();
  const t = getDictionary(locale);

  return (
    <section className="mx-auto flex max-w-lg flex-col items-center gap-6 px-6 py-24 text-center">
      <ConsentConfirm token={token ?? ""} locale={locale} t={t.consent} />
    </section>
  );
}
