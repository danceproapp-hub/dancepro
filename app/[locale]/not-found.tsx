import type { Metadata } from "next";
import { getDictionary, DEFAULT_LOCALE } from "@/lib/i18n";

/*
 * Without this, a mistyped or stale URL under a locale gets Next's own
 * 404: black on white, in English, no header, no footer, nothing to
 * click. The catch-all route beside this file is what brings a visitor
 * here at all — an unmatched URL never reaches the segment on its own.
 *
 * Deliberately static, and deliberately English.
 *
 * A not-found page is not handed the route's params, so the only ways to
 * know the language are cookies() or headers() — and either makes the
 * route dynamic, which left the body out of the server-rendered HTML
 * altogether and put it in the hydration payload instead. A 404 that
 * needs JavaScript to say anything is a blank page when a script fails,
 * which is worse than the one it replaced.
 *
 * So the copy is English and the page renders on the server. What the
 * reader still gets in their own language is everything around it: the
 * locale layout supplies the header, the footer and the nav, and the
 * link points at "/" so the proxy returns them to their own language
 * rather than to English.
 */
const t = getDictionary(DEFAULT_LOCALE);

export const metadata: Metadata = {
  title: t.notFound.metaTitle,
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-2xl flex-col items-center gap-6 px-6 py-28 text-center">
      <h1>{t.notFound.title}</h1>
      <p className="lead text-muted">{t.notFound.body}</p>
      {/*
        A plain anchor to the site root, not a locale path: the proxy reads
        the cookie and the Accept-Language header and sends them back to
        the language they were reading, which this page cannot know.
      */}
      <a href="/" className="btn btn-primary btn-lift px-8 py-4">
        {t.notFound.back}
      </a>
    </section>
  );
}
