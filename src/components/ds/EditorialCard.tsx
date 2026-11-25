import type { ReactNode } from "react";

interface EditorialCardProps {
  children: ReactNode;
  tone?: "light" | "dark";
  accent?: "none" | "teal" | "rose";
  accentLabel?: string;
  className?: string;
}

export function EditorialCard({
  children,
  tone = "light",
  accent = "none",
  accentLabel,
  className = "",
}: EditorialCardProps) {
  const isLight = tone === "light";

  return (
    <article
      className={[
        "rounded-[var(--st-radius-md)] border p-6 transition-all duration-300 ease-[var(--st-ease-film)] sm:p-7",
        isLight
          ? "border-espresso/12 bg-cream-light text-espresso shadow-[var(--st-shadow-sm)] hover:border-kodak-tan/60 hover:shadow-[var(--st-shadow-md)]"
          : "border-champagne/25 bg-espresso-deep/85 text-cream shadow-[var(--st-shadow-md)] hover:border-champagne/50",
        className,
      ].join(" ")}
    >
      {accent !== "none" && accentLabel ? (
        <span
          className={[
            "mb-4 inline-flex items-center rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em]",
            accent === "teal"
              ? "bg-teal text-cream-light"
              : "bg-dusty-rose text-espresso",
          ].join(" ")}
        >
          {accentLabel}
        </span>
      ) : null}
      {children}
    </article>
  );
}

