import Link from "next/link";
import Image from "next/image";
import mark from "@/public/mark.png";

const NAV_LINKS = [
  { href: "/how-it-works", label: "How It Works" },
  { href: "/dance-styles", label: "Dance Styles" },
  { href: "/founding-members", label: "Founding Members" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-ink/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="group flex items-center gap-2.5"
          aria-label="DancePro home"
        >
          <Image
            src={mark}
            alt=""
            width={26}
            height={26}
            priority
            className="transition-transform duration-500 group-hover:scale-110"
          />
          <span className="font-serif text-xl tracking-wide text-paper">
            DANCE<span className="text-gold">PRO</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative text-sm text-paper-dim transition-colors duration-300 after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-gold after:transition-all after:duration-300 hover:text-paper hover:after:w-full"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/#join"
          className="rounded-full border border-gold/60 px-5 py-2 text-sm text-gold transition-all duration-300 hover:border-gold hover:bg-gold hover:text-ink"
        >
          Join Waitlist
        </Link>
      </div>
    </header>
  );
}
