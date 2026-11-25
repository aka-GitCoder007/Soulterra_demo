import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { MenuItem } from "@/components/menu/MenuItem";
import { formatChapterNumber } from "@/components/menu/MenuIndex";
import type { MenuCategory, MenuItem as MenuItemType } from "@/types";

export interface SearchMatch {
  category: MenuCategory;
  categoryIndex: number;
  item: MenuItemType;
}

interface MenuChapterProps {
  category: MenuCategory;
  chapterIndex: number;
  items: MenuItemType[];
  isSearching: boolean;
  searchQuery: string;
  searchMatches: SearchMatch[];
  onJumpToChapter: (index: number) => void;
  onResetFilters: () => void;
}

const EASE_JOURNAL = [0.22, 1, 0.36, 1] as const;

export function MenuChapter({
  category,
  chapterIndex,
  items,
  isSearching,
  searchQuery,
  searchMatches,
  onJumpToChapter,
  onResetFilters,
}: MenuChapterProps) {
  const prefersReducedMotion = useReducedMotion();
  const chapterNum = formatChapterNumber(chapterIndex);

  if (isSearching) {
    return (
      <div className="min-w-0">
        <div className="space-y-3 border-b border-champagne/30 pb-6">
          <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-champagne">
            SOULTERRA / SEARCH RESULTS
          </p>
          <h3 className="font-editorial text-3xl font-normal text-cream sm:text-4xl">
            &ldquo;{searchQuery}&rdquo;
          </h3>
          <p className="text-xs uppercase tracking-[0.18em] text-champagne/80">
            {searchMatches.length}{" "}
            {searchMatches.length === 1 ? "entry" : "entries"} across the menu
          </p>
        </div>

        {searchMatches.length === 0 ? (
          <div className="py-14 text-center">
            <p className="font-editorial text-2xl text-cream">
              No dishes matched your search.
            </p>
            <button
              type="button"
              onClick={onResetFilters}
              className="mt-4 border-b border-champagne/60 pb-1 text-xs uppercase tracking-[0.2em] text-champagne hover:text-cream"
            >
              Return to Chapter {chapterNum}
            </button>
          </div>
        ) : (
          <div>
            {searchMatches.map((match, idx) => (
              <MenuItem
                key={`${match.category.id}-${match.item.id}`}
                item={match.item}
                index={idx}
                categoryLabel={`Chapter ${formatChapterNumber(match.categoryIndex)} · ${match.category.title}`}
                onJumpToCategory={() => onJumpToChapter(match.categoryIndex)}
              />
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={category.id}
        initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={prefersReducedMotion ? undefined : { opacity: 0, y: -8 }}
        transition={{
          duration: prefersReducedMotion ? 0 : 0.34,
          ease: EASE_JOURNAL,
        }}
        className="min-w-0"
      >
        {/* Chapter Masthead */}
        <header className="space-y-4 border-b border-champagne/35 pb-7">
          <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-champagne/85">
            SOULTERRA / THE MENU
          </p>

          <div className="flex items-baseline gap-4 sm:gap-5">
            <span className="font-editorial text-4xl font-normal italic text-champagne sm:text-6xl">
              {chapterNum}
            </span>
            <div className="space-y-1">
              {category.subtitle ? (
                <p className="text-[10px] font-medium uppercase tracking-[0.24em] text-kodak-tan">
                  {category.subtitle}
                </p>
              ) : null}
              <h3 className="font-editorial text-3xl font-normal leading-tight text-cream sm:text-5xl">
                {category.title}
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-3 pt-1">
            <span aria-hidden="true" className="h-px w-12 bg-champagne/55" />
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-champagne/75">
              {items.length} {items.length === 1 ? "selection" : "selections"}
            </span>
          </div>
        </header>

        {/* Chapter Entries */}
        {items.length === 0 ? (
          <div className="py-12">
            <p className="font-editorial text-2xl text-cream/90">
              No items in this chapter match the selected dietary filter.
            </p>
            <p className="mt-2 text-xs text-cream/70">
              Beverage chapters without explicit PDF dietary symbols are hidden
              when filtering strictly by Veg or Non-Veg.
            </p>
            <button
              type="button"
              onClick={onResetFilters}
              className="mt-4 border-b border-champagne/60 pb-1 text-xs uppercase tracking-[0.2em] text-champagne hover:text-cream"
            >
              Show All Items
            </button>
          </div>
        ) : (
          <div>
            {items.map((item, idx) => (
              <MenuItem key={item.id} item={item} index={idx} />
            ))}
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  );
}

