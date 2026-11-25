interface EditorialDividerProps {
  variant?: "hairline" | "ornament";
  tone?: "light" | "dark";
  label?: string;
  className?: string;
}

export function EditorialDivider({
  variant = "ornament",
  tone = "light",
  label,
  className = "",
}: EditorialDividerProps) {
  const lineColor =
    tone === "dark" ? "bg-champagne/30" : "bg-espresso/15";
  const accentColor =
    tone === "dark" ? "text-champagne" : "text-terracotta";

  if (variant === "hairline") {
    return (
      <div
        role="separator"
        className={`h-px w-full ${lineColor} ${className}`}
      />
    );
  }

  return (
    <div
      role="separator"
      className={`flex items-center gap-4 ${className}`}
    >
      <span className={`h-px flex-1 ${lineColor}`} />
      {label ? (
        <span className={`type-eyebrow ${accentColor}`}>{label}</span>
      ) : (
        <span
          aria-hidden="true"
          className={`h-2 w-2 rotate-45 border ${
            tone === "dark" ? "border-champagne/60" : "border-terracotta/60"
          }`}
        />
      )}
      <span className={`h-px flex-1 ${lineColor}`} />
    </div>
  );
}

