import React, { useState } from 'react';

const Profile: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('profile');
  
  // Mock user data
  const user = {
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    memberSince: 'January 2023',
    preferences: {
      favoriteVarietals: ['Cabernet Sauvignon', 'Pinot Noir', 'Chardonnay'],
      favoriteRegions: ['Napa Valley', 'Burgundy', 'Tuscany'],
      tasteProfile: ['Full-bodied', 'Fruity', 'Oak']
    }
  };
  
  // Mock order history
  const orders = [
    { id: 401, date: '2023-05-15', items: ['2019 Cabernet Sauvignon (2)', '2020 Chardonnay (1)'], total: 219.97, status: 'Delivered' },
    { id: 402, date: '2023-03-22', items: ['2018 Pinot Noir (1)', '2021 Sauvignon Blanc (2)'], total: 154.97, status: 'Delivered' },
    { id: 403, date: '2023-01-10', items: ['NV Champagne Brut (1)'], total: 59.99, status: 'Delivered' },
  ];
  
  return (
    <div>
      <h4>My Profile</h4>
      <p>Manage your account, preferences, and orders.</p>
      
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
            className={`nav-link ${activeTab === 'orders' ? 'active' : ''}`}
            onClick={() => setActiveTab('orders')}
          >
            Order History
          </button>
        </li>
      </ul>
      
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
      
      {activeTab === 'orders' && (
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