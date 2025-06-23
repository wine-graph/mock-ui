# CSS Organization

This directory contains global styles for the application. The CSS files in the project are organized as follows:

## Global Styles

- `global.css`: Contains global styles that apply to the entire application, including:
  - CSS variables for colors and other theme values
  - Basic styles for HTML elements (body, html, etc.)
  - Utility classes for common styling needs
  - Global card styling

## App-specific Styles

- `App.css`: Contains styles that are specific to the App component but not tied to any particular child component, including:
  - Navigation styling for the top navigation bar
  - Content area styling
  - Wine card styling
  - Responsive adjustments for the app layout

## Component-specific Styles

Component-specific styles are located alongside their respective components:

- `src/components/layout/Layout.css`: Styles for the Layout component
- `src/components/layout/SideNav.css`: Styles for the SideNav component
- `src/components/pages/Explore.css`: Styles for the Explore page

This organization ensures that:
1. Global styles are centralized and easy to find
2. Component-specific styles are co-located with their components
3. Redundancy is minimized by avoiding duplicate styles across files