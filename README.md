# Wine Platform - React UI Prototype

A comprehensive React-based user interface prototype for a wine platform that connects producers, retailers, and wine enthusiasts. Built with React 18, TypeScript, and Bootstrap 5.

## 🎯 Project Overview

This application demonstrates a multi-role wine platform with distinct user experiences for:
- **Producers**: Wineries and wine makers managing inventory and Shopify integration
- **Retailers**: Wine stores and restaurants with Square POS integration
- **Enthusiasts**: Wine lovers exploring, discovering, and purchasing wines
- **Unauthenticated Users**: General public browsing the platform

## 🚀 Features Implemented

### Core Platform Features
- **Multi-role Authentication**: Role-based navigation and content
- **Responsive Design**: Bootstrap 5 with mobile-first approach
- **Consistent Layout**: Fixed top navigation and collapsible side navigation
- **Wine Discovery**: Advanced filtering and exploration tools
- **Marketplace**: Role-specific buying and selling interfaces

### Producer Features
- **Producer Dashboard**: Inventory management and sales metrics
- **Shopify Integration**: Sync wine inventory with Shopify stores
- **Producer Marketplace**: Direct-to-consumer sales interface
- **Wine Collection Management**: Comprehensive cellar management

### Retailer Features
- **Retailer Dashboard**: POS integration and inventory tracking
- **Square Integration**: Sync with Square POS systems
- **Retailer Marketplace**: B2B and B2C sales interface
- **Inventory Management**: Stock tracking and ordering

### Enthusiast Features
- **Wine Discovery**: Browse by region, varietal, producer, and style
- **Marketplace**: Purchase wines from producers and retailers
- **Personal Collection**: Track wine purchases and preferences
- **Advanced Filtering**: Search by price, rating, vintage, and more

## 🏗️ Architecture

### Technology Stack
- **Frontend**: React 18 with TypeScript
- **UI Framework**: Bootstrap 5 (no additional UI libraries)
- **State Management**: React hooks only
- **Data**: Mock JSON data (GraphQL integration planned)
- **Icons**: Bootstrap Icons
- **Build Tool**: Vite

### Component Structure
```
src/components/
├── layout/           # Layout components (TopNav, SideNav, Layout)
├── pages/           # Shared pages (Home, Explore, Marketplace, Profile)
├── retailer/        # Retailer-specific components
├── producer/        # Producer-specific components
├── enthusiast/      # Enthusiast-specific components
└── common/          # Shared utility components
```

### Data Model
The application uses a canonical `WineCore` data model that standardizes wine information across all user types and integrations:

```typescript
interface WineCore {
  id: string
  name: string
  vintage: number
  size: number        // in ml
  producer: string
  color: string       // red, white, rosé, etc.
  closure: string     // cork, screw cap, etc.
  shape: string       // standard, burgundy, etc.
  type: string        // still, sparkling, etc.
  description: string
  alcohol: number     // percentage
  acid: number        // g/L
  pH: number
  bottleAging: number // months
  subarea: string     // specific region within larger area
}
```

## 🛠️ Development Setup

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation
```bash
# Clone the repository
git clone [repository-url]
cd mock-ui

# Install dependencies
npm install

# Start development server
npm run dev
```

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📱 User Experience

### Navigation
- **Top Navigation**: Logo, search, and user controls
- **Side Navigation**: Role-based menu items, permanently collapsed (60px width)
- **Responsive Layout**: Adapts to all screen sizes

### User Flows
1. **Unauthenticated**: Browse wines, explore regions, view marketplace
2. **Producer**: Manage inventory, sync with Shopify, sell direct-to-consumer
3. **Retailer**: Manage inventory, sync with Square, B2B/B2C sales
4. **Enthusiast**: Discover wines, build collections, purchase from multiple sources

## 🔄 Integration Workflows

### Retailer Square Integration
1. Navigate to Square Sync page
2. Fetch inventory from Square POS
3. Review and edit wine data
4. Save to platform in WineCore format
5. View canonical wine records

### Producer Shopify Integration
1. Navigate to Shopify Sync page
2. Fetch products from Shopify store
3. Review and edit wine data
4. Save to platform in WineCore format
5. View canonical wine records

## 📊 Mock Data

The application includes comprehensive mock data for demonstration:
- `mockData.ts` - Core wine data and user profiles
- `mockSquareWines.ts` - Sample Square POS data
- `mockRetailerMarketplace.ts` - Retailer marketplace data
- `mockProducerMarketplace.ts` - Producer marketplace data
- `mockEnthusiastMarketplace.ts` - Enthusiast marketplace data

## 🎨 Design System

### Layout Guidelines
- **Desktop**: 3 cards per row (col-lg-4)
- **Tablet**: 2 cards per row (col-md-6)  
- **Mobile**: 1 card per row (col-sm-12)
- **Sidebar**: Fixed 60px width on all screen sizes
- **Content**: Responsive with proper padding and spacing

### Styling
- Bootstrap 5 utility classes
- Component-specific CSS files
- Consistent color scheme and typography
- Mobile-first responsive design

## 🚧 Future Enhancements

- GraphQL/Apollo integration
- Real Shopify and Square API connections
- Advanced wine recommendation engine
- Social features and wine reviews
- Mobile app development
- Payment processing integration

## 📝 Development Guidelines

- One component per file
- TypeScript for all components
- Bootstrap classes for styling
- Mock data in separate files
- Responsive design first
- Clean, maintainable code structure

## 🤝 Contributing

This is a prototype project demonstrating UI/UX concepts for a wine platform. The focus is on creating a polished, responsive interface that showcases the potential of a multi-role wine marketplace.
