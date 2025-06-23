import React, { useState } from 'react';
import { WineCoreImpl } from '../../data/models';
import { shopifyProductsData } from '../../data/mockProducerData';

const ProducerSync: React.FC = () => {
  const [view, setView] = useState<'query' | 'persist'>('query');
  const [savedWines, setSavedWines] = useState<WineCoreImpl[]>([]);

  // Get data from centralized mock files
  const shopifyProducts = shopifyProductsData;

  // Handle fetching from Shopify
  const handleFetchFromShopify = () => {
    // In a real app, this would make an API call to Shopify
    console.log("Fetching from Shopify...");
  };

  // Handle saving to platform
  const handleSaveToPlatform = () => {
    // In a real app, this would convert Shopify data to WineCore format and save it
    console.log("Saving to platform...");

    // Mock conversion to WineCore format
    const convertedWines: WineCoreImpl[] = shopifyProducts.map(product => {
      const wine = new WineCoreImpl();
      wine.id = product.id;
      wine.name = product.title.split(" ").slice(1).join(" "); // Remove year
      wine.vintage = parseInt(product.title.split(" ")[0]);
      wine.size = 750;
      wine.producer = "Your Winery"; // This would be the producer's name
      wine.description = product.description;
      // Other fields would be populated here
      return wine;
    });

    setSavedWines(convertedWines);
    setView('persist');
  };

  // Handle going back to query view
  const handleBackToQuery = () => {
    setView('query');
  };

  return (
    <div>
      {view === 'query' ? (
        <div>
          <div className="d-flex justify-content-between align-items-center mb-4">
            <div>
              <h5>Shopify Integration</h5>
              <p>Sync your wine inventory with your Shopify store.</p>
            </div>
            <button className="btn btn-primary" onClick={handleFetchFromShopify}>
              <i className="bi bi-arrow-repeat me-2"></i>Fetch from Shopify
            </button>
          </div>

          <div className="alert alert-info">
            <i className="bi bi-info-circle me-2"></i>
            Connected to: <strong>yourwinery.myshopify.com</strong>
          </div>

          <div className="table-responsive">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>SKU</th>
                  <th>Inventory</th>
                  <th>Price</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                {shopifyProducts.map(product => (
                  <tr key={product.id}>
                    <td>{product.title}</td>
                    <td>{product.sku}</td>
                    <td>{product.inventory}</td>
                    <td>${product.price.toFixed(2)}</td>
                    <td>{product.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="d-grid gap-2 d-md-flex justify-content-md-end mt-4">
            <button className="btn btn-primary" onClick={handleSaveToPlatform}>
              Save to Platform
            </button>
          </div>
        </div>
      ) : (
        <div>
          <div className="d-flex justify-content-between align-items-center mb-4">
            <div>
              <h5>Saved to Platform</h5>
              <p>Your Shopify products have been converted to WineCore format and saved to the platform.</p>
            </div>
            <button className="btn btn-outline-primary" onClick={handleBackToQuery}>
              Back to Shopify Sync
            </button>
          </div>

          <div className="alert alert-success">
            <i className="bi bi-check-circle me-2"></i>
            Successfully saved {savedWines.length} wines to the platform.
          </div>

          <div className="table-responsive">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Vintage</th>
                  <th>Size</th>
                  <th>Producer</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                {savedWines.map(wine => (
                  <tr key={wine.id}>
                    <td>{wine.name}</td>
                    <td>{wine.vintage}</td>
                    <td>{wine.size} ml</td>
                    <td>{wine.producer}</td>
                    <td>{wine.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProducerSync;
