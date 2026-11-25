import { ArrowLeft, ArrowRight, ArrowUp } from "lucide-react";
import { formatChapterNumber } from "@/components/menu/MenuIndex";
import type { MenuCategory } from "@/types";

interface EditorialBrandPanelProps {
  category: MenuCategory;
  activeIndex: number;
  totalChapters: number;
  onPrev: () => void;
  onNext: () => void;
}

export function EditorialBrandPanel({
  category,
  activeIndex,
  totalChapters,
  onPrev,
  onNext,
}: EditorialBrandPanelProps) {
  const num = formatChapterNumber(activeIndex);
  const hasPrev = activeIndex > 0;
  const hasNext = activeIndex < totalChapters - 1;

  return (
    <aside
      aria-label="Editorial Chapter Panel"
      className="hidden lg:sticky lg:top-24 lg:flex lg:w-[210px] lg:shrink-0 lg:flex-col lg:items-center lg:border-l lg:border-champagne/25 lg:pl-6 lg:text-center"
    >
      <img
        src="/images/soulterra-logo-outline.png"
        alt="SoulTerra"
        width={630}
        height={528}
        className="h-12 w-auto object-contain opacity-90"
      />

      <div className="my-6 h-px w-12 bg-champagne/40" />

      <p className="text-[10px] font-medium uppercase tracking-[0.26em] text-champagne/80">
        CHAPTER {num}
      </p>
      <p className="mt-2 font-editorial text-xl leading-snug text-cream">
        {category.title}
      </p>

      <div className="my-6 flex items-center gap-2">
        <span className="h-px w-6 bg-champagne/35" />
        <span className="h-1.5 w-1.5 rotate-45 border border-champagne/60" />
        <span className="h-px w-6 bg-champagne/35" />
      </div>

      <p className="font-editorial text-sm italic text-cream/80">
        &ldquo;Crafted for the senses.&rdquo;
      </p>

      <div className="mt-8 flex w-full items-center justify-between border-t border-champagne/20 pt-5">
        <button
          type="button"
          onClick={onPrev}
          disabled={!hasPrev}
          aria-label="Previous chapter"
          className="inline-flex items-center gap-1.5 text-[10px] font-medium uppercase tracking-[0.18em] text-champagne transition-colors hover:text-cream disabled:opacity-30"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          <span>Prev</span>
        </button>

        <button
          type="button"
          onClick={onNext}
          disabled={!hasNext}
          aria-label="Next chapter"
          className="inline-flex items-center gap-1.5 text-[10px] font-medium uppercase tracking-[0.18em] text-champagne transition-colors hover:text-cream disabled:opacity-30"
        >
          <span>Next</span>
          <ArrowRight className="h-3.5 w-3.5" />
        </button>
      </div>
    </aside>
  );
}

interface MenuNavigationProps {
  categories: MenuCategory[];
  activeIndex: number;
  onPrev: () => void;
  onNext: () => void;
  onReturnToIndex: () => void;
}

export function MenuNavigation({
  categories,
  activeIndex,
  onPrev,
  onNext,
  onReturnToIndex,
}: MenuNavigationProps) {
  const prevCat = activeIndex > 0 ? categories[activeIndex - 1] : null;
  const nextCat =
    activeIndex < categories.length - 1 ? categories[activeIndex + 1] : null;

  return (
    <nav
      aria-label="Chapter Navigation"
      className="mt-12 space-y-6 border-t border-champagne/30 pt-8"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="button"
          onClick={onPrev}
          disabled={!prevCat}
          className="group flex items-center gap-3 text-left transition-colors disabled:pointer-events-none disabled:opacity-35"
        >
          <ArrowLeft className="h-4 w-4 shrink-0 text-champagne transition-transform group-hover:-translate-x-1" />
          <div>
            <span className="block text-[10px] uppercase tracking-[0.22em] text-champagne/75">
              Previous Chapter
            </span>
            <span className="font-editorial text-lg text-cream group-hover:text-champagne">
              {prevCat ? prevCat.title : "Start of Journal"}
            </span>
          </div>
        </button>

        <button
          type="button"
          onClick={onNext}
          disabled={!nextCat}
          className="group flex items-center justify-end gap-3 text-right transition-colors disabled:pointer-events-none disabled:opacity-35"
        >
          <div>
            <span className="block text-[10px] uppercase tracking-[0.22em] text-champagne/75">
              Next Chapter
            </span>
            <span className="font-editorial text-lg text-cream group-hover:text-champagne">
              {nextCat ? nextCat.title : "End of Journal"}
            </span>
          </div>
          <ArrowRight className="h-4 w-4 shrink-0 text-champagne transition-transform group-hover:translate-x-1" />
        </button>
      </div>

      <div className="flex items-center justify-between border-t border-champagne/15 pt-4">
        <button
          type="button"
          onClick={onReturnToIndex}
          className="inline-flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.2em] text-champagne/85 transition-colors hover:text-cream"
        >
          <ArrowUp className="h-3 w-3" />
          <span>Return to Menu Index</span>
        </button>

        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-champagne/65">
          {formatChapterNumber(activeIndex)} /{" "}
          {formatChapterNumber(categories.length - 1)}
        </span>
      </div>
    </nav>
  );
}

