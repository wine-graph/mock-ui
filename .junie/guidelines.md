
# Wine Platform Project Guidelines

## 📦 Technology Stack
- **Frontend**: React 18+ with TypeScript
- **UI Framework**: Bootstrap 5 only (no Material UI, Tailwind, etc.)
- **State Management**: React hooks only (no Redux, Zustand, etc.)
- **Data Handling**: Mock data JSON files (Apollo/GraphQL integration planned for future)
- **Icons**: Bootstrap Icons

## 🎯 Project Purpose
- Create a functional UI prototype for a wine platform connecting:
    - **Producers**: Wineries and wine makers
    - **Retailers**: Stores, restaurants, and distributors
    - **Consumers**: Wine enthusiasts and casual buyers
- Demonstrate integration flows with:
    - **Shopify**: For producer inventory and sales
    - **Square**: For retailer inventory and point-of-sale
- Showcase the canonical `WineCore` data model across all user types

## 🧭 UI/UX Architecture
- **Top Navigation**: Consistent across all user types
    - Logo/brand on left
    - Search bar in center
    - Login/profile controls on right

- **Side Navigation**:
    - Permanently collapsed (60px width) showing only icons
    - Consistent positioning across all views
    - Same core navigation items with role-specific additions

- **Content Area**:
    - Responsive layout that adjusts to screen size
    - Padding-left of 80px to accommodate the sidebar
    - Bootstrap grid system for responsive components
    - Cards wrap to maintain readability on smaller screens

## 📱 Responsive Design Guidelines
- **Desktop**: 3 cards per row (col-lg-4)
- **Tablet**: 2 cards per row (col-md-6)
- **Mobile**: 1 card per row (col-sm-12)
- All components should be fully responsive and not cut off on any screen size
- Content should be centered within the available space
- Side navigation remains fixed at 60px width on all screen sizes

## 👥 User Roles & Views
### Unauthenticated User
- **Home**: Platform introduction and featured wines
- **Explore**: Browse wines by region, varietal, or producer
- **Marketplace**: View available wines (read-only)

### Producer
- All unauthenticated views plus:
- **Dashboard**: Sales metrics and inventory status
- **Inventory**: Manage wine listings and stock
- **Shopify Sync**: Import/export inventory with Shopify

### Retailer
- All unauthenticated views plus:
- **Dashboard**: Sales metrics and inventory status
- **Inventory**: Manage wine listings and stock
- **Square Sync**: Import/export inventory with Square
    - **RetailerSyncQuery**: Preview mode showing editable Square data
    - **RetailerSyncPersist**: Post-save view showing canonical WineCore records

## 🍇 WineCore Data Model
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

## 🔄 Implementation Workflows
### Retailer Square Integration
1. User navigates to Square Sync page
2. Clicks "Fetch from Square" to load editable inventory data
3. Reviews and edits data as needed
4. Clicks "Save to Platform" to convert to WineCore format
5. System displays the saved data in canonical format

### Producer Shopify Integration
1. User navigates to Shopify Sync page
2. Clicks "Fetch from Shopify" to load editable product data
3. Reviews and edits data as needed
4. Clicks "Save to Platform" to convert to WineCore format
5. System displays the saved data in canonical format

## 💻 Coding Standards
- **Components**: One component per file
- **CSS**: Component-specific CSS files (e.g., `Explore.css` for `Explore.tsx`)
- **Responsive Design**: Use Bootstrap grid classes and media queries
- **TypeScript**: Use proper typing for all props and state
- **Mock Data**: Store in separate files under `/src/data/`
- **Naming**: PascalCase for components, camelCase for functions and variables

## 🗂️ File Structure
```
/src
  /components
    /layout          # Structural components
      TopNav.tsx
      SideNav.tsx
      Layout.tsx
    /pages           # Main view components
      Home.tsx
      Explore.tsx
      RetailerSyncQuery.tsx
      RetailerSyncPersist.tsx
    /common          # Reusable components
      WineCard.tsx
      FilterBar.tsx
  /data              # Mock data files
    mockData.ts
    mockSquareWines.ts
    models.ts        # TypeScript interfaces
  /styles            # Global styles
    global.css
```

## 💡 Development Goals
- Create presentation-ready UI for demo purposes
- Focus on visual accuracy and responsive behavior
- Prioritize fast feedback and iteration cycles
- Build with extensibility in mind for future features