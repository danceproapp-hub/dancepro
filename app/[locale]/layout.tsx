import type { Metadata, Viewport } from "next";
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

/*
 * This is the only layout in the app, so this applies site-wide and
 * nothing overrides it per route — which matters, because iOS Safari
 * tints its toolbars from theme-color and from the colour of the page
 * near the edges. Left unset it samples the page and re-tints whenever a
 * new layer appears, which is how opening the menu could put a band of a
 * slightly different black along the bottom of the screen.
 *
 * viewport-fit: cover is what makes env(safe-area-inset-*) report real
 * numbers rather than 0 — see the insets used in globals.css. It also
 * extends the layout viewport into the notch and the home-indicator
 * strip, which is why those insets are then applied as padding on body
 * and on the menu panel: the backgrounds reach the physical edge, the
 * words stay inside the safe area.
 */
export const viewport: Viewport = {
  themeColor: "#101010",
  viewportFit: "cover",
};

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
      {/* min-height is in globals.css, not min-h-screen: it needs a dvh
          value with a vh fallback, which one utility cannot express. */}
      <body className="flex flex-col font-body antialiased">
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
