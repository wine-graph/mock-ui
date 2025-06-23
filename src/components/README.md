# Components Directory Structure

This directory contains all the React components used in the Wine Platform application. The components are organized by functionality and user role to maintain clear separation of concerns and enable easy maintenance.

## 📁 Layout Components (`/layout`)
Core structural components that define the application's layout and navigation.

- **`Layout.tsx`**: Main layout wrapper component that provides consistent structure across all pages
- **`TopNav.tsx`**: Top navigation bar with logo, search functionality, and user controls
- **`SideNav.tsx`**: Collapsible side navigation (60px width) with role-based menu items
- **`Layout.css`**: Styling for layout components and responsive behavior

## 📁 Shared Pages (`/pages`)
Core page components that are shared across user types or serve as base implementations.

- **`Home.tsx`**: Landing page with platform introduction and featured content
- **`Explore.tsx`**: Wine discovery page with filtering by region, varietal, and producer
- **`Explore.css`**: Styling for the explore page components
- **`Marketplace.tsx`**: Base marketplace component for unauthenticated users
- **`Profile.tsx`**: User profile management page with role-specific features

## 📁 Retailer Components (`/retailer`)
Components specific to retailer users (wine stores, restaurants, distributors).

### Core Retailer Features
- **`RetailerCellar.tsx`**: Retailer inventory management and wine collection dashboard
- **`RetailerMarketplace.tsx`**: Retailer-specific marketplace with B2B/B2C sales interface

### Square POS Integration
- **`RetailerSync.tsx`**: Main Square integration component with navigation
- **`RetailerSyncQuery.tsx`**: Fetch and edit wine data from Square POS systems
- **`RetailerSyncPersist.tsx`**: Display wines saved to platform in WineCore format

## 📁 Producer Components (`/producer`)
Components specific to producer users (wineries, wine makers).

### Core Producer Features
- **`ProducerCellar.tsx`**: Producer inventory management and wine production dashboard
- **`ProducerMarketplace.tsx`**: Producer-specific marketplace for direct-to-consumer sales

### Shopify Integration
- **`ProducerSync.tsx`**: Shopify integration for syncing wine inventory with online stores

## 📁 Enthusiast Components (`/enthusiast`)
Components specific to wine enthusiast users (consumers, collectors).

- **`EnthusiastMarketplace.tsx`**: Consumer-focused marketplace with advanced filtering, wine discovery, and purchasing options from multiple sources

## 📁 Common Components (`/common`)
Shared utility components used across multiple pages and user types.

*Currently empty - shared components will be added as common patterns emerge*

## 🏗️ Component Architecture

### Design Principles
- **Role-based Organization**: Components are grouped by user type to maintain clear boundaries
- **Responsive Design**: All components use Bootstrap 5 grid system for mobile-first design
- **TypeScript Integration**: Full TypeScript support with proper prop typing
- **Mock Data Integration**: Components consume role-specific mock data for demonstration

### Naming Conventions
- **PascalCase**: All component files (e.g., `RetailerMarketplace.tsx`)
- **Role Prefixes**: Role-specific components prefixed with user type
- **Descriptive Names**: Clear, descriptive component names indicating functionality

### File Structure Standards
- One component per file
- Component-specific CSS files where needed
- TypeScript interfaces defined inline or imported from `models.ts`
- Mock data imported from `/data` directory

## 🔄 Component Relationships

### Layout Hierarchy
```
Layout
├── TopNav
├── SideNav
└── [Page Component]
    └── [Role-specific Components]
```

### Data Flow
- Mock data flows from `/data` files into components
- Role-based routing in `App.tsx` determines which components render
- Components maintain local state using React hooks
- No global state management (Redux/Zustand) - keeping it simple

### Integration Points
- **Square Integration**: RetailerSync components handle POS data transformation
- **Shopify Integration**: ProducerSync components manage e-commerce inventory sync
- **WineCore Model**: All components standardize on canonical wine data structure

## 🎯 Implementation Status

### ✅ Completed Components
- All layout components with responsive design
- Core shared pages (Home, Explore, Marketplace, Profile)
- Complete retailer workflow (Cellar, Marketplace, Square sync)
- Complete producer workflow (Cellar, Marketplace, Shopify sync)
- Enthusiast marketplace with advanced features
- Role-based routing and navigation

### 🚧 Future Enhancements
- Common utility components (WineCard, FilterBar, etc.)
- Advanced search and filtering components
- Social features (reviews, ratings, sharing)
- Real-time inventory updates
- Payment processing components

This component structure supports the multi-role nature of the wine platform while maintaining clean separation of concerns and enabling future scalability.
