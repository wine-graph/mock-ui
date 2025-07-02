import React, {useState} from 'react';
import {mockWines} from '../../types/Wine';
import {mockRetailer, mockInventory} from '../../types/Retailer';

const ProducerMarketplace: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'sell' | 'sales' | 'retailers'>('retailers');

    // Filter only Luli wines and extend them with listing data for demo purposes
    const winesForSale = mockWines
        .filter(wine => wine.producer === "Luli Wines")
        .map((wine, idx) => ({
            ...wine,
            quantity: 120 + idx * 10,
            pricePerBottle: 24.99 + idx * 5,
            isListed: idx % 2 === 0,
            listingDate: `2024-0${(idx % 9) + 1}-15`,
            unitsSold: 50 + idx * 8,
            revenue: (50 + idx * 8) * (24.99 + idx * 5),
            region: 'Napa Valley',
            trend: idx % 2 === 0 ? 'up' : 'down',
        }));

    const listed = winesForSale.filter(w => w.isListed);
    const totalRevenue = winesForSale.reduce((sum, w) => sum + (w.revenue ?? 0), 0);
    const totalUnitsSold = winesForSale.reduce((sum, w) => sum + (w.unitsSold ?? 0), 0);

    const getTrendIcon = (trend: string) => {
        if (trend === 'up') return <i className="bi bi-arrow-up text-success"/>;
        if (trend === 'down') return <i className="bi bi-arrow-down text-danger"/>;
        return <i className="bi bi-dash text-muted"/>;
    };

    // Function to check if a retailer carries Luli wines
    const carriesLuliWines = (retailerId: string) => {
        return mockInventory.some(item =>
            item.retailerId === retailerId &&
            item.producer === "Luli Wines"
        );
    };

    // Function to get Luli wines carried by a retailer
    const getLuliWines = (retailerId: string) => {
        return mockInventory.filter(item =>
            item.retailerId === retailerId &&
            item.producer === "Luli Wines"
        );
    };

    return (
        <div className="container py-4">
            <h4>Luli Wines Marketplace</h4>
            <p>Sell your wines and track performance through this dashboard.</p>

            <ul className="nav nav-tabs mb-4">
                {['retailers', 'sell', 'sales'].map(tab => (
                    <li className="nav-item" key={tab}>
                        <button
                            className={`nav-link ${activeTab === tab ? 'active' : ''}`}
                            onClick={() => setActiveTab(tab as any)}
                        >
                            {tab === 'retailers' && <><i className="bi bi-building me-2"/>Find Retailers</>}
                            {tab === 'sell' && <><i className="bi bi-shop me-2"/>Sell Wines</>}
                            {tab === 'sales' && <><i className="bi bi-graph-up me-2"/>Sales Analytics</>}

                        </button>
                    </li>
                ))}
            </ul>

            {activeTab === 'sell' && (
                <>
                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <h5>Your Wine Listings</h5>
                        <button className="btn btn-primary">
                            <i className="bi bi-plus-circle me-2"></i>List New Wine
                        </button>
                    </div>

                    <div className="table-responsive">
                        <table className="table table-hover align-middle">
                            <thead>
                            <tr>
                                <th>Wine</th>
                                <th>Quantity</th>
                                <th>Price</th>
                                <th>Status</th>
                                <th>Listed</th>
                                <th>Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                            {winesForSale.map(wine => (
                                <tr key={wine.id}>
                                    <td>
                                        <strong>{wine.vintage} {wine.name}</strong><br/>
                                    </td>
                                    <td>{wine.quantity} bottles</td>
                                    <td>${wine.pricePerBottle.toFixed(2)}</td>
                                    <td>
                      <span className={`badge ${wine.isListed ? 'bg-success' : 'bg-secondary'}`}>
                        {wine.isListed ? 'Listed' : 'Not Listed'}
                      </span>
                                    </td>
                                    <td>{wine.listingDate}</td>
                                    <td>
                                        {wine.isListed ? (
                                            <>
                                                <button className="btn btn-sm btn-outline-secondary me-2">Edit</button>
                                                <button className="btn btn-sm btn-outline-danger">Unlist</button>
                                            </>
                                        ) : (
                                            <button className="btn btn-sm btn-primary">List Wine</button>
                                        )}
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </>
            )}

            {activeTab === 'sales' && (
                <>
                    <div className="row mb-4">
                        <div className="col-md-4">
                            <div className="card text-center">
                                <div className="card-body"><h5>${totalRevenue.toLocaleString()}</h5><p>Total Revenue</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card text-center">
                                <div className="card-body"><h5>{totalUnitsSold}</h5><p>Units Sold</p></div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card text-center">
                                <div className="card-body"><h5>{listed.length}</h5><p>Active Listings</p></div>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-header"><h5>Sales by Wine</h5></div>
                        <div className="card-body">
                            <div className="table-responsive">
                                <table className="table table-hover align-middle">
                                    <thead>
                                    <tr>
                                        <th>Wine</th>
                                        <th>Units</th>
                                        <th>Revenue</th>
                                        <th>Trend</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {winesForSale.map(sale => (
                                        <tr key={sale.id}>
                                            <td>{sale.vintage} {sale.name}</td>
                                            <td>{sale.unitsSold}</td>
                                            <td>${sale.revenue.toLocaleString()}</td>
                                            <td>{getTrendIcon(sale.trend)}</td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </>
            )}

            {activeTab === 'retailers' && (
                <>
                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <h5>Find Retail Partners</h5>
                        <div className="d-flex">
                            <input
                                type="text"
                                className="form-control me-2"
                                placeholder="Search retailers..."
                            />
                            <div className="dropdown">
                                <button className="btn btn-outline-secondary dropdown-toggle" type="button"
                                        id="filterDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                                    Filter
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="filterDropdown">
                                    <li><a className="dropdown-item" href="#">All Retailers</a></li>
                                    <li><a className="dropdown-item" href="#">Carries Luli Wines</a></li>
                                    <li><a className="dropdown-item" href="#">Potential Partners</a></li>
                                    <li>
                                        <hr className="dropdown-divider"/>
                                    </li>
                                    <li><a className="dropdown-item" href="#">By State</a></li>
                                    <li><a className="dropdown-item" href="#">By POS System</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        {mockRetailer.map(retailer => {
                            const carries = carriesLuliWines(retailer.id);
                            const luliWines = getLuliWines(retailer.id);

                            return (
                                <div className="col-md-6 col-lg-4 mb-4" key={retailer.id}>
                                    <div className={`card h-100 ${carries ? 'border-success' : ''}`}>
                                        {carries && (
                                            <div className="card-header bg-success text-white">
                                                <i className="bi bi-check-circle me-2"></i>
                                                Currently Carries Luli Wines
                                            </div>
                                        )}
                                        <div className="card-body">
                                            <div className="d-flex align-items-center mb-3">
                                                <div className="flex-shrink-0">
                                                    <div className="bg-light rounded p-2" style={{
                                                        width: '50px',
                                                        height: '50px',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center'
                                                    }}>
                                                        <i className="bi bi-building fs-3"></i>
                                                    </div>
                                                </div>
                                                <div className="ms-3">
                                                    <h5 className="card-title mb-0">{retailer.name}</h5>
                                                    <p className="text-muted mb-0">{retailer.location?.city}, {retailer.location?.state}</p>
                                                </div>
                                            </div>

                                            <div className="mb-3">
                                                <small className="text-muted d-block mb-1">
                                                    <i className="bi bi-geo-alt me-2"></i>
                                                    {retailer.location?.address}, {retailer.location?.city}, {retailer.location?.state} {retailer.location?.zip}
                                                </small>
                                                <small className="text-muted d-block mb-1">
                                                    <i className="bi bi-envelope me-2"></i>
                                                    {retailer.contactEmail}
                                                </small>
                                                <small className="text-muted d-block mb-1">
                                                    <i className="bi bi-globe me-2"></i>
                                                    {retailer.website}
                                                </small>
                                                <small className="text-muted d-block">
                                                    <i className="bi bi-credit-card me-2"></i>
                                                    POS: {retailer.pos}
                                                </small>
                                            </div>

                                            {carries && luliWines.length > 0 && (
                                                <div className="mb-3">
                                                    <h6 className="card-subtitle mb-2">Carries These Luli Wines:</h6>
                                                    <ul className="list-group list-group-flush">
                                                        {luliWines.map(wine => (
                                                            <li className="list-group-item px-0 py-1"
                                                                key={wine.externalItemId}>
                                                                {wine.name} ({wine.vintage}) - {wine.price}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )}

                                            <div className="d-grid gap-2">
                                                {carries ? (
                                                    <>
                                                        <button className="btn btn-outline-primary">
                                                            <i className="bi bi-plus-circle me-2"></i>
                                                            Expand Partnership
                                                        </button>
                                                        <button className="btn btn-outline-secondary">
                                                            <i className="bi bi-envelope me-2"></i>
                                                            Contact Retailer
                                                        </button>
                                                    </>
                                                ) : (
                                                    <>
                                                        <button className="btn btn-primary">
                                                            <i className="bi bi-handshake me-2"></i>
                                                            Propose Partnership
                                                        </button>
                                                        <button className="btn btn-outline-secondary">
                                                            <i className="bi bi-envelope me-2"></i>
                                                            Contact Retailer
                                                        </button>
                                                    </>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </>
            )}
        </div>
    );
};

export default ProducerMarketplace;