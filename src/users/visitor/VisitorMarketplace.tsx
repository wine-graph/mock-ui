import React, {useState} from 'react';
import {mockRetailer} from '../../types/Retailer.ts';

const VisitorMarketplace: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedLocation, setSelectedLocation] = useState('');

    // Filter retailers based on search term and location
    const filteredRetailers = mockRetailer.filter(retailer =>
        (retailer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            (retailer.location?.city && retailer.location.city.toLowerCase().includes(searchTerm.toLowerCase())) ||
            (retailer.location?.state && retailer.location.state.toLowerCase().includes(searchTerm.toLowerCase()))) &&
        (selectedLocation === '' ||
            (retailer.location?.city && retailer.location.city === selectedLocation) ||
            (retailer.location?.state && retailer.location.state === selectedLocation))
    );

    // Get unique locations from retailers
    const locations = mockRetailer
        .map(retailer => retailer.location?.city || '')
        .filter((city, index, self) => city && self.indexOf(city) === index);

    return (
        <div className="container py-4">
            <h4>Wine Finder</h4>
            <p>Find local wine retailers in your area. Discover shops that carry your favorite wines.</p>

            {/* Search and filter */}
            <div className="row mb-4">
                <div className="col-md-6">
                    <div className="input-group">
                        <span className="input-group-text">
                          <i className="bi bi-search"></i>
                        </span>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search retailers by name or location..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </div>
                <div className="col-md-6">
                    <select
                        className="form-select"
                        value={selectedLocation}
                        onChange={(e) => setSelectedLocation(e.target.value)}
                    >
                        <option value="">All Locations</option>
                        {locations.map((location, index) => (
                            <option key={index} value={location}>{location}</option>
                        ))}
                    </select>
                </div>
            </div>
            
            {/* Map placeholder */}
            <div className="card mb-4">
                <div className="card-body p-0">
                    <div className="bg-light text-center py-5" style={{ borderRadius: '0.25rem' }}>
                        <i className="bi bi-map fs-1 text-secondary"></i>
                        <h5 className="mt-3">Wine Retailer Map</h5>
                        <p className="text-muted">Interactive map showing wine retailers in your area</p>
                    </div>
                </div>
            </div>

            {/* Retailer List */}
            <h5 className="mb-3">Wine Retailers</h5>
            <div className="row">
                {filteredRetailers.map((retailer) => (
                    <div key={retailer.id} className="col-lg-4 col-md-6 mb-4">
                        <div className="card h-100">
                            <div className="card-header d-flex justify-content-between align-items-center">
                                <h5 className="mb-0 fs-6">{retailer.name}</h5>
                                {retailer.logoUrl && (
                                    <img src={retailer.logoUrl} alt={`${retailer.name} logo`} className="img-fluid" style={{ maxHeight: '30px' }} />
                                )}
                            </div>
                            <div className="card-body">
                                <div className="d-flex mb-3">
                                    <i className="bi bi-geo-alt text-primary me-2 fs-5"></i>
                                    <div>
                                        <p className="mb-0">{retailer.location?.address}</p>
                                        <p className="mb-0">{retailer.location?.city}, {retailer.location?.state} {retailer.location?.zip}</p>
                                    </div>
                                </div>
                                <div className="d-flex mb-3">
                                    <i className="bi bi-envelope text-primary me-2 fs-5"></i>
                                    <p className="mb-0">{retailer.contactEmail}</p>
                                </div>
                                {retailer.pos && (
                                    <div className="d-flex align-items-center">
                                        <i className="bi bi-credit-card text-primary me-2 fs-5"></i>
                                        <span className="badge bg-light text-dark">{retailer.pos}</span>
                                    </div>
                                )}
                            </div>
                            <div className="card-footer d-flex justify-content-between">
                                <button className="btn btn-sm btn-outline-primary">
                                    <i className="bi bi-info-circle me-1"></i> Details
                                </button>
                                <a href={retailer.website} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline-secondary">
                                    <i className="bi bi-box-arrow-up-right me-1"></i> Website
                                </a>
                            </div>
                        </div>
                    </div>
                ))}

                {filteredRetailers.length === 0 && (
                    <div className="col-12">
                        <div className="alert alert-info">
                            No retailers found matching your search criteria. Try adjusting your filters.
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default VisitorMarketplace;