export type PageType = 
  | 'home' 
  | 'shop' 
  | 'product' 
  | 'baby' 
  | 'about' 
  | 'b2b' 
  | 'track' 
  | 'contact';

export type BlanketCategory = 
  | 'all'
  | '2-ply-double'
  | '1-ply-flannel'
  | 'baby-kids'
  | 'bedspread-sets'
  | 'bridal-trousseau'
  | 'summer-fleece'
  | 'institutional';

export type BlanketSize = 
  | 'Single (160 x 220 cm)'
  | 'Double / Queen (200 x 240 cm)'
  | 'King (220 x 240 cm)'
  | 'Baby / Crib (100 x 120 cm)';

export type WarmthRating = 'Light Summer' | 'Medium All-Season' | 'Heavy Winter' | 'Arctic Ultra-Warm';

export interface ProductVariant {
  id: string;
  name: string;
  colorHex: string;
  colorName: string;
  image: string;
  inStock: boolean;
}

export interface Product {
  id: string;
  name: string;
  urduName?: string;
  tagline: string;
  category: BlanketCategory;
  pricePKR: number;
  originalPricePKR?: number;
  rating: number;
  reviewCount: number;
  ply: '1-Ply' | '2-Ply' | 'Quilted / Multi-layer';
  weightKg: number;
  dimensions: string;
  material: string;
  warmthRating: WarmthRating;
  togRating: number;
  description: string;
  features: string[];
  careInstructions: string[];
  images: string[];
  variants: ProductVariant[];
  isBestSeller?: boolean;
  isNewArrival?: boolean;
  isFeatured?: boolean;
  inStock: boolean;
}

export interface CartItem {
  product: Product;
  selectedVariant: ProductVariant;
  selectedSize: BlanketSize;
  quantity: number;
}

export interface Review {
  id: string;
  productId: string;
  author: string;
  city: string;
  rating: number;
  date: string;
  title: string;
  comment: string;
  verifiedPurchase: boolean;
}

export interface BranchLocation {
  id: string;
  name: string;
  type: 'Manufacturing Plant' | 'Head Office' | 'Textile Mill' | 'Wholesale Depot' | 'Regional Hub';
  city: string;
  address: string;
  phone: string;
  email: string;
  hours: string;
  coordinates: { lat: number; lng: number };
  badge?: string;
}

export type CurrencyCode = 'PKR' | 'USD' | 'AED' | 'SAR';

export interface CurrencyConfig {
  code: CurrencyCode;
  symbol: string;
  rateFromPKR: number; // e.g. 1 USD = 280 PKR => rate is 1/280
}
