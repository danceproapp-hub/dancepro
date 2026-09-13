import Link from "next/link";

const NAV_LINKS = [
  { href: "/how-it-works", label: "How It Works" },
  { href: "/dance-styles", label: "Dance Styles" },
  { href: "/founding-members", label: "Founding Members" },
];

export function SiteHeader() {
  return (
    <header className="border-b border-line">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link
          href="/"
          className="font-serif text-xl tracking-wide text-paper"
          aria-label="DancePro home"
        >
          DANCE<span className="text-gold">PRO</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-paper-dim transition hover:text-paper"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/#join"
          className="rounded-full border border-gold/60 px-5 py-2 text-sm text-gold transition hover:bg-gold hover:text-ink"
        >
          Join Waitlist
        </Link>
      </div>
    </header>
  );
}
