// Wine schema definitions for the wine platform
// This file contains only the Wine interface/type definitions

// WineCore interface definition - the canonical wine data model
export interface WineCore {
  id: string;
  name: string;
  vintage: number;
  size: number;
  producer: string;
  color: string;
  closure: string;
  shape: string;
  type: string;
  description: string;
  alcohol: number;
  acid: number;
  pH: number;
  bottleAging: number;
  subarea: string;
}

export interface Wine extends WineCore {
  // Additional fields beyond WineCore

  // Pricing information
  price: number;
  regularPrice?: number; // For showing discounts
  casePrice?: number; // Price per bottle when buying a case

  // Availability and inventory
  availability: 'in-stock' | 'limited' | 'pre-order' | 'sold-out';
  available?: number; // Number of bottles available

  // Sales and marketplace information
  seller?: string;
  sellerType?: 'retailer' | 'producer';

  // Enhanced information
  varietal: string;
  tags: string[];
  bottleSize: string; // "750ml", "1.5L", etc.

  // Ratings and reviews
  rating?: number;
  reviewCount?: number;

  // Producer relationship
  producerId: string; // Links to producer data

  // Status and metadata
  isActive: boolean;
  listedDate?: string;
  lastUpdated: string;

  // Context-specific data
  unitsSold?: number; // For producer analytics
  revenue?: number; // For producer analytics
  trend?: 'up' | 'down' | 'stable'; // For producer analytics
  popularityScore?: number; // For trending analysis
  priceRange?: string; // For categorization
}