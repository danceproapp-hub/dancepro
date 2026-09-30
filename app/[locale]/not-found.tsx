import type { Metadata } from "next";
import Link from "next/link";
import { cookies } from "next/headers";
import { LOCALE_COOKIE, DEFAULT_LOCALE } from "@/lib/i18n/config";
import { getDictionary, isLocale, type Locale } from "@/lib/i18n";

/*
 * Without this, a mistyped or stale URL under a locale gets Next's own
 * 404: black on white, in English, with no header, no footer and nothing
 * to click. On a site that speaks nine languages that is a dead end.
 *
 * A not-found page is not given the route's params, so the locale comes
 * from the cookie the proxy sets on every visit. A reader who somehow has
 * no cookie gets English, the same fallback the proxy itself uses.
 */
async function currentLocale(): Promise<Locale> {
  const saved = (await cookies()).get(LOCALE_COOKIE)?.value;
  return saved && isLocale(saved) ? saved : DEFAULT_LOCALE;
}

export async function generateMetadata(): Promise<Metadata> {
  const t = getDictionary(await currentLocale());
  return {
    title: t.notFound.metaTitle,
    robots: { index: false, follow: false },
  };
}

export default async function NotFound() {
  const locale = await currentLocale();
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
