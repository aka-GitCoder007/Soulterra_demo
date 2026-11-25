import { FilmFade, SectionContainer } from "@/components/ds";

const PHILOSOPHY_PILLARS = [
  {
    number: "I",
    title: "Honest Ingredients",
    copy: "Thoughtfully sourced produce, slow-simmered sauces, and spice blends balanced with restraint.",
  },
  {
    number: "II",
    title: "Architectural Warmth",
    copy: "Every texture — brick, timber slats, stone, and open sky — is tuned to invite unhurried conversation.",
  },
  {
    number: "III",
    title: "Hospitality With Soul",
    copy: "Attentive service without haste, turning casual afternoons and celebratory nights into lasting rituals.",
  },
] as const;

export function PhilosophySection() {
  return (
    <SectionContainer
      id="philosophy"
      tone="cream"
      lightLeak="warm"
      spacing="md"
    >
      <div className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-12">
        <FilmFade className="space-y-6 lg:col-span-6">
          <p className="type-eyebrow text-terracotta">04 · Our Philosophy</p>
          <h2 className="type-display text-4xl text-espresso sm:text-5xl lg:text-6xl">
            Crafted With Passion.{" "}
            <span className="block italic text-terracotta">
              Served With Soul.
            </span>
          </h2>
          <p className="max-w-lg text-base leading-relaxed text-espresso/80">
            We believe great dining is never rushed. It lives in the harmony
            between bold culinary craft, tactile spaces, and the warmth of
            sharing a table.
          </p>
        </FilmFade>

        <div className="space-y-4 lg:col-span-6">
          {PHILOSOPHY_PILLARS.map((item, idx) => (
            <FilmFade
              key={item.number}
              delay={idx * 0.08}
              className="flex items-start gap-5 rounded-[var(--st-radius-md)] border border-espresso/12 bg-cream p-5 shadow-[var(--st-shadow-sm)] sm:p-6"
            >
              <span className="font-editorial text-3xl italic text-terracotta">
                {item.number}
              </span>
              <div className="space-y-1">
                <h3 className="font-editorial text-xl font-medium text-espresso sm:text-2xl">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-espresso/75">
                  {item.copy}
                </p>
              </div>
            </FilmFade>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
