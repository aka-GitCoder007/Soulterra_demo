import { Search, X } from "lucide-react";

interface MenuSearchProps {
  value: string;
  onChange: (value: string) => void;
  resultCount?: number;
}

export function MenuSearch({ value, onChange, resultCount }: MenuSearchProps) {
  return (
    <div className="relative flex items-center border-b border-champagne/35 pb-2 transition-colors focus-within:border-champagne">
      <Search
        aria-hidden="true"
        className="mr-3 h-4 w-4 shrink-0 text-champagne/80"
      />
      <input
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search across all 20 chapters..."
        aria-label="Search menu dishes, descriptions, or options"
        className="w-full bg-transparent text-sm text-cream placeholder:text-cream/50 focus:outline-none"
      />
      {value ? (
        <div className="ml-2 flex shrink-0 items-center gap-2.5">
          {typeof resultCount === "number" ? (
            <span className="text-[10px] uppercase tracking-[0.18em] text-champagne/80">
              {resultCount} found
            </span>
          ) : null}
          <button
            type="button"
            onClick={() => onChange("")}
            aria-label="Clear menu search"
            className="rounded-full p-1 text-champagne/80 transition-colors hover:text-cream"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        </div>
      ) : null}
    </div>
  );
}

