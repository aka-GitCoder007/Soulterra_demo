import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const EASE_FILM = [0.22, 1, 0.36, 1] as const;

export function ExperienceCtaSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      aria-label="Plan Your Visit"
      className="relative overflow-hidden bg-espresso-deep py-24 text-cream sm:py-32"
    >
      {/* Atmospheric Rooftop Night Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/spaces/rooftop-night.jpeg"
          alt="Soulterra evening rooftop lounge ambiance"
          loading="lazy"
          className="st-photo-film h-full w-full object-cover object-center opacity-50"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(31,20,16,0.88) 0%, rgba(52,34,28,0.72) 50%, rgba(22,14,11,0.96) 100%)",
          }}
        />
        <div
          aria-hidden="true"
          className="st-light-leak-darkroom absolute inset-0"
        />
        <div aria-hidden="true" className="st-film-grain absolute inset-0" />
      </div>

      {/* Centered Editorial Invitation */}
      <motion.div
        initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.85, ease: EASE_FILM }}
        className="relative z-10 mx-auto max-w-3xl px-[var(--st-space-container-x)] text-center"
      >
        <p className="type-eyebrow text-champagne">05 · Experience Soulterra</p>
        <h2 className="type-hero mt-4 text-4xl text-cream-light sm:text-6xl">
          Your Table Is <span className="italic text-champagne">Waiting.</span>
        </h2>
        <p className="mx-auto mt-5 max-w-lg text-sm leading-relaxed text-cream/80 sm:text-base">
          Whether it&apos;s an unhurried afternoon coffee beneath sculptural
          vaults or an evening under the rooftop canopy, Soulterra is ready to
          welcome you.
        </p>

        <div className="mt-8 flex justify-center">
          <a
            href="#reserve"
            className="group inline-flex items-center gap-3 rounded-full border border-champagne/60 bg-terracotta px-8 py-4 text-xs font-medium uppercase tracking-[0.22em] text-cream-light shadow-[var(--st-shadow-lg)] transition-all duration-300 hover:border-champagne hover:bg-champagne hover:text-black"
          >
            <span>PLAN YOUR VISIT</span>
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </motion.div>
    </section>
  );
}

