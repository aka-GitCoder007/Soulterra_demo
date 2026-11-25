import { useEffect } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { GalleryItem } from "@/data/gallery";

interface GalleryLightboxProps {
  items: GalleryItem[];
  activeIndex: number | null;
  onClose: () => void;
  onNavigate: (nextIndex: number) => void;
}

const EASE_FILM = [0.22, 1, 0.36, 1] as const;

export function GalleryLightbox({
  items,
  activeIndex,
  onClose,
  onNavigate,
}: GalleryLightboxProps) {
  const prefersReducedMotion = useReducedMotion();
  const isOpen = activeIndex !== null && items[activeIndex] !== undefined;
  const activeItem = activeIndex !== null ? items[activeIndex] : undefined;

  useEffect(() => {
    if (!isOpen || activeIndex === null) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowLeft" && items.length > 1) {
        onNavigate((activeIndex - 1 + items.length) % items.length);
      } else if (e.key === "ArrowRight" && items.length > 1) {
        onNavigate((activeIndex + 1) % items.length);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, activeIndex, items.length, onClose, onNavigate]);

  return (
    <AnimatePresence>
      {isOpen && activeItem && activeIndex !== null ? (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={`Expanded photograph: ${activeItem.title}`}
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.25 }}
          onClick={onClose}
          className="fixed inset-0 z-50 flex items-center justify-center bg-espresso-deep/95 p-4 backdrop-blur-md sm:p-8"
        >
          <motion.div
            initial={
              prefersReducedMotion ? false : { opacity: 0, scale: 0.97 }
            }
            animate={{ opacity: 1, scale: 1 }}
            exit={prefersReducedMotion ? undefined : { opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.3, ease: EASE_FILM }}
            onClick={(e) => e.stopPropagation()}
            className="relative flex max-h-[92vh] w-full max-w-5xl flex-col overflow-hidden rounded-[var(--st-radius-sm)] border border-champagne/30 bg-espresso text-cream shadow-[var(--st-shadow-lg)]"
          >
            {/* Top Bar */}
            <div className="flex items-center justify-between border-b border-champagne/20 px-5 py-3.5 sm:px-6">
              <div className="flex items-center gap-3">
                <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-champagne">
                  {activeItem.plateNumber}
                </span>
                <span className="text-champagne/40">·</span>
                <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-terracotta bg-cream-light px-2.5 py-0.5 rounded-full">
                  {activeItem.category}
                </span>
              </div>

              <button
                type="button"
                onClick={onClose}
                aria-label="Close lightbox"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-champagne/35 text-cream transition-colors hover:border-champagne hover:text-champagne"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Image Stage */}
            <div className="relative flex flex-1 items-center justify-center overflow-hidden bg-espresso-deep p-4 sm:p-6">
              <img
                src={activeItem.src}
                alt={activeItem.alt}
                className="max-h-[64vh] w-auto max-w-full rounded-[2px] object-contain shadow-[var(--st-shadow-md)]"
              />

              {items.length > 1 ? (
                <>
                  <button
                    type="button"
                    onClick={() =>
                      onNavigate((activeIndex - 1 + items.length) % items.length)
                    }
                    aria-label="Previous photograph"
                    className="absolute left-3 top-1/2 -translate-y-1/2 inline-flex h-10 w-10 items-center justify-center rounded-full border border-champagne/40 bg-espresso-deep/80 text-cream transition-colors hover:border-champagne hover:text-champagne sm:left-5"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      onNavigate((activeIndex + 1) % items.length)
                    }
                    aria-label="Next photograph"
                    className="absolute right-3 top-1/2 -translate-y-1/2 inline-flex h-10 w-10 items-center justify-center rounded-full border border-champagne/40 bg-espresso-deep/80 text-cream transition-colors hover:border-champagne hover:text-champagne sm:right-5"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </>
              ) : null}
            </div>

            {/* Caption Footer */}
            <div className="flex flex-col justify-between gap-2 border-t border-champagne/20 bg-espresso px-5 py-4 sm:flex-row sm:items-center sm:px-6">
              <div>
                <h3 className="font-editorial text-2xl text-cream">
                  {activeItem.title}
                </h3>
                <p className="text-xs leading-relaxed text-cream/75 sm:text-sm">
                  {activeItem.caption}
                </p>
              </div>
              <span className="shrink-0 font-mono text-[11px] uppercase tracking-[0.18em] text-champagne/80">
                {activeIndex + 1} / {items.length}
              </span>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

