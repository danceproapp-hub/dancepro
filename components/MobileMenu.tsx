"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Dictionary, Locale } from "@/lib/i18n";

const PANEL_ID = "mobile-menu-panel";

/**
 * The phone's navigation. Below lg the header carried only the logo, so
 * the three pages could not be reached from a phone at all.
 */
export function MobileMenu({
  locale,
  t,
}: {
  locale: Locale;
  t: Dictionary;
}) {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  /*
   * Where the page was when the menu was opened, taken in the click
   * rather than in the effect. React runs effects twice in development,
   * and the second run would read the position back as 0 — closing the
   * menu then returned the reader to the top of a page they were halfway
   * down. A click happens once however many times the effect does.
   */
  const scrollRef = useRef(0);
  const pathname = usePathname();

  const links = [
    { href: `/${locale}/how-it-works`, label: t.nav.howItWorks },
    { href: `/${locale}/dance-styles`, label: t.nav.danceStyles },
    { href: `/${locale}/founding-members`, label: t.nav.foundingMembers },
  ];

  const close = useCallback(() => setOpen(false), []);

  /*
   * The panel is rendered into <body>, not where it sits in the tree.
   *
   * The header carries backdrop-blur, and a backdrop-filter makes an
   * element the containing block for any fixed-position descendant — so
   * "fixed; inset: 0" resolved against the header instead of the screen
   * and the panel came out 128px tall with its links clipped. A portal
   * takes it out of that containing block entirely.
   */
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  // Tapping a link navigates; the panel should not still be there after.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;

    /*
     * Hold the page still behind the panel. Overflow alone lets iOS scroll
     * the body under a fixed overlay, so the scroll position is pinned and
     * put back on close — otherwise closing the menu returns you to the
     * top of the page you were halfway down.
     */
    const { body } = document;
    const scrollY = scrollRef.current;
    const previous = {
      position: body.style.position,
      top: body.style.top,
      width: body.style.width,
      overflow: body.style.overflow,
    };
    body.style.position = "fixed";
    body.style.top = `-${scrollY}px`;
    body.style.width = "100%";
    body.style.overflow = "hidden";

    const focusable = () =>
      Array.from(
        panelRef.current?.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled])'
        ) ?? []
      );

    focusable()[0]?.focus();

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        close();
        return;
      }
      if (event.key !== "Tab") return;
      // Keep Tab inside the panel while it is covering everything else.
      const items = focusable();
      if (items.length === 0) return;
      const first = items[0];
      const last = items[items.length - 1];
      const active = document.activeElement;
      if (event.shiftKey && active === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && active === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      body.style.position = previous.position;
      body.style.top = previous.top;
      body.style.width = previous.width;
      body.style.overflow = previous.overflow;
      /*
       * Instant, not smooth. The page has scroll-behavior: smooth, so the
       * plain call animated the restore — the reader watched the page
       * glide back to where they already were. Putting someone back is
       * not a journey.
       */
      window.scrollTo({ top: scrollY, behavior: "instant" });
      buttonRef.current?.focus();
    };
  }, [open, close]);

  return (
    <div className="lg:hidden">
      <button
        ref={buttonRef}
        type="button"
        onClick={() => {
          if (!open) scrollRef.current = window.scrollY;
          setOpen((v) => !v);
        }}
        aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
        aria-expanded={open}
        aria-controls={PANEL_ID}
        className="menu-button"
      >
        {/* Two rules that cross into an X; no border, no box. */}
        <span className={`menu-bar ${open ? "is-open-top" : ""}`} />
        <span className={`menu-bar ${open ? "is-open-bottom" : ""}`} />
      </button>

      {mounted &&
        createPortal(
          <div
            id={PANEL_ID}
            ref={panelRef}
            hidden={!open}
            className="menu-panel"
            role="dialog"
            aria-modal="true"
            aria-label={t.nav.menu}
          >
            {/* Scrolls on its own if the list is taller than the screen. */}
            <nav className="flex flex-col">
              {links.map((link) => (
                /*
                 * Closed on the click as well as on the route change. The
                 * route effect alone misses the link for the page you are
                 * already on: nothing navigates, so nothing fires, and the
                 * panel stayed open over a locked page with no way out.
                 */
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={close}
                  className="menu-link"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <Link
              href={`/${locale}#join`}
              onClick={close}
              className="btn btn-primary mt-auto w-full px-8 py-4"
            >
              {t.nav.joinWaitlist}
            </Link>
          </div>,
          document.body
        )}
    </div>
  );
}
