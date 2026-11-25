import { MENU_PART_1 } from "@/data/menuPart1";
import { MENU_PART_2 } from "@/data/menuPart2";
import type { MenuCategory } from "@/types";

export const MENU_CATEGORIES: MenuCategory[] = [
  ...MENU_PART_1,
  ...MENU_PART_2,
];

export const TOTAL_MENU_ITEMS = MENU_CATEGORIES.reduce(
  (sum, cat) => sum + cat.items.length,
  0
);

