export interface Product {
  id: string;
  name: string;
  originalPrice: number;
  salePrice: number;
  images: string[];
  inStock: boolean;
  ingredients: string[];
  benefits: string[];
  instructions: string[];
  description: string;
}

export const product: Product = {
  id: "80s-hair-oil",
  name: "80s Hair Oil",
  originalPrice: 2499,
  salePrice: 1999,
  images: ["/80s_trans.jpeg", "/80s_black.jpeg", "/80s_trans.jpeg"],
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
};
