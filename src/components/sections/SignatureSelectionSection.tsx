import { ArrowUpRight } from "lucide-react";
import {
  Button,
  EditorialDivider,
  FilmFade,
  SectionContainer,
} from "@/components/ds";
import { SIGNATURE_DISHES } from "@/data/signatures";

export function SignatureSelectionSection() {
  return (
    <SectionContainer
      id="signatures"
      tone="paper"
      lightLeak="warm"
      spacing="md"
      className="scroll-mt-16"
    >
      <FilmFade className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div className="space-y-3">
          <p className="type-eyebrow text-terracotta">
            03 · Signature Selection
          </p>
          <h2 className="type-h2 text-4xl text-espresso sm:text-5xl">
            From the Soulterra Kitchen
          </h2>
        </div>
        <p className="max-w-md text-sm leading-relaxed text-espresso/75">
          A curated preview from our 18-page menu — regional Himalayan accents,
          tandoor craft, and Belgian couverture patisserie.
        </p>
      </FilmFade>

      <EditorialDivider label="Curated Plates" className="my-10" />

      {/* Typographic Fine-Dining Menu Ledger (No fake dish stock photos) */}
      <div className="grid gap-x-12 gap-y-8 md:grid-cols-2">
        {SIGNATURE_DISHES.map((dish, index) => (
          <FilmFade
            key={dish.id}
            delay={index * 0.05}
            className="group border-b border-espresso/14 pb-6 transition-colors hover:border-terracotta/45"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-1.5">
                <div className="flex items-center gap-2.5">
                  <span
                    aria-label={
                      dish.dietary === "veg" ? "Vegetarian" : "Non-Vegetarian"
                    }
                    title={
                      dish.dietary === "veg" ? "Vegetarian" : "Non-Vegetarian"
                    }
                    className={`inline-flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-[2px] border ${
                      dish.dietary === "veg"
                        ? "border-teal"
                        : "border-terracotta"
                    }`}
                  >
                    <span
                      className={`h-1.5 w-1.5 rounded-full ${
                        dish.dietary === "veg" ? "bg-teal" : "bg-terracotta"
                      }`}
                    />
                  </span>

                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-terracotta/85">
                    {dish.category}
                  </span>
                </div>

                <h3 className="font-editorial text-2xl font-medium text-espresso transition-colors group-hover:text-terracotta">
                  {dish.name}
                </h3>
              </div>

              <span className="shrink-0 font-editorial text-2xl font-semibold text-espresso">
                ₹{dish.price}/-
              </span>
            </div>

            <p className="mt-2.5 text-sm leading-relaxed text-espresso/75">
              {dish.description}
            </p>
          </FilmFade>
        ))}
      </div>

      <FilmFade
        delay={0.2}
        className="mt-10 flex flex-col items-start justify-between gap-4 pt-2 sm:flex-row sm:items-center"
      >
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-espresso/65">
          Prices &amp; descriptions sourced directly from the Soulterra menu
        </p>
        <Button href="#menu" variant="primary">
          <span>Explore Full Menu</span>
          <ArrowUpRight className="h-3.5 w-3.5" />
        </Button>
      </FilmFade>
    </SectionContainer>
  );
}

