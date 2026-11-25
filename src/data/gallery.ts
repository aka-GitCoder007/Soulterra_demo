export type GalleryCategory =
  | "Interiors"
  | "Outdoor Dining"
  | "Architecture"
  | "Ambience"
  | "Brand Details";

export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  title: string;
  caption: string;
  category: GalleryCategory;
  plateNumber: string;
  size: "featured" | "supporting";
  aspect: "portrait" | "landscape";
  polaroid?: boolean;
  rotationClass?: string;
}

export const GALLERY_CATEGORIES: GalleryCategory[] = [
  "Interiors",
  "Outdoor Dining",
  "Architecture",
  "Ambience",
  "Brand Details",
];

/**
 * All remaining supplied restaurant photographs from Assets/
 * (excluding the hero photograph mamin hero scetion.webp and logo image.png).
 */
export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "interior-vaults",
    src: "/images/spaces/interior-dining.jpeg",
    alt: "SoulTerra indoor dining room with sculptural branching vaulted ceiling and curved floor inlay",
    title: "The Sculptural Vaults",
    caption: "Branching ceiling ribs and bas-relief walls above intimate bistro tables.",
    category: "Interiors",
    plateNumber: "PLATE 01",
    size: "featured",
    aspect: "portrait",
    polaroid: true,
    rotationClass: "md:-rotate-1",
  },
  {
    id: "entrance-reception",
    src: "/images/spaces/entrance-reception.jpeg",
    alt: "Illuminated SoulTerra restaurant entrance with backlit brick signage and amber vertical slats",
    title: "Warmth at Arrival",
    caption: "Backlit brickwork and amber-lit timber slats welcoming guests inside.",
    category: "Brand Details",
    plateNumber: "PLATE 02",
    size: "featured",
    aspect: "landscape",
    polaroid: false,
    rotationClass: "",
  },
  {
    id: "outdoor-terrace",
    src: "/images/spaces/rooftop-day.jpeg",
    alt: "SoulTerra open-air rooftop dining terrace with curved banquette, terrazzo tables, and monolith sign",
    title: "Daylight on the Terrace",
    caption: "Curved banquettes, terrazzo tabletops, and open sky beneath the pergola.",
    category: "Outdoor Dining",
    plateNumber: "PLATE 03",
    size: "featured",
    aspect: "portrait",
    polaroid: true,
    rotationClass: "md:rotate-1",
  },
  {
    id: "exterior-hands",
    src: "/images/spaces/exterior-facade.jpeg",
    alt: "Distinctive exterior white hand sculptures framing thatched overhang and arched glass conservatory doors",
    title: "Sculptural Arrival",
    caption: "Monumental hand sculptures framing the thatched overhang and glass doors.",
    category: "Architecture",
    plateNumber: "PLATE 04",
    size: "featured",
    aspect: "portrait",
    polaroid: true,
    rotationClass: "md:-rotate-[0.6deg]",
  },
  {
    id: "rooftop-night-lounge",
    src: "/images/spaces/rooftop-night.jpeg",
    alt: "Blue-lit evening rooftop dining area under geometric tree-canopy pergola",
    title: "After-Hours Canopy",
    caption: "Cobalt evening glow across the geometric canopy and rooftop bar.",
    category: "Ambience",
    plateNumber: "PLATE 05",
    size: "featured",
    aspect: "portrait",
    polaroid: false,
    rotationClass: "",
  },
  {
    id: "rooftop-doors-night",
    src: "/images/spaces/rooftop-doors.jpeg",
    alt: "Evening perspective looking toward SoulTerra double glass doors beneath illuminated canopy",
    title: "Through the Double Doors",
    caption: "Warm indoor glow meeting the cool night air of the terrace.",
    category: "Ambience",
    plateNumber: "PLATE 06",
    size: "supporting",
    aspect: "portrait",
    polaroid: true,
    rotationClass: "md:rotate-[1.2deg]",
  },
  {
    id: "corridor-perspective",
    src: "/images/spaces/corridor-perspective.jpeg",
    alt: "Corridor perspective showing angled backlit SoulTerra signage and amber slatted hallway",
    title: "The Amber Corridor",
    caption: "Angled perspective along the illuminated brick wall and slatted hallway.",
    category: "Brand Details",
    plateNumber: "PLATE 07",
    size: "supporting",
    aspect: "portrait",
    polaroid: true,
    rotationClass: "md:-rotate-[1.2deg]",
  },
];

