import type { MenuCategory } from "@/types";

export const MENU_PART_2: MenuCategory[] = [
  {
    id: "rice-breads",
    title: "Rice & Breads",
    group: "food",
    sourcePages: [10],
    items: [
      {
        id: "steamed-rice",
        name: "Steamed Rice",
        dietary: "veg",
        price: 195,
        sourcePage: 10,
      },
      {
        id: "jeera-rice",
        name: "Jeera Rice",
        description:
          "Steamed Basmati Rice Flavored With Roasted Cumin And Ghee",
        dietary: "veg",
        price: 225,
        sourcePage: 10,
      },
      {
        id: "subz-tawa-pulao",
        name: "Subz Tawa Pulao",
        description: "Spiced Basmati Rice Tossed With Vegetables On A Hot Griddle",
        dietary: "veg",
        price: 285,
        sourcePage: 10,
      },
      {
        id: "subz-dum-biryani",
        name: "Subz Dum Biryani",
        description:
          "Layered Basmati Rice And Vegetables Slow-cooked Under Dum With Aromatic Spices",
        dietary: "veg",
        price: 465,
        sourcePage: 10,
      },
      {
        id: "kolkata-style-chicken-dum-biryani",
        name: "Kolkata Style Chicken Dum Biryani",
        description:
          "Kolkata Style Chicken Biryani, Delicately Spiced And Sealed For Slow Cooking",
        dietary: "non-veg",
        price: 585,
        sourcePage: 10,
      },
      {
        id: "tandoori-roti",
        name: "Tandoori Roti",
        dietary: "veg",
        priceDisplay: "85 | 95/-",
        customizations: [{ label: "Options", options: ["Plain", "Butter"] }],
        sourcePage: 10,
      },
      {
        id: "phulka",
        name: "Phulka",
        dietary: "veg",
        priceDisplay: "85 | 115 | 95/-",
        customizations: [
          { label: "Options", options: ["Plain", "Ghee", "Butter"] },
        ],
        sourcePage: 10,
        needsVerification: true,
        verificationNote:
          "Printed as Plain | Ghee | Butter with prices 85 | 115 | 95/-.",
      },
      {
        id: "naan",
        name: "Naan",
        dietary: "veg",
        priceDisplay: "95 | 115 | 125/-",
        customizations: [
          {
            label: "Options",
            options: ["Plain", "Butter", "Garlic", "Cheese"],
          },
        ],
        sourcePage: 10,
        needsVerification: true,
        verificationNote:
          "Four options listed (Plain | Butter | Garlic | Cheese) with three prices (95 | 115 | 125/-).",
      },
      {
        id: "laccha-paratha",
        name: "Laccha Paratha",
        dietary: "veg",
        priceDisplay: "115 | 125/-",
        customizations: [
          {
            label: "Options",
            options: ["Plain", "Butter", "Garlic", "Pudina"],
          },
        ],
        sourcePage: 10,
        needsVerification: true,
        verificationNote:
          "Four options listed (Plain | Butter | Garlic | Pudina) with two prices (115 | 125/-).",
      },
      {
        id: "tandoori-stuffed-kulcha",
        name: "Tandoori Stuffed Kulcha",
        dietary: "veg",
        priceDisplay: "165 | 215 | 195/-",
        customizations: [
          { label: "Options", options: ["Aloo", "Paneer", "Mix Veg"] },
        ],
        sourcePage: 10,
      },
      {
        id: "assorted-indian-breads-basket",
        name: "Assorted Indian Breads Basket",
        description:
          "(Naan, Pudina Paratha, Stuffed Kulcha, Missi Roti, Tandoori Roti, Phulka, Each One Pc In A Basket)",
        dietary: "veg",
        price: 275,
        sourcePage: 10,
      },
    ],
  },
  {
    id: "indian-mains",
    title: "Indian Mains",
    group: "food",
    sourcePages: [11],
    items: [
      {
        id: "shabnami-kofta",
        name: "Shabnami Kofta",
        description:
          "Soft Vegetable Dumplings Finished In A Silky, Mildly Spiced Gravy",
        dietary: "veg",
        price: 485,
        sourcePage: 11,
      },
      {
        id: "makai-lehsooni-saag",
        name: "Makai Lehsooni Saag",
        description: "Creamy Corn And Greens Tempered With Aromatic Garlic",
        dietary: "veg",
        price: 465,
        sourcePage: 11,
      },
      {
        id: "panchphoran-subz-diwani-handi",
        name: "Panchphoran Subz Diwani Handi",
        description:
          "Mixed Vegetables Slow-cooked With Five-spice Tempering In Traditional Handi Style",
        dietary: "veg",
        price: 485,
        sourcePage: 11,
      },
      {
        id: "paneer-butter-masala",
        name: "Paneer Butter Masala",
        description:
          "Paneer Cubes In A Smooth, Buttery Tomato & 7 Cashew Rich Gravy, Mildly Spiced",
        dietary: "veg",
        price: 515,
        sourcePage: 11,
      },
      {
        id: "paneer-khurchan",
        name: "Paneer Khurchan",
        description:
          "Julienned Paneer Sautéed With Capsicum And Onion In Spicy Masala",
        dietary: "veg",
        price: 525,
        sourcePage: 11,
        needsVerification: true,
        verificationNote:
          "Shares identical description and price (525/-) with Kadhai Paneer on p.11.",
      },
      {
        id: "kadhai-paneer",
        name: "Kadhai Paneer",
        description:
          "Julienned Paneer Sautéed With Capsicum And Onion In Spicy Masala",
        dietary: "veg",
        price: 525,
        sourcePage: 11,
      },
      {
        id: "soul-special-murgh-tariwala",
        name: "Soul Special Murgh Tariwala",
        description:
          "Chicken Simmered In A Flavorful Spiced Gravy, Chef's Signature Style",
        dietary: "non-veg",
        price: 545,
        sourcePage: 11,
      },
      {
        id: "butter-chicken-masala-main",
        name: "Butter Chicken Masala",
        description:
          "Smoked Clay Oven Spiced Chicken Tikka In A Rich Cashew And Buttery Tomato Gravy, Finished With Roasted Fenugreek Foam",
        dietary: "non-veg",
        price: 595,
        sourcePage: 11,
      },
      {
        id: "chicken-kadhai-masala",
        name: "Chicken Kadhai Masala",
        description:
          "Juicy Chicken Cooked With Capsicum And Onions In A Bold, Freshly Ground Kadhai Spice",
        dietary: "non-veg",
        price: 595,
        sourcePage: 11,
      },
      {
        id: "awadhi-bhuna-mutton",
        name: "Awadhi Bhuna Mutton",
        description: "Slow-roasted Mutton Cooked In Traditional Awadhi Masala",
        dietary: "non-veg",
        price: 785,
        sourcePage: 11,
      },
      {
        id: "yellow-dal-tadka",
        name: "Yellow Dal Tadka",
        description: "Split Yellow Lentils Tempered With Cumin, Garlic, And Ghee",
        dietary: "veg",
        price: 375,
        sourcePage: 11,
      },
      {
        id: "soul-special-dal-makhani",
        name: "Soul Special Dal Makhani",
        description:
          "Chef's Signature Slow-simmered Lentils Finished With Smoky Butter Tempering",
        dietary: "veg",
        price: 465,
        sourcePage: 11,
      },
    ],
  },
  {
    id: "global",
    title: "Global",
    group: "food",
    sourcePages: [12],
    items: [
      {
        id: "lebanese-vegetable-sizzler",
        name: "Lebanese Vegetable Sizzler",
        description:
          "Sumac Cottage Cheese Steak With Mujaddara, Vegetable Skewers, And Pepper Harissa",
        dietary: "veg",
        price: 655,
        sourcePage: 12,
      },
      {
        id: "wok-fried-chinese-sizzler",
        name: "Wok-Fried Chinese Sizzler",
        description:
          "Sizzling Paneer Served Over Pan-fried Noodles With Bold Chow Chow Sauce",
        dietary: "veg",
        price: 475,
        sourcePage: 12,
      },
      {
        id: "tuscan-feast-sizzler",
        name: "Tuscan Feast Sizzler",
        description:
          "Grilled Chicken Steak Served With Creamy Tomatillo Risotto, Hasselback Potato, And Fondue",
        dietary: "non-veg",
        price: 675,
        sourcePage: 12,
      },
      {
        id: "tandoori-chicken-chaap-sizzler",
        name: "Tandoori Chicken Chaap Sizzler",
        description:
          "Tandoori-Spiced Chicken Chaap With Charred Shashlik, Served With Tandoori Mayo",
        dietary: "non-veg",
        price: 715,
        sourcePage: 12,
      },
      {
        id: "rustic-hunters-oven-roasted-chicken",
        name: "Rustic Hunter's Oven Roasted Chicken",
        description:
          "Slow Roasted Braised Chicken With Leeks And Red Wine Reduction",
        dietary: "non-veg",
        price: 665,
        sourcePage: 12,
      },
      {
        id: "lemon-dill-pesto-baked-fish",
        name: "Lemon Dill Pesto Baked Fish",
        description:
          "Oven-roasted Fish With Herb Butter And Citrus Glaze, Served With Grilled Asparagus, Mash",
        dietary: "non-veg",
        price: 655,
        sourcePage: 12,
      },
      {
        id: "lamb-shepherds-pie",
        name: "Lamb Shepherd's Pie",
        description:
          "Lamb Mince Cooked In Rich Wine Sauce, Layered With Velvety Mash And Baked To Perfection",
        dietary: "non-veg",
        price: 745,
        sourcePage: 12,
      },
    ],
  },
  {
    id: "puja-special-vegetarian",
    title: "Puja Special Vegetarian Selection",
    subtitle: "Festive Specials",
    group: "festive",
    sourcePages: [13],
    items: [
      {
        id: "chenna-green-peas-cutlet",
        name: "CHENNA & GREEN PEAS CUTLET",
        dietary: "veg",
        price: 415,
        sourcePage: 13,
        needsVerification: true,
        verificationNote:
          'PDF prints "No Description needed" as placeholder text.',
      },
      {
        id: "ting-ming-mushrooms-puja",
        name: "TING MING MUSHROOMS",
        description:
          "Forest Mushrooms, Korean Reduction, Sesame, Himalayan Spice",
        dietary: "veg",
        price: 345,
        sourcePage: 13,
      },
      {
        id: "aam-papad-paneer-tikka",
        name: "AAM PAPAD PANEER TIKKA",
        description:
          "Soft paneer tikka paired with the sweet-tangy flavour of aam papad",
        dietary: "veg",
        price: 485,
        sourcePage: 13,
      },
      {
        id: "navrasa-taco-tokri-chaat",
        name: "NAVRASA TACO TOKRI CHAAT",
        description:
          "Crispy potato taco, exotic fruits, whipped yogurt, mint-tamarind chutney & pomegranate chaat",
        dietary: "veg",
        price: 415,
        sourcePage: 13,
      },
      {
        id: "tandoori-subz-nazakat-platter",
        name: "TANDOORI SUBZ NAZAKAT PLATTER",
        description:
          "Chutneywala Paneer, Afghani Soya Chaap, Dahi Ke Kebab, Subz Bahar Seek & Tandoori Fruits chaat",
        dietary: "veg",
        price: 645,
        sourcePage: 13,
      },
      {
        id: "kulcha-cheese-bombs",
        name: "KULCHA CHEESE BOMBS",
        description:
          "Mini clay-oven baked kulchas stuffed with assorted cheese and aromatic spices and chaat masala",
        dietary: "veg",
        price: 425,
        sourcePage: 13,
      },
      {
        id: "golden-zafrani-pulao",
        name: "GOLDEN ZAFRANI PULAO",
        description:
          "Aromatic golden rice delicately flavoured with saffron, whole spices and a touch of sweetness",
        dietary: "veg",
        price: 485,
        sourcePage: 13,
      },
      {
        id: "hyderabadi-paneer-dum-biryani",
        name: "HYDERABADI PANEER DUM BIRYANI",
        description:
          "Fragrant basmati layered with succulent Masala paneer, saffron, caramelized onions and aromatic spices, served with salan",
        dietary: "veg",
        price: 465,
        sourcePage: 13,
      },
      {
        id: "puja-special-vegetarian-thali",
        name: "PUJA SPECIAL VEGETARIAN THALI",
        description:
          "A festive vegetarian indulgence — Chenna & Peas Cutlet (2 Pcs) | Paneer Tikka (2 Pcs) | Taco Chaat | Kulcha Cheese Bombs (2 Pcs) | Barista Pulao | Salad | Papad | Butter Naan | Dal Makhani",
        dietary: "veg",
        price: 699,
        sourcePage: 13,
      },
    ],
  },
  {
    id: "puja-special-non-veg",
    title: "Puja Special Non-Veg Selection",
    subtitle: "Festive Specials",
    group: "festive",
    sourcePages: [14],
    items: [
      {
        id: "whole-bhetki-sichuan-chilly-dry",
        name: "WHOLE BHETKI SICHUAN CHILLY DRY",
        description:
          "Pan Grilled Boneless Bhetki Tossed in spicy Sichuan Chilly & Bhel Pepper",
        dietary: "non-veg",
        price: 1085,
        sourcePage: 14,
      },
      {
        id: "aam-ada-tandoori-pomfret",
        name: "AAM ADA TANDOORI POMFRET",
        description:
          "Mango Ginger Marinated Pomfret Grilled in Clay Oven",
        dietary: "non-veg",
        price: 695,
        sourcePage: 14,
      },
      {
        id: "jumbo-prawn-pepper-garlic",
        name: "JUMBO PRAWN IN PEPPER GARLIC SAUCE",
        description:
          "Crispy Fried Butter Fly Prawn Tossed in Hot Pepper Garlic sauce",
        dietary: "non-veg",
        price: 695,
        sourcePage: 14,
      },
      {
        id: "pot-roasted-mutton-tikka",
        name: "POT ROASTED MUTTON TIKKA",
        description:
          "Bengali Spiced Marinated Boneless Mutton Grilled in Clay Oven",
        dietary: "non-veg",
        price: 635,
        sourcePage: 14,
      },
      {
        id: "chicken-handi-kebab",
        name: "CHICKEN HANDI KEBAB",
        description: "Juicy Chicken Leg Boneless Cooked in Clay Pot.",
        dietary: "non-veg",
        price: 595,
        sourcePage: 14,
      },
      {
        id: "aam-ada-bhetki-finger",
        name: "AAM ADA BHETKI FINGER",
        description: "Fish Finger with Aroma of Mango Ginger",
        dietary: "non-veg",
        price: 585,
        sourcePage: 14,
      },
      {
        id: "shandong-style-chicken-drums",
        name: "SHANDONG STYLE CHICKEN DRUMS",
        description: "Fried Chicken Drums tossed with oriental Spices",
        dietary: "non-veg",
        price: 545,
        sourcePage: 14,
      },
      {
        id: "murgh-awadhi-e-khaas-biryani",
        name: "MURGH AWADHI -E- KHAAS BIRYANI",
        description:
          "Tender chicken layered with fragrant basmati, caramelised onions and aromatic spices, served with traditional salan",
        dietary: "non-veg",
        price: 525,
        sourcePage: 14,
      },
      {
        id: "puja-special-non-vegetarian-thali",
        name: "PUJA SPECIAL NON-VEGETARIAN THALI",
        description:
          "A festive Bengali-inspired feast — Chicken Handi Kebab (2 Pcs) | Chicken Kosha | Fish Fry (2 Pcs) | Barista Pulao | Dal Makhani | Raita | Fresh Salad | Papad | Butter Naan",
        dietary: "non-veg",
        price: 799,
        sourcePage: 14,
      },
    ],
  },
  {
    id: "desserts",
    title: "Desserts",
    group: "food",
    sourcePages: [15],
    items: [
      {
        id: "flourless-callebaut-chocolate-torte-menu",
        name: "Flourless Callebaut Chocolate Torte",
        description:
          "Rich Flourless Belgian Chocolate Torte Crafted With Premium Callebaut Couverture",
        dietary: "non-veg",
        price: 675,
        sourcePage: 15,
      },
      {
        id: "blueberry-cheese-cake",
        name: "Blueberry Cheese Cake",
        description:
          "Classic Baked Cheesecake Topped With Slow-simmered Blueberry Compote",
        dietary: "veg",
        price: 575,
        sourcePage: 15,
      },
      {
        id: "fresh-strawberry-au-patisserie",
        name: "Fresh Strawberry Au Pâtisserie",
        description:
          "Buttery Laminated Pastry Layered With Fresh Strawberries And Light Cream",
        dietary: "veg",
        price: 525,
        sourcePage: 15,
      },
      {
        id: "sizzling-brownie",
        name: "Sizzling Brownie",
        description:
          "Decadent Chocolate Brownie, Sizzling Hot, Topped With Vanilla Ice Cream",
        dietary: "veg",
        price: 515,
        sourcePage: 15,
      },
      {
        id: "baked-rasgulla",
        name: "Baked Rasgulla",
        description: "Soft Baked Rasgulla With A Rich Caramelized Finish",
        dietary: "veg",
        price: 475,
        sourcePage: 15,
      },
      {
        id: "tiramisu",
        name: "Tiramisu",
        description:
          "Classic Italian Tiramisu Layered With Coffee, Cream, And Cocoa",
        dietary: "veg",
        price: 515,
        sourcePage: 15,
      },
      {
        id: "natural-ice-cream",
        name: "Natural Ice Cream",
        description:
          "Each Portion Two Scoops Served With Chocolate Sauce And Biscotti",
        dietary: "veg",
        subOptions: [
          { label: "Vanilla", dietary: "veg", price: 145 },
          { label: "Chocolate", dietary: "veg", price: 165 },
          { label: "Strawberry", dietary: "veg", price: 165 },
          { label: "Coffee", dietary: "veg", price: 165 },
        ],
        sourcePage: 15,
      },
      {
        id: "signature-sundae-ice-cream",
        name: "Signature Sundae Ice Cream",
        description:
          "Three Layered Sundae Ice Cream Strawberry, Chocolate, Vanilla, Crowned With Fresh Fruit Cubes, Biscotti, Chocolate Straws, And Cookie Crumble",
        dietary: "veg",
        price: 425,
        sourcePage: 15,
      },
    ],
  },
  {
    id: "tea-atelier",
    title: "Tea Atelier",
    group: "beverage",
    sourcePages: [16],
    items: [
      {
        id: "classic-lemon-iced-tea",
        name: "CLASSIC LEMON ICED TEA",
        description: "Timeless iced tea with a zesty lemon twist.",
        dietary: "unspecified",
        price: 270,
        sourcePage: 16,
      },
      {
        id: "peach-iced-tea",
        name: "PEACH ICED TEA",
        description: "Sweet, juicy peach infused iced tea.",
        dietary: "unspecified",
        price: 270,
        sourcePage: 16,
      },
      {
        id: "lavender-iced-tea",
        name: "LAVENDER ICED TEA",
        description: "A calming blend of lavender and iced tea for a serene sip.",
        dietary: "unspecified",
        price: 270,
        sourcePage: 16,
      },
      {
        id: "chamomile-green-tea",
        name: "CHAMOMILE GREEN TEA",
        dietary: "unspecified",
        price: 140,
        sourcePage: 16,
      },
      {
        id: "blue-pea-tea",
        name: "BLUE PEA TEA",
        dietary: "unspecified",
        price: 140,
        sourcePage: 16,
      },
      {
        id: "holy-basil-green-tea",
        name: "HOLY BASIL GREEN TEA",
        dietary: "unspecified",
        price: 140,
        sourcePage: 16,
      },
      {
        id: "kashmiri-kahwa",
        name: "KASHMIRI KAHWA",
        dietary: "unspecified",
        price: 140,
        sourcePage: 16,
      },
      {
        id: "darjeeling-green-tea",
        name: "DARJEELING GREEN TEA",
        dietary: "unspecified",
        price: 140,
        sourcePage: 16,
      },
      {
        id: "jasmine-tea",
        name: "JASMINE TEA",
        dietary: "unspecified",
        price: 140,
        sourcePage: 16,
      },
    ],
  },
  {
    id: "signature-mocktails",
    title: "Signature Mocktails",
    group: "beverage",
    sourcePages: [17],
    items: [
      {
        id: "ginger-pineapple-frappe",
        name: "GINGER & PINEAPPLE FRAPPÉ",
        description: "Tropical pineapple with a zing of ginger.",
        dietary: "unspecified",
        price: 290,
        sourcePage: 17,
      },
      {
        id: "virgin-mojito",
        name: "VIRGIN MOJITO",
        description: "Fresh mint, lime and sparkling refreshment",
        dietary: "unspecified",
        price: 290,
        customizations: [
          { label: "Options", options: ["Classic", "Watermelon"] },
        ],
        sourcePage: 17,
      },
      {
        id: "frozen-lychee",
        name: "FROZEN LYCHEE",
        description: "Sweet, frosty and refreshingly smooth.",
        dietary: "unspecified",
        price: 290,
        sourcePage: 17,
      },
      {
        id: "mango-chilli-cooler",
        name: "MANGO CHILLI COOLER",
        description: "Juicy mango balanced with a hint of chilli and citrus",
        dietary: "unspecified",
        price: 290,
        sourcePage: 17,
      },
      {
        id: "cucumber-mint-sparkle",
        name: "CUCUMBER MINT SPARKLE",
        description: "Cool cucumber with fresh mint.",
        dietary: "unspecified",
        price: 290,
        sourcePage: 17,
      },
      {
        id: "lychee-rose-cooler",
        name: "LYCHEE ROSE COOLER",
        description: "Delicate rose and juicy lychee with a refreshing finish",
        dietary: "unspecified",
        price: 290,
        sourcePage: 17,
      },
    ],
  },
  {
    id: "handcrafted-shakes",
    title: "Handcrafted Shakes",
    group: "beverage",
    sourcePages: [17],
    items: [
      {
        id: "creamy-banana",
        name: "CREAMY BANANA",
        description: "Fresh bananas blended into a rich, creamy shake.",
        dietary: "unspecified",
        price: 320,
        sourcePage: 17,
      },
      {
        id: "blueberry-delight",
        name: "BLUEBERRY DELIGHT",
        description: "Sweet blueberries blended into creamy perfection.",
        dietary: "unspecified",
        price: 320,
        sourcePage: 17,
      },
      {
        id: "mango-tango",
        name: "MANGO TANGO",
        description: "Ripe mangoes blended into a smooth tropical delight.",
        dietary: "unspecified",
        price: 320,
        sourcePage: 17,
      },
      {
        id: "strawberry-swirl",
        name: "STRAWBERRY SWIRL",
        description: "Sweet strawberries blended into a creamy classic.",
        dietary: "unspecified",
        price: 320,
        sourcePage: 17,
      },
      {
        id: "chocolate-indulgence",
        name: "CHOCOLATE INDULGENCE",
        description: "Rich, decadent chocolate blended to perfection.",
        dietary: "unspecified",
        priceDisplay: "320 / 340",
        priceNote: "Classic 320 | Flavors (Oreo / KitKat / Brownie) 340",
        customizations: [
          { label: "Flavors", options: ["Oreo", "KitKat", "Brownie"] },
        ],
        sourcePage: 17,
      },
    ],
  },
  {
    id: "espresso-bar",
    title: "Espresso Bar",
    group: "beverage",
    sourcePages: [18],
    items: [
      {
        id: "espresso",
        name: "ESPRESSO",
        description: "A bold, concentrated shot with a rich crema.",
        dietary: "unspecified",
        price: 180,
        sourcePage: 18,
      },
      {
        id: "americano",
        name: "AMERICANO (HOT / ICED)",
        description: "Espresso mellowed with water for a smooth, clean finish.",
        dietary: "unspecified",
        priceDisplay: "200 / 240",
        priceNote: "Hot / Iced",
        sourcePage: 18,
      },
      {
        id: "cappuccino",
        name: "CAPPUCCINO (HOT / ICED)",
        description:
          "Bold espresso, velvety steamed milk, and a cloud of rich foam.",
        dietary: "unspecified",
        priceDisplay: "210 / 240",
        priceNote: "Hot / Iced",
        sourcePage: 18,
      },
      {
        id: "cafe-latte",
        name: "CAFÉ LATTE (HOT / ICED)",
        description:
          "Silky steamed milk meets espresso for a smooth, comforting classic.",
        dietary: "unspecified",
        priceDisplay: "210 / 250",
        priceNote: "Hot / Iced",
        sourcePage: 18,
      },
      {
        id: "hazelnut-latte",
        name: "HAZELNUT LATTE (HOT / ICED)",
        description:
          "Creamy espresso infused with the warm, roasted sweetness of hazelnut.",
        dietary: "unspecified",
        priceDisplay: "230 / 270",
        priceNote: "Hot / Iced",
        sourcePage: 18,
      },
      {
        id: "caramel-latte",
        name: "CARAMEL LATTE (HOT / ICED)",
        description:
          "Smooth espresso layered with buttery caramel and creamy milk.",
        dietary: "unspecified",
        priceDisplay: "230 / 270",
        priceNote: "Hot / Iced",
        sourcePage: 18,
      },
      {
        id: "cafe-mocha",
        name: "CAFÉ MOCHA (HOT ICED)",
        description: "Rich espresso blended with chocolate and creamy milk.",
        dietary: "unspecified",
        priceDisplay: "230 / 270",
        priceNote: "Hot / Iced",
        sourcePage: 18,
      },
      {
        id: "white-mocha",
        name: "WHITE MOCHA (HOT / ICED)",
        description: "Smooth white chocolate meets bold espresso and milk.",
        dietary: "unspecified",
        priceDisplay: "250 / 280",
        priceNote: "Hot / Iced",
        sourcePage: 18,
      },
      {
        id: "vietnamese-latte",
        name: "VIETNAMESE LATTE (ICED)",
        description:
          "Bold Vietnamese-style coffee sweetened with condensed milk.",
        dietary: "unspecified",
        price: 280,
        sourcePage: 18,
      },
      {
        id: "classic-cold-coffee",
        name: "CLASSIC COLD COFFEE",
        description: "Creamy, refreshing and perfectly chilled.",
        dietary: "unspecified",
        price: 280,
        sourcePage: 18,
      },
      {
        id: "cafe-frappe",
        name: "CAFÉ FRAPPÉ",
        description:
          "Blended espresso, ice and cream for a smooth, frosty treat.",
        dietary: "unspecified",
        price: 250,
        sourcePage: 18,
      },
      {
        id: "black-forest-frappe",
        name: "BLACK FOREST FRAPPÉ",
        description:
          "Chocolate, cherry and cream blended into an indulgent delight.",
        dietary: "unspecified",
        price: 300,
        sourcePage: 18,
      },
      {
        id: "tiramisu-frappe",
        name: "TIRAMISU FRAPPÉ",
        description:
          "Espresso, cocoa and cream inspired by the classic Italian dessert.",
        dietary: "unspecified",
        price: 300,
        sourcePage: 18,
      },
      {
        id: "matcha-latte",
        name: "MATCHA LATTE (HOT | ICED)",
        description:
          "Premium ceremonial matcha whisked with your choice of milk.",
        dietary: "unspecified",
        priceDisplay: "240 / 260 · 300",
        priceNote: "Hot 240 / Iced 260 · Flavoured 300",
        customizations: [
          {
            label: "Flavours",
            options: ["Strawberry", "Blueberry", "Vanilla", "Coconut"],
          },
          { label: "Milk Options", options: ["Dairy", "Almond", "Soya"] },
        ],
        sourcePage: 18,
        needsVerification: true,
        verificationNote:
          "PDF prints 240 / 260 alongside Hot | Iced and 300 next to Flavours.",
      },
      {
        id: "signature-hot-chocolate",
        name: "SIGNATURE HOT CHOCOLATE",
        description:
          "Rich Belgian-style cocoa blended into a velvety cup of comfort.",
        dietary: "unspecified",
        price: 300,
        sourcePage: 18,
      },
    ],
  },
];

