// Mock user profile data for different user types
// This centralizes all user-specific data used across the platform

import { wines } from './MockWine';
import { producers } from './MockProducer';

export interface UserProfile {
  name: string;
  email: string;
  memberSince: string;
  preferences?: {
    favoriteVarietals: string[];
    favoriteRegions: string[];
    tasteProfile: string[];
  };
  collection?: Array<{
    name: string;
    producer: string;
    rating?: number;
    notes: string;
  }>;
  inventory?: Array<{
    name: string;
    producer?: string;
    stock: number;
    price: number;
    lastSync: string;
  }>;
  shopifyStore?: string;
  squareAccount?: string;
}

// Enthusiast user profile
export const enthusiastProfile: UserProfile = {
  name: 'Jane Smith',
  email: 'jane.smith@example.com',
  memberSince: 'January 2023',
  preferences: {
    favoriteVarietals: [wines[1].varietal, wines[0].varietal, wines[7].varietal], // Cabernet Sauvignon, Pinot Noir, Chardonnay
    favoriteRegions: [wines[1].subarea, wines[7].subarea, wines[3].subarea], // Alexander Valley, Beaune, Chianti Classico
    tasteProfile: ['Full-bodied', 'Fruity', 'Oak']
  },
  collection: [
    { name: `${wines[1].vintage} ${wines[1].name}`, producer: wines[1].producer, rating: 4.5, notes: 'Bold with dark fruit notes' },
    { name: `${wines[7].vintage} ${wines[7].name}`, producer: wines[7].producer, rating: 4.0, notes: 'Crisp with apple and pear' },
    { name: `${wines[0].vintage} ${wines[0].name}`, producer: wines[0].producer, rating: 4.8, notes: 'Elegant with cherry and spice' }
  ]
};

// Producer user profile
export const producerProfile: UserProfile = {
  name: producers[0].name, // Vineyard XYZ
  email: producers[0].email || 'contact@vineyardestate.com',
  memberSince: 'March 2022',
  shopifyStore: 'vineyardestate.myshopify.com',
  inventory: [
    { name: `${wines[1].vintage} ${wines[1].name}`, stock: wines[1].available || 245, price: wines[1].price, lastSync: '2023-06-10' },
    { name: `${wines[7].vintage} ${wines[7].name}`, stock: wines[7].available || 180, price: wines[7].price, lastSync: '2023-06-10' },
    { name: `${wines[0].vintage} ${wines[0].name}`, stock: wines[0].available || 56, price: wines[0].price, lastSync: '2023-06-10' }
  ]
};

// Retailer user profile
export const retailerProfile: UserProfile = {
  name: 'Downtown Wine Shop',
  email: 'info@downtownwine.com',
  memberSince: 'November 2022',
  squareAccount: 'downtown-wine-shop',
  inventory: [
    { name: `${wines[1].vintage} ${wines[1].name}`, producer: wines[1].producer, stock: 24, price: 52.99, lastSync: '2023-06-12' },
    { name: `${wines[7].vintage} ${wines[7].name}`, producer: wines[7].producer, stock: 18, price: 42.99, lastSync: '2023-06-12' },
    { name: `${wines[0].vintage} ${wines[0].name}`, producer: wines[0].producer, stock: 12, price: 48.99, lastSync: '2023-06-12' }
  ]
};

// Guest user profile
export const guestProfile: UserProfile = {
  name: 'Guest User',
  email: 'Please sign in to view your profile',
  memberSince: '',
  preferences: {
    favoriteVarietals: [],
    favoriteRegions: [],
    tasteProfile: []
  }
};

// Helper function to get user profile by type
export const getUserProfileByType = (userType: string): UserProfile => {
  switch (userType) {
    case 'Enthusiast':
      return enthusiastProfile;
    case 'Producer':
      return producerProfile;
    case 'Retailer':
      return retailerProfile;
    default:
      return guestProfile;
  }
};
