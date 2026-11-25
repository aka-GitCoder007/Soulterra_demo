import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";
import { Button } from "@/components/ds";

const EASE_FILM = [0.22, 1, 0.36, 1] as const;

export function HeroSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="hero"
      aria-label="SoulTerra Welcome"
      className="relative flex min-h-[100svh] w-full flex-col justify-between overflow-hidden bg-espresso-deep pt-[72px] pb-8 md:justify-end md:pt-20 md:pb-12 lg:h-[100svh] lg:min-h-[700px]"
    >
      {/* Mobile-Only: Exact-ratio vintage editorial frame (zero pillarbox bars, brand signage never cropped) */}
      <motion.div
        initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: prefersReducedMotion ? 0 : 1.0,
          ease: EASE_FILM,
        }}
        className="relative z-0 mx-auto flex w-full items-center justify-center px-6 pt-3 md:hidden"
      >
        {/* Soft warm amber glow behind the framed print */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-10 top-6 bottom-4 rounded-full bg-[#D4A574]/20 blur-2xl"
        />

        <div className="relative mx-auto w-fit rounded-xl border border-champagne/40 bg-gradient-to-b from-[#2A1C16] to-[#160E0B] p-2 shadow-[0_22px_48px_-12px_rgba(0,0,0,0.85)]">
          <div className="relative h-[44svh] min-h-[280px] max-h-[390px] aspect-[243/406] overflow-hidden rounded-lg">
            <img
              src="/images/spaces/corridor-perspective.jpeg"
              alt="SoulTerra amber-lit corridor featuring the illuminated SoulTerra brick wall signage"
              className="st-photo-film h-full w-full object-cover object-center"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "linear-gradient(to top, rgba(22, 14, 11, 0.55) 0%, transparent 25%)",
              }}
            />
            <div
              aria-hidden="true"
              className="st-film-grain absolute inset-0"
            />
          </div>

          <div className="mt-2 flex items-center justify-between px-1.5 pb-0.5 font-mono text-[9px] uppercase tracking-[0.22em] text-champagne/80">
            <span>SoulTerra</span>
            <span>35mm · Arrival</span>
          </div>
        </div>
      </motion.div>

      {/* Desktop-Only: Full-Bleed Architectural Entrance Photography (1360x907) */}
      <motion.div
        initial={
          prefersReducedMotion ? { opacity: 1 } : { opacity: 0, scale: 1.035 }
        }
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: prefersReducedMotion ? 0 : 1.35,
          ease: EASE_FILM,
        }}
        className="hidden md:block md:absolute md:inset-0 md:z-0"
      >
        <img
          src="/images/hero-main.webp"
          alt="Illuminated SoulTerra wordmark on warm brick above glowing vertical amber wooden slats"
          className="st-photo-film h-full w-full object-cover object-[50%_26%] lg:object-[50%_28%]"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-espresso-deep/75 via-espresso-deep/30 to-transparent"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(20, 12, 9, 0.97) 0%, rgba(24, 15, 11, 0.86) 34%, rgba(31, 20, 16, 0.42) 58%, rgba(31, 20, 16, 0.08) 80%, transparent 100%)",
          }}
        />

        <div
          aria-hidden="true"
          className="st-light-leak-darkroom absolute inset-0 opacity-75"
        />
        <div
          aria-hidden="true"
          className="st-film-grain absolute inset-0"
        />
      </motion.div>

      {/* Centered Editorial Foreground */}
      <div className="relative z-20 mx-auto w-full max-w-4xl px-[var(--st-space-container-x)] pt-5 text-center md:pt-0">
        <div className="flex flex-col items-center space-y-3.5 sm:space-y-5">
          {/* Eyebrow */}
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: prefersReducedMotion ? 0 : 0.7,
              delay: prefersReducedMotion ? 0 : 0.22,
              ease: EASE_FILM,
            }}
            className="flex items-center justify-center gap-3.5"
          >
            <span
              aria-hidden="true"
              className="h-px w-6 bg-champagne/65 sm:w-10"
            />
            <p className="type-eyebrow text-champagne">
              AN EXPERIENCE BEYOND THE ORDINARY
            </p>
            <span
              aria-hidden="true"
              className="h-px w-6 bg-champagne/65 sm:w-10"
            />
          </motion.div>

          {/* Headline in Playfair Display */}
          <motion.h1
            initial={prefersReducedMotion ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: prefersReducedMotion ? 0 : 0.85,
              delay: prefersReducedMotion ? 0 : 0.34,
              ease: EASE_FILM,
            }}
            className="type-hero text-[2.1rem] text-cream-light drop-shadow-[0_4px_24px_rgba(0,0,0,0.55)] sm:text-5xl lg:text-6xl"
          >
            A Taste of{" "}
            <span className="italic font-normal text-champagne">
              Something Extraordinary.
            </span>
          </motion.h1>

          {/* Supporting Copy */}
          <motion.p
            initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: prefersReducedMotion ? 0 : 0.75,
              delay: prefersReducedMotion ? 0 : 0.46,
              ease: EASE_FILM,
            }}
            className="max-w-xl text-sm leading-relaxed text-cream/85 sm:text-base"
          >
            Where flavours meet stories, and every moment becomes an experience
            worth remembering.
          </motion.p>

          {/* High-Contrast CTA Pair */}
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: prefersReducedMotion ? 0 : 0.75,
              delay: prefersReducedMotion ? 0 : 0.58,
              ease: EASE_FILM,
            }}
            className="flex w-full flex-col items-center justify-center gap-3 pt-1 sm:w-auto sm:flex-row sm:gap-5 sm:pt-2"
          >
            <Button
              href="#menu"
              variant="primary"
              size="lg"
              className="w-full shadow-[0_10px_30px_-6px_rgba(158,80,55,0.65)] sm:w-auto"
            >
              <span>EXPLORE OUR MENU</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Button>

            <a
              href="#our-story"
              className="inline-flex w-full items-center justify-center rounded-full border border-[#E5C99A]/60 bg-espresso-deep/75 px-8 py-3.5 text-xs font-medium uppercase tracking-[0.2em] text-[#E5C99A] backdrop-blur-sm transition-all duration-300 ease-[var(--st-ease-film)] hover:border-[#E5C99A] hover:bg-[#E5C99A] hover:text-black active:scale-[0.985] sm:w-auto"
            >
              <span>DISCOVER SOULTERRA</span>
            </a>
          </motion.div>

          {/* Subtle Scroll Indicator */}
          <motion.a
            href="#our-story"
            aria-label="Scroll to Discover SoulTerra"
            initial={prefersReducedMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: prefersReducedMotion ? 0 : 0.7,
              delay: prefersReducedMotion ? 0 : 0.85,
            }}
            className="inline-flex items-center gap-2 pt-1 font-mono text-[10px] uppercase tracking-[0.26em] text-champagne/75 transition-colors hover:text-cream"
          >
            <ArrowDown className="h-3 w-3" />
            <span>Scroll to explore</span>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
