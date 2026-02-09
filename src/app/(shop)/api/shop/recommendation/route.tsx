const RECOMMENDATION = [
  {
    id: 1,
    name: "Aurora One 5G Smartphone",
    image: "/recommendation/aurora-one-5g.jpg",
    price: 749.99,
    rating: 4.6,
    reviewCount: 418,
    category: "Smartphones",
  },
  {
    id: 2,
    name: "Zenith Pro Max Smartphone",
    image: "/recommendation/zenith-pro-max.jpg",
    price: 899.99,
    rating: 4.7,
    reviewCount: 562,
    category: "Smartphones",
  },
  {
    id: 3,
    name: "ArmorShield Matte Phone Case",
    image: "/recommendation/armorshield-phone-case.jpg",
    price: 24.99,
    rating: 4.4,
    reviewCount: 189,
    category: "Smartphone Accessories",
  },
  {
    id: 4,
    name: "Velocity Knit Running Shoes",
    image: "/recommendation/velocity-knit-running-shoes.jpg",
    price: 129.99,
    rating: 4.5,
    reviewCount: 301,
    category: "Shoes",
  },
  {
    id: 5,
    name: "Urban Drift Sneakers",
    image: "/recommendation/urban-drift-sneakers.jpg",
    price: 109.99,
    rating: 4.3,
    reviewCount: 214,
    category: "Shoes",
  },
  {
    id: 6,
    name: "Mecha Titan Action Figure",
    image: "/recommendation/mecha-titan-action-figure.jpg",
    price: 44.99,
    rating: 4.8,
    reviewCount: 156,
    category: "Action Figures",
  },
  {
    id: 7,
    name: "Shadow Ninja Action Figure",
    image: "/recommendation/shadow-ninja-action-figure.jpg",
    price: 34.99,
    rating: 4.6,
    reviewCount: 133,
    category: "Action Figures",
  },
  {
    id: 8,
    name: "Hot Wheels Flame Charger",
    image: "/recommendation/hot-wheels-flame-charger.webp",
    price: 12.99,
    rating: 4.7,
    reviewCount: 402,
    category: "Hot Wheels",
  },
];

export async function GET() {
  const randomRecommendation = RECOMMENDATION
    .sort(() => Math.random() - 0.5)
    .slice(0, 5);

  return Response.json({ data: randomRecommendation });
}
