import type { Metadata } from "next";
import { notFound } from "next/navigation";
import "../globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { LOCALES, LOCALE_SCRIPT, isLocale, getDictionary } from "@/lib/i18n";
import { display, body, displayCyrillic, bodyCyrillic } from "@/app/fonts";

// VERCEL_URL is the per-deployment host (dancepro-abc123-….vercel.app),
// which sits behind deployment protection: a social scraper following an
// og:image URL built from it gets Vercel's login page, not the card. The
// production alias is the one that is public.
const host =
  process.env.VERCEL_PROJECT_PRODUCTION_URL ?? process.env.VERCEL_URL;
const siteUrl = host ? `https://${host}` : "http://localhost:3000";

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
        <SiteHeader locale={locale} t={t} />
        <main className="flex-1">{children}</main>
        <SiteFooter locale={locale} t={t} />
      </body>
    </html>
  );
}
