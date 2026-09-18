import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Instrument_Serif, DM_Sans } from "next/font/google";
import "../globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { LOCALES, isLocale, getDictionary } from "@/lib/i18n";

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

  return (
    <html
      lang={locale}
      className={`${instrumentSerif.variable} ${dmSans.variable}`}
    >
      <body className="flex min-h-screen flex-col bg-ink font-sans text-paper antialiased">
        <SiteHeader locale={locale} t={t} />
        <main className="flex-1">{children}</main>
        <SiteFooter locale={locale} t={t} />
      </body>
    </html>
  );
}
