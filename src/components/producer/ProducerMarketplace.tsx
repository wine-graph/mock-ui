import React, { useState } from 'react';
import { getAllWinesForProducer, getTrendingWines } from '../../data/MockWine';
import { 
  reviewsData, 
  marketInsights 
} from '../../data/MockProducer';

const ProducerMarketplace: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('sell');

  // Get data from centralized sources
  const winesForSale = getAllWinesForProducer();
  const trendingWinesData = getTrendingWines();
  const salesData = winesForSale.filter(wine => wine.unitsSold && wine.revenue);

  // Calculate total revenue and units sold
  const totalRevenue = salesData.reduce((sum, sale) => sum + (sale.revenue || 0), 0);
  const totalUnitsSold = salesData.reduce((sum, sale) => sum + (sale.unitsSold || 0), 0);

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up':
        return <i className="bi bi-arrow-up text-success"></i>;
      case 'down':
        return <i className="bi bi-arrow-down text-danger"></i>;
      default:
        return <i className="bi bi-dash text-muted"></i>;
    }
  };

  const getImpactBadge = (impact: string) => {
    const badgeClass = impact === 'high' ? 'bg-danger' : impact === 'medium' ? 'bg-warning' : 'bg-secondary';
    return <span className={`badge ${badgeClass}`}>{impact.toUpperCase()}</span>;
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
      <h4>Producer Marketplace</h4>
      <p>Sell your wines, track sales performance, and get market insights.</p>

      <ul className="nav nav-tabs mb-4">
        <li className="nav-item">
          <button 
            className={`nav-link ${activeTab === 'sell' ? 'active' : ''}`}
            onClick={() => setActiveTab('sell')}
          >
            <i className="bi bi-shop me-2"></i>Sell Wines
          </button>
        </li>
        <li className="nav-item">
          <button 
            className={`nav-link ${activeTab === 'sales' ? 'active' : ''}`}
            onClick={() => setActiveTab('sales')}
          >
            <i className="bi bi-graph-up me-2"></i>Sales Analytics
          </button>
        </li>
        <li className="nav-item">
          <button 
            className={`nav-link ${activeTab === 'insights' ? 'active' : ''}`}
            onClick={() => setActiveTab('insights')}
          >
            <i className="bi bi-lightbulb me-2"></i>Market Insights
          </button>
        </li>
      </ul>

      {activeTab === 'sell' && (
        <div>
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h5>Your Wine Listings</h5>
            <button className="btn btn-primary">
              <i className="bi bi-plus-circle me-2"></i>List New Wine
            </button>
          </div>

          <div className="table-responsive">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>Wine</th>
                  <th>Region</th>
                  <th>Quantity</th>
                  <th>Price/Bottle</th>
                  <th>Status</th>
                  <th>Listed Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {winesForSale.map(wine => (
                  <tr key={wine.id}>
                    <td>
                      <div>
                        <strong>{wine.vintage} {wine.name}</strong>
                        <br />
                        <small className="text-muted">{wine.description}</small>
                      </div>
                    </td>
                    <td>{wine.region}</td>
                    <td>{wine.quantity} bottles</td>
                    <td>${wine.pricePerBottle.toFixed(2)}</td>
                    <td>
                      {wine.isListed ? (
                        <span className="badge bg-success">Listed</span>
                      ) : (
                        <span className="badge bg-secondary">Not Listed</span>
                      )}
                    </td>
                    <td>{wine.listingDate || '-'}</td>
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
        </div>
      )}

      {activeTab === 'sales' && (
        <div>
          <div className="row mb-4">
            <div className="col-md-3">
              <div className="card text-center">
                <div className="card-body">
                  <h5 className="card-title text-primary">${totalRevenue.toLocaleString()}</h5>
                  <p className="card-text">Total Revenue (30 days)</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card text-center">
                <div className="card-body">
                  <h5 className="card-title text-success">{totalUnitsSold}</h5>
                  <p className="card-text">Units Sold (30 days)</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card text-center">
                <div className="card-body">
                  <h5 className="card-title text-info">${(totalRevenue / totalUnitsSold).toFixed(2)}</h5>
                  <p className="card-text">Average Price/Bottle</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card text-center">
                <div className="card-body">
                  <h5 className="card-title text-warning">{winesForSale.filter(w => w.isListed).length}</h5>
                  <p className="card-text">Active Listings</p>
                </div>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-header">
              <h5>Sales Performance by Wine</h5>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th>Wine</th>
                      <th>Units Sold</th>
                      <th>Revenue</th>
                      <th>Trend</th>
                      <th>Period</th>
                    </tr>
                  </thead>
                  <tbody>
                    {salesData.map(sale => (
                      <tr key={sale.id}>
                        <td>{sale.vintage} {sale.name}</td>
                        <td>{sale.unitsSold}</td>
                        <td>${sale.revenue.toLocaleString()}</td>
                        <td>{getTrendIcon(sale.trend)}</td>
                        <td>Last 30 days</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'insights' && (
        <div>
          <div className="row">
            <div className="col-md-6">
              <div className="card mb-4">
                <div className="card-header">
                  <h5><i className="bi bi-trending-up me-2"></i>Trending Wine Categories</h5>
                </div>
                <div className="card-body">
                  {trendingWinesData.map(trend => (
                    <div key={trend.id} className="mb-3 p-3 border rounded">
                      <div className="d-flex justify-content-between align-items-start">
                        <div>
                          <h6 className="mb-1">{trend.name}</h6>
                          <small className="text-muted">{trend.category} • {trend.priceRange}</small>
                        </div>
                        <span className="badge bg-primary">{trend.popularityScore}/100</span>
                      </div>
                      <p className="mt-2 mb-0 small">{trend.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="card">
                <div className="card-header">
                  <h5><i className="bi bi-chat-square-text me-2"></i>Your Wine Reviews</h5>
                </div>
                <div className="card-body">
                  {reviewsData.map(review => (
                    <div key={review.id} className="mb-3 p-3 border rounded">
                      <div className="d-flex justify-content-between align-items-start mb-2">
                        <h6 className="mb-0">{review.vintage} {review.wineName}</h6>
                        <div className="text-end">
                          <div>{renderStars(review.rating)}</div>
                          <small className="text-muted">{review.reviewCount} reviews</small>
                        </div>
                      </div>
                      <blockquote className="blockquote-footer mb-2">
                        <small>"{review.recentReview}" - {review.reviewer}</small>
                      </blockquote>
                      <div>
                        <small className="text-muted">Trending keywords: </small>
                        {review.trendingKeywords.map((keyword, index) => (
                          <span key={index} className="badge bg-light text-dark me-1">
                            {keyword}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="card">
                <div className="card-header">
                  <h5><i className="bi bi-lightbulb me-2"></i>Market Insights</h5>
                </div>
                <div className="card-body">
                  {marketInsights.map(insight => (
                    <div key={insight.id} className="mb-3 p-3 border rounded">
                      <div className="d-flex justify-content-between align-items-start mb-2">
                        <span className="badge bg-secondary">{insight.category}</span>
                        <div className="d-flex gap-2">
                          {getImpactBadge(insight.impact)}
                          {insight.actionable && (
                            <span className="badge bg-success">Actionable</span>
                          )}
                        </div>
                      </div>
                      <p className="mb-0">{insight.insight}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProducerMarketplace;
