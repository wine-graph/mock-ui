import React, { useState } from 'react';

const Cellar: React.FC = () => {
  const [view, setView] = useState<string>('collection');
  
  // Mock data for user's wine collection
  const collection = [
    { id: 1, name: '2018 Cabernet Sauvignon', producer: 'Stag\'s Leap', region: 'Napa Valley', quantity: 3, notes: 'Birthday gift, save for special occasion' },
    { id: 2, name: '2019 Pinot Noir', producer: 'Domaine Serene', region: 'Willamette Valley', quantity: 2, notes: 'Purchased during winery visit' },
    { id: 3, name: '2020 Chardonnay', producer: 'Rombauer', region: 'Carneros', quantity: 1, notes: 'Recommended by sommelier' },
    { id: 4, name: '2017 Barolo', producer: 'Vietti', region: 'Piedmont', quantity: 2, notes: 'Aging potential: 10-15 years' },
  ];
  
  // Mock data for wishlist
  const wishlist = [
    { id: 101, name: 'Opus One', producer: 'Opus One Winery', region: 'Napa Valley', notes: 'Consistently highly rated' },
    { id: 102, name: 'La Tâche', producer: 'Domaine de la Romanée-Conti', region: 'Burgundy', notes: 'Bucket list wine' },
    { id: 103, name: 'Sassicaia', producer: 'Tenuta San Guido', region: 'Tuscany', notes: 'Super Tuscan' },
  ];
  
  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h4>My Wine Cellar</h4>
          <p>Manage your wine collection and wishlist.</p>
        </div>
        <button className="btn btn-primary">Add Wine</button>
      </div>
      
      <ul className="nav nav-tabs mb-4">
        <li className="nav-item">
          <button 
            className={`nav-link ${view === 'collection' ? 'active' : ''}`}
            onClick={() => setView('collection')}
          >
            My Collection
          </button>
        </li>
        <li className="nav-item">
          <button 
            className={`nav-link ${view === 'wishlist' ? 'active' : ''}`}
            onClick={() => setView('wishlist')}
          >
            Wishlist
          </button>
        </li>
      </ul>
      
      {view === 'collection' && (
        <div className="table-responsive">
          <table className="table table-hover">
            <thead>
              <tr>
                <th>Wine</th>
                <th>Producer</th>
                <th>Region</th>
                <th>Quantity</th>
                <th>Notes</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {collection.map(wine => (
                <tr key={wine.id}>
                  <td>{wine.name}</td>
                  <td>{wine.producer}</td>
                  <td>{wine.region}</td>
                  <td>{wine.quantity}</td>
                  <td>{wine.notes}</td>
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
      
      {view === 'wishlist' && (
        <div className="table-responsive">
          <table className="table table-hover">
            <thead>
              <tr>
                <th>Wine</th>
                <th>Producer</th>
                <th>Region</th>
                <th>Notes</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {wishlist.map(wine => (
                <tr key={wine.id}>
                  <td>{wine.name}</td>
                  <td>{wine.producer}</td>
                  <td>{wine.region}</td>
                  <td>{wine.notes}</td>
                  <td>
                    <button className="btn btn-sm btn-outline-success me-2">Add to Collection</button>
                    <button className="btn btn-sm btn-outline-danger">Remove</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Cellar;