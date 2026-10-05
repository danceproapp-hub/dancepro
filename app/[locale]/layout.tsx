import type { Metadata } from "next";
import { notFound } from "next/navigation";
import "../globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { HydrationMark } from "@/components/HydrationMark";
import { LOCALES, LOCALE_SCRIPT, isLocale, getDictionary } from "@/lib/i18n";
import { display, body, displayCyrillic, bodyCyrillic } from "@/app/fonts";
import { siteUrl } from "@/lib/siteUrl";

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const t = getDictionary(locale);

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: t.home.metaTitle,
      template: "%s | DancePro",
    },
    description: t.home.metaDescription,
    // Tell search engines this page has siblings in other languages.
    alternates: {
      canonical: `/${locale}`,
      languages: Object.fromEntries(LOCALES.map((l) => [l, `/${l}`])),
    },
    openGraph: {
      title: t.home.metaTitle,
      description: t.home.heroSubtitle,
      siteName: "DancePro",
      locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: t.home.metaTitle,
      description: t.home.heroSubtitle,
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const t = getDictionary(locale);
  const script = LOCALE_SCRIPT[locale];

  // The brand faces are attached everywhere: each script's stack leads with
  // them so Latin glyphs keep the brand type. Cyrillic pages additionally
  // get the faces that actually carry their alphabet.
  const fontClasses = [
    display.variable,
    body.variable,
    script === "cyrillic"
      ? `${displayCyrillic.variable} ${bodyCyrillic.variable}`
      : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <html lang={locale} data-script={script} className={fontClasses}>
      <body className="flex min-h-screen flex-col font-body antialiased">
        <HydrationMark />
        <SiteHeader locale={locale} t={t} />
        <main className="flex-1">{children}</main>
        <SiteFooter locale={locale} t={t} />
        {/*
          Counts page views, so a signup number can be read against how
          many dancers arrived at all. No cookie and no fingerprint, which
          is why the privacy page can still say nothing here follows you.

          Vercel serves this script itself, so the @vercel/analytics
          package would only add a dependency to insert one tag — and this
          project keeps its dependencies few on purpose. Rendered only on
          Vercel, because the path does not exist locally and a 404 in the
          console on every dev page load is noise that hides real errors.
        */}
        {process.env.VERCEL && (
          <script defer src="/_vercel/insights/script.js" />
        )}
      </body>
    </html>
  );
}
