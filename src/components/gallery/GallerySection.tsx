import { useMemo, useState } from "react";
import { Expand } from "lucide-react";
import { FilmFade, SectionContainer } from "@/components/ds";
import { GalleryLightbox } from "@/components/gallery/GalleryLightbox";
import {
  GALLERY_CATEGORIES,
  GALLERY_ITEMS,
  type GalleryCategory,
  type GalleryItem,
} from "@/data/gallery";

type FilterValue = "All" | GalleryCategory;

function getGridPlacement(item: GalleryItem, isAllView: boolean): string {
  if (!isAllView) {
    return item.aspect === "landscape"
      ? "md:col-span-7"
      : item.size === "supporting"
        ? "md:col-span-4"
        : "md:col-span-5";
  }

  switch (item.id) {
    case "interior-vaults":
      return "md:col-span-5";
    case "entrance-reception":
      return "md:col-span-7";
    case "outdoor-terrace":
      return "md:col-span-4 md:mt-6";
    case "exterior-hands":
      return "md:col-span-4";
    case "rooftop-night-lounge":
      return "md:col-span-4 md:mt-10";
    case "rooftop-doors-night":
      return "md:col-span-3 md:col-start-2";
    case "corridor-perspective":
      return "md:col-span-3 md:col-start-7 md:-mt-4";
    default:
      return "md:col-span-4";
  }
}

export function GallerySection() {
  const [activeCategory, setActiveCategory] = useState<FilterValue>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const visibleItems = useMemo(() => {
    if (activeCategory === "All") return GALLERY_ITEMS;
    return GALLERY_ITEMS.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  const isAllView = activeCategory === "All";

  return (
    <SectionContainer
      id="experience"
      tone="espresso"
      lightLeak="darkroom"
      spacing="md"
      className="scroll-mt-16"
    >
      {/* Exhibition Header */}
      <FilmFade className="flex flex-col justify-between gap-6 border-b border-champagne/20 pb-8 lg:flex-row lg:items-end">
        <div className="space-y-3">
          <p className="type-eyebrow text-champagne">
            02 · Ambience Exhibition
          </p>
          <h2 className="type-display text-4xl text-cream sm:text-5xl lg:text-6xl">
            Spaces &amp;{" "}
            <span className="italic text-champagne">Atmosphere</span>
          </h2>
        </div>

        <p className="max-w-md text-sm leading-relaxed text-cream/75">
          An editorial photographic study of SoulTerra — sculpted ceilings,
          open-air terraces, warm brickwork, and evening canopies. Click any
          plate to inspect in full frame.
        </p>
      </FilmFade>

      {/* Exhibition Category Navigation */}
      <div
        id="gallery"
        role="tablist"
        aria-label="Gallery Categories"
        className="mt-8 flex scroll-mt-24 flex-wrap items-center gap-x-6 gap-y-3"
      >
        {(["All", ...GALLERY_CATEGORIES] as const).map((cat) => {
          const active = activeCategory === cat;
          return (
            <button
              key={cat}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => setActiveCategory(cat)}
              className={`border-b pb-1.5 text-[11px] font-medium uppercase tracking-[0.2em] transition-colors ${
                active
                  ? "border-champagne text-champagne"
                  : "border-transparent text-cream/65 hover:text-cream"
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Asymmetric Masonry-Inspired Exhibition Grid */}
      <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-12 md:items-start">
        {visibleItems.map((item, idx) => {
          const placementClass = getGridPlacement(item, isAllView);
          const isPolaroid = Boolean(item.polaroid);

          return (
            <FilmFade
              key={item.id}
              delay={Math.min(idx * 0.05, 0.25)}
              className={placementClass}
            >
              <button
                type="button"
                onClick={() => setLightboxIndex(idx)}
                aria-label={`Open ${item.title} (${item.category}) in lightbox`}
                className={[
                  "group block w-full text-left transition-transform duration-500 ease-[var(--st-ease-film)] hover:rotate-0 focus-visible:outline-2 focus-visible:outline-champagne",
                  item.rotationClass ?? "",
                  isPolaroid
                    ? "rounded-[var(--st-radius-xs)] border border-kodak-tan/35 bg-cream-light p-3 pb-5 shadow-[var(--st-shadow-polaroid)] sm:p-4 sm:pb-6"
                    : "rounded-[var(--st-radius-xs)] border border-champagne/25 bg-espresso-deep/85 p-3 pb-4 shadow-[var(--st-shadow-md)] sm:p-4 sm:pb-5",
                ].join(" ")}
              >
                <div
                  className={[
                    "st-vhs-hover relative w-full overflow-hidden bg-espresso-deep",
                    item.aspect === "portrait"
                      ? "aspect-[3/4]"
                      : "aspect-[3/2]",
                  ].join(" ")}
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    loading="lazy"
                    className="st-photo-film st-vhs-target h-full w-full object-cover transition-transform duration-700 ease-[var(--st-ease-film)] group-hover:scale-[1.03]"
                  />

                  {/* Subtle expand indicator on hover */}
                  <span
                    aria-hidden="true"
                    className="absolute right-3 top-3 inline-flex h-8 w-8 items-center justify-center rounded-full border border-champagne/45 bg-espresso-deep/75 text-champagne opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100"
                  >
                    <Expand className="h-3.5 w-3.5" />
                  </span>
                </div>

                {/* Cream / Terracotta Editorial Captions */}
                <div className="mt-3.5 space-y-1 px-0.5">
                  <div className="flex items-center justify-between gap-2">
                    <span
                      className={`font-mono text-[10px] uppercase tracking-[0.2em] ${
                        isPolaroid ? "text-terracotta" : "text-champagne"
                      }`}
                    >
                      {item.plateNumber} · {item.category}
                    </span>
                  </div>
                  <p
                    className={`font-editorial text-xl leading-snug ${
                      isPolaroid ? "text-espresso" : "text-cream"
                    }`}
                  >
                    {item.title}
                  </p>
                  <p
                    className={`text-xs leading-relaxed ${
                      isPolaroid ? "text-espresso/75" : "text-cream/75"
                    }`}
                  >
                    {item.caption}
                  </p>
                </div>
              </button>
            </FilmFade>
          );
        })}
      </div>

      {/* Lightbox Modal */}
      <GalleryLightbox
        items={visibleItems}
        activeIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={(next) => setLightboxIndex(next)}
      />
    </SectionContainer>
  );
}

