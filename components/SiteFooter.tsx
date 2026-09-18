import Link from "next/link";
import type { Dictionary, Locale } from "@/lib/i18n";

export function SiteFooter({
  locale,
  t,
}: {
  locale: Locale;
  t: Dictionary;
}) {
  const navLinks = [
    { href: `/${locale}/how-it-works`, label: t.nav.howItWorks },
    { href: `/${locale}/dance-styles`, label: t.nav.danceStyles },
    { href: `/${locale}/founding-members`, label: t.nav.foundingMembers },
  ];

  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-10 text-sm text-paper-dim sm:flex-row sm:items-center sm:justify-between">
        <p>
          &copy; {new Date().getFullYear()} DancePro. {t.footer.tagline}
        </p>
        <nav className="flex flex-wrap gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition hover:text-paper"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
