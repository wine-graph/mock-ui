import React, { useState } from 'react';
import { mockWines, type Wine } from '../../types/Wine';

const ProducerSync: React.FC = () => {
  const [view, setView] = useState<'query' | 'persist'>('query');
  const [savedWines, setSavedWines] = useState<Wine[]>([]);

  // Simulated product source - filter for Luli wines only
  const shopifyProducts = mockWines.filter(wine => wine.producer === "Luli Wines");

  const handleFetchFromShopify = () => {
    console.log('Fetching from Shopify...');
    // In a real app, this would fetch updated products via access token
  };

  const handleSaveToPlatform = () => {
    console.log('Saving to platform...');

    const convertedWines: Wine[] = shopifyProducts.map((product) => ({
      id: product.id,
      name: product.name,
      vintage: product.vintage,
      size: product.size ?? 750,
      producer: 'Luli Wines',
      description: product.description,
      alcohol: product.alcohol,
      acid: product.acid,
      pH: product.pH,
      bottleAging: product.bottleAging,
      color: product.color,
      closure: product.closure,
      shape: product.shape,
      type: product.type,
      subarea: product.subarea,
    }));

    setSavedWines(convertedWines);
    setView('persist');
  };

  const handleBackToQuery = () => setView('query');

  return (
      <div className="container py-4">
        {view === 'query' ? (
            <>
              <div className="d-flex justify-content-between align-items-center mb-4">
                <div>
                  <h5>Luli Wines Shopify Integration</h5>
                  <p>Sync your wine inventory from your Shopify store.</p>
                </div>
                <button className="btn btn-primary" onClick={handleFetchFromShopify}>
                  <i className="bi bi-arrow-repeat me-2"></i>Fetch from Shopify
                </button>
              </div>

              <div className="alert alert-info">
                <i className="bi bi-info-circle me-2"></i>
                Connected to: <strong>luliwines.myshopify.com</strong>
              </div>

              <div className="table-responsive">
                <table className="table table-hover">
                  <thead>
                  <tr>
                    <th>Wine</th>
                    <th>Vintage</th>
                    <th>Size</th>
                    <th>Description</th>
                  </tr>
                  </thead>
                  <tbody>
                  {shopifyProducts.map((wine) => (
                      <tr key={wine.id}>
                        <td>{wine.name}</td>
                        <td>{wine.vintage}</td>
                        <td>{wine.size ?? 750} ml</td>
                        <td>{wine.description}</td>
                      </tr>
                  ))}
                  </tbody>
                </table>
              </div>

              <div className="text-end mt-4">
                <button className="btn btn-primary" onClick={handleSaveToPlatform}>
                  Save to Platform
                </button>
              </div>
            </>
        ) : (
            <>
              <div className="d-flex justify-content-between align-items-center mb-4">
                <div>
                  <h5>Saved to Platform</h5>
                  <p>Your products have been converted and saved to WineCore format.</p>
                </div>
                <button className="btn btn-outline-primary" onClick={handleBackToQuery}>
                  Back to Shopify Sync
                </button>
              </div>

              <div className="alert alert-success">
                <i className="bi bi-check-circle me-2"></i>
                Successfully saved {savedWines.length} wines.
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
                  {savedWines.map((wine) => (
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
            </>
        )}
      </div>
  );
};

export default ProducerSync;