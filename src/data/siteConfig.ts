export interface SiteContactConfig {
  address: string | null;
  cityRegion: string | null;
  openingHours: string[] | null;
  phone: string | null;
  email: string | null;
  reservationEmail: string | null;
  instagramHandle: string | null;
  instagramUrl: string | null;
  mapsUrl: string | null;
  facebookUrl: string | null;
}

/**
 * Centralized restaurant contact & location configuration.
 * Values remain null until verified and supplied by the restaurant owner.
 */
export const SITE_CONFIG: {
  brandName: string;
  tagline: string;
  copyrightYear: number;
  contact: SiteContactConfig;
} = {
  brandName: "SoulTerra",
  tagline: "Cafe & Rooftop Dining",
  copyrightYear: 2026,
  contact: {
    address: null,
    cityRegion: null,
    openingHours: null,
    phone: null,
    email: null,
    reservationEmail: null,
    instagramHandle: null,
    instagramUrl: null,
    mapsUrl: null,
    facebookUrl: null,
  },
};
