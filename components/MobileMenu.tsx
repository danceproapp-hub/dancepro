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

  /*
   * Drives the links' arrival, separately from the panel's own fade.
   *
   * Set a frame after opening, so the browser has a chance to paint the
   * from-state and actually transition. Cleared only once the fade-out
   * has finished — clearing it with the panel still on screen would snap
   * every link back down 8px in full view, which is the one movement the
   * close is meant not to have.
   */
  const [revealed, setRevealed] = useState(false);
  useEffect(() => {
    if (open) {
      const id = requestAnimationFrame(() => setRevealed(true));
      return () => cancelAnimationFrame(id);
    }
    const id = window.setTimeout(() => setRevealed(false), 280);
    return () => window.clearTimeout(id);
  }, [open]);

  // Tapping a link navigates; the panel should not still be there after.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;

    /*
     * Hold the page still behind the panel — without moving it.
     *
     * This used to pin the body with position: fixed and top: -scrollY,
     * which is the usual recipe and is wrong on iOS. Fixing the body
     * collapses the document to roughly one screen, so Safari decides the
     * page is no longer scrollable and expands its floating toolbar back
     * to full height; the visual viewport shrinks, and the strip the
     * toolbar used to overlap appears as a band along the bottom. Closing
     * the menu un-fixed the body and the toolbar collapsed again, which
     * is why the band vanished all at once instead of fading with the
     * rest of the panel.
     *
     * overflow: hidden on the root instead. The scroll position is never
     * touched, so there is nothing to put back and nothing for Safari to
     * react to: the document keeps its height and the toolbar keeps its
     * state. It is also why Escape still returns you exactly where you
     * were — you were never taken anywhere.
     *
     * On the root only, and deliberately not on body as well. Hidden
     * overflow makes an element a scroll container, and a sticky child
     * sticks to its nearest one — so locking body too moved the header's
     * frame of reference off the viewport and onto a box that was itself
     * scrolled 600px away. The header went with it, taking the button
     * that closes this menu off the top of the screen. The root is the
     * viewport's own scroller, so locking it changes nobody's ancestry.
     *
     * Programmatic scrolling still works through an overflow: hidden
     * root, which is what lets a navigation out of this menu land at the
     * top of the page it goes to.
     */
    const root = document.documentElement;
    const previousOverflow = root.style.overflow;
    root.style.overflow = "hidden";

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
      root.style.overflow = previousOverflow;
      buttonRef.current?.focus();
    };
  }, [open, close]);

  return (
    <div className="lg:hidden">
      <button
        ref={buttonRef}
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
        aria-expanded={open}
        aria-controls={PANEL_ID}
        className="menu-button"
      >
        {/* The word is short; the longer phrase stays as the
            accessible name on aria-label above. */}
        {open ? t.nav.close : t.nav.menu}
      </button>

      {mounted &&
        createPortal(
          <div
            id={PANEL_ID}
            ref={panelRef}
            className={`menu-panel${open ? " is-open" : ""}${
              revealed ? " is-revealed" : ""
            }`}
            aria-hidden={!open}
            role="dialog"
            aria-modal="true"
            aria-label={t.nav.menu}
          >
            {/* One block, centred: the links and the button belong
                together rather than at opposite ends of the screen. */}
            <div className="menu-group">
              <nav className="flex flex-col gap-y-[10px]">
                {links.map((link, index) => (
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
                    className="menu-link menu-item"
                    style={{ transitionDelay: open ? `${index * 60}ms` : "0ms" }}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              <Link
                href={`/${locale}#join`}
                onClick={close}
                /*
                 * Sized to its own words and aligned to the links above,
                 * not stretched across the panel. Full width was most of
                 * what made the menu shout.
                 */
                className="btn btn-primary menu-item mt-9 self-start px-8 py-4"
                style={{
                  transitionDelay: open ? `${links.length * 60}ms` : "0ms",
                }}
              >
                {t.nav.joinWaitlist}
              </Link>
            </div>

          </div>,
          document.body
        )}
    </div>
  );
}
