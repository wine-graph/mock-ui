import React, { useState } from 'react';
import { UserType } from '../../App';
import { getAvailableWinesForMarketplace } from '../../data/MockWine';
import { getProducerOfferingsForMarketplace } from '../../data/MockProducer';

interface MarketplaceProps {
  userType: UserType;
}

const Marketplace: React.FC<MarketplaceProps> = ({ userType }) => {
  const [activeTab, setActiveTab] = useState<string>('buy');

  // Get data from centralized mock files
  const availableWines = getAvailableWinesForMarketplace();
  const producerOfferings = getProducerOfferingsForMarketplace();

  return (
    <div>
      <h4>Wine Marketplace</h4>
      <p>Buy wines from retailers or directly from producers.</p>

      <ul className="nav nav-tabs mb-4">
        <li className="nav-item">
          <button 
            className={`nav-link ${activeTab === 'buy' ? 'active' : ''}`}
            onClick={() => setActiveTab('buy')}
          >
            Buy Wine
          </button>
        </li>
        <li className="nav-item">
          <button 
            className={`nav-link ${activeTab === 'producers' ? 'active' : ''}`}
            onClick={() => setActiveTab('producers')}
          >
            Producer Direct
          </button>
        </li>
        <li className="nav-item">
          <button 
            className={`nav-link ${activeTab === 'sell' ? 'active' : ''}`}
            onClick={() => setActiveTab('sell')}
          >
            Sell Wine
          </button>
        </li>
      </ul>

      {activeTab === 'buy' && (
        <>
          <div className="row mb-4">
            <div className="col-md-3">
              <div className="card">
                <div className="card-header">
                  <h5>Filter</h5>
                </div>
                <div className="card-body">
                  <div className="mb-3">
                    <label className="form-label">Price Range</label>
                    <select className="form-select">
                      <option>Any Price</option>
                      <option>Under $50</option>
                      <option>$50 - $100</option>
                      <option>$100 - $200</option>
                      <option>$200+</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Region</label>
                    <select className="form-select">
                      <option>All Regions</option>
                      <option>California</option>
                      <option>France</option>
                      <option>Italy</option>
                      <option>Spain</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Wine Type</label>
                    <select className="form-select">
                      <option>All Types</option>
                      <option>Red</option>
                      <option>White</option>
                      <option>Sparkling</option>
                      <option>Rosé</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-9">
              <div className="table-responsive">
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th>Wine</th>
                      <th>Producer</th>
                      <th>Region</th>
                      <th>Price</th>
                      <th>Seller</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {availableWines.map(wine => (
                      <tr key={wine.id}>
                        <td>{wine.name}</td>
                        <td>{wine.producer}</td>
                        <td>{wine.region}</td>
                        <td>${wine.price.toFixed(2)}</td>
                        <td>{wine.seller}</td>
                        <td>
                          <button className="btn btn-sm btn-primary me-2">Add to Cart</button>
                          <button className="btn btn-sm btn-outline-secondary">Details</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </>
      )}

      {activeTab === 'producers' && (
        <div className="row">
          {producerOfferings.map(producer => (
            <div key={producer.id} className="col-md-4 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">{producer.name}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">{producer.region}</h6>
                  <p className="card-text">{producer.description}</p>
                  <p className="card-text"><strong>Featured Wine:</strong> {producer.featured}</p>
                </div>
                <div className="card-footer">
                  <button className="btn btn-sm btn-outline-primary">Visit Producer Shop</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'sell' && (
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Sell Your Wine</h5>
            <p className="card-text">List your wines for sale on our marketplace. Connect with buyers looking for rare and unique bottles.</p>
            <div className="alert alert-info">
              <i className="bi bi-info-circle me-2"></i>
              You must be logged in and verified as a seller to list wines.
            </div>
            <button className="btn btn-primary" disabled>Create Listing</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Marketplace;
