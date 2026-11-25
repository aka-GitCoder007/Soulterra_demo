export type AssetOrientation = "landscape" | "portrait" | "square";

export type AssetRole =
  | "hero-corridor"
  | "entrance-signage"
  | "interior"
  | "rooftop-day"
  | "rooftop-night"
  | "exterior"
  | "low-res-reference"
  | "logo"
  | "menu-pdf";

export interface SoulterraAsset {
  id: string;
  filename: string;
  sourcePath: string;
  width?: number;
  height?: number;
  orientation?: AssetOrientation;
  role: AssetRole;
  subject: string;
  placement: string;
  resolutionWarning?: string;
}

export type DietaryType = "veg" | "non-veg" | "both" | "unspecified";

export interface MenuSubOption {
  label: string;
  dietary: DietaryType;
  price: number;
  priceSuffix?: string;
}

export interface MenuCustomization {
  label: string;
  options: string[];
}

export interface MenuItem {
  id: string;
  name: string;
  description?: string;
  dietary: DietaryType;
  price?: number;
  priceDisplay?: string;
  priceNote?: string;
  subOptions?: MenuSubOption[];
  customizations?: MenuCustomization[];
  sourcePage: number;
  needsVerification?: boolean;
  verificationNote?: string;
}

export interface MenuCategory {
  id: string;
  title: string;
  subtitle?: string;
  group?: "food" | "festive" | "beverage";
  sourcePages: number[];
  items: MenuItem[];
}
