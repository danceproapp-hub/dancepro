import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getDictionary, isLocale } from "@/lib/i18n";

/*
 * Anything under a locale that no real route claimed.
 *
 * This renders the page itself rather than calling notFound(). Throwing
 * notFound() gives the correct 404 status, but Next then renders the
 * not-found boundary on demand and streams it: the served HTML came back
 * with no header, no footer and no copy at all, everything deferred to
 * the hydration payload. A page that needs a script to say anything is a
 * blank page when the script fails, which is worse than the plain 404 it
 * was replacing.
 *
 * Rendering here instead costs the status code — this answers 200 where
 * 404 would be correct — and buys a page that is always there, in the
 * reader's own language, because this route does get the locale. The
 * noindex below is what keeps a soft 404 out of search results, which is
 * the harm the status code would otherwise have prevented.
 *
 * Real routes are more specific than a catch-all, so every real page is
 * unaffected.
 */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = getDictionary(isLocale(locale) ? locale : "en");
  return {
    title: t.notFound.metaTitle,
    robots: { index: false, follow: false },
  };
}

export default async function CatchAll({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  // A locale that is not one of ours is a different kind of wrong, and
  // there is no language to answer it in.
  if (!isLocale(locale)) notFound();
  const t = getDictionary(locale);

  return (
    <section className="mx-auto flex max-w-2xl flex-col items-center gap-6 px-6 py-28 text-center">
      <h1>{t.notFound.title}</h1>
      <p className="lead text-muted">{t.notFound.body}</p>
      <Link href={`/${locale}`} className="btn btn-primary btn-lift px-8 py-4">
        {t.notFound.back}
      </Link>
    </section>
  );
}
