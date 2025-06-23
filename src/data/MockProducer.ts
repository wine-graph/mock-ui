// Mock producer data for the wine platform
// This data can be used across all user types (Producers, Retailers, Enthusiasts)
// with different views and access patterns

// Mock producer data for the wine platform
// This data can be used across all user types (Producers, Retailers, Enthusiasts)
// with different views and access patterns
import type {Producer} from './Producer';

// Centralized producer data
export const producers: Producer[] = [
  {
    id: "prod_001",
    name: "Vineyard XYZ",
    region: "Sonoma",
    subregion: "Russian River Valley",
    description: "Family-owned winery specializing in Pinot Noir and Chardonnay",
    establishedYear: 1985,
    website: "www.vineyardxyz.com",
    phone: "(707) 555-0123",
    email: "info@vineyardxyz.com",
    address: "123 Vineyard Lane",
    city: "Healdsburg",
    state: "CA",
    zipCode: "95448",
    latitude: 38.6103,
    longitude: -122.8695,
    specialties: ["Pinot Noir", "Chardonnay", "Sustainable Farming"],
    wineTypes: ["red", "white"],
    productionVolume: 15000,
    certifications: ["Organic", "Sustainable"],
    featuredWine: "2019 Reserve Pinot Noir",
    tagline: "Crafting exceptional wines with respect for the land",
    story: "Three generations of winemaking excellence in the heart of Sonoma County",
    rating: 4.7,
    reviewCount: 156,
    shippingStates: ["CA", "NY", "TX", "FL", "WA", "OR"],
    distributionChannels: ["direct", "retail", "restaurant"],
    hasDeals: true,
    dealDescription: "10% off on all wines for the next month",
    caseDiscount: 15,
    specialOffers: ["Wine Club 20% Discount", "Free Tasting for 4"],
    isActive: true,
    lastUpdated: "2023-06-15"
  },
  {
    id: "prod_002",
    name: "Château ABC",
    region: "Bordeaux",
    subregion: "Saint-Julien",
    description: "Historic estate producing classic Bordeaux blends",
    establishedYear: 1855,
    website: "www.chateauabc.fr",
    phone: "+33 5 56 59 12 34",
    email: "contact@chateauabc.fr",
    address: "Route des Châteaux",
    city: "Saint-Julien-Beychevelle",
    state: "Gironde",
    zipCode: "33250",
    latitude: 45.1667,
    longitude: -0.7333,
    specialties: ["Cabernet Sauvignon", "Merlot", "Bordeaux Blends"],
    wineTypes: ["red"],
    productionVolume: 25000,
    certifications: ["AOC Bordeaux", "Traditional"],
    featuredWine: "2018 Grand Vin",
    tagline: "Tradition and excellence since 1855",
    story: "A historic château with centuries of winemaking tradition in the prestigious Saint-Julien appellation",
    rating: 4.9,
    reviewCount: 89,
    shippingStates: ["CA", "NY", "TX", "FL", "IL"],
    distributionChannels: ["retail", "restaurant", "wine shops"],
    hasDeals: true,
    dealDescription: "Buy 6 bottles, get 1 free",
    caseDiscount: 20,
    specialOffers: ["Château Tour Available", "Vintage Library Access"],
    isActive: true,
    lastUpdated: "2023-06-10"
  },
  {
    id: "prod_003",
    name: "Bodega 123",
    region: "Rioja",
    subregion: "Rioja Alta",
    description: "Modern winery with traditional Spanish roots",
    establishedYear: 1920,
    website: "www.bodega123.es",
    phone: "+34 941 12 34 56",
    email: "info@bodega123.es",
    address: "Calle de la Bodega 123",
    city: "Haro",
    state: "La Rioja",
    zipCode: "26200",
    latitude: 42.5833,
    longitude: -2.8500,
    specialties: ["Tempranillo", "Garnacha", "Traditional Aging"],
    wineTypes: ["red", "rosé"],
    productionVolume: 30000,
    certifications: ["DO Rioja", "Traditional"],
    featuredWine: "2017 Gran Reserva",
    tagline: "Where tradition meets innovation",
    story: "Four generations of Spanish winemaking excellence in the heart of Rioja",
    rating: 4.5,
    reviewCount: 203,
    shippingStates: ["CA", "NY", "TX"],
    distributionChannels: ["direct", "retail"],
    hasDeals: false,
    caseDiscount: 10,
    specialOffers: ["Spanish Wine Education Classes"],
    isActive: true,
    lastUpdated: "2023-06-08"
  },
  {
    id: "prod_004",
    name: "Silver Oak",
    region: "Alexander Valley",
    subregion: "Napa Valley",
    description: "Renowned for their Cabernet Sauvignon aged in American oak barrels",
    establishedYear: 1972,
    website: "www.silveroak.com",
    phone: "(707) 942-7022",
    email: "info@silveroak.com",
    address: "915 Oakville Cross Rd",
    city: "Oakville",
    state: "CA",
    zipCode: "94562",
    latitude: 38.4331,
    longitude: -122.4064,
    specialties: ["Cabernet Sauvignon", "American Oak Aging"],
    wineTypes: ["red"],
    productionVolume: 80000,
    certifications: ["Sustainable", "Napa Green"],
    featuredWine: "2019 Cabernet Sauvignon",
    tagline: "Life is a Cabernet",
    story: "Dedicated exclusively to producing Cabernet Sauvignon of exceptional quality",
    rating: 4.8,
    reviewCount: 342,
    shippingStates: ["CA", "NY", "TX", "FL", "WA", "OR", "IL", "NV"],
    distributionChannels: ["direct", "retail", "restaurant", "wine shops"],
    hasDeals: true,
    dealDescription: "Special pricing for retailers on 2019 vintage",
    caseDiscount: 18,
    specialOffers: ["Winery Tours", "Barrel Tasting Experience"],
    isActive: true,
    lastUpdated: "2023-06-12"
  },
  {
    id: "prod_005",
    name: "Cloudy Bay",
    region: "Marlborough",
    subregion: "Wairau Valley",
    description: "Iconic New Zealand winery known for exceptional Sauvignon Blanc",
    establishedYear: 1985,
    website: "www.cloudybay.co.nz",
    phone: "+64 3 520 9147",
    email: "info@cloudybay.co.nz",
    address: "230 Jacksons Road",
    city: "Blenheim",
    state: "Marlborough",
    zipCode: "7240",
    latitude: -41.5131,
    longitude: 173.9545,
    specialties: ["Sauvignon Blanc", "Pinot Noir", "Chardonnay"],
    wineTypes: ["white", "red"],
    productionVolume: 200000,
    certifications: ["Sustainable Winegrowing New Zealand"],
    featuredWine: "2022 Sauvignon Blanc",
    tagline: "Pioneering Marlborough wines since 1985",
    story: "Pioneers of Marlborough Sauvignon Blanc, setting the standard for New Zealand wine",
    rating: 4.6,
    reviewCount: 278,
    shippingStates: ["CA", "NY", "TX", "FL", "WA"],
    distributionChannels: ["retail", "restaurant", "wine shops"],
    hasDeals: false,
    caseDiscount: 12,
    specialOffers: ["New Zealand Wine Education", "Virtual Tastings"],
    isActive: true,
    lastUpdated: "2023-06-14"
  },
  {
    id: "prod_006",
    name: "Antinori",
    region: "Tuscany",
    subregion: "Chianti Classico",
    description: "Historic Italian producer with over 600 years of winemaking tradition",
    establishedYear: 1385,
    website: "www.antinori.it",
    phone: "+39 055 23595",
    email: "info@antinori.it",
    address: "Piazza Antinori 3",
    city: "Florence",
    state: "Tuscany",
    zipCode: "50123",
    latitude: 43.7696,
    longitude: 11.2558,
    specialties: ["Sangiovese", "Super Tuscans", "Chianti Classico"],
    wineTypes: ["red", "white"],
    productionVolume: 1800000,
    certifications: ["DOCG", "Traditional"],
    featuredWine: "2018 Tignanello",
    tagline: "26 generations of winemaking excellence",
    story: "The Antinori family has been committed to the art of winemaking for over six centuries",
    rating: 4.9,
    reviewCount: 445,
    shippingStates: ["CA", "NY", "TX", "FL", "IL", "WA"],
    distributionChannels: ["retail", "restaurant", "wine shops", "direct"],
    hasDeals: true,
    dealDescription: "Limited time offer on Super Tuscans",
    caseDiscount: 15,
    specialOffers: ["Tuscan Estate Tours", "Wine & Food Pairing Classes"],
    isActive: true,
    lastUpdated: "2023-06-11"
  },
  {
    id: "prod_007",
    name: "Diamond Creek",
    region: "Napa Valley",
    subregion: "Diamond Mountain",
    description: "Boutique winery producing exceptional Cabernet Sauvignon from volcanic soils",
    establishedYear: 1968,
    website: "www.diamondcreekvineyards.com",
    phone: "(707) 942-6926",
    email: "info@diamondcreekvineyards.com",
    address: "1500 Diamond Mountain Road",
    city: "Calistoga",
    state: "CA",
    zipCode: "94515",
    latitude: 38.5780,
    longitude: -122.5614,
    specialties: ["Cabernet Sauvignon", "Single Vineyard", "Volcanic Terroir"],
    wineTypes: ["red"],
    productionVolume: 3000,
    certifications: ["Sustainable", "Estate Grown"],
    featuredWine: "2018 Reserve Cabernet Sauvignon",
    tagline: "Volcanic terroir, exceptional wines",
    story: "Pioneering Diamond Mountain AVA with distinctive volcanic terroir expressions",
    rating: 4.8,
    reviewCount: 67,
    shippingStates: ["CA", "NY", "TX", "FL"],
    distributionChannels: ["direct", "fine wine shops"],
    hasDeals: false,
    caseDiscount: 8,
    specialOffers: ["Collector's Library Access", "Harvest Experience"],
    isActive: true,
    lastUpdated: "2023-06-13"
  },
  {
    id: "prod_008",
    name: "Louis Latour",
    region: "Burgundy",
    subregion: "Beaune",
    description: "Historic Burgundy négociant house specializing in Chardonnay and Pinot Noir",
    establishedYear: 1797,
    website: "www.louislatour.com",
    phone: "+33 3 80 24 81 00",
    email: "contact@louislatour.com",
    address: "18 Rue des Tonneliers",
    city: "Beaune",
    state: "Burgundy",
    zipCode: "21200",
    latitude: 47.0202,
    longitude: 4.8370,
    specialties: ["Chardonnay", "Pinot Noir", "Grand Cru"],
    wineTypes: ["white", "red"],
    productionVolume: 800000,
    certifications: ["AOC Burgundy", "Traditional"],
    featuredWine: "2019 Grand Cru Chardonnay",
    tagline: "Burgundy tradition since 1797",
    story: "Seven generations of Burgundy expertise, from village wines to Grand Crus",
    rating: 4.7,
    reviewCount: 189,
    shippingStates: ["CA", "NY", "TX", "FL", "IL"],
    distributionChannels: ["retail", "restaurant", "wine shops"],
    hasDeals: false,
    caseDiscount: 12,
    specialOffers: ["Burgundy Masterclasses", "Domaine Visits"],
    isActive: true,
    lastUpdated: "2023-06-09"
  },
  {
    id: "prod_009",
    name: "Pio Cesare",
    region: "Piedmont",
    subregion: "Barolo",
    description: "Traditional Piedmontese producer crafting exceptional Barolo and Barbaresco",
    establishedYear: 1881,
    website: "www.piocesare.it",
    phone: "+39 0173 44186",
    email: "info@piocesare.it",
    address: "Via Cesare Balbo 6",
    city: "Alba",
    state: "Piedmont",
    zipCode: "12051",
    latitude: 44.7009,
    longitude: 8.0351,
    specialties: ["Nebbiolo", "Barolo", "Barbaresco"],
    wineTypes: ["red", "white"],
    productionVolume: 45000,
    certifications: ["DOCG", "Traditional"],
    featuredWine: "2017 Barolo",
    tagline: "Piedmont tradition and innovation",
    story: "Five generations preserving Piedmontese winemaking traditions while embracing innovation",
    rating: 4.8,
    reviewCount: 134,
    shippingStates: ["CA", "NY", "TX"],
    distributionChannels: ["retail", "restaurant", "fine wine shops"],
    hasDeals: false,
    caseDiscount: 10,
    specialOffers: ["Barolo Vertical Tastings", "Truffle Season Events"],
    isActive: true,
    lastUpdated: "2023-06-07"
  }
];

// Helper functions to get producer data for different contexts

// Get basic producer info for general display
export const getProducerBasicInfo = (producerId: string) => {
  const producer = producers.find(p => p.id === producerId);
  if (!producer) return null;

  return {
    id: producer.id,
    name: producer.name,
    region: producer.region,
    description: producer.description,
    featuredWine: producer.featuredWine,
    rating: producer.rating,
    reviewCount: producer.reviewCount
  };
};

// Get producer data for retailer context (with deals and pricing)
export const getProducerForRetailer = (producerId: string) => {
  const producer = producers.find(p => p.id === producerId);
  if (!producer) return null;

  return {
    id: producer.id,
    name: producer.name,
    region: producer.region,
    description: producer.description,
    featuredWine: producer.featuredWine,
    hasDeals: producer.hasDeals,
    dealDescription: producer.dealDescription,
    caseDiscount: producer.caseDiscount,
    distributionChannels: producer.distributionChannels
  };
};

// Get producer data for enthusiast context (with location and offers)
export const getProducerForEnthusiast = (producerId: string) => {
  const producer = producers.find(p => p.id === producerId);
  if (!producer) return null;

  return {
    id: producer.id,
    name: producer.name,
    region: producer.region,
    description: producer.description,
    website: producer.website,
    shippingStates: producer.shippingStates,
    specialOffers: producer.specialOffers,
    featuredWine: producer.featuredWine,
    rating: producer.rating,
    reviewCount: producer.reviewCount,
    establishedYear: producer.establishedYear,
    story: producer.story
  };
};

// Get all producers for a specific context
export const getAllProducersForRetailer = () => {
  return producers.map(producer => getProducerForRetailer(producer.id)).filter(Boolean);
};

export const getAllProducersForEnthusiast = () => {
  return producers.map(producer => getProducerForEnthusiast(producer.id)).filter(Boolean);
};

export const getAllProducersBasicInfo = () => {
  return producers.map(producer => getProducerBasicInfo(producer.id)).filter(Boolean);
};

// Helper functions to generate data for components

// Get producer offerings for marketplace (simplified format)
export const getProducerOfferingsForMarketplace = () => {
  return producers.slice(0, 3).map(producer => ({
    id: parseInt(producer.id.replace('prod_', '')) + 300,
    name: producer.name,
    region: producer.region,
    description: producer.description,
    featured: producer.featuredWine
  }));
};

// Get producer names for explore page
export const getProducerNamesForExplore = () => {
  return producers.map(producer => producer.name).sort();
};

// Get recent activity data (for home page)
export const getRecentActivityData = () => {
  return [
    { id: 601, text: `New producer joined: ${producers[0].name}`, date: '2023-06-10' },
    { id: 602, text: 'New wine added: 2018 Cabernet Sauvignon', date: '2023-06-08' },
    { id: 603, text: 'Upcoming tasting event in San Francisco', date: '2023-06-05' },
  ];
};

// Get wine news data (for home page)
export const getWineNewsData = () => {
  return [
    { id: 701, title: '2023 Harvest Report', link: '#' },
    { id: 702, title: 'New Sustainable Practices', link: '#' },
    { id: 703, title: 'Wine Tourism Trends', link: '#' },
  ];
};

// Producer marketplace specific data

// Wine reviews data for producer marketplace
export const reviewsData = [
  {
    id: 1,
    vintage: 2019,
    wineName: "Reserve Pinot Noir",
    rating: 4.6,
    reviewCount: 89,
    recentReview: "Elegant and well-balanced with beautiful cherry notes and subtle oak. A true expression of terroir.",
    reviewer: "Wine Enthusiast",
    trendingKeywords: ["elegant", "cherry", "oak", "terroir", "balanced"]
  },
  {
    id: 2,
    vintage: 2019,
    wineName: "Cabernet Sauvignon",
    rating: 4.8,
    reviewCount: 156,
    recentReview: "Rich and full-bodied with exceptional depth. The American oak aging adds complexity without overwhelming the fruit.",
    reviewer: "Robert Parker",
    trendingKeywords: ["rich", "full-bodied", "complex", "american oak", "depth"]
  },
  {
    id: 3,
    vintage: 2018,
    wineName: "Grand Vin",
    rating: 4.9,
    reviewCount: 67,
    recentReview: "A masterpiece of Bordeaux winemaking. Complex layers of blackberry, tobacco, and leather with incredible aging potential.",
    reviewer: "James Suckling",
    trendingKeywords: ["masterpiece", "complex", "blackberry", "tobacco", "aging potential"]
  }
];

// Market insights data for producer marketplace
export const marketInsights = [
  {
    id: 1,
    category: "Pricing",
    impact: "high",
    actionable: true,
    insight: "Premium Pinot Noir prices have increased 15% in your region. Consider adjusting your pricing strategy for the 2019 Reserve."
  },
  {
    id: 2,
    category: "Consumer Trends",
    impact: "medium",
    actionable: true,
    insight: "Sustainable and organic wines are seeing 23% higher demand. Highlight your organic certification in marketing materials."
  },
  {
    id: 3,
    category: "Competition",
    impact: "medium",
    actionable: false,
    insight: "Three new wineries have opened in your region this year, increasing local competition for direct-to-consumer sales."
  },
  {
    id: 4,
    category: "Distribution",
    impact: "high",
    actionable: true,
    insight: "Restaurant sales have recovered to 95% of pre-pandemic levels. Consider expanding your restaurant distribution network."
  },
  {
    id: 5,
    category: "Seasonal",
    impact: "low",
    actionable: true,
    insight: "Holiday season approaching - historically your best sales period. Prepare inventory and marketing campaigns for Q4."
  }
];
