import type { ReactNode } from "react";

export type SectionTone = "cream" | "paper" | "espresso" | "terracotta";
export type LightLeakVariant = "none" | "warm" | "darkroom";

interface SectionContainerProps {
  id?: string;
  children: ReactNode;
  tone?: SectionTone;
  lightLeak?: LightLeakVariant;
  filmGrain?: boolean;
  spacing?: "sm" | "md";
  className?: string;
}

const TONE_CLASSES: Record<SectionTone, string> = {
  cream: "bg-cream-light text-espresso",
  paper: "bg-cream text-espresso",
  espresso: "bg-espresso text-cream",
  terracotta: "bg-terracotta text-cream-light",
};

const SPACING_CLASSES = {
  sm: "py-[var(--st-space-section-sm)]",
  md: "py-[var(--st-space-section-md)]",
} as const;

export function SectionContainer({
  id,
  children,
  tone = "cream",
  lightLeak = "none",
  filmGrain = true,
  spacing = "md",
  className = "",
}: SectionContainerProps) {
  return (
    <section
      id={id}
      className={`relative overflow-hidden ${TONE_CLASSES[tone]} ${SPACING_CLASSES[spacing]} ${className}`}
    >
      {/* Decorative analog layers strictly behind interactive content (z-0) */}
      {lightLeak !== "none" ? (
        <div
          aria-hidden="true"
          className={`absolute inset-0 z-0 ${
            lightLeak === "darkroom"
              ? "st-light-leak-darkroom"
              : "st-light-leak-warm"
          }`}
        />
      ) : null}

      {filmGrain ? (
        <div
          aria-hidden="true"
          className="st-film-grain absolute inset-0 z-0"
        />
      ) : null}

      <div className="relative z-10 mx-auto w-full max-w-7xl px-[var(--st-space-container-x)]">
        {children}
      </div>
    </section>
  );
}

