import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowDown, X } from "lucide-react";
import { formatChapterNumber } from "@/components/menu/MenuIndex";
import type { MenuCategory } from "@/types";

interface MenuCompassProps {
  categories: MenuCategory[];
  activeIndex: number;
  onSelect: (index: number) => void;
}

const EASE_JOURNAL = [0.22, 1, 0.36, 1] as const;

export function MenuCompass({
  categories,
  activeIndex,
  onSelect,
}: MenuCompassProps) {
  const prefersReducedMotion = useReducedMotion();
  const [open, setOpen] = useState(false);

  const current = categories[activeIndex];
  const currentNum = formatChapterNumber(activeIndex);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const handleChoose = (idx: number) => {
    onSelect(idx);
    setOpen(false);
  };

  return (
    <>
      {/* Mobile Header & Prominent Current Chapter Selector */}
      <div className="mb-8 space-y-5 lg:hidden">
        <div className="border-b border-champagne/25 pb-4">
          <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-champagne">
            SOULTERRA
          </p>
          <p className="mt-1 font-editorial text-2xl text-cream">
            THE MENU JOURNAL
          </p>
        </div>

        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-haspopup="dialog"
          aria-expanded={open}
          aria-controls="soulterra-menu-compass-overlay"
          className="flex w-full items-center justify-between gap-4 border border-champagne/40 bg-espresso-deep/20 px-5 py-4 text-left transition-colors hover:border-champagne"
        >
          <div className="min-w-0 space-y-1">
            <p className="text-[10px] font-medium uppercase tracking-[0.24em] text-champagne/85">
              CURRENT CHAPTER
            </p>
            <div className="flex items-baseline gap-3">
              <span className="font-editorial text-2xl italic text-champagne">
                {currentNum}
              </span>
              <span className="truncate font-editorial text-xl uppercase tracking-wide text-cream">
                {current?.title}
              </span>
            </div>
            <p className="inline-flex items-center gap-1.5 pt-1 text-[10px] font-medium uppercase tracking-[0.22em] text-kodak-tan">
              <span>BROWSE ALL CHAPTERS</span>
              <ArrowDown className="h-3 w-3" />
            </p>
          </div>
        </button>
      </div>

      {/* Full-Screen Terracotta Category Index Overlay */}
      <AnimatePresence>
        {open ? (
          <motion.div
            id="soulterra-menu-compass-overlay"
            role="dialog"
            aria-modal="true"
            aria-label="Menu Chapters Index"
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: prefersReducedMotion ? 0 : 0.28,
              ease: EASE_JOURNAL,
            }}
            className="fixed inset-0 z-50 flex flex-col bg-[#9E5037] text-cream lg:hidden"
          >
            {/* Top Bar */}
            <div className="flex items-center justify-between border-b border-champagne/30 px-6 py-5">
              <div>
                <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-champagne">
                  SOULTERRA
                </p>
                <p className="font-editorial text-xl text-cream">
                  THE MENU COMPASS
                </p>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close menu chapters index"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-champagne/45 text-champagne transition-colors hover:bg-champagne hover:text-espresso"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Scrollable Editorial Chapter List */}
            <nav
              aria-label="All Menu Chapters"
              className="flex-1 overflow-y-auto px-6 py-6"
            >
              <ol className="divide-y divide-champagne/25">
                {categories.map((cat, idx) => {
                  const active = idx === activeIndex;
                  const num = formatChapterNumber(idx);
                  return (
                    <li key={cat.id}>
                      <button
                        type="button"
                        onClick={() => handleChoose(idx)}
                        className={`flex w-full items-baseline gap-4 py-4 text-left transition-colors ${
                          active
                            ? "text-champagne"
                            : "text-cream/90 hover:text-champagne"
                        }`}
                      >
                        <span
                          className={`font-editorial text-3xl italic ${
                            active ? "text-champagne" : "text-champagne/75"
                          }`}
                        >
                          {num}
                        </span>
                        <span className="flex-1 font-editorial text-xl uppercase tracking-[0.06em]">
                          {cat.title}
                        </span>
                        {active ? (
                          <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-champagne">
                            Active
                          </span>
                        ) : null}
                      </button>
                    </li>
                  );
                })}
              </ol>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}

