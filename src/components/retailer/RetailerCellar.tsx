import React, { useState } from 'react';
import RetailerSync from './RetailerSync';
import { getCollectionData, getWishlistData } from '../../data/MockWine';

const RetailerCellar: React.FC = () => {
  const [view, setView] = useState<string>('collection');

  // Get data from centralized mock files
  const collection = getCollectionData();
  const wishlist = getWishlistData();

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h4>Retailer Wine Cellar</h4>
          <p>Manage your wine collection, wishlist, and sync with Square POS.</p>
        </div>
        <button className="btn btn-primary">Add Wine</button>
      </div>

      <ul className="nav nav-tabs mb-4">
        <li className="nav-item">
          <button 
            className={`nav-link ${view === 'collection' ? 'active' : ''}`}
            onClick={() => setView('collection')}
          >
            My Collection
          </button>
        </li>
        <li className="nav-item">
          <button 
            className={`nav-link ${view === 'wishlist' ? 'active' : ''}`}
            onClick={() => setView('wishlist')}
          >
            Wishlist
          </button>
        </li>
        <li className="nav-item">
          <button 
            className={`nav-link ${view === 'retailersync' ? 'active' : ''}`}
            onClick={() => setView('retailersync')}
          >
            Square Sync
          </button>
        </li>
      </ul>

      {view === 'collection' && (
        <div className="table-responsive">
          <table className="table table-hover">
            <thead>
              <tr>
                <th>Wine</th>
                <th>Producer</th>
                <th>Region</th>
                <th>Quantity</th>
                <th>Notes</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {collection.map(wine => (
                <tr key={wine.id}>
                  <td>{wine.name}</td>
                  <td>{wine.producer}</td>
                  <td>{wine.region}</td>
                  <td>{wine.quantity}</td>
                  <td>{wine.notes}</td>
                  <td>
                    <button className="btn btn-sm btn-outline-secondary me-2">Edit</button>
                    <button className="btn btn-sm btn-outline-danger">Remove</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {view === 'wishlist' && (
        <div className="table-responsive">
          <table className="table table-hover">
            <thead>
              <tr>
                <th>Wine</th>
                <th>Producer</th>
                <th>Region</th>
                <th>Notes</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {wishlist.map(wine => (
                <tr key={wine.id}>
                  <td>{wine.name}</td>
                  <td>{wine.producer}</td>
                  <td>{wine.region}</td>
                  <td>{wine.notes}</td>
                  <td>
                    <button className="btn btn-sm btn-outline-success me-2">Add to Collection</button>
                    <button className="btn btn-sm btn-outline-danger">Remove</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {view === 'retailersync' && (
        <RetailerSync />
      )}
    </div>
  );
};

export default RetailerCellar;
