interface PolaroidFrameProps {
  src: string;
  alt: string;
  caption: string;
  frameNumber?: string;
  aspect?: "portrait" | "landscape";
  className?: string;
}

export function PolaroidFrame({
  src,
  alt,
  caption,
  frameNumber,
  aspect = "portrait",
  className = "",
}: PolaroidFrameProps) {
  return (
    <figure
      className={[
        "group rounded-[var(--st-radius-xs)] border border-kodak-tan/35 bg-cream-light p-3 pb-5 shadow-[var(--st-shadow-polaroid)] transition-transform duration-500 ease-[var(--st-ease-film)] hover:-translate-y-1 sm:p-4 sm:pb-6",
        className,
      ].join(" ")}
    >
      <div
        className={[
          "st-vhs-hover relative w-full overflow-hidden bg-espresso-deep",
          aspect === "portrait" ? "aspect-[3/4]" : "aspect-[3/2]",
        ].join(" ")}
      >
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className="st-photo-film st-vhs-target h-full w-full object-cover"
        />
      </div>

      <figcaption className="mt-3.5 flex items-baseline justify-between gap-3 px-0.5">
        <span className="font-editorial text-lg italic leading-snug text-espresso">
          {caption}
        </span>
        {frameNumber ? (
          <span className="shrink-0 font-mono text-[10px] uppercase tracking-[0.18em] text-terracotta">
            {frameNumber}
          </span>
        ) : null}
      </figcaption>
    </figure>
  );
}

