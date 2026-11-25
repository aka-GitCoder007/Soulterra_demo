import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

const EASE_CINEMA = [0.22, 1, 0.36, 1] as const;

export function IntroOverlay() {
  const prefersReducedMotion = useReducedMotion();
  const [visible, setVisible] = useState(() => !prefersReducedMotion);

  useEffect(() => {
    if (prefersReducedMotion) {
      setVisible(false);
      return;
    }

    const prevOverflow = document.body.style.overflow;
    if (visible) {
      document.body.style.overflow = "hidden";
    }

    const timer = window.setTimeout(() => {
      setVisible(false);
    }, 3500);

    return () => {
      window.clearTimeout(timer);
      document.body.style.overflow = prevOverflow;
    };
  }, [prefersReducedMotion, visible]);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label="SoulTerra Welcome Intro"
          initial={{ opacity: 1, scale: 1 }}
          exit={{
            opacity: 0,
            scale: 0.92,
            transition: { duration: 0.65, ease: EASE_CINEMA },
          }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden bg-[#120B08] px-6 text-cream"
        >
          {/* Ambient Warm Light-Leak & Non-Blocking Film Grain */}
          <motion.div
            aria-hidden="true"
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1.2 }}
            transition={{ duration: 2.6, ease: EASE_CINEMA }}
            className="pointer-events-none absolute h-[min(80vw,480px)] w-[min(80vw,480px)] rounded-full bg-[radial-gradient(circle,rgba(206,182,142,0.2)_0%,rgba(158,80,55,0.14)_45%,transparent_72%)] blur-2xl"
          />
          <div
            aria-hidden="true"
            className="st-film-grain absolute inset-0 z-0"
          />

          {/* Subtle Concentric Champagne Halo Ring */}
          <motion.div
            aria-hidden="true"
            initial={{ opacity: 0, scale: 0.82, rotate: -12 }}
            animate={{ opacity: 0.35, scale: 1, rotate: 0 }}
            transition={{ duration: 2.2, ease: EASE_CINEMA }}
            className="pointer-events-none absolute h-[clamp(240px,60vw,420px)] w-[clamp(240px,60vw,420px)] rounded-full border border-champagne/25"
          />

          {/* Skip Button */}
          <button
            type="button"
            onClick={() => setVisible(false)}
            className="absolute right-5 top-5 z-20 rounded-full border border-champagne/35 px-4 py-1.5 font-mono text-[10px] uppercase tracking-[0.22em] text-champagne/80 transition-colors hover:border-champagne hover:text-cream sm:right-8 sm:top-7"
          >
            Skip
          </button>

          {/* Centered Responsive Symbol + Text Choreography */}
          <motion.div
            exit={{
              scale: 0.82,
              opacity: 0,
              transition: { duration: 0.6, ease: EASE_CINEMA },
            }}
            className="relative z-10 flex flex-col items-center text-center"
          >
            <div className="relative w-[clamp(175px,44vw,300px)] overflow-hidden p-2">
              {/* Invisible layout spacer keeping exact 630:528 height */}
              <img
                src="/images/soulterra-logo-outline.png"
                alt=""
                aria-hidden="true"
                width={630}
                height={528}
                className="invisible h-auto w-full object-contain"
              />

              {/* Beat 1: The Monogram Symbol (upper 58%) */}
              <motion.img
                src="/images/soulterra-logo-outline.png"
                alt="SoulTerra Monogram Symbol"
                width={630}
                height={528}
                initial={{
                  opacity: 0,
                  scale: 0.86,
                  filter: "blur(6px)",
                  clipPath: "inset(0% 0% 42% 0%)",
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  filter: "blur(0px)",
                  clipPath: "inset(0% 0% 42% 0%)",
                }}
                transition={{ duration: 1.15, delay: 0.15, ease: EASE_CINEMA }}
                className="absolute inset-2 h-[calc(100%-1rem)] w-[calc(100%-1rem)] object-contain drop-shadow-[0_0_24px_rgba(206,182,142,0.25)]"
              />

              {/* Beat 2: The soulteRra Wordmark Text (lower 42%) */}
              <motion.img
                src="/images/soulterra-logo-outline.png"
                alt="SoulTerra Wordmark"
                width={630}
                height={528}
                initial={{
                  opacity: 0,
                  y: 14,
                  clipPath: "inset(58% 0% 0% 0%)",
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  clipPath: "inset(58% 0% 0% 0%)",
                }}
                transition={{ duration: 1.0, delay: 0.95, ease: EASE_CINEMA }}
                className="absolute inset-2 h-[calc(100%-1rem)] w-[calc(100%-1rem)] object-contain drop-shadow-[0_0_24px_rgba(206,182,142,0.22)]"
              />
            </div>

            {/* Expanding Champagne Hairline */}
            <motion.div
              aria-hidden="true"
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 0.85, delay: 1.65, ease: EASE_CINEMA }}
              className="mt-4 h-px w-[clamp(130px,30vw,240px)] origin-center bg-gradient-to-r from-transparent via-champagne/75 to-transparent"
            />

            {/* Editorial Subtitle & Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 1.95, ease: EASE_CINEMA }}
              className="mt-4 font-mono text-[10px] uppercase tracking-[0.32em] text-champagne sm:text-[11px]"
            >
              Cafe &amp; Rooftop Dining
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 2.35, ease: EASE_CINEMA }}
              className="mt-2 font-editorial text-sm italic tracking-wide text-cream/80 sm:text-base"
            >
              Where Every Moment Finds Its Ambience.
            </motion.p>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
