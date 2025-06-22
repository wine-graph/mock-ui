import React, { useState } from 'react';
import { UserType } from '../../App';

interface ProfileProps {
  userType: UserType;
}

const Profile: React.FC<ProfileProps> = ({ userType }) => {
  const [activeTab, setActiveTab] = useState<string>('profile');

  // Mock user data based on user type
  const getUserData = () => {
    switch (userType) {
      case UserType.Enthusiast:
        return {
          name: 'Jane Smith',
          email: 'jane.smith@example.com',
          memberSince: 'January 2023',
          preferences: {
            favoriteVarietals: ['Cabernet Sauvignon', 'Pinot Noir', 'Chardonnay'],
            favoriteRegions: ['Napa Valley', 'Burgundy', 'Tuscany'],
            tasteProfile: ['Full-bodied', 'Fruity', 'Oak']
          },
          collection: [
            { name: '2019 Cabernet Sauvignon', producer: 'Napa Winery', rating: 4.5, notes: 'Bold with dark fruit notes' },
            { name: '2020 Chardonnay', producer: 'Sonoma Vineyards', rating: 4.0, notes: 'Crisp with apple and pear' },
            { name: '2018 Pinot Noir', producer: 'Oregon Cellars', rating: 4.8, notes: 'Elegant with cherry and spice' }
          ]
        };
      case UserType.Producer:
        return {
          name: 'Vineyard Estate Winery',
          email: 'contact@vineyardestate.com',
          memberSince: 'March 2022',
          shopifyStore: 'vineyardestate.myshopify.com',
          inventory: [
            { name: '2020 Estate Cabernet', stock: 245, price: 45.99, lastSync: '2023-06-10' },
            { name: '2021 Reserve Chardonnay', stock: 180, price: 38.99, lastSync: '2023-06-10' },
            { name: '2019 Limited Pinot Noir', stock: 56, price: 65.99, lastSync: '2023-06-10' }
          ]
        };
      case UserType.Retailer:
        return {
          name: 'Downtown Wine Shop',
          email: 'info@downtownwine.com',
          memberSince: 'November 2022',
          squareAccount: 'downtown-wine-shop',
          inventory: [
            { name: '2019 Napa Cabernet', producer: 'Vineyard Estate', stock: 24, price: 52.99, lastSync: '2023-06-12' },
            { name: '2020 Sonoma Chardonnay', producer: 'Coastal Vineyards', stock: 18, price: 42.99, lastSync: '2023-06-12' },
            { name: '2018 Willamette Pinot Noir', producer: 'Oregon Cellars', stock: 12, price: 48.99, lastSync: '2023-06-12' }
          ]
        };
      default:
        return {
          name: 'Guest User',
          email: 'Please sign in to view your profile',
          memberSince: '',
          preferences: {
            favoriteVarietals: [],
            favoriteRegions: [],
            tasteProfile: []
          }
        };
    }
  };

  const user = getUserData();

  // Mock order history (only for Enthusiast)
  const orders = userType === UserType.Enthusiast ? [
    { id: 401, date: '2023-05-15', items: ['2019 Cabernet Sauvignon (2)', '2020 Chardonnay (1)'], total: 219.97, status: 'Delivered' },
    { id: 402, date: '2023-03-22', items: ['2018 Pinot Noir (1)', '2021 Sauvignon Blanc (2)'], total: 154.97, status: 'Delivered' },
    { id: 403, date: '2023-01-10', items: ['NV Champagne Brut (1)'], total: 59.99, status: 'Delivered' },
  ] : [];

  // Get profile description based on user type
  const getProfileDescription = () => {
    switch (userType) {
      case UserType.Enthusiast:
        return "Manage your account, preferences, and wine collection.";
      case UserType.Producer:
        return "Manage your winery profile, inventory, and Shopify integration.";
      case UserType.Retailer:
        return "Manage your shop profile, inventory, and Square integration.";
      default:
        return "Please sign in to access your profile.";
    }
  };

  // Render tabs based on user type
  const renderTabs = () => {
    switch (userType) {
      case UserType.Enthusiast:
        return (
          <ul className="nav nav-tabs mb-4">
            <li className="nav-item">
              <button 
                className={`nav-link ${activeTab === 'profile' ? 'active' : ''}`}
                onClick={() => setActiveTab('profile')}
              >
                Profile
              </button>
            </li>
            <li className="nav-item">
              <button 
                className={`nav-link ${activeTab === 'preferences' ? 'active' : ''}`}
                onClick={() => setActiveTab('preferences')}
              >
                Preferences
              </button>
            </li>
            <li className="nav-item">
              <button 
                className={`nav-link ${activeTab === 'collection' ? 'active' : ''}`}
                onClick={() => setActiveTab('collection')}
              >
                My Collection
              </button>
            </li>
            <li className="nav-item">
              <button 
                className={`nav-link ${activeTab === 'orders' ? 'active' : ''}`}
                onClick={() => setActiveTab('orders')}
              >
                Order History
              </button>
            </li>
          </ul>
        );
      case UserType.Producer:
        return (
          <ul className="nav nav-tabs mb-4">
            <li className="nav-item">
              <button 
                className={`nav-link ${activeTab === 'profile' ? 'active' : ''}`}
                onClick={() => setActiveTab('profile')}
              >
                Profile
              </button>
            </li>
            <li className="nav-item">
              <button 
                className={`nav-link ${activeTab === 'inventory' ? 'active' : ''}`}
                onClick={() => setActiveTab('inventory')}
              >
                Inventory
              </button>
            </li>
            <li className="nav-item">
              <button 
                className={`nav-link ${activeTab === 'shopify' ? 'active' : ''}`}
                onClick={() => setActiveTab('shopify')}
              >
                Shopify Sync
              </button>
            </li>
          </ul>
        );
      case UserType.Retailer:
        return (
          <ul className="nav nav-tabs mb-4">
            <li className="nav-item">
              <button 
                className={`nav-link ${activeTab === 'profile' ? 'active' : ''}`}
                onClick={() => setActiveTab('profile')}
              >
                Profile
              </button>
            </li>
            <li className="nav-item">
              <button 
                className={`nav-link ${activeTab === 'inventory' ? 'active' : ''}`}
                onClick={() => setActiveTab('inventory')}
              >
                Inventory
              </button>
            </li>
            <li className="nav-item">
              <button 
                className={`nav-link ${activeTab === 'square' ? 'active' : ''}`}
                onClick={() => setActiveTab('square')}
              >
                Square Sync
              </button>
            </li>
          </ul>
        );
      default:
        return (
          <ul className="nav nav-tabs mb-4">
            <li className="nav-item">
              <button 
                className={`nav-link active`}
                disabled
              >
                Profile
              </button>
            </li>
          </ul>
        );
    }
  };

  return (
    <div>
      <h4>My Profile</h4>
      <p>{getProfileDescription()}</p>

      {renderTabs()}

      {activeTab === 'profile' && (
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-md-3 text-center mb-4 mb-md-0">
                <div className="bg-light rounded-circle d-inline-flex align-items-center justify-content-center" style={{ width: '150px', height: '150px' }}>
                  <i className="bi bi-person" style={{ fontSize: '4rem' }}></i>
                </div>
              </div>
              <div className="col-md-9">
                <h5>{user.name}</h5>
                <p className="text-muted">Member since {user.memberSince}</p>

                <form>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" value={user.email} readOnly />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" defaultValue={user.name} />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" placeholder="••••••••" />
                  </div>
                  <button type="submit" className="btn btn-primary">Update Profile</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'preferences' && (
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Taste Preferences</h5>
            <p className="card-text">Help us recommend wines that match your taste.</p>

            <form>
              <div className="mb-3">
                <label className="form-label">Favorite Varietals</label>
                <select className="form-select" multiple defaultValue={user.preferences.favoriteVarietals}>
                  <option>Cabernet Sauvignon</option>
                  <option>Merlot</option>
                  <option>Pinot Noir</option>
                  <option>Syrah</option>
                  <option>Zinfandel</option>
                  <option>Chardonnay</option>
                  <option>Sauvignon Blanc</option>
                  <option>Riesling</option>
                </select>
                <div className="form-text">Hold Ctrl (or Cmd) to select multiple options</div>
              </div>

              <div className="mb-3">
                <label className="form-label">Favorite Regions</label>
                <select className="form-select" multiple defaultValue={user.preferences.favoriteRegions}>
                  <option>Napa Valley</option>
                  <option>Sonoma</option>
                  <option>Willamette Valley</option>
                  <option>Bordeaux</option>
                  <option>Burgundy</option>
                  <option>Tuscany</option>
                  <option>Rioja</option>
                  <option>Barossa Valley</option>
                </select>
              </div>

              <div className="mb-3">
                <label className="form-label">Taste Profile</label>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" id="full-bodied" defaultChecked={user.preferences.tasteProfile.includes('Full-bodied')} />
                  <label className="form-check-label" htmlFor="full-bodied">Full-bodied</label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" id="light-bodied" defaultChecked={user.preferences.tasteProfile.includes('Light-bodied')} />
                  <label className="form-check-label" htmlFor="light-bodied">Light-bodied</label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" id="fruity" defaultChecked={user.preferences.tasteProfile.includes('Fruity')} />
                  <label className="form-check-label" htmlFor="fruity">Fruity</label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" id="dry" defaultChecked={user.preferences.tasteProfile.includes('Dry')} />
                  <label className="form-check-label" htmlFor="dry">Dry</label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" id="oak" defaultChecked={user.preferences.tasteProfile.includes('Oak')} />
                  <label className="form-check-label" htmlFor="oak">Oak</label>
                </div>
              </div>

              <button type="submit" className="btn btn-primary">Save Preferences</button>
            </form>
          </div>
        </div>
      )}

      {/* Collection tab for Enthusiast */}
      {activeTab === 'collection' && userType === UserType.Enthusiast && (
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">My Wine Collection</h5>
            <p className="card-text">Track your wine collection and tasting notes.</p>

            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th>Wine</th>
                    <th>Producer</th>
                    <th>Rating</th>
                    <th>Notes</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {(user as any).collection?.map((wine: any, index: number) => (
                    <tr key={index}>
                      <td>{wine.name}</td>
                      <td>{wine.producer}</td>
                      <td>
                        <div className="d-flex align-items-center">
                          <span className="me-1">{wine.rating}</span>
                          <i className="bi bi-star-fill text-warning"></i>
                        </div>
                      </td>
                      <td>{wine.notes}</td>
                      <td>
                        <button className="btn btn-sm btn-outline-success me-1">Edit</button>
                        <button className="btn btn-sm btn-outline-danger">Remove</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <button className="btn btn-success mt-3">
              <i className="bi bi-plus-circle me-2"></i>Add Wine to Collection
            </button>
          </div>
        </div>
      )}

      {/* Inventory tab for Producer */}
      {activeTab === 'inventory' && userType === UserType.Producer && (
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Wine Inventory</h5>
            <p className="card-text">Manage your wine inventory and pricing.</p>

            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th>Wine</th>
                    <th>Stock</th>
                    <th>Price</th>
                    <th>Last Updated</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {(user as any).inventory?.map((wine: any, index: number) => (
                    <tr key={index}>
                      <td>{wine.name}</td>
                      <td>{wine.stock} bottles</td>
                      <td>${wine.price.toFixed(2)}</td>
                      <td>{wine.lastSync}</td>
                      <td>
                        <button className="btn btn-sm btn-outline-primary me-1">Edit</button>
                        <button className="btn btn-sm btn-outline-danger">Remove</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <button className="btn btn-primary mt-3">
              <i className="bi bi-plus-circle me-2"></i>Add New Wine
            </button>
          </div>
        </div>
      )}

      {/* Inventory tab for Retailer */}
      {activeTab === 'inventory' && userType === UserType.Retailer && (
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Store Inventory</h5>
            <p className="card-text">Manage your wine inventory and pricing.</p>

            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th>Wine</th>
                    <th>Producer</th>
                    <th>Stock</th>
                    <th>Price</th>
                    <th>Last Updated</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {(user as any).inventory?.map((wine: any, index: number) => (
                    <tr key={index}>
                      <td>{wine.name}</td>
                      <td>{wine.producer}</td>
                      <td>{wine.stock} bottles</td>
                      <td>${wine.price.toFixed(2)}</td>
                      <td>{wine.lastSync}</td>
                      <td>
                        <button className="btn btn-sm btn-outline-danger me-1">Edit</button>
                        <button className="btn btn-sm btn-outline-danger">Remove</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <button className="btn btn-danger mt-3">
              <i className="bi bi-plus-circle me-2"></i>Add New Wine
            </button>
          </div>
        </div>
      )}

      {/* Shopify Sync tab for Producer */}
      {activeTab === 'shopify' && userType === UserType.Producer && (
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Shopify Integration</h5>
            <p className="card-text">Sync your wine inventory with your Shopify store.</p>

            <div className="mb-4">
              <div className="d-flex align-items-center mb-3">
                <div className="bg-primary text-white rounded-circle p-2 me-3">
                  <i className="bi bi-shop fs-4"></i>
                </div>
                <div>
                  <h6 className="mb-0">Connected Store</h6>
                  <p className="mb-0 text-muted">{(user as any).shopifyStore}</p>
                </div>
              </div>

              <div className="alert alert-info">
                <i className="bi bi-info-circle me-2"></i>
                Last synchronized: {(user as any).inventory?.[0]?.lastSync || 'Never'}
              </div>
            </div>

            <div className="d-grid gap-2">
              <button className="btn btn-primary">
                <i className="bi bi-arrow-repeat me-2"></i>Sync Inventory with Shopify
              </button>
              <button className="btn btn-outline-primary">
                <i className="bi bi-gear me-2"></i>Configure Sync Settings
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Square Sync tab for Retailer */}
      {activeTab === 'square' && userType === UserType.Retailer && (
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Square Integration</h5>
            <p className="card-text">Sync your wine inventory with your Square account.</p>

            <div className="mb-4">
              <div className="d-flex align-items-center mb-3">
                <div className="bg-danger text-white rounded-circle p-2 me-3">
                  <i className="bi bi-credit-card fs-4"></i>
                </div>
                <div>
                  <h6 className="mb-0">Connected Account</h6>
                  <p className="mb-0 text-muted">{(user as any).squareAccount}</p>
                </div>
              </div>

              <div className="alert alert-info">
                <i className="bi bi-info-circle me-2"></i>
                Last synchronized: {(user as any).inventory?.[0]?.lastSync || 'Never'}
              </div>
            </div>

            <div className="d-grid gap-2">
              <button className="btn btn-danger">
                <i className="bi bi-arrow-repeat me-2"></i>Sync Inventory with Square
              </button>
              <button className="btn btn-outline-danger">
                <i className="bi bi-gear me-2"></i>Configure Sync Settings
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Order History tab for Enthusiast */}
      {activeTab === 'orders' && userType === UserType.Enthusiast && (
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Order History</h5>
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th>Order #</th>
                    <th>Date</th>
                    <th>Items</th>
                    <th>Total</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map(order => (
                    <tr key={order.id}>
                      <td>{order.id}</td>
                      <td>{order.date}</td>
                      <td>
                        <ul className="list-unstyled mb-0">
                          {order.items.map((item, index) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      </td>
                      <td>${order.total.toFixed(2)}</td>
                      <td><span className="badge bg-success">{order.status}</span></td>
                      <td>
                        <button className="btn btn-sm btn-outline-secondary">Details</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
