import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";

const CENTER_LINKS = [
  { label: "Home", href: "#hero" },
  { label: "Our Story", href: "#our-story" },
  { label: "Experience", href: "#experience" },
  { label: "Menu", href: "#menu" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
] as const;

export function Navbar() {
  const prefersReducedMotion = useReducedMotion();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 36);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [mobileOpen]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-40 transition-all duration-300">
        <div
          className={[
            "transition-all duration-500 ease-[var(--st-ease-film)]",
            scrolled
              ? "border-b border-champagne/25 bg-espresso-deep/92 shadow-[var(--st-shadow-md)] backdrop-blur-md"
              : "border-b border-champagne/10 bg-gradient-to-b from-espresso-deep/75 to-transparent",
          ].join(" ")}
        >
          <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-[var(--st-space-container-x)] lg:grid lg:grid-cols-[1fr_auto_1fr]">
            {/* Left: Original SoulTerra Logo */}
            <div className="flex items-center justify-start">
              <a
                href="#hero"
                aria-label="SoulTerra Home"
                className="inline-flex items-center rounded-sm py-1 focus-visible:outline-2 focus-visible:outline-champagne"
              >
                <img
                  src="/images/soulterra-logo-outline.png"
                  alt="SoulTerra"
                  width={630}
                  height={528}
                  className="h-12 w-auto object-contain sm:h-[52px]"
                />
              </a>
            </div>

            {/* Centre: Editorial Navigation Links */}
            <nav aria-label="Primary" className="hidden lg:block">
              <ul className="flex items-center gap-6 xl:gap-8">
                {CENTER_LINKS.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="type-nav relative whitespace-nowrap py-1.5 text-cream/90 transition-colors duration-200 hover:text-champagne"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Right: Reserve a Table + Mobile Toggle */}
            <div className="flex items-center justify-end gap-3">
              <a
                href="#reserve"
                className={[
                  "hidden rounded-full border px-5 py-2 text-[11px] font-medium uppercase tracking-[0.2em] whitespace-nowrap transition-all duration-300 lg:inline-flex",
                  scrolled
                    ? "border-champagne/55 bg-terracotta text-cream-light hover:bg-terracotta-deep"
                    : "border-champagne/45 bg-espresso-deep/50 text-champagne backdrop-blur-sm hover:border-champagne hover:bg-terracotta hover:text-cream-light",
                ].join(" ")}
              >
                Reserve a Table
              </a>

              <button
                type="button"
                onClick={() => setMobileOpen(true)}
                aria-label="Open navigation menu"
                aria-expanded={mobileOpen}
                aria-controls="soulterra-mobile-drawer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-champagne/35 bg-espresso-deep/60 text-cream backdrop-blur-sm transition-colors hover:border-champagne hover:text-champagne lg:hidden"
              >
                <Menu className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Animated Drawer */}
      <AnimatePresence>
        {mobileOpen ? (
          <motion.div
            id="soulterra-mobile-drawer"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation"
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, x: "100%" }}
            transition={{
              duration: prefersReducedMotion ? 0 : 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="fixed inset-0 z-50 flex flex-col justify-between bg-espresso-deep px-6 py-6 text-cream lg:hidden"
          >
            <div className="flex items-center justify-between border-b border-champagne/20 pb-4">
              <a
                href="#hero"
                onClick={() => setMobileOpen(false)}
                aria-label="SoulTerra Home"
              >
                <img
                  src="/images/soulterra-logo-outline.png"
                  alt="SoulTerra"
                  width={630}
                  height={528}
                  className="h-12 w-auto object-contain"
                />
              </a>

              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                aria-label="Close navigation menu"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-champagne/40 text-cream transition-colors hover:border-champagne hover:text-champagne"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <nav aria-label="Mobile" className="my-auto">
              <ul className="space-y-2">
                {CENTER_LINKS.map((link, index) => (
                  <motion.li
                    key={link.href}
                    initial={prefersReducedMotion ? false : { opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.3,
                      delay: prefersReducedMotion ? 0 : 0.06 + index * 0.04,
                    }}
                  >
                    <a
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center justify-between border-b border-champagne/10 py-3 font-editorial text-3xl text-cream transition-colors hover:text-champagne"
                    >
                      <span>{link.label}</span>
                      <span className="font-mono text-[11px] text-kodak-tan">
                        0{index + 1}
                      </span>
                    </a>
                  </motion.li>
                ))}
              </ul>
            </nav>

            <div className="space-y-4 border-t border-champagne/20 pt-5">
              <a
                href="#reserve"
                onClick={() => setMobileOpen(false)}
                className="flex w-full items-center justify-center rounded-full border border-champagne/45 bg-terracotta py-3.5 text-xs font-medium uppercase tracking-[0.22em] text-cream-light transition-colors hover:bg-terracotta-deep"
              >
                Reserve a Table
              </a>
              <p className="text-center font-mono text-[10px] uppercase tracking-[0.22em] text-champagne/65">
                SoulTerra · Cafe &amp; Rooftop Dining
              </p>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}

