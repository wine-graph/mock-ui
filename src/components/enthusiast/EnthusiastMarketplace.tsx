import React, { useState } from 'react';
import { getAllProducersForEnthusiast } from '../../data/MockProducer';
import { getAllWinesForEnthusiast } from '../../data/MockWine';
import { 
  wineShopsData, 
  popularSearches 
} from '../../data/mockEnthusiastMarketplace';

const EnthusiastMarketplace: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('search');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedFilters, setSelectedFilters] = useState({
    priceRange: '',
    region: '',
    varietal: '',
    availability: '',
    sellerType: ''
  });

  // Get data from centralized sources
  const enhancedWinesData = getAllWinesForEnthusiast();
  const producerDirectData = getAllProducersForEnthusiast();

  // Filter wines based on search and filters
  const filteredWines = enhancedWinesData.filter(wine => {
    const matchesSearch = searchTerm === '' || 
      wine.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      wine.producer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      wine.region.toLowerCase().includes(searchTerm.toLowerCase()) ||
      wine.varietal.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesPrice = selectedFilters.priceRange === '' || 
      (selectedFilters.priceRange === 'under-50' && wine.price < 50) ||
      (selectedFilters.priceRange === '50-100' && wine.price >= 50 && wine.price <= 100) ||
      (selectedFilters.priceRange === '100-200' && wine.price > 100 && wine.price <= 200) ||
      (selectedFilters.priceRange === 'over-200' && wine.price > 200);

    const matchesRegion = selectedFilters.region === '' || 
      wine.region.toLowerCase().includes(selectedFilters.region.toLowerCase());

    const matchesVarietal = selectedFilters.varietal === '' || 
      wine.varietal.toLowerCase().includes(selectedFilters.varietal.toLowerCase());

    const matchesAvailability = selectedFilters.availability === '' || 
      wine.availability === selectedFilters.availability;

    const matchesSellerType = selectedFilters.sellerType === '' || 
      wine.sellerType === selectedFilters.sellerType;

    return matchesSearch && matchesPrice && matchesRegion && matchesVarietal && matchesAvailability && matchesSellerType;
  });

  const getAvailabilityBadge = (availability: string) => {
    switch (availability) {
      case 'in-stock':
        return <span className="badge bg-success">In Stock</span>;
      case 'limited':
        return <span className="badge bg-warning">Limited</span>;
      case 'pre-order':
        return <span className="badge bg-info">Pre-Order</span>;
      case 'sold-out':
        return <span className="badge bg-danger">Sold Out</span>;
      default:
        return <span className="badge bg-secondary">Unknown</span>;
    }
  };

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<i key={i} className="bi bi-star-fill text-warning"></i>);
    }

    if (hasHalfStar) {
      stars.push(<i key="half" className="bi bi-star-half text-warning"></i>);
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<i key={`empty-${i}`} className="bi bi-star text-muted"></i>);
    }

    return stars;
  };

  return (
    <div>
      <h4>Wine Discovery</h4>
      <p>Find wines to buy from local shops, search specific bottles, and discover producer direct options.</p>

      <ul className="nav nav-tabs mb-4">
        <li className="nav-item">
          <button 
            className={`nav-link ${activeTab === 'search' ? 'active' : ''}`}
            onClick={() => setActiveTab('search')}
          >
            <i className="bi bi-search me-2"></i>Search Wines
          </button>
        </li>
        <li className="nav-item">
          <button 
            className={`nav-link ${activeTab === 'map' ? 'active' : ''}`}
            onClick={() => setActiveTab('map')}
          >
            <i className="bi bi-geo-alt me-2"></i>Wine Shops Map
          </button>
        </li>
        <li className="nav-item">
          <button 
            className={`nav-link ${activeTab === 'producers' ? 'active' : ''}`}
            onClick={() => setActiveTab('producers')}
          >
            <i className="bi bi-building me-2"></i>Producer Direct
          </button>
        </li>
      </ul>

      {activeTab === 'search' && (
        <div>
          {/* Enhanced Search Bar */}
          <div className="row mb-4">
            <div className="col-md-8">
              <div className="input-group">
                <span className="input-group-text">
                  <i className="bi bi-search"></i>
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search for wines, producers, regions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button className="btn btn-primary" type="button">
                  Search
                </button>
              </div>

              {/* Search Suggestions */}
              {searchTerm === '' && (
                <div className="mt-3">
                  <small className="text-muted">Popular searches: </small>
                  {popularSearches.slice(0, 5).map((search, index) => (
                    <button
                      key={index}
                      className="btn btn-sm btn-outline-secondary me-2 mb-1"
                      onClick={() => setSearchTerm(search)}
                    >
                      {search}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <div className="col-md-4">
              <button className="btn btn-outline-primary w-100">
                <i className="bi bi-funnel me-2"></i>Advanced Filters
              </button>
            </div>
          </div>

          {/* Filters */}
          <div className="row mb-4">
            <div className="col-md-2">
              <select 
                className="form-select form-select-sm"
                value={selectedFilters.priceRange}
                onChange={(e) => setSelectedFilters({...selectedFilters, priceRange: e.target.value})}
              >
                <option value="">Any Price</option>
                <option value="under-50">Under $50</option>
                <option value="50-100">$50 - $100</option>
                <option value="100-200">$100 - $200</option>
                <option value="over-200">$200+</option>
              </select>
            </div>
            <div className="col-md-2">
              <select 
                className="form-select form-select-sm"
                value={selectedFilters.varietal}
                onChange={(e) => setSelectedFilters({...selectedFilters, varietal: e.target.value})}
              >
                <option value="">All Varietals</option>
                <option value="Cabernet Sauvignon">Cabernet Sauvignon</option>
                <option value="Pinot Noir">Pinot Noir</option>
                <option value="Chardonnay">Chardonnay</option>
                <option value="Sauvignon Blanc">Sauvignon Blanc</option>
                <option value="Nebbiolo">Nebbiolo</option>
              </select>
            </div>
            <div className="col-md-2">
              <select 
                className="form-select form-select-sm"
                value={selectedFilters.region}
                onChange={(e) => setSelectedFilters({...selectedFilters, region: e.target.value})}
              >
                <option value="">All Regions</option>
                <option value="Napa Valley">Napa Valley</option>
                <option value="Sonoma">Sonoma</option>
                <option value="Bordeaux">Bordeaux</option>
                <option value="Tuscany">Tuscany</option>
                <option value="Champagne">Champagne</option>
              </select>
            </div>
            <div className="col-md-2">
              <select 
                className="form-select form-select-sm"
                value={selectedFilters.availability}
                onChange={(e) => setSelectedFilters({...selectedFilters, availability: e.target.value})}
              >
                <option value="">All Availability</option>
                <option value="in-stock">In Stock</option>
                <option value="limited">Limited</option>
                <option value="pre-order">Pre-Order</option>
              </select>
            </div>
            <div className="col-md-2">
              <select 
                className="form-select form-select-sm"
                value={selectedFilters.sellerType}
                onChange={(e) => setSelectedFilters({...selectedFilters, sellerType: e.target.value})}
              >
                <option value="">All Sellers</option>
                <option value="retailer">Retailers</option>
                <option value="producer">Producers</option>
              </select>
            </div>
            <div className="col-md-2">
              <button 
                className="btn btn-outline-secondary btn-sm w-100"
                onClick={() => setSelectedFilters({
                  priceRange: '',
                  region: '',
                  varietal: '',
                  availability: '',
                  sellerType: ''
                })}
              >
                Clear Filters
              </button>
            </div>
          </div>

          {/* Search Results */}
          <div className="row">
            <div className="col-12">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h5>Search Results ({filteredWines.length} wines found)</h5>
                <div className="btn-group btn-group-sm">
                  <button className="btn btn-outline-secondary active">
                    <i className="bi bi-grid"></i>
                  </button>
                  <button className="btn btn-outline-secondary">
                    <i className="bi bi-list"></i>
                  </button>
                </div>
              </div>

              <div className="row">
                {filteredWines.map(wine => (
                  <div key={wine.id} className="col-lg-4 col-md-6 col-sm-12 mb-4">
                    <div className="card h-100">
                      <div className="card-body">
                        <div className="d-flex justify-content-between align-items-start mb-2">
                          <h6 className="card-title mb-0">
                            {wine.vintage > 0 ? wine.vintage : 'NV'} {wine.name}
                          </h6>
                          {getAvailabilityBadge(wine.availability)}
                        </div>

                        <p className="card-subtitle text-muted mb-2">
                          {wine.producer} • {wine.region}
                        </p>

                        {wine.rating && (
                          <div className="mb-2">
                            <div className="d-flex align-items-center">
                              <div className="me-2">{renderStars(wine.rating)}</div>
                              <small className="text-muted">({wine.reviewCount} reviews)</small>
                            </div>
                          </div>
                        )}

                        <p className="card-text small">{wine.description}</p>

                        <div className="mb-2">
                          {wine.tags.slice(0, 3).map((tag, index) => (
                            <span key={index} className="badge bg-light text-dark me-1 mb-1">
                              {tag}
                            </span>
                          ))}
                        </div>

                        <div className="d-flex justify-content-between align-items-center">
                          <div>
                            <strong className="text-primary">${wine.price.toFixed(2)}</strong>
                            <br />
                            <small className="text-muted">
                              {wine.sellerType === 'producer' ? 'Direct' : 'Retail'} • {wine.seller}
                            </small>
                          </div>
                          <div>
                            <button className="btn btn-sm btn-primary">
                              <i className="bi bi-cart-plus me-1"></i>Add to Cart
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'map' && (
        <div>
          <div className="row">
            <div className="col-md-8">
              {/* Mock Map Widget */}
              <div className="card">
                <div className="card-header d-flex justify-content-between align-items-center">
                  <h5 className="mb-0">
                    <i className="bi bi-geo-alt me-2"></i>Wine Shops Near You
                  </h5>
                  <div className="btn-group btn-group-sm">
                    <button className="btn btn-outline-primary active">Map</button>
                    <button className="btn btn-outline-primary">Satellite</button>
                  </div>
                </div>
                <div className="card-body p-0">
                  {/* Mock Map Display */}
                  <div 
                    style={{ 
                      height: '400px', 
                      backgroundColor: '#f8f9fa',
                      backgroundImage: 'linear-gradient(45deg, #e9ecef 25%, transparent 25%), linear-gradient(-45deg, #e9ecef 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #e9ecef 75%), linear-gradient(-45deg, transparent 75%, #e9ecef 75%)',
                      backgroundSize: '20px 20px',
                      backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      position: 'relative'
                    }}
                  >
                    <div className="text-center">
                      <i className="bi bi-map display-4 text-muted mb-3"></i>
                      <h5 className="text-muted">Interactive Map</h5>
                      <p className="text-muted">Wine shops and their locations would be displayed here</p>

                      {/* Mock Map Markers */}
                      <div style={{ position: 'absolute', top: '20%', left: '30%' }}>
                        <i className="bi bi-geo-alt-fill text-danger" style={{ fontSize: '24px' }}></i>
                      </div>
                      <div style={{ position: 'absolute', top: '40%', right: '25%' }}>
                        <i className="bi bi-geo-alt-fill text-danger" style={{ fontSize: '24px' }}></i>
                      </div>
                      <div style={{ position: 'absolute', bottom: '30%', left: '40%' }}>
                        <i className="bi bi-geo-alt-fill text-danger" style={{ fontSize: '24px' }}></i>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-footer">
                  <div className="d-flex justify-content-between align-items-center">
                    <small className="text-muted">
                      <i className="bi bi-geo-alt me-1"></i>
                      Showing {wineShopsData.length} wine shops within 15 miles
                    </small>
                    <button className="btn btn-sm btn-outline-primary">
                      <i className="bi bi-crosshair me-1"></i>Use My Location
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card">
                <div className="card-header">
                  <h5 className="mb-0">Nearby Wine Shops</h5>
                </div>
                <div className="card-body p-0">
                  <div className="list-group list-group-flush">
                    {wineShopsData.map(shop => (
                      <div key={shop.id} className="list-group-item">
                        <div className="d-flex justify-content-between align-items-start">
                          <div className="flex-grow-1">
                            <h6 className="mb-1">{shop.name}</h6>
                            <p className="mb-1 small text-muted">
                              {shop.address}, {shop.city}, {shop.state}
                            </p>
                            <div className="d-flex align-items-center mb-2">
                              <div className="me-2">{renderStars(shop.rating)}</div>
                              <small className="text-muted">({shop.reviewCount})</small>
                            </div>
                            <div className="mb-2">
                              {shop.specialties.slice(0, 2).map((specialty, index) => (
                                <span key={index} className="badge bg-light text-dark me-1">
                                  {specialty}
                                </span>
                              ))}
                            </div>
                          </div>
                          <div className="text-end">
                            <small className="text-primary fw-bold">{shop.distance} mi</small>
                          </div>
                        </div>
                        <div className="d-flex gap-2 mt-2">
                          <button className="btn btn-sm btn-outline-primary flex-grow-1">
                            <i className="bi bi-telephone me-1"></i>Call
                          </button>
                          <button className="btn btn-sm btn-outline-secondary flex-grow-1">
                            <i className="bi bi-geo-alt me-1"></i>Directions
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'producers' && (
        <div>
          <div className="row mb-4">
            <div className="col-12">
              <div className="alert alert-info">
                <i className="bi bi-info-circle me-2"></i>
                <strong>Producer Direct:</strong> Buy wines directly from the winery. Often includes exclusive releases, library wines, and special pricing.
              </div>
            </div>
          </div>

          <div className="row">
            {producerDirectData.map(producer => (
              <div key={producer.id} className="col-lg-4 col-md-6 col-sm-12 mb-4">
                <div className="card h-100">
                  <div className="card-header bg-primary text-white">
                    <div className="d-flex justify-content-between align-items-center">
                      <h6 className="mb-0">{producer.producerName}</h6>
                      <span className="badge bg-light text-dark">Est. {producer.establishedYear}</span>
                    </div>
                  </div>
                  <div className="card-body">
                    <p className="card-subtitle text-muted mb-2">{producer.region}</p>
                    <p className="card-text small">{producer.description}</p>

                    <div className="mb-3">
                      <div className="d-flex align-items-center mb-2">
                        <div className="me-2">{renderStars(producer.rating)}</div>
                        <small className="text-muted">({producer.reviewCount} reviews)</small>
                      </div>
                    </div>

                    <div className="mb-3">
                      <h6 className="small fw-bold">Special Offers:</h6>
                      {producer.specialOffers.map((offer, index) => (
                        <div key={index} className="small text-success">
                          <i className="bi bi-check-circle me-1"></i>{offer}
                        </div>
                      ))}
                    </div>

                    <div className="mb-3">
                      <h6 className="small fw-bold">Ships to:</h6>
                      <div>
                        {producer.shippingStates.slice(0, 4).map((state, index) => (
                          <span key={index} className="badge bg-light text-dark me-1">
                            {state}
                          </span>
                        ))}
                        {producer.shippingStates.length > 4 && (
                          <span className="badge bg-light text-dark">
                            +{producer.shippingStates.length - 4} more
                          </span>
                        )}
                      </div>
                    </div>

                    {producer.featuredWines.length > 0 && (
                      <div className="mb-3">
                        <h6 className="small fw-bold">Featured Wine:</h6>
                        <div className="small">
                          <strong>{producer.featuredWines[0].vintage} {producer.featuredWines[0].name}</strong>
                          <br />
                          <span className="text-primary">${producer.featuredWines[0].price.toFixed(2)}</span>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="card-footer">
                    <div className="d-grid gap-2">
                      <button className="btn btn-primary btn-sm">
                        <i className="bi bi-shop me-1"></i>Visit Winery Shop
                      </button>
                      <button className="btn btn-outline-secondary btn-sm">
                        <i className="bi bi-globe me-1"></i>Website
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default EnthusiastMarketplace;
