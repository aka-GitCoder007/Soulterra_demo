import type { DietaryType } from "@/types";

export interface SignatureDish {
  id: string;
  name: string;
  description: string;
  price: number;
  dietary: DietaryType;
  category: string;
  sourcePage: number;
}

/**
 * Exact dish names, descriptions, dietary markers, and prices
 * transcribed directly from the supplied 18-page Soulterra menu PDF.
 */
export const SIGNATURE_DISHES: SignatureDish[] = [
  {
    id: "himalayan-zaatar-burrata",
    name: "Himalayan Zaatar Burrata En Kataifi",
    description: "Crisp Kataifi, Artisanal Burrata, Darjeeling Pepper Oil",
    price: 445,
    dietary: "veg",
    category: "Soulterra Signatures",
    sourcePage: 6,
  },
  {
    id: "ember-paneer-ke-sholay",
    name: "Ember Paneer Ke Sholay",
    description: "Charred Paneer, Siliguri Spice Glaze, Bamboo Shoot Relish",
    price: 485,
    dietary: "veg",
    category: "Soulterra Signatures",
    sourcePage: 6,
  },
  {
    id: "ting-ming-mushrooms",
    name: "Ting Ming Mushrooms",
    description: "Forest Mushrooms, Korean Reduction, Sesame, Himalayan Spice",
    price: 325,
    dietary: "veg",
    category: "Soulterra Signatures",
    sourcePage: 6,
  },
  {
    id: "teesta-tempura-chingri",
    name: "Teesta Tempura Chingri",
    description: "Golden Tempura Prawns With Himalayan Bold Kasundi Heat",
    price: 595,
    dietary: "non-veg",
    category: "Soulterra Signatures",
    sourcePage: 6,
  },
  {
    id: "butter-chicken-masala",
    name: "Butter Chicken Masala",
    description:
      "Smoked Clay Oven Spiced Chicken Tikka In A Rich Cashew And Buttery Tomato Gravy, Finished With Roasted Fenugreek Foam",
    price: 595,
    dietary: "non-veg",
    category: "Indian Mains",
    sourcePage: 11,
  },
  {
    id: "flourless-callebaut-torte",
    name: "Flourless Callebaut Chocolate Torte",
    description:
      "Rich Flourless Belgian Chocolate Torte Crafted With Premium Callebaut Couverture",
    price: 675,
    dietary: "non-veg",
    category: "Desserts",
    sourcePage: 15,
  },
];

