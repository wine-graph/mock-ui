// Mock data specific to producer operations
// This centralizes producer inventory, releases, and operational data

export interface ProducerInventoryItem {
  id: number;
  name: string;
  region: string;
  quantity: number;
  notes: string;
}

export interface UpcomingRelease {
  id: number;
  name: string;
  region: string;
  releaseDate: string;
  notes: string;
}

export interface ShopifyProduct {
  id: string;
  title: string;
  sku: string;
  inventory: number;
  price: number;
  description: string;
}

// Producer's current wine inventory
export const producerInventoryData: ProducerInventoryItem[] = [
  { id: 1, name: '2018 Cabernet Sauvignon', region: 'Napa Valley', quantity: 120, notes: 'Estate grown, 24 months in French oak' },
  { id: 2, name: '2019 Pinot Noir', region: 'Willamette Valley', quantity: 85, notes: 'Single vineyard, 16 months in oak' },
  { id: 3, name: '2020 Chardonnay', region: 'Carneros', quantity: 150, notes: 'Stainless steel fermentation, 6 months in oak' },
  { id: 4, name: '2017 Reserve Cabernet', region: 'Napa Valley', quantity: 45, notes: 'Limited production, 36 months in new French oak' },
];

// Producer's upcoming wine releases
export const upcomingReleasesData: UpcomingRelease[] = [
  { id: 101, name: '2021 Rosé', region: 'Napa Valley', releaseDate: 'March 2023', notes: 'Early spring release' },
  { id: 102, name: '2020 Merlot', region: 'Napa Valley', releaseDate: 'June 2023', notes: 'Summer release' },
  { id: 103, name: '2019 Reserve Pinot Noir', region: 'Willamette Valley', releaseDate: 'September 2023', notes: 'Fall release' },
];

// Shopify products data for ProducerSync
export const shopifyProductsData: ShopifyProduct[] = [
  {
    id: "shop_1",
    title: "2019 Estate Cabernet Sauvignon",
    sku: "CAB-EST-2019-750",
    inventory: 120,
    price: 45.99,
    description: "Our flagship Cabernet with notes of blackcurrant and cedar"
  },
  {
    id: "shop_2",
    title: "2020 Reserve Chardonnay",
    sku: "CHARD-RES-2020-750",
    inventory: 85,
    price: 38.99,
    description: "Barrel-fermented with notes of apple and vanilla"
  },
  {
    id: "shop_3",
    title: "2018 Estate Pinot Noir",
    sku: "PINOT-EST-2018-750",
    inventory: 65,
    price: 42.99,
    description: "Elegant with notes of cherry and spice"
  }
];