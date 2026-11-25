import type { MenuCategory } from "@/types";

interface MenuIndexProps {
  categories: MenuCategory[];
  activeIndex: number;
  onSelect: (index: number) => void;
}

export function formatChapterNumber(index: number): string {
  return String(index + 1).padStart(2, "0");
}

export function MenuIndex({
  categories,
  activeIndex,
  onSelect,
}: MenuIndexProps) {
  return (
    <aside
      aria-label="The Menu Index"
      className="hidden lg:sticky lg:top-24 lg:block lg:w-[252px] lg:shrink-0"
    >
      <div className="border-r border-champagne/25 pr-6">
        <div className="mb-5 border-b border-champagne/30 pb-4">
          <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-champagne">
            SOULTERRA
          </p>
          <p className="mt-1 font-editorial text-lg tracking-wide text-cream">
            THE MENU JOURNAL
          </p>
        </div>

        <nav aria-label="Menu Chapters" className="max-h-[calc(100vh-14rem)] overflow-y-auto pr-1">
          <ol className="divide-y divide-champagne/15">
            {categories.map((cat, idx) => {
              const active = idx === activeIndex;
              const num = formatChapterNumber(idx);

              return (
                <li key={cat.id}>
                  <button
                    type="button"
                    aria-current={active ? "page" : undefined}
                    onClick={() => onSelect(idx)}
                    className={`group flex w-full items-baseline gap-3 py-2.5 text-left transition-colors ${
                      active
                        ? "text-champagne"
                        : "text-cream-light/90 hover:text-champagne"
                    }`}
                  >
                    <span
                      className={`shrink-0 font-mono text-[11px] tracking-widest transition-colors ${
                        active
                          ? "font-semibold text-champagne"
                          : "text-champagne/80 group-hover:text-champagne"
                      }`}
                    >
                      {num}
                    </span>

                    <span className="flex-1 text-[11px] font-medium uppercase leading-snug tracking-[0.14em]">
                      {cat.title}
                    </span>

                    {active ? (
                      <span
                        aria-hidden="true"
                        className="h-1.5 w-1.5 shrink-0 rounded-full bg-champagne"
                      />
                    ) : null}
                  </button>
                </li>
              );
            })}
          </ol>
        </nav>
      </div>
    </aside>
  );
}

