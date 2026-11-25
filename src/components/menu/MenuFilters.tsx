export type DietaryFilterValue = "all" | "veg" | "non-veg";

interface MenuFiltersProps {
  value: DietaryFilterValue;
  onChange: (value: DietaryFilterValue) => void;
}

const FILTER_OPTIONS: { id: DietaryFilterValue; label: string }[] = [
  { id: "all", label: "All" },
  { id: "veg", label: "Vegetarian" },
  { id: "non-veg", label: "Non-Veg" },
];

export function MenuFilters({ value, onChange }: MenuFiltersProps) {
  return (
    <div
      role="group"
      aria-label="Dietary Classification Filter"
      className="flex flex-wrap items-center gap-4"
    >
      {FILTER_OPTIONS.map((opt) => {
        const active = value === opt.id;
        return (
          <button
            key={opt.id}
            type="button"
            aria-pressed={active}
            onClick={() => onChange(opt.id)}
            className={`border-b pb-1 text-[11px] font-medium uppercase tracking-[0.2em] transition-colors ${
              active
                ? "border-champagne text-champagne"
                : "border-transparent text-cream/65 hover:text-cream"
            }`}
          >
            {opt.label}
          </button>
        );
      })}
    </div>
  );
}

