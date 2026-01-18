export interface Product {
  id: number;
  name: string;
  collection: string;
  category: string;
  price: number;
  originalPrice?: number;
  images: string[];
  description: string;
  sizes: string[];
  colors: { name: string; hex: string }[];
  inStock: boolean;
  isNew: boolean;
  isLimited: boolean;
  dropDate?: string;
  tags: string[];
}

export interface Category {
  id: string;
  label: string;
  icon: string;
}

export interface Collection {
  id: string;
  name: string;
  description: string;
  image: string;
}

export const categories: Category[] = [
  { id: "all", label: "ALL", icon: "Grid" },
  { id: "hoodies", label: "HOODIES", icon: "Shirt" },
  { id: "jackets", label: "JACKETS", icon: "Shirt" },
  { id: "tees", label: "TEES", icon: "Shirt" },
  { id: "pants", label: "PANTS", icon: "Shirt" },
  { id: "accessories", label: "ACCESSORIES", icon: "Watch" },
];

export const collections: Collection[] = [
  {
    id: "theartifash-collection",
    name: "THEARTIFASH",
    description: "Where darkness meets design",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
  },
  {
    id: "chrome-collection",
    name: "CHROME",
    description: "Metallic futures, unlimited potential",
    image: "https://images.unsplash.com/photo-1544441893-675973e31985?w=800&q=80",
  },
  {
    id: "blood-collection",
    name: "BLOOD",
    description: "Raw energy, pure ambition",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80",
  },
  {
    id: "neon-collection",
    name: "NEON",
    description: "Electric nights, endless possibilities",
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&q=80",
  },
];

export const productsData: Product[] = [
  {
    id: 1,
    name: "SHADOW HOODIE",
    collection: "THEARTIFASH",
    category: "hoodies",
    price: 189,
    images: [
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&q=80",
      "https://images.unsplash.com/photo-1578768079052-aa76e52ff62e?w=800&q=80",
    ],
    description: "Heavyweight cotton. Oversized fit. Zero compromises.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "THEARTIFASH BLACK", hex: "#0A0A0A" },
      { name: "CHROME", hex: "#C0C0C0" },
    ],
    inStock: true,
    isNew: true,
    isLimited: false,
    tags: ["bestseller", "oversized"],
  },
  {
    id: 2,
    name: "PHANTOM JACKET",
    collection: "THEARTIFASH",
    category: "jackets",
    price: 349,
    originalPrice: 449,
    images: [
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&q=80",
      "https://images.unsplash.com/photo-1559551409-dadc959f76b8?w=800&q=80",
    ],
    description: "Technical fabric. Weather resistant. Built for the streets.",
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "THEARTIFASH BLACK", hex: "#0A0A0A" },
      { name: "BLOOD RED", hex: "#FF1744" },
    ],
    inStock: true,
    isNew: false,
    isLimited: true,
    dropDate: "2025-02-01",
    tags: ["limited", "technical"],
  },
  {
    id: 3,
    name: "THEARTIFASH TEE",
    collection: "THEARTIFASH",
    category: "tees",
    price: 79,
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800&q=80",
    ],
    description: "Premium cotton. Boxy cut. Statement made.",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "THEARTIFASH BLACK", hex: "#0A0A0A" },
      { name: "PURE WHITE", hex: "#FFFFFF" },
      { name: "CHROME", hex: "#C0C0C0" },
    ],
    inStock: true,
    isNew: true,
    isLimited: false,
    tags: ["essential", "basics"],
  },
  {
    id: 4,
    name: "CHROME CARGO",
    collection: "CHROME",
    category: "pants",
    price: 229,
    images: [
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=800&q=80",
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=800&q=80",
    ],
    description: "Utility meets luxury. Six pockets. Infinite possibilities.",
    sizes: ["28", "30", "32", "34", "36"],
    colors: [
      { name: "THEARTIFASH BLACK", hex: "#0A0A0A" },
      { name: "CHARCOAL", hex: "#333333" },
    ],
    inStock: true,
    isNew: false,
    isLimited: false,
    tags: ["utility", "cargo"],
  },
  {
    id: 5,
    name: "BLOOD BOMBER",
    collection: "BLOOD",
    category: "jackets",
    price: 429,
    images: [
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&q=80",
      "https://images.unsplash.com/photo-1548126032-079a0fb0099d?w=800&q=80",
    ],
    description: "Satin finish. Bold statement. Unapologetic power.",
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "BLOOD RED", hex: "#FF1744" },
      { name: "THEARTIFASH BLACK", hex: "#0A0A0A" },
      { name: "THEARTIFASH BLACK", hex: "#0A0A0A" },
    ],
    inStock: true,
    isNew: true,
    isLimited: true,
    tags: ["premium", "statement"],
  },
  {
    id: 6,
    name: "NEON BEANIE",
    collection: "NEON",
    category: "accessories",
    price: 49,
    images: [
      "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?w=800&q=80",
    ],
    description: "Ribbed knit. Embroidered logo. Head turner.",
    sizes: ["ONE SIZE"],
    colors: [
      { name: "NEON GREEN", hex: "#39FF14" },
      { name: "THEARTIFASH BLACK", hex: "#0A0A0A" },
      { name: "ELECTRIC BLUE", hex: "#00D4FF" },
    ],
    inStock: true,
    isNew: false,
    isLimited: false,
    tags: ["accessories", "essentials"],
  },
  {
    id: 7,
    name: "GHOST HOODIE",
    collection: "CHROME",
    category: "hoodies",
    price: 199,
    images: [
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=800&q=80",
      "https://images.unsplash.com/photo-1542272604-787c3835535d?w=800&q=80",
    ],
    description: "Reflective details. Night vision approved.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "CHROME", hex: "#C0C0C0" },
      { name: "THEARTIFASH BLACK", hex: "#0A0A0A" },
    ],
    inStock: true,
    isNew: true,
    isLimited: false,
    tags: ["reflective", "technical"],
  },
  {
    id: 8,
    name: "VOLTAGE TEE",
    collection: "NEON",
    category: "tees",
    price: 89,
    images: [
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=800&q=80",
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&q=80",
    ],
    description: "Neon graphics. Pure energy. Street certified.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: [
      { name: "THEARTIFASH BLACK", hex: "#0A0A0A" },
      { name: "NEON GREEN", hex: "#39FF14" },
    ],
    inStock: true,
    isNew: false,
    isLimited: true,
    dropDate: "2025-01-25",
    tags: ["graphic", "neon"],
  },
  {
    id: 9,
    name: "STEALTH PANTS",
    collection: "THEARTIFASH",
    category: "pants",
    price: 189,
    images: [
      "https://images.unsplash.com/photo-1542272604-787c3835535d?w=800&q=80",
    ],
    description: "Slim tapered. Stretch fabric. Move different.",
    sizes: ["28", "30", "32", "34", "36", "38"],
    colors: [
      { name: "THEARTIFASH BLACK", hex: "#0A0A0A" },
    ],
    inStock: true,
    isNew: false,
    isLimited: false,
    tags: ["slim", "everyday"],
  },
  {
    id: 10,
    name: "THEARTIFASH CHAIN",
    collection: "THEARTIFASH",
    category: "accessories",
    price: 129,
    images: [
      "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80",
    ],
    description: "Stainless steel. Matte finish. Power accessory.",
    sizes: ["20 INCH", "24 INCH"],
    colors: [
      { name: "MATTE BLACK", hex: "#1A1A1A" },
      { name: "CHROME", hex: "#C0C0C0" },
    ],
    inStock: true,
    isNew: true,
    isLimited: false,
    tags: ["jewelry", "chain"],
  },
  {
    id: 11,
    name: "APEX PUFFER",
    collection: "CHROME",
    category: "jackets",
    price: 549,
    originalPrice: 649,
    images: [
      "https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=800&q=80",
    ],
    description: "Maximum warmth. Maximum presence. Zero regrets.",
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "CHROME", hex: "#C0C0C0" },
      { name: "THEARTIFASH BLACK", hex: "#0A0A0A" },
    ],
    inStock: false,
    isNew: false,
    isLimited: true,
    tags: ["winter", "premium"],
  },
  {
    id: 12,
    name: "SIGNAL HOODIE",
    collection: "NEON",
    category: "hoodies",
    price: 209,
    images: [
      "https://images.unsplash.com/photo-1509942774463-acf339cf87d5?w=800&q=80",
    ],
    description: "Glow-in-dark print. Stand out. Be seen.",
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "THEARTIFASH BLACK", hex: "#0A0A0A" },
      { name: "ELECTRIC BLUE", hex: "#00D4FF" },
    ],
    inStock: true,
    isNew: true,
    isLimited: true,
    dropDate: "2025-02-14",
    tags: ["glow", "limited"],
  },
];

export interface Testimonial {
  id: number;
  name: string;
  handle: string;
  text: string;
  avatar: string;
  verified: boolean;
}

export const testimonialsData: Testimonial[] = [
  {
    id: 1,
    name: "Yassine Benali",
    handle: "@yassine.bnl",
    text: "Qualité top ! J'ai reçu ma commande en 24h à Casablanca. Le hoodie est magnifique.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80",
    verified: true,
  },
  {
    id: 2,
    name: "Sarah K.",
    handle: "@sarah.style",
    text: "خدمة زوينة بزاف، تعامل راقي و الملابس جودتها عالية. شكرا THEARTIFASH!",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80",
    verified: true,
  },
  {
    id: 3,
    name: "Omar Drissi",
    handle: "@odrissi",
    text: "Mchrite Shadow Hoodie, sara7a wa3er. Tissu mli7 o design nqi.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&q=80",
    verified: true,
  },
  {
    id: 4,
    name: "Houda El",
    handle: "@houdalifestyle",
    text: "J'adore ! C'est ma deuxième commande et toujours satisfaite. Recommandé à 100%.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&q=80",
    verified: true,
  },
];
