import React, { useState } from 'react';
import ProducerSync from './ProducerSync.tsx';
import {mockWines} from "../../types/Wine.ts";

const ProducerCellar: React.FC = () => {
  const [view, setView] = useState<string>('collection');
  
  // Filter only Luli wines
  const luliWines = mockWines.filter(wine => wine.producer === "Luli Wines");

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h4>Luli Wines Cellar</h4>
          <p>Manage inventory, upload wine data from CSV, or sync with Shopify.</p>
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
            className={`nav-link ${view === 'producersync' ? 'active' : ''}`}
            onClick={() => setView('producersync')}
          >
            Shopify Sync
          </button>
        </li>
        <li className="nav-item">
          <button 
            className={`nav-link ${view === 'csvsync' ? 'active' : ''}`}
            onClick={() => setView('csvsync')}
          >
            CSV Import
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
              {luliWines.map(wine => (
                <tr key={wine.id}>
                  <td>{wine.name}</td>
                  <td>{wine.subarea || "Napa Valley AVA"}</td>
                  <td>120 bottles</td>
                  <td>{wine.description}</td>
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


      {view === 'producersync' && (
        <ProducerSync mode="shopify" />
      )}

      {view === 'csvsync' && (
        <ProducerSync mode="csv" />
      )}
    </div>
  );
};

export default ProducerCellar;
