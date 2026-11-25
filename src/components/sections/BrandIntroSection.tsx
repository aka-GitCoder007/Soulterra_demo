import {
  EditorialDivider,
  FilmFade,
  SectionContainer,
} from "@/components/ds";

const INTRO_PILLARS = [
  { label: "01", text: "Thoughtful Flavours" },
  { label: "02", text: "Sculptural Spaces" },
  { label: "03", text: "Unhurried Connection" },
] as const;

export function BrandIntroSection() {
  return (
    <SectionContainer
      id="our-story"
      tone="cream"
      lightLeak="warm"
      spacing="md"
      className="scroll-mt-16"
    >
      <div className="grid gap-10 lg:grid-cols-12 lg:items-start lg:gap-14">
        {/* Left Editorial Column */}
        <FilmFade className="space-y-5 lg:col-span-5">
          <p className="type-eyebrow text-terracotta">
            THE SOULTERRA EXPERIENCE
          </p>
          <h2 className="type-h2 text-4xl text-espresso sm:text-5xl">
            More Than a Meal.{" "}
            <span className="block italic text-terracotta">
              A Feeling That Stays.
            </span>
          </h2>
          <EditorialDivider variant="hairline" className="max-w-xs pt-2" />
          <p className="font-editorial text-xl italic leading-relaxed text-espresso/80">
            &ldquo;Designed for lingering conversations, warm ambient light, and
            plates meant to be remembered.&rdquo;
          </p>
        </FilmFade>

        {/* Right Narrative Column */}
        <FilmFade delay={0.12} className="space-y-6 lg:col-span-7 lg:pt-2">
          <p className="text-base leading-[1.8] text-espresso/85 sm:text-lg">
            At Soulterra, hospitality begins long before the first course
            arrives. From the glow of textured brick along the entrance to the
            open sky above our rooftop terrace, every corner is composed to slow
            down the pace of the city.
          </p>
          <p className="text-sm leading-[1.85] text-espresso/75 sm:text-base">
            Our kitchen brings together regional signatures, wood-fired warmth,
            pan-Asian craft, and an artisan beverage atelier — inviting friends,
            families, and quiet thinkers to gather over food that feels both
            grounded and unexpected.
          </p>

          <div className="grid grid-cols-1 gap-4 border-t border-espresso/12 pt-6 sm:grid-cols-3">
            {INTRO_PILLARS.map((pillar) => (
              <div key={pillar.label} className="space-y-1">
                <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-terracotta">
                  {pillar.label}
                </span>
                <p className="font-editorial text-lg font-medium text-espresso">
                  {pillar.text}
                </p>
              </div>
            ))}
          </div>
        </FilmFade>
      </div>
    </SectionContainer>
  );
}

