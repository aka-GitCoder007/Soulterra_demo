import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV_SAMPLE_LINKS } from "@/data/designSystem";

interface NavigationBarProps {
  tone?: "espresso" | "cream";
}

export function NavigationBar({ tone = "espresso" }: NavigationBarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!drawerOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setDrawerOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [drawerOpen]);

  const isDark = tone === "espresso";

  return (
    <>
      <header className="sticky top-0 z-40 transition-colors duration-300">
        <div
          className={[
            "border-b transition-all duration-300",
            isDark
              ? scrolled
                ? "border-champagne/25 bg-espresso-deep/95 backdrop-blur-md shadow-[var(--st-shadow-md)]"
                : "border-champagne/15 bg-espresso/90 backdrop-blur-sm"
              : "border-espresso/10 bg-cream-light/92 backdrop-blur-md",
          ].join(" ")}
        >
          <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-[var(--st-space-container-x)]">
            {/* Brand Lockup (slot reserved for original SoulTerra logo asset) */}
            <a
              href="#top"
              className="flex items-center gap-3 rounded-sm py-1"
              aria-label="Soulterra Design System Top"
            >
              <span
                className={[
                  "font-editorial text-xl tracking-[0.12em]",
                  isDark ? "text-champagne" : "text-espresso",
                ].join(" ")}
              >
                soulteRra
              </span>
              <span
                className={[
                  "hidden rounded-full border px-2 py-0.5 font-mono text-[9px] uppercase tracking-widest sm:inline-block",
                  isDark
                    ? "border-champagne/30 text-champagne/80"
                    : "border-espresso/20 text-espresso/75",
                ].join(" ")}
              >
                Design System
              </span>
            </a>

            {/* Desktop Uppercase Navigation */}
            <nav aria-label="Design System Sections" className="hidden md:block">
              <ul className="flex items-center gap-6 lg:gap-8">
                {NAV_SAMPLE_LINKS.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className={[
                        "type-nav relative py-1 transition-colors duration-200",
                        isDark
                          ? "text-cream/85 hover:text-champagne"
                          : "text-espresso/80 hover:text-terracotta",
                      ].join(" ")}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Desktop Action + Mobile Drawer Button */}
            <div className="flex items-center gap-3">
              <a
                href="#components"
                className={[
                  "hidden rounded-full border px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.2em] transition-colors md:inline-flex",
                  isDark
                    ? "border-champagne/45 text-champagne hover:bg-champagne hover:text-espresso"
                    : "border-terracotta/50 text-terracotta hover:bg-terracotta hover:text-cream-light",
                ].join(" ")}
              >
                Specimen
              </a>

              <button
                type="button"
                onClick={() => setDrawerOpen(true)}
                aria-label="Open navigation menu"
                aria-expanded={drawerOpen}
                aria-controls="ds-mobile-drawer"
                className={[
                  "inline-flex h-9 w-9 items-center justify-center rounded-full border transition-colors md:hidden",
                  isDark
                    ? "border-champagne/35 text-cream hover:border-champagne"
                    : "border-espresso/25 text-espresso hover:border-terracotta",
                ].join(" ")}
              >
                <Menu className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {drawerOpen ? (
        <div
          id="ds-mobile-drawer"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
          className="fixed inset-0 z-50 flex flex-col justify-between bg-espresso-deep px-6 py-6 text-cream md:hidden"
        >
          <div className="flex items-center justify-between border-b border-champagne/20 pb-4">
            <span className="font-editorial text-2xl tracking-[0.1em] text-champagne">
              soulteRra
            </span>
            <button
              type="button"
              onClick={() => setDrawerOpen(false)}
              aria-label="Close navigation menu"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-champagne/35 text-cream hover:border-champagne"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <nav aria-label="Mobile Sections" className="my-auto">
            <ul className="space-y-3">
              {NAV_SAMPLE_LINKS.map((link, idx) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setDrawerOpen(false)}
                    className="flex items-center justify-between border-b border-champagne/10 py-3 font-editorial text-3xl text-cream transition-colors hover:text-champagne"
                  >
                    <span>{link.label}</span>
                    <span className="font-mono text-xs text-kodak-tan">
                      0{idx + 1}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-champagne/70">
            Vintage Analog Hospitality · Design System
          </p>
        </div>
      ) : null}
    </>
  );
}

