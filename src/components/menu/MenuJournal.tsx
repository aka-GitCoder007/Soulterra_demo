import { useEffect, useMemo, useState } from "react";
import { Download } from "lucide-react";
import { SectionContainer } from "@/components/ds";
import { MenuChapter, type SearchMatch } from "@/components/menu/MenuChapter";
import { MenuCompass } from "@/components/menu/MenuCompass";
import {
  MenuFilters,
  type DietaryFilterValue,
} from "@/components/menu/MenuFilters";
import { MenuIndex } from "@/components/menu/MenuIndex";
import {
  EditorialBrandPanel,
  MenuNavigation,
} from "@/components/menu/MenuNavigation";
import { MenuSearch } from "@/components/menu/MenuSearch";
import { MENU_CATEGORIES } from "@/data/menu";
import type { DietaryType } from "@/types";

function matchesDietary(
  itemDietary: DietaryType,
  filter: DietaryFilterValue
): boolean {
  if (filter === "all") return true;
  if (itemDietary === "both") return true;
  return itemDietary === filter;
}

export function MenuJournal() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [dietaryFilter, setDietaryFilter] = useState<DietaryFilterValue>("all");

  const activeCategory = MENU_CATEGORIES[activeIndex] ?? MENU_CATEGORIES[0]!;
  const normalizedQuery = searchQuery.trim().toLowerCase();
  const isSearching = normalizedQuery.length > 0;

  const activeItems = useMemo(() => {
    return activeCategory.items.filter((item) =>
      matchesDietary(item.dietary, dietaryFilter)
    );
  }, [activeCategory, dietaryFilter]);

  const searchMatches = useMemo<SearchMatch[]>(() => {
    if (!isSearching) return [];
    const results: SearchMatch[] = [];

    MENU_CATEGORIES.forEach((category, categoryIndex) => {
      category.items.forEach((item) => {
        if (!matchesDietary(item.dietary, dietaryFilter)) return;
        const haystack = [
          category.title,
          item.name,
          item.description ?? "",
          ...(item.subOptions?.map((s) => s.label) ?? []),
          ...(item.customizations?.flatMap((c) => [c.label, ...c.options]) ??
            []),
        ]
          .join(" ")
          .toLowerCase();

        if (haystack.includes(normalizedQuery)) {
          results.push({ category, categoryIndex, item });
        }
      });
    });

    return results;
  }, [isSearching, normalizedQuery, dietaryFilter]);

  const scrollToJournalTop = () => {
    const el = document.getElementById("menu");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleSelectChapter = (index: number) => {
    setActiveIndex(index);
    setSearchQuery("");
    scrollToJournalTop();
  };

  const handlePrev = () => {
    if (activeIndex > 0) {
      handleSelectChapter(activeIndex - 1);
    }
  };

  const handleNext = () => {
    if (activeIndex < MENU_CATEGORIES.length - 1) {
      handleSelectChapter(activeIndex + 1);
    }
  };

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === "INPUT" ||
          target.tagName === "TEXTAREA" ||
          target.isContentEditable)
      ) {
        return;
      }
      if (e.key === "ArrowLeft") {
        setActiveIndex((prev) => Math.max(0, prev - 1));
      } else if (e.key === "ArrowRight") {
        setActiveIndex((prev) =>
          Math.min(MENU_CATEGORIES.length - 1, prev + 1)
        );
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <SectionContainer
      id="menu"
      tone="terracotta"
      lightLeak="darkroom"
      spacing="md"
      className="scroll-mt-16"
    >
      {/* Mobile Header & Full-Screen Menu Compass */}
      <MenuCompass
        categories={MENU_CATEGORIES}
        activeIndex={activeIndex}
        onSelect={handleSelectChapter}
      />

      {/* Three-Column Desktop Editorial Journal */}
      <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-10 xl:gap-12">
        {/* Left Column: The Menu Index (Desktop Only) */}
        <MenuIndex
          categories={MENU_CATEGORIES}
          activeIndex={activeIndex}
          onSelect={handleSelectChapter}
        />

        {/* Centre Column: The Menu Page */}
        <div className="min-w-0 flex-1">
          {/* Editorial Search & Dietary Bar */}
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="w-full sm:max-w-xs">
              <MenuSearch
                value={searchQuery}
                onChange={setSearchQuery}
                resultCount={isSearching ? searchMatches.length : undefined}
              />
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4">
              <MenuFilters value={dietaryFilter} onChange={setDietaryFilter} />

              <a
                href="/menu/soulterra-menu.pdf"
                download="Soulterra-Menu.pdf"
                className="inline-flex items-center gap-1.5 border-b border-champagne/40 pb-1 text-[10px] font-medium uppercase tracking-[0.2em] text-champagne/85 transition-colors hover:border-champagne hover:text-cream"
              >
                <Download className="h-3 w-3" />
                <span>PDF</span>
              </a>
            </div>
          </div>

          <MenuChapter
            category={activeCategory}
            chapterIndex={activeIndex}
            items={activeItems}
            isSearching={isSearching}
            searchQuery={searchQuery}
            searchMatches={searchMatches}
            onJumpToChapter={handleSelectChapter}
            onResetFilters={() => {
              setSearchQuery("");
              setDietaryFilter("all");
            }}
          />

          {!isSearching ? (
            <MenuNavigation
              categories={MENU_CATEGORIES}
              activeIndex={activeIndex}
              onPrev={handlePrev}
              onNext={handleNext}
              onReturnToIndex={scrollToJournalTop}
            />
          ) : null}
        </div>

        {/* Right Column: Editorial Brand Panel (Desktop Only) */}
        <EditorialBrandPanel
          category={activeCategory}
          activeIndex={activeIndex}
          totalChapters={MENU_CATEGORIES.length}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      </div>
    </SectionContainer>
  );
}

