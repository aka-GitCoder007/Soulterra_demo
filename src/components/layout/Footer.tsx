import { Instagram, Share2 } from "lucide-react";
import { EditorialDivider } from "@/components/ds";
import { SITE_CONFIG } from "@/data/siteConfig";

const FOOTER_LINKS = [
  { label: "Home", href: "#hero" },
  { label: "Our Story", href: "#our-story" },
  { label: "Experience", href: "#experience" },
  { label: "Menu", href: "#menu" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
] as const;

export function Footer() {
  const { contact } = SITE_CONFIG;

  return (
    <footer className="relative overflow-hidden border-t border-champagne/25 bg-espresso-deep pt-14 pb-10 text-cream">
      <div aria-hidden="true" className="st-film-grain absolute inset-0 z-0" />

      <div className="relative z-10 mx-auto max-w-7xl px-[var(--st-space-container-x)]">
        <div className="grid gap-10 md:grid-cols-12 md:items-start">
          {/* Brand Column */}
          <div className="space-y-4 md:col-span-5">
            <a href="#hero" aria-label="SoulTerra Top" className="inline-block">
              <img
                src="/images/soulterra-logo-outline.png"
                alt="SoulTerra"
                width={630}
                height={528}
                className="h-14 w-auto object-contain"
              />
            </a>
            <p className="max-w-sm text-sm leading-relaxed text-cream/75">
              Thoughtful flavours, sculptural indoor vaults, and open-air
              rooftop dining crafted for memorable gatherings.
            </p>
          </div>

          {/* Navigation Column */}
          <nav
            aria-label="Footer Navigation"
            className="space-y-3 md:col-span-4"
          >
            <p className="text-[10px] font-medium uppercase tracking-[0.26em] text-champagne">
              Explore
            </p>
            <ul className="grid grid-cols-2 gap-y-2.5 gap-x-4 text-xs uppercase tracking-[0.18em]">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-cream/80 transition-colors hover:text-champagne"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Reservation & Social Column */}
          <div className="space-y-4 md:col-span-3 md:text-right">
            <p className="text-[10px] font-medium uppercase tracking-[0.26em] text-champagne">
              Plan Your Visit
            </p>
            <div>
              <a
                href="#reserve"
                className="inline-flex items-center justify-center rounded-full border border-champagne/55 bg-terracotta px-6 py-2.5 text-[11px] font-medium uppercase tracking-[0.2em] text-cream-light transition-colors hover:bg-champagne hover:text-black"
              >
                Reserve a Table
              </a>
            </div>
            <div className="flex items-center gap-3 pt-1 md:justify-end">
              {contact.instagramUrl ? (
                <a
                  href={contact.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="SoulTerra Instagram"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-champagne/30 text-champagne transition-colors hover:border-champagne hover:bg-champagne hover:text-black"
                >
                  <Instagram className="h-4 w-4" />
                </a>
              ) : (
                <span
                  title="Instagram link configurable in siteConfig.ts"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-champagne/20 text-champagne/45"
                >
                  <Instagram className="h-4 w-4" />
                </span>
              )}
              {contact.facebookUrl ? (
                <a
                  href={contact.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="SoulTerra Social"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-champagne/30 text-champagne transition-colors hover:border-champagne hover:bg-champagne hover:text-black"
                >
                  <Share2 className="h-4 w-4" />
                </a>
              ) : null}
            </div>
          </div>
        </div>

        <EditorialDivider tone="dark" className="my-10" />

        <div className="flex flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-champagne/75">
            &copy; {SITE_CONFIG.copyrightYear} {SITE_CONFIG.brandName}. All
            rights reserved.
          </p>
          <p className="font-editorial text-sm italic text-champagne/80">
            Crafted With Passion · Served With Soul
          </p>
        </div>
      </div>
    </footer>
  );
}

