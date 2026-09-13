import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-10 text-sm text-paper-dim sm:flex-row sm:items-center sm:justify-between">
        <p>
          &copy; {new Date().getFullYear()} DancePro. A professional network for
          dancers.
        </p>
        <nav className="flex flex-wrap gap-6">
          <Link href="/how-it-works" className="transition hover:text-paper">
            How It Works
          </Link>
          <Link href="/dance-styles" className="transition hover:text-paper">
            Dance Styles
          </Link>
          <Link href="/founding-members" className="transition hover:text-paper">
            Founding Members
          </Link>
        </nav>
      </div>
    </footer>
  );
}
