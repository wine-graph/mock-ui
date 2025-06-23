// Mock Square POS wine data for retailer sync functionality
// This simulates wine data from Square POS system

// Mock Square POS wine data for retailer sync functionality
// This simulates wine data from Square POS system
import type {WineCore} from './Wine';

// SquareWine interface extends WineCore with Square-specific properties
export interface SquareWine extends WineCore {
  // Square-specific properties
  variation: string;
  sku: string;
  category: string;
  originalDescription: string;
}

// Mock Square wines data
export const mockSquareWines: SquareWine[] = [
  {
    // Square-specific properties
    variation: "750ml Bottle",
    sku: "WINE-CAB-2019-001",
    category: "Red Wine",
    originalDescription: "Premium Cabernet Sauvignon from Napa Valley",
    
    // WineCore properties
    id: "square_wine_1",
    name: "Cabernet Sauvignon",
    vintage: 2019,
    size: 750,
    producer: "Napa Valley Estates",
    color: "Red",
    closure: "Cork",
    shape: "Bordeaux",
    type: "Still",
    description: "Rich and full-bodied with notes of blackcurrant and cedar",
    alcohol: 14.5,
    acid: 6.2,
    pH: 3.6,
    bottleAging: 24,
    subarea: "Napa Valley"
  },
  {
    // Square-specific properties
    variation: "750ml Bottle",
    sku: "WINE-CHARD-2020-002",
    category: "White Wine",
    originalDescription: "Elegant Chardonnay with oak aging",
    
    // WineCore properties
    id: "square_wine_2",
    name: "Chardonnay",
    vintage: 2020,
    size: 750,
    producer: "Sonoma Vineyards",
    color: "White",
    closure: "Cork",
    shape: "Burgundy",
    type: "Still",
    description: "Crisp and elegant with notes of apple, pear, and vanilla",
    alcohol: 13.8,
    acid: 6.8,
    pH: 3.3,
    bottleAging: 12,
    subarea: "Sonoma County"
  },
  {
    // Square-specific properties
    variation: "750ml Bottle",
    sku: "WINE-PINOT-2018-003",
    category: "Red Wine",
    originalDescription: "Delicate Pinot Noir from Oregon",
    
    // WineCore properties
    id: "square_wine_3",
    name: "Pinot Noir",
    vintage: 2018,
    size: 750,
    producer: "Willamette Valley Winery",
    color: "Red",
    closure: "Cork",
    shape: "Burgundy",
    type: "Still",
    description: "Light-bodied with notes of cherry, raspberry, and earth",
    alcohol: 13.2,
    acid: 6.5,
    pH: 3.4,
    bottleAging: 18,
    subarea: "Willamette Valley"
  },
  {
    // Square-specific properties
    variation: "750ml Bottle",
    sku: "WINE-SAUV-2021-004",
    category: "White Wine",
    originalDescription: "Fresh Sauvignon Blanc from New Zealand",
    
    // WineCore properties
    id: "square_wine_4",
    name: "Sauvignon Blanc",
    vintage: 2021,
    size: 750,
    producer: "Marlborough Estates",
    color: "White",
    closure: "Screw Cap",
    shape: "Bordeaux",
    type: "Still",
    description: "Crisp and vibrant with notes of citrus and tropical fruit",
    alcohol: 12.5,
    acid: 7.2,
    pH: 3.1,
    bottleAging: 0,
    subarea: "Marlborough"
  }
];