export interface Product {
  id: string;
  name: string;
  originalPrice: number;
  salePrice: number;
  images: string[];
  inStock: boolean;
  ingredients?: string[];
  benefits?: string[];
  instructions?: string[];
  description?: string;
}

export const products = [
  {
    id: "1",
    name: "80s Hair Oil + Tester",
    originalPrice: 2300,
    salePrice: 1599,
    images: ["/oil+tester.png","/80shairoil.webp", "/80shairoil_2.webp", "/80shairoil_3.webp", "/80s_trans.jpeg"],
    inStock: true, // Set to false to show "sold out" state
    ingredients: [
      "Mustard oil",
      "Coconut oil",
      "Dried cilantro",
      "Amla oil",
      "Almond oil",
      "Castor oil",
      "Vitamin-e",
      "Black seed oil",
      "Flax seed oil",
      "10+ herbs",
    ],
    benefits: [
      "Enhances natural shine",
      "Gives a keratin-like smoothing effect",
      "Hydrates & deeply nourishes",
      "Reduces frizz and dryness",
      "Promotes faster hair growth",
      "Prevents dandruff",
      "Repairs damaged strands",
      "Strengthens from root to tip",
      "Minimizes breakage",
      "100% natural with no side effects",
    ],
    instructions: [
      "Apply generously from roots to ends. Leave on for 3–4 hours or overnight for maximum results.",
      "For boosted keratin effect, pair with rice water in your shampoo routine.",
    ],
    description:
      "Transform your hair with our premium 80s Hair Oil blend. This luxurious formula combines the finest natural oils to give you the voluminous, healthy hair you've always wanted.",
  },
  {
    id: "2",
    name: "80s Hair Oil",
    originalPrice: 1999,
    salePrice: 1599,
    images: ["/80shairoil.webp", "/80shairoil_2.webp", "/80shairoil_3.webp"],
    inStock: true, // Set to false to show "sold out" state
    ingredients: [
      "Mustard oil",
      "Coconut oil",
      "Dried cilantro",
      "Amla oil",
      "Almond oil",
      "Castor oil",
      "Vitamin-e",
      "Black seed oil",
      "Flax seed oil",
      "10+ herbs",
    ],
    benefits: [
      "Enhances natural shine",
      "Gives a keratin-like smoothing effect",
      "Hydrates & deeply nourishes",
      "Reduces frizz and dryness",
      "Promotes faster hair growth",
      "Prevents dandruff",
      "Repairs damaged strands",
      "Strengthens from root to tip",
      "Minimizes breakage",
      "100% natural with no side effects",
    ],
    instructions: [
      "Apply generously from roots to ends. Leave on for 3-4 hours or overnight for maximum results.",
      "For boosted keratin effect, pair with rice water in your shampoo routine.",
    ],
    description:
      "Transform your hair with our premium 80s Hair Oil blend. This luxurious formula combines the finest natural oils to give you the voluminous, healthy hair you've always wanted.",
  },
  {
    id: "3",
    name: "80s D.CENT Perfume Tester",
    originalPrice: 300,
    salePrice: 300,
    images: ["/80s_trans.jpeg"],
    inStock: true, // Set to false to show "sold out" state

  },
];
