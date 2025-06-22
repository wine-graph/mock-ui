import React from 'react';
import { UserType } from '../../App';

interface HomeProps {
  userType: UserType;
}

const Home: React.FC<HomeProps> = ({ userType }) => {
  // Render different welcome message based on user type
  const renderWelcomeMessage = () => {
    switch (userType) {
      case UserType.Enthusiast:
        return (
          <>
            <h4>Welcome, Wine Enthusiast!</h4>
            <p>Track your favorite wines, write reviews, and discover new favorites.</p>
          </>
        );
      case UserType.Producer:
        return (
          <>
            <h4>Welcome, Wine Producer!</h4>
            <p>Manage your wine inventory, sync with Shopify, and connect with retailers.</p>
          </>
        );
      case UserType.Retailer:
        return (
          <>
            <h4>Welcome, Wine Retailer!</h4>
            <p>Manage your inventory, sync with Square, and discover new producers.</p>
          </>
        );
      default:
        return (
          <>
            <h4>Welcome to the Wine Platform</h4>
            <p>Discover wines, learn about producers and regions — no login required.</p>
          </>
        );
    }
  };

  // Render user-specific action card
  const renderUserActionCard = () => {
    switch (userType) {
      case UserType.Enthusiast:
        return (
          <div className="card mb-4">
            <div className="card-header bg-success text-white">
              <h5>Your Wine Collection</h5>
            </div>
            <div className="card-body">
              <p>Track your wine collection, tasting notes, and reviews.</p>
              <div className="d-grid gap-2">
                <button className="btn btn-outline-success">Add Wine to Collection</button>
                <button className="btn btn-outline-success">Write a Review</button>
              </div>
            </div>
          </div>
        );
      case UserType.Producer:
        return (
          <div className="card mb-4">
            <div className="card-header bg-primary text-white">
              <h5>Producer Dashboard</h5>
            </div>
            <div className="card-body">
              <p>Manage your wine inventory and sync with Shopify.</p>
              <div className="d-grid gap-2">
                <button className="btn btn-outline-primary">Add New Wine</button>
                <button className="btn btn-outline-primary">Sync with Shopify</button>
              </div>
            </div>
          </div>
        );
      case UserType.Retailer:
        return (
          <div className="card mb-4">
            <div className="card-header bg-danger text-white">
              <h5>Retailer Dashboard</h5>
            </div>
            <div className="card-body">
              <p>Manage your inventory and sync with Square.</p>
              <div className="d-grid gap-2">
                <button className="btn btn-outline-danger">Update Inventory</button>
                <button className="btn btn-outline-danger">Sync with Square</button>
              </div>
            </div>
          </div>
        );
      default:
        return (
          <div className="card mb-4">
            <div className="card-header">
              <h5>Discover</h5>
            </div>
            <div className="card-body">
              <div className="d-grid gap-2">
                <button className="btn btn-outline-secondary">Browse by Region</button>
                <button className="btn btn-outline-secondary">Browse by Varietal</button>
                <button className="btn btn-outline-secondary">Browse by Producer</button>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div>
      {renderWelcomeMessage()}

      <div className="row mt-4">
        <div className="col-md-8">
          <div className="card mb-4">
            <div className="card-header">
              <h5>Featured Wines</h5>
            </div>
            <div className="card-body">
              <div className="row">
                {[1, 2, 3].map(i => (
                  <div key={i} className="col-md-4 mb-3">
                    <div className="card h-100">
                      <div className="card-body">
                        <h6>Wine {i}</h6>
                        <p className="text-muted">Region • Producer</p>
                        <p>A delightful wine with notes of...</p>
                      </div>
                      <div className="card-footer">
                        <button className="btn btn-sm btn-outline-primary">View Details</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-header">
              <h5>Recent Activity</h5>
            </div>
            <div className="card-body">
              <ul className="list-group">
                <li className="list-group-item">New producer joined: Vineyard XYZ</li>
                <li className="list-group-item">New wine added: 2018 Cabernet Sauvignon</li>
                <li className="list-group-item">Upcoming tasting event in San Francisco</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          {renderUserActionCard()}

          <div className="card">
            <div className="card-header">
              <h5>Wine News</h5>
            </div>
            <div className="card-body">
              <ul className="list-group">
                <li className="list-group-item">2023 Harvest Report</li>
                <li className="list-group-item">New Sustainable Practices</li>
                <li className="list-group-item">Wine Tourism Trends</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
