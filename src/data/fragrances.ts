

export type BottleSize = "100ml";

export interface Fragrance {
  id: string;
  name: string;
  category: string;
  rating: number;
  reviewsCount: string;
  description: string;
  character: string;
  prices: Record<BottleSize, number>;
  image: string;
}

export const FRAGRANCES: Fragrance[] = [
  {
    id: "enso-golden-amber",
    name: "Golden Amber",
    category: "Enso Paris",
    rating: 4.9,
    reviewsCount: "1.2k",
    description:
      "A warm, rich and captivating fragrance created for those who appreciate elegance and luxury. Its sophisticated character makes it suitable for evening wear, special occasions and memorable moments.",
    character: "Warm, rich, luxurious",
    prices: {
      "100ml": 1000,
    },
    image: "https://res.cloudinary.com/mpfeep2s/image/upload/v1792162644/GOLDEN_AMBER.jpg",
  },
  {
    id: "enso-blue-legend-a1",
    name: "Blue Legend Pure A1",
    category: "Enso Paris",
    rating: 4.8,
    reviewsCount: "940",
    description:
      "A fresh, modern and confident fragrance concept designed for everyday sophistication. Its clean and versatile character complements both casual outfits and formal occasions.",
    character: "Fresh, bold, timeless",
    prices: {
      "100ml": 1000,
    },
    image: "https://res.cloudinary.com/mpfeep2s/image/upload/v1792162644/BLUE_LEGEND_PURE_A1.jpg",
  },
  {
    id: "enso-blue-legend-b2",
    name: "Blue Legend Noir B2",
    category: "Enso Paris",
    rating: 4.9,
    reviewsCount: "810",
    description:
      "A bold and sophisticated fragrance concept for those who want to express confidence and style. Ideal for evening occasions, celebrations and a distinctive personal presence.",
    character: "Bold, sophisticated, confident",
    prices: {
      "100ml": 1000,
    },
    image: "https://res.cloudinary.com/mpfeep2s/image/upload/v1792162644/BLUE_LEGEND_NOIR_B2.jpg",
  },
  {
    id: "enso-exotic",
    name: "Exotic",
    category: "Enso Paris",
    rating: 5.0,
    reviewsCount: "620",
    description:
      "A distinctive and captivating fragrance for those who appreciate an elegant, memorable scent. Suitable for daily wear, social occasions and special evenings.",
    character: "Exotic, distinctive and elegant.",
    prices: {
      "100ml": 1000,
    },
    image: "https://res.cloudinary.com/mpfeep2s/image/upload/v1792162644/EXOTIC.jpg",
  },
  {
    id: "enso-sunset-crush",
    name: "Sunset Crush",
    category: "Enso Paris",
    rating: 4.9,
    reviewsCount: "1.5k",
    description:
      "A modern, stylish fragrance inspired by the warmth and beauty of sunset. Designed for people who enjoy a refined scent for everyday use and special occasions.",
    character: "Modern, warm and sophisticated.",
    prices: {
      "100ml": 1000,
    },
    image: "https://res.cloudinary.com/mpfeep2s/image/upload/v1792482742/SUNSET_CRUSH.png",
  },
];
