// Mock data for wines from Square
// This includes both Square-specific fields and fields that map to WineCore schema

export interface SquareWine {
  // Square-specific fields (non-editable)
  id: string;
  variation: string;
  sku: string;
  category: string;
  originalDescription: string;

  // Fields that map to WineCore schema (editable)
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

// Mock data for wines from Square
export const mockSquareWines: SquareWine[] = [
  {
    // Square-specific fields
    id: "sq_1",
    variation: "Red Wine",
    sku: "CAB-SIL-2019-750",
    category: "Red Wine",
    originalDescription: "Silver Oak Cabernet Sauvignon 2019 - Alexander Valley",

    // WineCore mappable fields
    name: "Cabernet Sauvignon",
    vintage: 2019,
    size: 750,
    producer: "Silver Oak",
    color: "Red",
    closure: "Cork",
    shape: "Bordeaux",
    type: "Still",
    description: "Rich and full-bodied with notes of blackcurrant and cedar",
    alcohol: 14.5,
    acid: 5.8,
    pH: 3.65,
    bottleAging: 24,
    subarea: "Alexander Valley"
  },
  {
    // Square-specific fields
    id: "sq_2",
    variation: "White Wine",
    sku: "CHARD-SON-2020-750",
    category: "White Wine",
    originalDescription: "Sonoma-Cutrer Chardonnay 2020 - Russian River Ranches",

    // WineCore mappable fields
    name: "Chardonnay",
    vintage: 2020,
    size: 750,
    producer: "Sonoma-Cutrer",
    color: "White",
    closure: "Cork",
    shape: "Burgundy",
    type: "Still",
    description: "Crisp and balanced with notes of apple and vanilla",
    alcohol: 13.8,
    acid: 6.2,
    pH: 3.45,
    bottleAging: 12,
    subarea: "Russian River Valley"
  },
  {
    // Square-specific fields
    id: "sq_3",
    variation: "Sparkling Wine",
    sku: "BRUT-VCP-NV-750",
    category: "Sparkling Wine",
    originalDescription: "Veuve Clicquot Ponsardin Brut NV - Champagne",

    // WineCore mappable fields
    name: "Brut Yellow Label",
    vintage: 0, // Non-vintage
    size: 750,
    producer: "Veuve Clicquot",
    color: "White",
    closure: "Cork",
    shape: "Champagne",
    type: "Sparkling",
    description: "Well-balanced with notes of white fruits and brioche",
    alcohol: 12.0,
    acid: 7.0,
    pH: 3.2,
    bottleAging: 36,
    subarea: "Champagne"
  },
  {
    // Square-specific fields
    id: "sq_4",
    variation: "Red Wine",
    sku: "PINOT-WILL-2018-750",
    category: "Red Wine",
    originalDescription: "Williams Selyem Pinot Noir 2018 - Sonoma Coast",

    // WineCore mappable fields
    name: "Pinot Noir",
    vintage: 2018,
    size: 750,
    producer: "Williams Selyem",
    color: "Red",
    closure: "Cork",
    shape: "Burgundy",
    type: "Still",
    description: "Elegant with notes of cherry and spice",
    alcohol: 13.9,
    acid: 5.9,
    pH: 3.55,
    bottleAging: 16,
    subarea: "Sonoma Coast"
  },
  {
    // Square-specific fields
    id: "sq_5",
    variation: "Rosé Wine",
    sku: "ROSE-WHIS-2021-750",
    category: "Rosé Wine",
    originalDescription: "Whispering Angel Rosé 2021 - Côtes de Provence",

    // WineCore mappable fields
    name: "Rosé",
    vintage: 2021,
    size: 750,
    producer: "Whispering Angel",
    color: "Rosé",
    closure: "Cork",
    shape: "Bordeaux",
    type: "Still",
    description: "Dry and refreshing with notes of red berries",
    alcohol: 13.0,
    acid: 6.5,
    pH: 3.3,
    bottleAging: 6,
    subarea: "Côtes de Provence"
  }
];
