import React, { useState } from 'react';
import ProducerSync from './ProducerSync';
import { producerInventoryData, upcomingReleasesData } from '../../data/mockProducerData';

const ProducerCellar: React.FC = () => {
  const [view, setView] = useState<string>('collection');

  // Get data from centralized mock files
  const collection = producerInventoryData;
  const upcomingReleases = upcomingReleasesData;

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h4>Producer Wine Cellar</h4>
          <p>Manage your wine inventory, upcoming releases, and sync with Shopify.</p>
        </div>
        <button className="btn btn-primary">Add Wine</button>
      </div>

      <ul className="nav nav-tabs mb-4">
        <li className="nav-item">
          <button 
            className={`nav-link ${view === 'collection' ? 'active' : ''}`}
            onClick={() => setView('collection')}
          >
            Current Inventory
          </button>
        </li>
        <li className="nav-item">
          <button 
            className={`nav-link ${view === 'upcoming' ? 'active' : ''}`}
            onClick={() => setView('upcoming')}
          >
            Upcoming Releases
          </button>
        </li>
        <li className="nav-item">
          <button 
            className={`nav-link ${view === 'producersync' ? 'active' : ''}`}
            onClick={() => setView('producersync')}
          >
            Shopify Sync
          </button>
        </li>
      </ul>

      {view === 'collection' && (
        <div className="table-responsive">
          <table className="table table-hover">
            <thead>
              <tr>
                <th>Wine</th>
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
                  <td>{wine.region}</td>
                  <td>{wine.quantity} bottles</td>
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

      {view === 'upcoming' && (
        <div className="table-responsive">
          <table className="table table-hover">
            <thead>
              <tr>
                <th>Wine</th>
                <th>Region</th>
                <th>Release Date</th>
                <th>Notes</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {upcomingReleases.map(wine => (
                <tr key={wine.id}>
                  <td>{wine.name}</td>
                  <td>{wine.region}</td>
                  <td>{wine.releaseDate}</td>
                  <td>{wine.notes}</td>
                  <td>
                    <button className="btn btn-sm btn-outline-success me-2">Edit</button>
                    <button className="btn btn-sm btn-outline-danger">Remove</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {view === 'producersync' && (
        <ProducerSync />
      )}
    </div>
  );
};

export default ProducerCellar;
