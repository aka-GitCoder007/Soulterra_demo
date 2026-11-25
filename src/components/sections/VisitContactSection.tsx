import {
  Clock,
  Instagram,
  Mail,
  MapPin,
  Navigation,
  Phone,
  Share2,
} from "lucide-react";
import { EditorialCard, FilmFade, SectionContainer } from "@/components/ds";
import { SITE_CONFIG } from "@/data/siteConfig";

export function VisitContactSection() {
  const { contact } = SITE_CONFIG;

  return (
    <SectionContainer
      id="contact"
      tone="espresso"
      lightLeak="darkroom"
      spacing="md"
      className="scroll-mt-16"
    >
      <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
        {/* SECTION 2 — VISIT US */}
        <FilmFade className="space-y-6 lg:col-span-7">
          <div className="space-y-2">
            <p className="type-eyebrow text-champagne">06 · Visit Us</p>
            <h2 className="type-h2 text-4xl text-cream sm:text-5xl">
              Find Your Way to{" "}
              <span className="italic text-champagne">SoulTerra</span>
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <EditorialCard tone="dark" className="space-y-2.5">
              <div className="flex items-center gap-2 text-champagne">
                <MapPin className="h-4 w-4" />
                <span className="text-[11px] font-medium uppercase tracking-[0.2em]">
                  Location
                </span>
              </div>
              {contact.address ? (
                <p className="text-sm leading-relaxed text-cream/90">
                  {contact.address}
                  {contact.cityRegion ? (
                    <span className="block text-cream/70">
                      {contact.cityRegion}
                    </span>
                  ) : null}
                </p>
              ) : (
                <p className="text-sm leading-relaxed text-cream/65">
                  Verified street address pending owner confirmation in{" "}
                  <code className="font-mono text-xs text-champagne/80">
                    siteConfig.ts
                  </code>
                  .
                </p>
              )}
            </EditorialCard>

            <EditorialCard tone="dark" className="space-y-2.5">
              <div className="flex items-center gap-2 text-champagne">
                <Clock className="h-4 w-4" />
                <span className="text-[11px] font-medium uppercase tracking-[0.2em]">
                  Opening Hours
                </span>
              </div>
              {contact.openingHours && contact.openingHours.length > 0 ? (
                <ul className="space-y-1 text-sm text-cream/90">
                  {contact.openingHours.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-sm leading-relaxed text-cream/65">
                  Opening hours pending verification from the restaurant team.
                </p>
              )}
            </EditorialCard>
          </div>

          {/* Configurable Map / Directions Block */}
          <div className="flex flex-col justify-between gap-4 rounded-[var(--st-radius-md)] border border-champagne/25 bg-espresso-deep/65 p-6 sm:flex-row sm:items-center">
            <div className="space-y-1">
              <p className="font-editorial text-xl text-cream">
                Directions &amp; Arrival
              </p>
              <p className="text-xs text-cream/70">
                {contact.mapsUrl
                  ? "Open SoulTerra directly in Google Maps."
                  : "Google Maps link will activate once the verified location URL is configured."}
              </p>
            </div>

            {contact.mapsUrl ? (
              <a
                href={contact.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex shrink-0 items-center gap-2 rounded-full border border-champagne/60 bg-terracotta px-5 py-2.5 text-xs font-medium uppercase tracking-[0.18em] text-cream-light transition-colors hover:bg-champagne hover:text-black"
              >
                <Navigation className="h-3.5 w-3.5" />
                <span>Get Directions</span>
              </a>
            ) : (
              <span className="inline-flex shrink-0 items-center gap-2 rounded-full border border-champagne/30 px-5 py-2.5 text-xs font-medium uppercase tracking-[0.18em] text-champagne/60">
                <Navigation className="h-3.5 w-3.5" />
                <span>Directions Pending</span>
              </span>
            )}
          </div>
        </FilmFade>

        {/* SECTION 3 — CONTACT */}
        <FilmFade delay={0.12} className="space-y-6 lg:col-span-5">
          <div className="space-y-2">
            <p className="type-eyebrow text-champagne">07 · Contact</p>
            <h2 className="type-h2 text-4xl text-cream sm:text-5xl">
              Connect With Us
            </h2>
          </div>

          <EditorialCard tone="dark" className="divide-y divide-champagne/15 p-0">
            <div className="flex items-center justify-between gap-4 p-5">
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-champagne" />
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-champagne/80">
                    Phone
                  </p>
                  {contact.phone ? (
                    <a
                      href={`tel:${contact.phone}`}
                      className="text-sm text-cream hover:text-champagne"
                    >
                      {contact.phone}
                    </a>
                  ) : (
                    <p className="text-sm text-cream/60">
                      Phone number pending confirmation
                    </p>
                  )}
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between gap-4 p-5">
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-champagne" />
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-champagne/80">
                    Email
                  </p>
                  {contact.email ? (
                    <a
                      href={`mailto:${contact.email}`}
                      className="text-sm text-cream hover:text-champagne"
                    >
                      {contact.email}
                    </a>
                  ) : (
                    <p className="text-sm text-cream/60">
                      Email address pending confirmation
                    </p>
                  )}
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between gap-4 p-5">
              <div className="flex items-center gap-3">
                <Instagram className="h-4 w-4 shrink-0 text-champagne" />
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-champagne/80">
                    Instagram
                  </p>
                  {contact.instagramUrl ? (
                    <a
                      href={contact.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-cream hover:text-champagne"
                    >
                      {contact.instagramHandle ?? "Follow on Instagram"}
                    </a>
                  ) : (
                    <p className="text-sm text-cream/60">
                      Instagram handle pending confirmation
                    </p>
                  )}
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between gap-4 p-5">
              <div className="flex items-center gap-3">
                <Share2 className="h-4 w-4 shrink-0 text-champagne" />
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-champagne/80">
                    Social Channels
                  </p>
                  {contact.facebookUrl ? (
                    <a
                      href={contact.facebookUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-cream hover:text-champagne"
                    >
                      Facebook
                    </a>
                  ) : (
                    <p className="text-sm text-cream/60">
                      Additional social links configurable in siteConfig
                    </p>
                  )}
                </div>
              </div>
            </div>
          </EditorialCard>
        </FilmFade>
      </div>
    </SectionContainer>
  );
}

