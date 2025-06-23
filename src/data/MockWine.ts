// Mock wine data for the wine platform
// This data can be used across all user types (Producers, Retailers, Enthusiasts)
// with different views and access patterns

// Mock wine data for the wine platform
// This data can be used across all user types (Producers, Retailers, Enthusiasts)
// with different views and access patterns
import type {Wine} from './Wine';

// Centralized wine data
export const wines: Wine[] = [
  {
    id: "wine_001",
    name: "Reserve Pinot Noir",
    vintage: 2019,
    size: 750,
    producer: "Vineyard XYZ",
    producerId: "prod_001",
    color: "red",
    closure: "cork",
    shape: "burgundy",
    type: "still",
    description: "Elegant with notes of cherry, raspberry and subtle oak",
    alcohol: 13.5,
    acid: 6.2,
    pH: 3.4,
    bottleAging: 18,
    subarea: "Russian River Valley",
    price: 54.99,
    regularPrice: 59.99,
    casePrice: 49.99,
    availability: "in-stock",
    available: 24,
    seller: "Vineyard XYZ",
    sellerType: "producer",
    varietal: "Pinot Noir",
    tags: ["organic", "estate-grown", "limited-production"],
    bottleSize: "750ml",
    rating: 4.6,
    reviewCount: 89,
    isActive: true,
    listedDate: "2023-05-15",
    lastUpdated: "2023-06-15",
    unitsSold: 189,
    revenue: 14175.00,
    trend: "stable",
    popularityScore: 85,
    priceRange: "$50-100"
  },
  {
    id: "wine_002",
    name: "Cabernet Sauvignon",
    vintage: 2019,
    size: 750,
    producer: "Silver Oak",
    producerId: "prod_004",
    color: "red",
    closure: "cork",
    shape: "standard",
    type: "still",
    description: "Rich and full-bodied with notes of blackcurrant and cedar",
    alcohol: 14.8,
    acid: 5.8,
    pH: 3.6,
    bottleAging: 24,
    subarea: "Alexander Valley",
    price: 79.99,
    regularPrice: 89.99,
    casePrice: 71.99,
    availability: "in-stock",
    available: 36,
    seller: "Silver Oak",
    sellerType: "producer",
    varietal: "Cabernet Sauvignon",
    tags: ["american-oak", "premium", "cellar-worthy"],
    bottleSize: "750ml",
    rating: 4.8,
    reviewCount: 156,
    isActive: true,
    listedDate: "2023-04-20",
    lastUpdated: "2023-06-12",
    unitsSold: 245,
    revenue: 18375.00,
    trend: "up",
    popularityScore: 92,
    priceRange: "$50-100"
  },
  {
    id: "wine_003",
    name: "Grand Vin",
    vintage: 2018,
    size: 750,
    producer: "Château ABC",
    producerId: "prod_002",
    color: "red",
    closure: "cork",
    shape: "bordeaux",
    type: "still",
    description: "Complex Bordeaux blend with notes of blackberry, tobacco and leather",
    alcohol: 14.2,
    acid: 6.0,
    pH: 3.5,
    bottleAging: 36,
    subarea: "Saint-Julien",
    price: 120.00,
    regularPrice: 135.00,
    casePrice: 108.00,
    availability: "limited",
    available: 18,
    seller: "Château ABC",
    sellerType: "producer",
    varietal: "Bordeaux Blend",
    tags: ["bordeaux", "premium", "age-worthy", "traditional"],
    bottleSize: "750ml",
    rating: 4.9,
    reviewCount: 67,
    isActive: true,
    listedDate: "2023-03-10",
    lastUpdated: "2023-06-10",
    unitsSold: 78,
    revenue: 11700.00,
    trend: "up",
    popularityScore: 88,
    priceRange: "$100-200"
  },
  {
    id: "wine_004",
    name: "Tignanello",
    vintage: 2018,
    size: 750,
    producer: "Antinori",
    producerId: "prod_006",
    color: "red",
    closure: "cork",
    shape: "standard",
    type: "still",
    description: "Super Tuscan with intense flavors of dark fruit, chocolate and spice",
    alcohol: 14.0,
    acid: 5.9,
    pH: 3.5,
    bottleAging: 30,
    subarea: "Chianti Classico",
    price: 110.00,
    regularPrice: 125.00,
    casePrice: 99.00,
    availability: "limited",
    available: 12,
    seller: "Antinori",
    sellerType: "producer",
    varietal: "Sangiovese Blend",
    tags: ["super-tuscan", "premium", "iconic", "collectible"],
    bottleSize: "750ml",
    rating: 4.9,
    reviewCount: 234,
    isActive: true,
    listedDate: "2023-02-28",
    lastUpdated: "2023-06-11",
    unitsSold: 45,
    revenue: 6750.00,
    trend: "stable",
    popularityScore: 95,
    priceRange: "$100-200"
  },
  {
    id: "wine_005",
    name: "Sauvignon Blanc",
    vintage: 2022,
    size: 750,
    producer: "Cloudy Bay",
    producerId: "prod_005",
    color: "white",
    closure: "screw cap",
    shape: "standard",
    type: "still",
    description: "Crisp and vibrant with notes of citrus, passion fruit and fresh herbs",
    alcohol: 13.0,
    acid: 7.2,
    pH: 3.2,
    bottleAging: 0,
    subarea: "Wairau Valley",
    price: 28.99,
    regularPrice: 32.99,
    casePrice: 26.99,
    availability: "in-stock",
    available: 48,
    seller: "Cloudy Bay",
    sellerType: "producer",
    varietal: "Sauvignon Blanc",
    tags: ["new-zealand", "fresh", "sustainable", "food-friendly"],
    bottleSize: "750ml",
    rating: 4.5,
    reviewCount: 312,
    isActive: true,
    listedDate: "2023-06-01",
    lastUpdated: "2023-06-14",
    unitsSold: 156,
    revenue: 9360.00,
    trend: "down",
    popularityScore: 78,
    priceRange: "under-50"
  },
  {
    id: "wine_006",
    name: "Gran Reserva",
    vintage: 2017,
    size: 750,
    producer: "Bodega 123",
    producerId: "prod_003",
    color: "red",
    closure: "cork",
    shape: "standard",
    type: "still",
    description: "Traditional Rioja with notes of red fruit, vanilla and leather",
    alcohol: 13.8,
    acid: 6.1,
    pH: 3.4,
    bottleAging: 48,
    subarea: "Rioja Alta",
    price: 45.00,
    regularPrice: 50.00,
    casePrice: 40.50,
    availability: "in-stock",
    available: 30,
    seller: "Bodega 123",
    sellerType: "producer",
    varietal: "Tempranillo",
    tags: ["rioja", "traditional", "aged", "spanish"],
    bottleSize: "750ml",
    rating: 4.4,
    reviewCount: 98,
    isActive: true,
    listedDate: "2023-04-15",
    lastUpdated: "2023-06-08",
    unitsSold: 67,
    revenue: 4020.00,
    trend: "stable",
    popularityScore: 72,
    priceRange: "under-50"
  },
  {
    id: "wine_007",
    name: "Reserve Cabernet Sauvignon",
    vintage: 2018,
    size: 750,
    producer: "Diamond Creek",
    producerId: "prod_007",
    color: "red",
    closure: "cork",
    shape: "standard",
    type: "still",
    description: "A bold, structured Cabernet with notes of blackcurrant, cedar, and tobacco",
    alcohol: 15.2,
    acid: 5.5,
    pH: 3.7,
    bottleAging: 30,
    subarea: "Diamond Mountain",
    price: 185.00,
    regularPrice: 195.00,
    casePrice: 166.50,
    availability: "limited",
    available: 8,
    seller: "Diamond Creek",
    sellerType: "producer",
    varietal: "Cabernet Sauvignon",
    tags: ["napa-valley", "volcanic-soil", "premium", "collectible"],
    bottleSize: "750ml",
    rating: 4.9,
    reviewCount: 45,
    isActive: true,
    listedDate: "2023-01-15",
    lastUpdated: "2023-06-13",
    unitsSold: 23,
    revenue: 4255.00,
    trend: "up",
    popularityScore: 89,
    priceRange: "over-200"
  },
  {
    id: "wine_008",
    name: "Grand Cru Chardonnay",
    vintage: 2019,
    size: 750,
    producer: "Louis Latour",
    producerId: "prod_008",
    color: "white",
    closure: "cork",
    shape: "burgundy",
    type: "still",
    description: "Elegant and balanced with notes of apple, pear, and subtle oak",
    alcohol: 13.2,
    acid: 6.8,
    pH: 3.3,
    bottleAging: 12,
    subarea: "Beaune",
    price: 75.00,
    regularPrice: 82.00,
    casePrice: 67.50,
    availability: "in-stock",
    available: 20,
    seller: "Louis Latour",
    sellerType: "producer",
    varietal: "Chardonnay",
    tags: ["burgundy", "grand-cru", "premium", "traditional"],
    bottleSize: "750ml",
    rating: 4.7,
    reviewCount: 123,
    isActive: true,
    listedDate: "2023-03-20",
    lastUpdated: "2023-06-09",
    unitsSold: 89,
    revenue: 6675.00,
    trend: "stable",
    popularityScore: 81,
    priceRange: "$50-100"
  },
  {
    id: "wine_009",
    name: "Barolo",
    vintage: 2017,
    size: 750,
    producer: "Pio Cesare",
    producerId: "prod_009",
    color: "red",
    closure: "cork",
    shape: "standard",
    type: "still",
    description: "Classic Barolo with aromas of rose, tar, and red fruits with firm tannins",
    alcohol: 14.5,
    acid: 6.3,
    pH: 3.4,
    bottleAging: 42,
    subarea: "Barolo",
    price: 95.00,
    regularPrice: 105.00,
    casePrice: 85.50,
    availability: "in-stock",
    available: 15,
    seller: "Pio Cesare",
    sellerType: "producer",
    varietal: "Nebbiolo",
    tags: ["barolo", "piedmont", "traditional", "age-worthy"],
    bottleSize: "750ml",
    rating: 4.8,
    reviewCount: 87,
    isActive: true,
    listedDate: "2023-02-10",
    lastUpdated: "2023-06-07",
    unitsSold: 34,
    revenue: 3230.00,
    trend: "up",
    popularityScore: 86,
    priceRange: "$50-100"
  },
  {
    id: "wine_010",
    name: "Chardonnay",
    vintage: 2021,
    size: 750,
    producer: "Vineyard XYZ",
    producerId: "prod_001",
    color: "white",
    closure: "cork",
    shape: "standard",
    type: "still",
    description: "Crisp and mineral-driven with notes of green apple and citrus",
    alcohol: 13.1,
    acid: 7.0,
    pH: 3.2,
    bottleAging: 6,
    subarea: "Russian River Valley",
    price: 32.99,
    regularPrice: 36.99,
    casePrice: 29.69,
    availability: "in-stock",
    available: 42,
    seller: "Vineyard XYZ",
    sellerType: "producer",
    varietal: "Chardonnay",
    tags: ["organic", "unoaked", "fresh", "sustainable"],
    bottleSize: "750ml",
    rating: 4.3,
    reviewCount: 156,
    isActive: true,
    listedDate: "2023-05-01",
    lastUpdated: "2023-06-15",
    unitsSold: 134,
    revenue: 4421.66,
    trend: "stable",
    popularityScore: 74,
    priceRange: "under-50"
  },
  {
    id: "wine_011",
    name: "Pinot Noir",
    vintage: 2020,
    size: 750,
    producer: "Cloudy Bay",
    producerId: "prod_005",
    color: "red",
    closure: "cork",
    shape: "burgundy",
    type: "still",
    description: "Silky and elegant with notes of cherry, strawberry and earthy undertones",
    alcohol: 13.8,
    acid: 6.4,
    pH: 3.3,
    bottleAging: 12,
    subarea: "Central Otago",
    price: 48.99,
    regularPrice: 54.99,
    casePrice: 44.09,
    availability: "in-stock",
    available: 28,
    seller: "Cloudy Bay",
    sellerType: "producer",
    varietal: "Pinot Noir",
    tags: ["new-zealand", "elegant", "sustainable", "cool-climate"],
    bottleSize: "750ml",
    rating: 4.5,
    reviewCount: 201,
    isActive: true,
    listedDate: "2023-04-10",
    lastUpdated: "2023-06-14",
    unitsSold: 98,
    revenue: 4801.02,
    trend: "up",
    popularityScore: 79,
    priceRange: "under-50"
  },
  {
    id: "wine_012",
    name: "Chianti Classico",
    vintage: 2019,
    size: 750,
    producer: "Antinori",
    producerId: "prod_006",
    color: "red",
    closure: "cork",
    shape: "standard",
    type: "still",
    description: "Traditional Chianti with notes of cherry, herbs and leather",
    alcohol: 13.5,
    acid: 6.2,
    pH: 3.4,
    bottleAging: 18,
    subarea: "Chianti Classico",
    price: 35.00,
    regularPrice: 39.00,
    casePrice: 31.50,
    availability: "in-stock",
    available: 60,
    seller: "Antinori",
    sellerType: "producer",
    varietal: "Sangiovese",
    tags: ["chianti", "traditional", "food-friendly", "italian"],
    bottleSize: "750ml",
    rating: 4.4,
    reviewCount: 289,
    isActive: true,
    listedDate: "2023-05-20",
    lastUpdated: "2023-06-11",
    unitsSold: 167,
    revenue: 5845.00,
    trend: "stable",
    popularityScore: 76,
    priceRange: "under-50"
  }
];

// Helper functions to get wine data for different contexts

// Get basic wine info for general display
export const getWineBasicInfo = (wineId: string) => {
  const wine = wines.find(w => w.id === wineId);
  if (!wine) return null;

  return {
    id: wine.id,
    name: wine.name,
    vintage: wine.vintage,
    producer: wine.producer,
    producerId: wine.producerId,
    varietal: wine.varietal,
    region: wine.subarea,
    price: wine.price,
    description: wine.description,
    rating: wine.rating,
    reviewCount: wine.reviewCount
  };
};

// Get wine data for retailer context (with deals and pricing)
export const getWineForRetailer = (wineId: string) => {
  const wine = wines.find(w => w.id === wineId);
  if (!wine) return null;

  return {
    id: wine.id,
    name: wine.name,
    vintage: wine.vintage,
    producer: wine.producer,
    producerId: wine.producerId,
    region: wine.subarea,
    price: wine.price,
    regularPrice: wine.regularPrice,
    casePrice: wine.casePrice,
    description: wine.description,
    available: wine.available,
    availability: wine.availability
  };
};

// Get wine data for enthusiast context (with detailed info)
export const getWineForEnthusiast = (wineId: string) => {
  const wine = wines.find(w => w.id === wineId);
  if (!wine) return null;

  return {
    id: wine.id,
    name: wine.name,
    vintage: wine.vintage,
    producer: wine.producer,
    producerId: wine.producerId,
    region: wine.subarea,
    subregion: wine.subarea,
    varietal: wine.varietal,
    price: wine.price,
    availability: wine.availability,
    seller: wine.seller,
    sellerType: wine.sellerType,
    rating: wine.rating,
    reviewCount: wine.reviewCount,
    description: wine.description,
    alcohol: wine.alcohol,
    bottleSize: wine.bottleSize,
    tags: wine.tags
  };
};

// Get wine data for producer context (with sales analytics)
export const getWineForProducer = (wineId: string) => {
  const wine = wines.find(w => w.id === wineId);
  if (!wine) return null;

  return {
    id: wine.id,
    name: wine.name,
    vintage: wine.vintage,
    region: wine.subarea,
    available: wine.available,
    price: wine.price,
    availability: wine.availability,
    listedDate: wine.listedDate,
    unitsSold: wine.unitsSold,
    revenue: wine.revenue,
    trend: wine.trend,
    isActive: wine.isActive
  };
};

// Get wines by producer
export const getWinesByProducer = (producerId: string) => {
  return wines.filter(wine => wine.producerId === producerId);
};

// Get wines for different contexts
export const getAllWinesForRetailer = () => {
  return wines.map(wine => getWineForRetailer(wine.id)).filter(Boolean);
};

export const getAllWinesForEnthusiast = () => {
  return wines.map(wine => getWineForEnthusiast(wine.id)).filter(Boolean);
};

export const getAllWinesForProducer = (producerId?: string) => {
  const wineList = producerId ? getWinesByProducer(producerId) : wines;
  return wineList.map(wine => getWineForProducer(wine.id)).filter(Boolean);
};

export const getAllWinesBasicInfo = () => {
  return wines.map(wine => getWineBasicInfo(wine.id)).filter(Boolean);
};

// Get trending wines
export const getTrendingWines = () => {
  return wines
    .filter(wine => wine.popularityScore && wine.popularityScore > 80)
    .sort((a, b) => (b.popularityScore || 0) - (a.popularityScore || 0))
    .slice(0, 10);
};

// Get wines by price range
export const getWinesByPriceRange = (priceRange: string) => {
  return wines.filter(wine => wine.priceRange === priceRange);
};

// Get wines by availability
export const getWinesByAvailability = (availability: string) => {
  return wines.filter(wine => wine.availability === availability);
};

// Helper functions to generate data for components

// Get available wines for marketplace (simplified format)
export const getAvailableWinesForMarketplace = () => {
  return wines.slice(0, 5).map(wine => ({
    id: parseInt(wine.id.replace('wine_', '')),
    name: `${wine.vintage} ${wine.name}`,
    producer: wine.producer,
    region: wine.subarea,
    price: wine.price,
    seller: wine.seller || 'Wine Merchant'
  }));
};

// Get featured wines for home page
export const getFeaturedWinesForHome = () => {
  return wines.slice(6, 9).map(wine => ({
    id: parseInt(wine.id.replace('wine_', '')) + 500,
    name: `${wine.vintage} ${wine.name}`,
    producer: wine.producer,
    region: wine.subarea,
    description: wine.description
  }));
};

// Get unique regions from wine data
export const getRegionsFromWines = () => {
  const regions = [...new Set(wines.map(wine => wine.subarea))];
  return regions.sort();
};

// Get unique varietals from wine data
export const getVarietalsFromWines = () => {
  const varietals = [...new Set(wines.map(wine => wine.varietal))];
  return varietals.sort();
};

// Get collection data (for user profiles)
export const getCollectionData = () => {
  return [
    { id: 1, name: wines[0].name, producer: wines[0].producer, region: wines[0].subarea, quantity: 3, notes: 'Birthday gift, save for special occasion' },
    { id: 2, name: wines[1].name, producer: wines[1].producer, region: wines[1].subarea, quantity: 2, notes: 'Purchased during winery visit' },
    { id: 3, name: wines[7].name, producer: wines[7].producer, region: wines[7].subarea, quantity: 1, notes: 'Recommended by sommelier' },
    { id: 4, name: wines[8].name, producer: wines[8].producer, region: wines[8].subarea, quantity: 2, notes: 'Aging potential: 10-15 years' },
  ];
};

// Get wishlist data (for user profiles)
export const getWishlistData = () => {
  return [
    { id: 101, name: 'Opus One', producer: 'Opus One Winery', region: 'Napa Valley', notes: 'Consistently highly rated' },
    { id: 102, name: 'La Tâche', producer: 'Domaine de la Romanée-Conti', region: 'Burgundy', notes: 'Bucket list wine' },
    { id: 103, name: 'Sassicaia', producer: 'Tenuta San Guido', region: 'Tuscany', notes: 'Super Tuscan' },
  ];
};

// Get order history data (for user profiles)
export const getOrderHistoryData = () => {
  return [
    { id: 401, date: '2023-05-15', items: [`${wines[0].vintage} ${wines[0].name} (2)`, `${wines[7].vintage} ${wines[7].name} (1)`], total: 219.97, status: 'Delivered' },
    { id: 402, date: '2023-03-22', items: [`${wines[1].vintage} ${wines[1].name} (1)`, `${wines[4].vintage} ${wines[4].name} (2)`], total: 154.97, status: 'Delivered' },
    { id: 403, date: '2023-01-10', items: ['NV Champagne Brut (1)'], total: 59.99, status: 'Delivered' },
  ];
};
