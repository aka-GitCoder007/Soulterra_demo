import { motion, useReducedMotion } from "framer-motion";
import type { DietaryType, MenuItem as MenuItemType } from "@/types";

function DietarySymbol({ type }: { type: "veg" | "non-veg" }) {
  const isVeg = type === "veg";
  return (
    <span
      role="img"
      aria-label={isVeg ? "Vegetarian" : "Non-Vegetarian"}
      title={isVeg ? "Vegetarian" : "Non-Vegetarian"}
      className={`inline-flex h-3 w-3 shrink-0 items-center justify-center rounded-[2px] border bg-cream/95 ${
        isVeg ? "border-[#2D6A4F]" : "border-[#9E5037]"
      }`}
    >
      <span
        className={`h-1.5 w-1.5 rounded-full ${
          isVeg ? "bg-[#2D6A4F]" : "bg-[#9E5037]"
        }`}
      />
    </span>
  );
}

function DietaryIndicator({ dietary }: { dietary: DietaryType }) {
  if (dietary === "unspecified") return null;
  if (dietary === "both") {
    return (
      <span className="inline-flex items-center gap-1" aria-label="Vegetarian or Non-Vegetarian options">
        <DietarySymbol type="veg" />
        <DietarySymbol type="non-veg" />
      </span>
    );
  }
  return <DietarySymbol type={dietary} />;
}

interface MenuItemProps {
  item: MenuItemType;
  index: number;
  categoryLabel?: string;
  onJumpToCategory?: () => void;
}

const EASE_JOURNAL = [0.22, 1, 0.36, 1] as const;

export function MenuItem({
  item,
  index,
  categoryLabel,
  onJumpToCategory,
}: MenuItemProps) {
  const prefersReducedMotion = useReducedMotion();
  const formattedPrice =
    item.priceDisplay ?? (item.price !== undefined ? `₹${item.price}/-` : null);

  return (
    <motion.article
      initial={prefersReducedMotion ? false : { opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: prefersReducedMotion ? 0 : 0.32,
        delay: prefersReducedMotion ? 0 : Math.min(index * 0.025, 0.25),
        ease: EASE_JOURNAL,
      }}
      className="group border-b border-champagne/20 py-5 transition-colors duration-200 hover:border-champagne/55"
    >
      {categoryLabel ? (
        <div className="mb-1.5 flex items-center justify-between gap-2">
          <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-champagne/80">
            {categoryLabel}
          </span>
          {onJumpToCategory ? (
            <button
              type="button"
              onClick={onJumpToCategory}
              className="text-[10px] font-medium uppercase tracking-[0.18em] text-champagne underline underline-offset-4 transition-colors hover:text-cream"
            >
              Open Chapter →
            </button>
          ) : null}
        </div>
      ) : null}

      <div className="flex items-baseline justify-between gap-5">
        <div className="min-w-0 space-y-1.5">
          <div className="flex flex-wrap items-center gap-2.5">
            <h4 className="font-editorial text-xl font-medium tracking-[0.01em] text-cream transition-colors group-hover:text-champagne sm:text-[1.4rem]">
              {item.name}
            </h4>
            <DietaryIndicator dietary={item.dietary} />
          </div>

          {item.description ? (
            <p className="max-w-xl text-[13.5px] leading-relaxed text-cream-light/95 sm:text-sm">
              {item.description}
            </p>
          ) : null}
        </div>

        {formattedPrice ? (
          <div className="shrink-0 text-right">
            <span
              aria-label={`Price ${formattedPrice}`}
              className="font-sans text-sm font-medium tracking-wider text-champagne sm:text-base"
            >
              {formattedPrice}
            </span>
          </div>
        ) : null}
      </div>

      {item.priceNote ? (
        <p className="mt-1.5 text-[11px] tracking-wide text-champagne">
          {item.priceNote}
        </p>
      ) : null}

      {/* Indented sub-list for multi-option items */}
      {item.subOptions && item.subOptions.length > 0 ? (
        <ul className="mt-3 space-y-1.5 border-l border-champagne/30 pl-4">
          {item.subOptions.map((opt) => (
            <li
              key={opt.label}
              className="flex items-baseline justify-between gap-4 text-[13px] text-cream/88 sm:text-sm"
            >
              <span className="flex items-center gap-2">
                <DietaryIndicator dietary={opt.dietary} />
                <span>{opt.label}</span>
              </span>
              <span className="shrink-0 font-sans text-sm font-medium text-champagne">
                ₹{opt.price}/-
              </span>
            </li>
          ))}
        </ul>
      ) : null}

      {/* Indented customisation options */}
      {item.customizations && item.customizations.length > 0 ? (
        <ul className="mt-3 space-y-1 border-l border-champagne/30 pl-4 text-xs text-cream/80">
          {item.customizations.map((cust) => (
            <li key={cust.label} className="leading-relaxed">
              <span className="font-medium uppercase tracking-[0.14em] text-champagne/90">
                {cust.label}:{" "}
              </span>
              <span>{cust.options.join(" · ")}</span>
            </li>
          ))}
        </ul>
      ) : null}
    </motion.article>
  );
}

