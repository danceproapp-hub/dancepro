import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  Instrument_Serif,
  DM_Sans,
  Playfair_Display,
  Manrope,
} from "next/font/google";
import "../globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { LOCALES, LOCALE_SCRIPT, isLocale, getDictionary } from "@/lib/i18n";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-instrument-serif",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

// Cyrillic stand-ins for the two Latin faces, which have no Cyrillic
// glyphs. preload is off and the classes are only attached on Cyrillic
// pages, so Latin and CJK visitors never fetch them.
const playfair = Playfair_Display({
  subsets: ["cyrillic"],
  weight: "400",
  variable: "--font-playfair",
  display: "swap",
  preload: false,
});

const manrope = Manrope({
  subsets: ["cyrillic"],
  variable: "--font-manrope",
  display: "swap",
  preload: false,
});

const siteUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

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

  // The Latin faces are attached everywhere: each script's stack leads with
  // them so Latin glyphs keep the brand type. Cyrillic pages additionally
  // get the faces that actually carry their alphabet.
  const fontClasses = [
    instrumentSerif.variable,
    dmSans.variable,
    script === "cyrillic" ? `${playfair.variable} ${manrope.variable}` : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <html lang={locale} data-script={script} className={fontClasses}>
      <body className="flex min-h-screen flex-col bg-ink font-sans text-paper antialiased">
        <SiteHeader locale={locale} t={t} />
        <main className="flex-1">{children}</main>
        <SiteFooter locale={locale} t={t} />
      </body>
    </html>
  );
}
