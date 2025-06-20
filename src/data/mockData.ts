// Mock data for the wine platform

// User data
export const userData = {
  name: 'Jane Smith',
  email: 'jane.smith@example.com',
  memberSince: 'January 2023',
  preferences: {
    favoriteVarietals: ['Cabernet Sauvignon', 'Pinot Noir', 'Chardonnay'],
    favoriteRegions: ['Napa Valley', 'Burgundy', 'Tuscany'],
    tasteProfile: ['Full-bodied', 'Fruity', 'Oak']
  }
};

// Wine collection data
export const collectionData = [
  { id: 1, name: '2018 Cabernet Sauvignon', producer: 'Stag\'s Leap', region: 'Napa Valley', quantity: 3, notes: 'Birthday gift, save for special occasion' },
  { id: 2, name: '2019 Pinot Noir', producer: 'Domaine Serene', region: 'Willamette Valley', quantity: 2, notes: 'Purchased during winery visit' },
  { id: 3, name: '2020 Chardonnay', producer: 'Rombauer', region: 'Carneros', quantity: 1, notes: 'Recommended by sommelier' },
  { id: 4, name: '2017 Barolo', producer: 'Vietti', region: 'Piedmont', quantity: 2, notes: 'Aging potential: 10-15 years' },
];

// Wishlist data
export const wishlistData = [
  { id: 101, name: 'Opus One', producer: 'Opus One Winery', region: 'Napa Valley', notes: 'Consistently highly rated' },
  { id: 102, name: 'La Tâche', producer: 'Domaine de la Romanée-Conti', region: 'Burgundy', notes: 'Bucket list wine' },
  { id: 103, name: 'Sassicaia', producer: 'Tenuta San Guido', region: 'Tuscany', notes: 'Super Tuscan' },
];

// Order history data
export const orderHistoryData = [
  { id: 401, date: '2023-05-15', items: ['2019 Cabernet Sauvignon (2)', '2020 Chardonnay (1)'], total: 219.97, status: 'Delivered' },
  { id: 402, date: '2023-03-22', items: ['2018 Pinot Noir (1)', '2021 Sauvignon Blanc (2)'], total: 154.97, status: 'Delivered' },
  { id: 403, date: '2023-01-10', items: ['NV Champagne Brut (1)'], total: 59.99, status: 'Delivered' },
];

// Marketplace data
export const availableWinesData = [
  { id: 201, name: '2019 Cabernet Sauvignon', producer: 'Silver Oak', region: 'Alexander Valley', price: 89.99, seller: 'Wine Merchant A' },
  { id: 202, name: '2018 Pinot Noir', producer: 'Williams Selyem', region: 'Russian River Valley', price: 120.00, seller: 'Wine Merchant B' },
  { id: 203, name: '2020 Sauvignon Blanc', producer: 'Cloudy Bay', region: 'Marlborough', price: 34.99, seller: 'Wine Merchant C' },
  { id: 204, name: '2017 Brunello di Montalcino', producer: 'Altesino', region: 'Tuscany', price: 65.00, seller: 'Wine Merchant A' },
  { id: 205, name: 'NV Champagne Brut', producer: 'Veuve Clicquot', region: 'Champagne', price: 59.99, seller: 'Wine Merchant D' },
];

// Producer offerings data
export const producerOfferingsData = [
  { id: 301, name: 'Vineyard XYZ', region: 'Sonoma', description: 'Family-owned winery specializing in Pinot Noir and Chardonnay', featured: '2019 Reserve Pinot Noir' },
  { id: 302, name: 'Château ABC', region: 'Bordeaux', description: 'Historic estate producing classic Bordeaux blends', featured: '2018 Grand Vin' },
  { id: 303, name: 'Bodega 123', region: 'Rioja', description: 'Modern winery with traditional Spanish roots', featured: '2017 Gran Reserva' },
];

// Explore data
export const regionsData = ['Napa Valley', 'Bordeaux', 'Tuscany', 'Rioja', 'Barossa Valley', 'Willamette Valley'];
export const varietalsData = ['Cabernet Sauvignon', 'Merlot', 'Pinot Noir', 'Chardonnay', 'Sauvignon Blanc', 'Syrah'];
export const producersData = ['Château Margaux', 'Opus One', 'Antinori', 'Penfolds', 'Domaine de la Romanée-Conti', 'Vega Sicilia'];

// Featured wines for home page
export const featuredWinesData = [
  { id: 501, name: '2018 Reserve Cabernet Sauvignon', producer: 'Diamond Creek', region: 'Napa Valley', description: 'A bold, structured Cabernet with notes of blackcurrant, cedar, and tobacco.' },
  { id: 502, name: '2019 Grand Cru Chardonnay', producer: 'Louis Latour', region: 'Burgundy', description: 'Elegant and balanced with notes of apple, pear, and subtle oak.' },
  { id: 503, name: '2017 Barolo', producer: 'Pio Cesare', region: 'Piedmont', description: 'Classic Barolo with aromas of rose, tar, and red fruits with firm tannins.' },
];

// Recent activity for home page
export const recentActivityData = [
  { id: 601, text: 'New producer joined: Vineyard XYZ', date: '2023-06-10' },
  { id: 602, text: 'New wine added: 2018 Cabernet Sauvignon', date: '2023-06-08' },
  { id: 603, text: 'Upcoming tasting event in San Francisco', date: '2023-06-05' },
];

// Wine news for home page
export const wineNewsData = [
  { id: 701, title: '2023 Harvest Report', link: '#' },
  { id: 702, title: 'New Sustainable Practices', link: '#' },
  { id: 703, title: 'Wine Tourism Trends', link: '#' },
];