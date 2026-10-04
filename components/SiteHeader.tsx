import Link from "next/link";
import Image from "next/image";
import mark from "@/public/mark.png";
import { MobileMenu } from "@/components/MobileMenu";
import type { Dictionary, Locale } from "@/lib/i18n";

export function SiteHeader({
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
    <header className="sticky top-0 z-50 border-b border-line/80 bg-ground/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
        <Link
          href={`/${locale}`}
          className="group flex items-center gap-2.5"
          aria-label={t.nav.home}
        >
          <Image
            src={mark}
            alt=""
            width={26}
            height={26}
            priority
            className="transition-transform duration-500 group-hover:scale-110"
          />
          {/* The wordmark is display type: Marcellus, uppercase, tracked. */}
          <span className="font-display text-xl tracking-[0.18em] text-paper">
            DANCE<span className="text-gold">PRO</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="label relative whitespace-nowrap text-muted transition-colors duration-300 after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-gold after:transition-all after:duration-300 hover:text-paper hover:after:w-full"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-3">
          {/*
            Shown from lg, where the nav beside it appears. Below that the
            menu carries both, so the two never compete for the same space.
          */}
          <Link
            href={`/${locale}#join`}
            className="btn btn-secondary hidden whitespace-nowrap px-5 py-3 lg:inline-block"
          >
            {t.nav.joinWaitlist}
          </Link>
          <MobileMenu locale={locale} t={t} />
        </div>
      </div>
    </header>
  );
}
