import React, { useState } from 'react';
import { getAllProducersForRetailer } from '../../data/MockProducer';
import { getAllWinesForRetailer } from '../../data/MockWine';

const RetailerMarketplace: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('producers');
  const [selectedProducer, setSelectedProducer] = useState<string | null>(null);

  // Get data from centralized sources
  const producerDealsData = getAllProducersForRetailer();
  const wineDealsData = getAllWinesForRetailer();

  // Filter wines by selected producer
  const filteredWines = selectedProducer 
    ? wineDealsData.filter(wine => wine.producer === selectedProducer)
    : wineDealsData;

  return (
    <div>
      <h4>Retailer Marketplace</h4>
      <p>Source new producers and wines for your inventory.</p>

      <ul className="nav nav-tabs mb-4">
        <li className="nav-item">
          <button 
            className={`nav-link ${activeTab === 'producers' ? 'active' : ''}`}
            onClick={() => setActiveTab('producers')}
          >
            Producer Deals
          </button>
        </li>
        <li className="nav-item">
          <button 
            className={`nav-link ${activeTab === 'wines' ? 'active' : ''}`}
            onClick={() => {
              setActiveTab('wines');
              setSelectedProducer(null);
            }}
          >
            Wine Deals
          </button>
        </li>
      </ul>

      {activeTab === 'producers' && (
        <div className="row">
          {producerDealsData.map(producer => (
            <div key={producer.id} className="col-lg-4 col-md-6 col-sm-12 mb-4">
              <div className="card h-100">
                {producer.hasDeals && (
                  <div className="card-header bg-primary text-white">
                    <i className="bi bi-tag-fill me-2"></i>Special Deals Available
                  </div>
                )}
                <div className="card-body">
                  <h5 className="card-title">{producer.name}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">{producer.region}</h6>
                  <p className="card-text">{producer.description}</p>
                  <p className="card-text"><strong>Featured Wine:</strong> {producer.featuredWine}</p>

                  {producer.hasDeals && producer.dealDescription && (
                    <div className="alert alert-primary mt-3">
                      <i className="bi bi-info-circle me-2"></i>
                      {producer.dealDescription}
                    </div>
                  )}

                  {producer.caseDiscount && (
                    <div className="mt-2">
                      <span className="badge bg-success">
                        <i className="bi bi-box-seam me-1"></i>
                        {producer.caseDiscount}% Case Discount
                      </span>
                    </div>
                  )}
                </div>
                <div className="card-footer d-flex justify-content-between">
                  <button 
                    className="btn btn-sm btn-outline-primary"
                    onClick={() => {
                      setSelectedProducer(producer.name);
                      setActiveTab('wines');
                    }}
                  >
                    View Wines
                  </button>
                  <button className="btn btn-sm btn-outline-secondary">
                    Contact Producer
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'wines' && (
        <>
          <div className="row mb-4">
            <div className="col-md-3">
              <div className="card">
                <div className="card-header">
                  <h5>Filter</h5>
                </div>
                <div className="card-body">
                  <div className="mb-3">
                    <label className="form-label">Producer</label>
                    <select 
                      className="form-select"
                      value={selectedProducer || ''}
                      onChange={(e) => setSelectedProducer(e.target.value || null)}
                    >
                      <option value="">All Producers</option>
                      {producerDealsData.map(producer => (
                        <option key={producer.id} value={producer.name}>
                          {producer.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Region</label>
                    <select className="form-select">
                      <option>All Regions</option>
                      <option>Alexander Valley</option>
                      <option>Bordeaux</option>
                      <option>Sonoma</option>
                      <option>Tuscany</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Price Range</label>
                    <select className="form-select">
                      <option>Any Price</option>
                      <option>Under $50</option>
                      <option>$50 - $100</option>
                      <option>$100+</option>
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
                      <th>Regular Price</th>
                      <th>Deal Price</th>
                      <th>Case Price</th>
                      <th>Available</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredWines.map(wine => (
                      <tr key={wine.id}>
                        <td>{wine.vintage} {wine.name}</td>
                        <td>{wine.producer}</td>
                        <td>{wine.region}</td>
                        <td className="text-decoration-line-through">${wine.regularPrice?.toFixed(2) || wine.price.toFixed(2)}</td>
                        <td className="text-primary fw-bold">${wine.price.toFixed(2)}</td>
                        <td className="text-success">${wine.casePrice?.toFixed(2) || wine.price.toFixed(2)}</td>
                        <td>{wine.available} bottles</td>
                        <td>
                          <button className="btn btn-sm btn-primary me-2">Order</button>
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
    </div>
  );
};

export default RetailerMarketplace;
