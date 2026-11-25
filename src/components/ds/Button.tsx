import type { ButtonHTMLAttributes, ReactNode } from "react";

export type ButtonVariant = "primary" | "champagne" | "outline" | "ghost";
export type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
}

const VARIANT_CLASSES: Record<ButtonVariant, string> = {
  primary:
    "bg-terracotta text-cream-light border border-champagne/35 shadow-[var(--st-shadow-sm)] hover:bg-terracotta-deep hover:shadow-[var(--st-shadow-md)]",
  champagne:
    "bg-champagne text-espresso border border-espresso/15 shadow-[var(--st-shadow-sm)] hover:bg-kodak-tan",
  outline:
    "bg-transparent text-current border border-current/35 hover:border-current hover:bg-espresso/5",
  ghost:
    "bg-transparent text-current border-b border-champagne/60 rounded-none px-0 py-1 hover:border-current",
};

const SIZE_CLASSES: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-[11px]",
  md: "px-6 py-3 text-xs",
  lg: "px-8 py-3.5 text-xs",
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  className = "",
  type = "button",
  ...props
}: ButtonProps) {
  const isGhost = variant === "ghost";
  const baseClass = [
    "inline-flex items-center justify-center gap-2.5 font-medium uppercase tracking-[0.2em] transition-all duration-300 ease-[var(--st-ease-film)] active:scale-[0.985] disabled:pointer-events-none disabled:opacity-50",
    isGhost ? "" : "rounded-full",
    isGhost ? "text-xs" : SIZE_CLASSES[size],
    VARIANT_CLASSES[variant],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (href) {
    return (
      <a href={href} className={baseClass}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={baseClass} {...props}>
      {children}
    </button>
  );
}

