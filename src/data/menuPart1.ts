import type { MenuCategory } from "@/types";

export const MENU_PART_1: MenuCategory[] = [
  {
    id: "warm-bowl-soups",
    title: "Warm Bowl & Soups",
    group: "food",
    sourcePages: [1],
    items: [
      {
        id: "wild-mushroom-cappuccino",
        name: "Wild Mushroom Cappuccino",
        description: "Creamy Mushroom Velouté Finished With Airy Parmesan Froth",
        dietary: "veg",
        price: 465,
        sourcePage: 1,
      },
      {
        id: "almond-kissed-broccoli-soup",
        name: "Almond-Kissed Broccoli Soup",
        description: "Smooth Broccoli Soup Infused With Rich Roasted Almonds",
        dietary: "veg",
        price: 485,
        sourcePage: 1,
      },
      {
        id: "roasted-tomato-basil-soup",
        name: "Roasted Tomato Basil Soup",
        description:
          "Slow-Roasted Plum Tomatoes Blended Smooth With Fresh Basil And Extra Virgin Olive Oil",
        dietary: "veg",
        price: 385,
        sourcePage: 1,
      },
      {
        id: "tomato-dhaniya-shorba",
        name: "Tomato Dhaniya Shorba",
        description:
          "Classic Indian Tomato Shorba, Bright With Tangy Notes And Fresh Coriander",
        dietary: "veg",
        price: 295,
        sourcePage: 1,
      },
      {
        id: "selection-of-manchow",
        name: "Selection Of Manchow To Your Preference",
        description:
          "Manchow Soup Served With Crispy Noodles And Your Choice Of Vegetables, Chicken, Or Prawns",
        dietary: "both",
        subOptions: [
          { label: "Vegetable", dietary: "veg", price: 375 },
          { label: "Chicken", dietary: "non-veg", price: 395 },
          { label: "Prawns", dietary: "non-veg", price: 425 },
        ],
        sourcePage: 1,
      },
      {
        id: "selection-of-hot-and-sour",
        name: "Selection Of Hot & Sour To Your Preference",
        description:
          "Bold Hot & Sour Broth With Your Choice Of Vegetables, Chicken, Or Prawns",
        dietary: "both",
        subOptions: [
          { label: "Vegetable", dietary: "veg", price: 375 },
          { label: "Chicken", dietary: "non-veg", price: 395 },
          { label: "Prawns", dietary: "non-veg", price: 425 },
        ],
        sourcePage: 1,
      },
    ],
  },
  {
    id: "salads-healthy-bites",
    title: "Salads & Healthy Bites",
    group: "food",
    sourcePages: [2],
    items: [
      {
        id: "verde-fava-tacos",
        name: "Verde Fava Tacos",
        description:
          "Herbed Fava Beans, Avocado Crema, And Lime In Warm Tortilla",
        dietary: "veg",
        price: 375,
        sourcePage: 2,
      },
      {
        id: "burrito-warm-bowl",
        name: "Burrito Warm Bowl",
        description:
          "Seasoned Corn, Beans, Sprouts, And Grilled Vegetables Topped With Tangy Poblano Dressing",
        dietary: "veg",
        price: 415,
        sourcePage: 2,
      },
      {
        id: "pocket-quinoa-falafel",
        name: "Pocket Quinoa Falafel",
        description:
          "Crispy Quinoa Falafel Stuffed In Warm Pita With Fresh Salad And Garlic Aioli Sauce",
        dietary: "veg",
        price: 425,
        sourcePage: 2,
      },
      {
        id: "chefs-artistry-cheese-boards",
        name: "Chef's Artistry Cheese Boards",
        description:
          "Brie, Cheddar, And Smoked Cheese Served With Dry Nuts And Blueberry Compote",
        dietary: "veg",
        price: 525,
        sourcePage: 2,
      },
      {
        id: "garden-harvest-salad",
        name: "Garden Harvest Salad",
        description:
          "A Assortment Of Garden Green, Lettuce, Cucumber, Tomato, Carrot, Slice Of Onion, Lemon, Chili, Served With House Vinaigrette",
        dietary: "veg",
        price: 345,
        sourcePage: 2,
      },
      {
        id: "citrus-beetroot-quinoa-salad",
        name: "Citrus & Beetroot Quinoa Salad",
        description:
          "Nutty Quinoa With Roasted Beetroot, Mesclun And Orange Segment, Tossed With Lavender Dressing",
        dietary: "veg",
        price: 475,
        sourcePage: 2,
      },
      {
        id: "classic-caeser-salad",
        name: "Classic Caeser Salad",
        description:
          "SELECTION OF CAESAR CURATED TO YOUR PREFERENCE — Crisp Leaves And Velvety Dressing, Elevated With Your Choice Of Expertly Grilled Vegetables, Succulent Chicken, Or Delicate Prawns, Served With Garlic Croutons And Parmesan Shaving",
        dietary: "both",
        subOptions: [
          { label: "Exotic Grilled Vegetables", dietary: "veg", price: 415 },
          { label: "Grilled Chicken", dietary: "non-veg", price: 425 },
          { label: "Grilled Prawns", dietary: "non-veg", price: 595 },
        ],
        sourcePage: 2,
      },
    ],
  },
  {
    id: "italian-pizza",
    title: "Italian Pizza",
    subtitle: "Italian",
    group: "food",
    sourcePages: [3],
    items: [
      {
        id: "avocado-sun-blushed-tomato-tartlet",
        name: "Avocado & Sun-Blushed Tomato Tartlet",
        description: "Avocado Mousse, Roasted Tomatoes, Mustard Oil Pearls",
        dietary: "veg",
        price: 495,
        sourcePage: 3,
      },
      {
        id: "caprese-bruschetta",
        name: "Caprese Alla Bocconcini & Roma Tomato Bruschetta",
        description:
          "Toasted Multigrain Bread Topped With Bocconcini, Glazed Roma Tomatoes, Fresh Basil, And Drizzle Balsamic Reduction",
        dietary: "veg",
        price: 445,
        sourcePage: 3,
      },
      {
        id: "creamy-mushroom-bruschetta",
        name: "Creamy Mushroom Bruschetta",
        description:
          "Toasted Melba Topped With Creamy Garlic Mushrooms And Finish With Fine Grana Padano Crumble And Mesclun",
        dietary: "veg",
        price: 445,
        sourcePage: 3,
      },
      {
        id: "classic-margherita",
        name: "Classic Margherita",
        description:
          "San - Marzano Tomato Sauce, Whole Milk Grand Mozzarella, Topped With Sliced Plum Tomato, Basil Leaves",
        dietary: "veg",
        price: 465,
        sourcePage: 3,
      },
      {
        id: "quattro-formaggi-pizza",
        name: "Quattro Formaggi Pizza",
        description:
          "San - Marzano Tomato Sauce Layered With Mozzarella, Cheddar, Pesto Marinated Bocconcini, And Gorgonzola",
        dietary: "veg",
        price: 615,
        sourcePage: 3,
      },
      {
        id: "verdure-di-napoletana",
        name: "Verdure Di Napoletana (Exotic Veg)",
        description:
          "Napoletana Pizza Topped With Grilled Zucchini, Bell Peppers, Eggplant And Mozzarella, Gorgonzola",
        dietary: "veg",
        price: 495,
        sourcePage: 3,
      },
      {
        id: "funghi-e-formaggio",
        name: "Funghi E Formaggio",
        description:
          "Roasted Mushrooms, Mozzarella, Parmesan And Fresh Basil",
        dietary: "veg",
        price: 545,
        sourcePage: 3,
      },
      {
        id: "pizza-diavola",
        name: "Pizza Diavola",
        description:
          "San - Marzano Tomato Sauce Topped With Kalamata Olives, Caramelized Onion, And Chicken Pepperoni, Basil Leaves",
        dietary: "non-veg",
        price: 645,
        sourcePage: 3,
      },
      {
        id: "ocean-delight-pizza",
        name: "Ocean Delight Pizza",
        description:
          "Thin-crust Pizza Topped With Prawns, Calamari, And Fresh Herbs",
        dietary: "non-veg",
        price: 655,
        sourcePage: 3,
      },
    ],
  },
  {
    id: "wraps-burgers",
    title: "Wraps & Burgers",
    group: "food",
    sourcePages: [4],
    items: [
      {
        id: "awadhi-paneer-roll",
        name: "Awadhi Paneer Roll",
        description:
          "Tandoor Paneer Chunks With Onion And Chili, Wrapped In Soft Flatbread",
        dietary: "veg",
        price: 425,
        sourcePage: 4,
      },
      {
        id: "veggie-caesar-roll",
        name: "Veggie Caesar Roll",
        description:
          "Crisp Lettuce, Grilled Vegetables, And Classic Caesar Sauce In A Warm Wrap",
        dietary: "veg",
        price: 445,
        sourcePage: 4,
      },
      {
        id: "exotic-vegetable-burger",
        name: "Exotic Vegetable Burger",
        description:
          "A House-Made Patty, And Sesame Bun, Layered With Thin-slice Vegetable, Lettuce, With Cheddar Melt",
        dietary: "veg",
        price: 395,
        sourcePage: 4,
      },
      {
        id: "pesto-charred-vegetable-panini",
        name: "Pesto Charred Vegetable Panini",
        description:
          "Pesto Marinated, Charred Grilled Vegetable, With Cheese Melt",
        dietary: "veg",
        price: 385,
        sourcePage: 4,
      },
      {
        id: "khao-gali-chicken-wrap",
        name: "Khao Gali Chicken Wrap",
        description:
          "Bombay-Style Chicken Tikka With Onion, Trio Capsicum, Chili, And Mint Mayo Rolled In Soft Rumali Roti",
        dietary: "non-veg",
        price: 455,
        sourcePage: 4,
      },
      {
        id: "mediterranean-chicken-wrapster",
        name: "Mediterranean Chicken Wrapster",
        description:
          "Herb Chicken With Bell Peppers And Guacamole, Served With Classic Italian Marinara",
        dietary: "non-veg",
        price: 425,
        sourcePage: 4,
      },
      {
        id: "crumbed-chicken-supreme-burger",
        name: "Crumbed Chicken Supreme Burger",
        description:
          "Golden Crumb-Fried Chicken Fillet Layered With Fresh Greens And Signature Sauce In A Soft Toasted Bun",
        dietary: "non-veg",
        price: 575,
        sourcePage: 4,
      },
      {
        id: "island-fire-jerk-chicken-panini",
        name: "Island Fire Jerk Chicken Panini",
        description:
          "Smoky Jerk-Marinated Chicken With Melted Cheese, Panini With Caribbean Kick",
        dietary: "non-veg",
        price: 575,
        sourcePage: 4,
      },
    ],
  },
  {
    id: "italian-pasta",
    title: "Italian Pasta",
    subtitle: "Italian",
    group: "food",
    sourcePages: [5],
    items: [
      {
        id: "arrabbiata-sauce",
        name: "Arrabbiata Sauce",
        dietary: "both",
        priceDisplay: "515 | 545 | 585/-",
        priceNote: "Prices correspond to Vegetable | Chicken | Prawns",
        customizations: [
          {
            label: "Choice Of Pasta",
            options: ["Penne", "Spaghetti", "Fusilli", "Linguini"],
          },
          {
            label: "Choice Of",
            options: ["Vegetable", "Chicken", "Prawns"],
          },
        ],
        sourcePage: 5,
      },
      {
        id: "alfredo-sauce",
        name: "Alfredo Sauce",
        dietary: "both",
        priceDisplay: "515 | 545 | 585/-",
        priceNote: "Prices correspond to Vegetable | Chicken | Prawns",
        customizations: [
          {
            label: "Choice Of Pasta",
            options: ["Penne", "Spaghetti", "Fusilli", "Linguini"],
          },
          {
            label: "Choice Of",
            options: ["Vegetable", "Chicken", "Prawns"],
          },
        ],
        sourcePage: 5,
      },
      {
        id: "pesto-sauce",
        name: "Pesto Sauce",
        dietary: "both",
        priceDisplay: "515 | 545 | 585/-",
        priceNote: "Prices correspond to Vegetable | Chicken | Prawns",
        customizations: [
          {
            label: "Choice Of Pasta",
            options: ["Penne", "Spaghetti", "Fusilli", "Linguini"],
          },
          {
            label: "Choice Of",
            options: ["Vegetable", "Chicken", "Prawns"],
          },
        ],
        sourcePage: 5,
      },
      {
        id: "pasta-aglio-e-olio",
        name: "Pasta Aglio E Olio",
        dietary: "both",
        priceDisplay: "515 | 545 | 585/-",
        priceNote: "Prices correspond to Vegetable | Chicken | Prawns",
        customizations: [
          {
            label: "Choice Of Pasta",
            options: ["Penne", "Spaghetti", "Linguini"],
          },
          {
            label: "Choice Of",
            options: ["Vegetable", "Chicken", "Prawns"],
          },
        ],
        sourcePage: 5,
      },
      {
        id: "sun-dried-tomato-ravioli",
        name: "Sun-Dried Tomato And Olive Cheesy Ravioli",
        description:
          "Handcrafted Ravioli Filled With Sun-dried Tomato And Kalamata In Sage Butter",
        dietary: "veg",
        price: 575,
        sourcePage: 5,
      },
      {
        id: "wild-mushroom-truffle-risotto",
        name: "Wild Mushroom & Truffle Risotto",
        description: "Creamy Arborio Rice Infused With Truffle Essence",
        dietary: "veg",
        price: 585,
        sourcePage: 5,
      },
      {
        id: "spinach-ricotta-cannelloni",
        name: "Spinach & Ricotta Cannelloni",
        description:
          "Baked Pasta Tubes In Rich Tomato Basil Cheesy Sauce",
        dietary: "veg",
        price: 625,
        sourcePage: 5,
      },
    ],
  },
  {
    id: "soulterra-signatures",
    title: "SoulTerra Signatures",
    group: "food",
    sourcePages: [6],
    items: [
      {
        id: "himalayan-zaatar-burrata-kataifi",
        name: "Himalayan Zaatar Burrata En Kataifi",
        description: "Crisp Kataifi, Artisanal Burrata, Darjeeling Pepper Oil",
        dietary: "veg",
        price: 445,
        sourcePage: 6,
      },
      {
        id: "ember-paneer-ke-sholay",
        name: "Ember Paneer Ke Sholay",
        description:
          "Charred Paneer, Siliguri Spice Glaze, Bamboo Shoot Relish",
        dietary: "veg",
        price: 485,
        sourcePage: 6,
      },
      {
        id: "ting-ming-mushrooms",
        name: "Ting Ming Mushrooms",
        description:
          "Forest Mushrooms, Korean Reduction, Sesame, Himalayan Spice",
        dietary: "veg",
        price: 325,
        sourcePage: 6,
      },
      {
        id: "tangra-paneer-shashlik",
        name: "Tangra Paneer Shashlik",
        description: "Flame-Grilled Paneer, Hill Chili Gastrique",
        dietary: "veg",
        price: 495,
        sourcePage: 6,
      },
      {
        id: "dragon-vegetable-roll",
        name: "Dragon Vegetable Roll",
        description: "Crisp Roulade, Refined Schezwan Glaze, Sesame Oil",
        dietary: "veg",
        price: 345,
        sourcePage: 6,
      },
      {
        id: "volcanic-zongtong-tofu",
        name: "Volcanic Zongtong Tofu",
        description:
          "Silken Tofu In A Fiery Zongtong Chilli Glaze With Garlic And Sesame",
        dietary: "veg",
        price: 445,
        sourcePage: 6,
      },
      {
        id: "paneer-bharrah-lazeez",
        name: "Paneer Bharrah Lazeez",
        description:
          "Smoky Char-Grilled Paneer, Stuffed With Dry Fruits, Melted Cheese Medley And A Hint Of Saffron Rich, Indulgent, And Royally Spiced",
        dietary: "veg",
        price: 575,
        sourcePage: 6,
      },
      {
        id: "molten-jalapeno-burst",
        name: "Molten Jalapeño Burst",
        description:
          "Crispy Jalapeño Bites Stuffed Melted Irresistibly Gooey Cheese",
        dietary: "veg",
        price: 365,
        sourcePage: 6,
      },
      {
        id: "honey-chilli-water-chestnut-sig",
        name: "Honey Chilli Water Chestnut",
        description:
          "Crispy Water Chestnut Tossed In A Sweet, Spicy Honey Chilli Sauce Glaze",
        dietary: "veg",
        price: 445,
        sourcePage: 6,
      },
      {
        id: "khaas-e-sheermal-mutton",
        name: "Khaas - E Sheermal Awadhi Bhuna Mutton",
        description:
          "Traditional Handi-Cooked Mutton With Layered Onion -Tomato Masala And Aromatic Finish Served With Smoked Clay Pot",
        dietary: "non-veg",
        price: 725,
        sourcePage: 6,
      },
      {
        id: "himalayan-chicken-adana",
        name: "Himalayan Chicken Adana",
        description: "Open-Flame Kebab, Coriander Smoke, Herb Salad",
        dietary: "non-veg",
        price: 525,
        sourcePage: 6,
      },
      {
        id: "teesta-tempura-chingri",
        name: "Teesta Tempura Chingri",
        description:
          "Golden Tempura Prawns With Himalayan Bold Kasundi Heat",
        dietary: "non-veg",
        price: 595,
        sourcePage: 6,
      },
      {
        id: "keema-laccha-bun",
        name: "Keema Laccha Bun",
        description:
          "Mumbai-Style Chicken Keema Stuffed In Chef's Special Laccha Bun, Served With Maska",
        dietary: "non-veg",
        price: 495,
        sourcePage: 6,
      },
    ],
  },
  {
    id: "sushi",
    title: "Sushi",
    group: "food",
    sourcePages: [7],
    items: [
      {
        id: "avocado-cream-cheese-roll",
        name: "Avocado Cream Cheese Roll",
        description: "Creamy Avocado And Cheese Wrapped In Sushi Rice",
        dietary: "veg",
        price: 545,
        sourcePage: 7,
      },
      {
        id: "asparagus-tempura",
        name: "Asparagus Tempura",
        description: "Crispy Asparagus Tempura Wrapped In Nori",
        dietary: "veg",
        price: 525,
        sourcePage: 7,
      },
      {
        id: "rainbow-roll-veg",
        name: "Rainbow Roll -Veg",
        description:
          "California Roll Topped With Assorted Rustic Vegetable Slices",
        dietary: "veg",
        price: 515,
        sourcePage: 7,
      },
      {
        id: "teriyaki-chicken-roll",
        name: "Teriyaki Chicken Roll",
        description: "Grilled Chicken With Teriyaki Glaze In Sushi Style",
        dietary: "non-veg",
        price: 565,
        sourcePage: 7,
      },
      {
        id: "prawns-tempura-sushi",
        name: "Prawns Tempura Sushi",
        description:
          "Crispy Tempura Prawns Wrapped In Seasoned Sushi Rice And Nori, Finished With Umami Drizzle",
        dietary: "non-veg",
        price: 585,
        sourcePage: 7,
      },
    ],
  },
  {
    id: "mains",
    title: "Mains",
    group: "food",
    sourcePages: [7],
    items: [
      {
        id: "veg-dumpling-manchurian",
        name: "Vegetable Dumpling In Manchurian Sauce",
        description:
          "Fried Vegetable Dumplings Simmered In Classic Manchurian Gravy",
        dietary: "veg",
        price: 495,
        sourcePage: 7,
      },
      {
        id: "kung-pao-chicken-gravy",
        name: "Kung Pao Chicken With Gravy",
        description:
          "Tender Chicken Fried, Tossed With Traditional Kung Pao Sauce With Chilli And Golden Fried Cashew Nuts",
        dietary: "non-veg",
        price: 565,
        sourcePage: 7,
      },
      {
        id: "thai-curry-selection",
        name: "Thai Curry Selection",
        description:
          "Thai Herbs, Coconut & Spice — House Made Thai Curry, Served With Steamed Jasmine Rice",
        dietary: "both",
        subOptions: [
          { label: "Exotic Vegetable", dietary: "veg", price: 515 },
          { label: "Chicken", dietary: "non-veg", price: 545 },
          { label: "Prawns", dietary: "non-veg", price: 595 },
        ],
        sourcePage: 7,
      },
      {
        id: "noodles",
        name: "NOODLES",
        dietary: "both",
        priceDisplay: "485 | 525 | 565/-",
        priceNote: "Prices correspond to Vegetable | Chicken | Prawns",
        customizations: [
          { label: "Choice Of", options: ["Vegetable", "Chicken", "Prawns"] },
          {
            label: "Choice Of Sauce",
            options: ["Hakka", "Schezwan", "Mongolian", "Burnt Garlic"],
          },
        ],
        sourcePage: 7,
      },
      {
        id: "rice-asian",
        name: "Rice",
        dietary: "both",
        priceDisplay: "485 | 525 | 565/-",
        priceNote: "Prices correspond to Vegetable | Chicken | Prawns",
        customizations: [
          { label: "Choice Of", options: ["Vegetable", "Chicken", "Prawns"] },
          {
            label: "Choice Of Sauce",
            options: ["Hakka", "Schezwan", "Mongolian", "Burnt Garlic"],
          },
        ],
        sourcePage: 7,
      },
    ],
  },
  {
    id: "pan-asian-eastern-starters",
    title: "Pan Asian & Eastern Starters",
    subtitle: "Pan Asian & Eastern",
    group: "food",
    sourcePages: [8],
    items: [
      {
        id: "truffle-mushroom-dim-sum",
        name: "Truffle Mushroom Dim Sum",
        description:
          "Delicate Dim Sums Filled With Mushrooms And Finished With A Subtle Truffle Aroma",
        dietary: "veg",
        price: 355,
        sourcePage: 8,
      },
      {
        id: "water-chestnut-philadelphia",
        name: "Water Chestnut And Philadelphia",
        description:
          "Soft Dumplings Stuffed With Creamy Philadelphia Cheese And Garlicky Infused Spinach",
        dietary: "veg",
        price: 485,
        sourcePage: 8,
      },
      {
        id: "vegetable-gyoza-tonkatsu",
        name: "Vegetable Gyoza, With Tonkatsu Sauce",
        description:
          "Pan-seared Dumplings Filled With Seasoned Vegetables, Served With Rich Tonkatsu Sauce",
        dietary: "veg",
        price: 395,
        sourcePage: 8,
      },
      {
        id: "tangra-paneer-chili",
        name: "Tangra Paneer Chili",
        description:
          "Steamed Dumplings Marinated In Peri Peri Spices And Roasted In Tandoor",
        dietary: "veg",
        price: 475,
        sourcePage: 8,
        needsVerification: true,
        verificationNote:
          "Printed description on p.8 matches Peri Peri Tandoori Momos on p.9.",
      },
      {
        id: "kung-pao-paneer",
        name: "Kung Pao Paneer",
        description:
          "Wok-tossed Paneer With Chili, Peanuts, And Traditional Kung Pao Sauce",
        dietary: "veg",
        price: 525,
        sourcePage: 8,
      },
      {
        id: "honey-chili-water-chestnut-asian",
        name: "Honey Chili Water Chestnut",
        description:
          "Crispy Water Chestnuts Glazed In Sweet And Spicy Honey Chili Sauce",
        dietary: "veg",
        price: 565,
        sourcePage: 8,
      },
      {
        id: "scallion-prawns-dim-sum",
        name: "Scallion And Prawns Dim Sum",
        description: "Filled With Juicy Prawns And Scallion",
        dietary: "non-veg",
        price: 495,
        sourcePage: 8,
      },
      {
        id: "chicken-coriander-dim-sum",
        name: "Chicken Coriander Dim Sum",
        description: "Filled With Juicy Chicken And Fresh Coriander Flavors",
        dietary: "non-veg",
        price: 425,
        sourcePage: 8,
      },
      {
        id: "wok-tossed-fish-garlic-teriyaki",
        name: "Wok Tossed Fish In Garlic Teriyaki",
        description: "Pan-seared Fish Glazed With Traditional Teriyaki Sauce",
        dietary: "non-veg",
        price: 615,
        sourcePage: 8,
      },
      {
        id: "double-fried-chicken-dumpling",
        name: "Double Fried Chicken Dumpling In Chili Basil Garlic Sauce",
        description:
          "Crispy Chicken Dumplings Tossed In Spicy Burnt Garlic Chili Sauce",
        dietary: "non-veg",
        price: 525,
        sourcePage: 8,
      },
      {
        id: "korean-style-crispy-chicken-wings",
        name: "Korean Style Crispy Chicken Wings",
        description:
          "Double-fried Chicken Wings Coated In Authentic Korean Glaze",
        dietary: "non-veg",
        price: 575,
        sourcePage: 8,
      },
    ],
  },
  {
    id: "indian-starters",
    title: "Indian Starters",
    group: "food",
    sourcePages: [9],
    items: [
      {
        id: "tandoori-malai-soya-chaap",
        name: "Tandoori Malai Soya Chaap",
        description:
          "Creamy Marinated Soya Chaap Roasted In Tandoor With Mild Spices",
        dietary: "veg",
        price: 465,
        sourcePage: 9,
      },
      {
        id: "tandoori-subz-e-khaas-platter",
        name: "Tandoori Subz-E-Khaas (Platter)",
        description:
          "Chef's Special Marinated, Paneer, Pineapple, Bharwa Aloo, Seek Kebab, And Soya Chaap",
        dietary: "veg",
        price: 545,
        sourcePage: 9,
      },
      {
        id: "laal-mirch-ka-bharwa-aloo",
        name: "Laal Mirch Ka Bharwa Aloo",
        description:
          "Flavorful Stuffed Potatoes Infused With Traditional Way, With Nuts, And Mava, And Saffron, Crispy Kurkure Potato",
        dietary: "veg",
        price: 485,
        sourcePage: 9,
      },
      {
        id: "teen-mirch-ka-paneer-tikka",
        name: "Teen Mirch Ka Paneer Tikka",
        description:
          "Traditional Paneer Tikka With Trio Peppers, Served With Mint Chutney",
        dietary: "veg",
        price: 525,
        sourcePage: 9,
      },
      {
        id: "akroot-aur-dahi-ke-kebab",
        name: "Akroot Aur Dahi Ke Kebab",
        description:
          "Hand-Rubbed Curd With Walnut Chunks And Fine Spices, Finished With Ghee On Griddle",
        dietary: "veg",
        price: 495,
        sourcePage: 9,
      },
      {
        id: "peri-peri-tandoori-momos",
        name: "Peri Peri Tandoori Momos",
        description:
          "Steamed Dumplings Marinated In Peri Peri Spices And Roasted In Tandoor",
        dietary: "veg",
        price: 525,
        sourcePage: 9,
      },
      {
        id: "smoked-vegetable-jhol-momos",
        name: "Smoked Vegetable Jhol Momos",
        description: "Traditional Style",
        dietary: "veg",
        price: 425,
        sourcePage: 9,
      },
      {
        id: "gulfami-mutton-seekh",
        name: "Gulfami Mutton Seekh",
        description:
          "Minced Mutton Blended With Mild Spices And Cooked In Clay Oven",
        dietary: "non-veg",
        price: 725,
        sourcePage: 9,
      },
      {
        id: "tandoori-non-veg-bhatti-platter",
        name: "Tandoori Non-Vegetarian-E-Bhatti Di Khaas (Platter)",
        description:
          "Assorted Non-Vegetarian Kebabs 3 pc Each Chicken, Fish, Mutton, Cooked In Traditional Clay Oven",
        dietary: "non-veg",
        price: 675,
        sourcePage: 9,
      },
      {
        id: "rajwadi-murgh-tikka",
        name: "Rajwadi Murgh Tikka",
        description:
          "Royal-Style Marinated Chicken Tikka Grilled In Traditional Tandoor",
        dietary: "non-veg",
        price: 565,
        sourcePage: 9,
      },
      {
        id: "lehsooni-murgh-tikka",
        name: "Lehsooni Murgh Tikka",
        description: "Garlic-Marinated Chicken Tikka Roasted In Clay Oven",
        dietary: "non-veg",
        price: 625,
        sourcePage: 9,
      },
      {
        id: "sarson-di-jhinga",
        name: "Sarson Di Jhinga",
        description: "Prawns Cooked With Mustard Spices In Punjabi Style",
        dietary: "non-veg",
        price: 795,
        sourcePage: 9,
      },
    ],
  },
];

