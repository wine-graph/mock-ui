// Mock data for enthusiast marketplace
// This includes wine shops with locations, enhanced search, and producer direct options

export interface WineShop {
  id: string;
  name: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  latitude: number;
  longitude: number;
  phone: string;
  website?: string;
  specialties: string[];
  rating: number;
  reviewCount: number;
  distance?: number; // Distance from user in miles
  featuredWines: string[];
}

export interface EnhancedWine {
  id: string;
  name: string;
  vintage: number;
  producer: string;
  region: string;
  subregion?: string;
  varietal: string;
  price: number;
  availability: 'in-stock' | 'limited' | 'pre-order' | 'sold-out';
  seller: string;
  sellerType: 'retailer' | 'producer';
  rating?: number;
  reviewCount?: number;
  description: string;
  alcoholContent: number;
  bottleSize: string;
  tags: string[];
}

export interface ProducerDirect {
  id: string;
  producerName: string;
  region: string;
  description: string;
  website: string;
  shippingStates: string[];
  specialOffers: string[];
  featuredWines: EnhancedWine[];
  rating: number;
  reviewCount: number;
  establishedYear: number;
}

// Mock wine shops data with locations
export const wineShopsData: WineShop[] = [
  {
    id: "ws_1",
    name: "Vintage Cellars",
    address: "123 Main Street",
    city: "Napa",
    state: "CA",
    zipCode: "94559",
    latitude: 38.2975,
    longitude: -122.2869,
    phone: "(707) 555-0123",
    website: "www.vintagecellars.com",
    specialties: ["Napa Valley Wines", "Rare Vintages", "Wine Tastings"],
    rating: 4.8,
    reviewCount: 127,
    distance: 2.3,
    featuredWines: ["2019 Cabernet Sauvignon", "2020 Chardonnay", "2018 Pinot Noir"]
  },
  {
    id: "ws_2",
    name: "The Wine Merchant",
    address: "456 Oak Avenue",
    city: "San Francisco",
    state: "CA",
    zipCode: "94102",
    latitude: 37.7749,
    longitude: -122.4194,
    phone: "(415) 555-0456",
    website: "www.winemerchant.com",
    specialties: ["French Wines", "Organic Selections", "Wine Education"],
    rating: 4.6,
    reviewCount: 89,
    distance: 5.7,
    featuredWines: ["2017 Bordeaux Blend", "2021 Sauvignon Blanc", "NV Champagne"]
  },
  {
    id: "ws_3",
    name: "Cork & Bottle",
    address: "789 Vine Street",
    city: "Sonoma",
    state: "CA",
    zipCode: "95476",
    latitude: 38.2919,
    longitude: -122.4580,
    phone: "(707) 555-0789",
    specialties: ["Local Producers", "Small Batch Wines", "Wine Club"],
    rating: 4.7,
    reviewCount: 156,
    distance: 8.2,
    featuredWines: ["2020 Pinot Noir", "2019 Zinfandel", "2021 Rosé"]
  },
  {
    id: "ws_4",
    name: "Metropolitan Wine Co.",
    address: "321 Union Square",
    city: "San Francisco",
    state: "CA",
    zipCode: "94108",
    latitude: 37.7880,
    longitude: -122.4074,
    phone: "(415) 555-0321",
    website: "www.metrowine.com",
    specialties: ["International Wines", "Premium Selections", "Corporate Gifts"],
    rating: 4.5,
    reviewCount: 203,
    distance: 6.1,
    featuredWines: ["2018 Barolo", "2020 Riesling", "2019 Syrah"]
  },
  {
    id: "ws_5",
    name: "Hillside Wine Shop",
    address: "654 Hillside Drive",
    city: "St. Helena",
    state: "CA",
    zipCode: "94574",
    latitude: 38.5052,
    longitude: -122.4697,
    phone: "(707) 555-0654",
    specialties: ["Boutique Wineries", "Collector Wines", "Private Tastings"],
    rating: 4.9,
    reviewCount: 78,
    distance: 12.4,
    featuredWines: ["2017 Reserve Cabernet", "2019 Malbec", "2020 Viognier"]
  }
];

export const popularSearches = [
  "Opus One",
  "Dom Pérignon",
  "Caymus Cabernet",
  "Kendall-Jackson Chardonnay",
  "Silver Oak Alexander Valley",
  "Veuve Clicquot",
  "Screaming Eagle",
  "Château Margaux",
  "Penfolds Grange",
  "Cloudy Bay Sauvignon Blanc"
];