interface FilmLoaderProps {
  label?: string;
  tone?: "light" | "dark";
}

export function FilmLoader({
  label = "Developing frame...",
  tone = "light",
}: FilmLoaderProps) {
  const isDark = tone === "dark";

  return (
    <div
      role="status"
      aria-live="polite"
      className="space-y-2.5"
    >
      <div
        className={[
          "st-film-shimmer h-2 w-full rounded-full",
          isDark ? "bg-champagne/15" : "bg-espresso/10",
        ].join(" ")}
      />
      <p
        className={[
          "font-mono text-[10px] uppercase tracking-[0.22em]",
          isDark ? "text-champagne/75" : "text-espresso/70",
        ].join(" ")}
      >
        {label}
      </p>
    </div>
  );
}

