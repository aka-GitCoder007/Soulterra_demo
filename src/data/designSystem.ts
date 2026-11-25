export interface ColorTokenSpec {
  name: string;
  variable: string;
  hex: string;
  role: string;
  usage: "dominant" | "supporting" | "accent";
  textClass: string;
  bgStyle: string;
  borderClass?: string;
}

export const COLOR_TOKENS: ColorTokenSpec[] = [
  {
    name: "Primary Terracotta",
    variable: "--st-terracotta",
    hex: "#9E5037",
    role: "Primary brand warmth, key actions, editorial highlights",
    usage: "dominant",
    textClass: "text-[#FAF2E4]",
    bgStyle: "#9E5037",
  },
  {
    name: "Champagne Gold",
    variable: "--st-champagne",
    hex: "#E5C99A",
    role: "Logo-inspired metallic warmth, dividers, dark-surface headings",
    usage: "dominant",
    textClass: "text-[#34221C]",
    bgStyle: "#E5C99A",
  },
  {
    name: "Vintage Film Cream",
    variable: "--st-cream",
    hex: "#F5E6C8",
    role: "Archival paper surfaces, light canvas & Polaroid frames",
    usage: "supporting",
    textClass: "text-[#34221C]",
    bgStyle: "#F5E6C8",
    borderClass: "border border-[#34221C]/15",
  },
  {
    name: "Kodak Tan",
    variable: "--st-kodak-tan",
    hex: "#D4A574",
    role: "Warm light-leak highlights, subtle borders & metadata",
    usage: "supporting",
    textClass: "text-[#34221C]",
    bgStyle: "#D4A574",
  },
  {
    name: "Deep Espresso",
    variable: "--st-espresso",
    hex: "#34221C",
    role: "Primary editorial ink, darkroom sections & navigation",
    usage: "supporting",
    textClass: "text-[#F5E6C8]",
    bgStyle: "#34221C",
  },
  {
    name: "Faded Teal",
    variable: "--st-teal",
    hex: "#4A7B7C",
    role: "Occasional subtle accent (e.g., botanical/herb notes)",
    usage: "accent",
    textClass: "text-[#FAF2E4]",
    bgStyle: "#4A7B7C",
  },
  {
    name: "Dusty Rose",
    variable: "--st-dusty-rose",
    hex: "#E8B4B8",
    role: "Occasional subtle accent (e.g., seasonal / floral tags)",
    usage: "accent",
    textClass: "text-[#34221C]",
    bgStyle: "#E8B4B8",
  },
];

export const NAV_SAMPLE_LINKS = [
  { label: "Story", href: "#typography" },
  { label: "Spaces", href: "#media" },
  { label: "Tokens", href: "#colors" },
  { label: "Components", href: "#components" },
] as const;

