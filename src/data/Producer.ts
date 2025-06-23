// Producer schema definition for the wine platform
// This file contains only the Producer interface/type definitions

export interface Producer {
  id: string;
  name: string;
  region: string;
  subregion?: string;
  description: string;
  establishedYear: number;
  website?: string;
  phone?: string;
  email?: string;
  
  // Location information
  address?: string;
  city?: string;
  state?: string;
  zipCode?: string;
  latitude?: number;
  longitude?: number;
  
  // Business information
  specialties: string[];
  wineTypes: string[];
  productionVolume?: number; // bottles per year
  certifications: string[]; // organic, biodynamic, etc.
  
  // Marketing information
  featuredWine: string;
  tagline?: string;
  story?: string;
  
  // Ratings and reviews
  rating: number;
  reviewCount: number;
  
  // Business relationships
  shippingStates: string[];
  distributionChannels: string[]; // direct, retail, restaurant, etc.
  
  // Deal and pricing information (for retailers)
  hasDeals: boolean;
  dealDescription?: string;
  caseDiscount?: number; // Percentage discount for case purchases
  
  // Special offers (for enthusiasts)
  specialOffers: string[];
  
  // Producer-specific data
  isActive: boolean;
  lastUpdated: string;
}