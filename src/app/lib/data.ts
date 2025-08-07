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
  originalPrice: 29.99,
  salePrice: 19.99,
  images: [
    "/80s_trans.jpeg",
    "/80s_trans.jpeg",
    "/80s_trans.jpeg",
  ],
  inStock: false, // Set to false to show "sold out" state
  ingredients: [
    "Argan Oil",
    "Jojoba Oil",
    "Vitamin E",
    "Rosemary Extract",
    "Biotin",
    "Keratin Protein",
    "Natural Fragrance",
  ],
  benefits: [
    "Promotes hair growth and thickness",
    "Reduces frizz and adds shine",
    "Strengthens hair follicles",
    "Moisturizes dry and damaged hair",
    "Protects against heat damage",
    "Improves scalp health",
  ],
  instructions: [
    "Apply 2-3 drops to palm of hands",
    "Rub hands together to warm the oil",
    "Massage gently into scalp and hair",
    "Leave in for at least 30 minutes or overnight",
    "Wash out with shampoo and condition as usual",
    "Use 2-3 times per week for best results",
  ],
  description:
    "Transform your hair with our premium 80s Hair Oil blend. This luxurious formula combines the finest natural oils to give you the voluminous, healthy hair you've always wanted.",
};
