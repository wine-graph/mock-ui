import React, { useState } from 'react';

const Explore: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('regions');
  
  const regions = ['Napa Valley', 'Bordeaux', 'Tuscany', 'Rioja', 'Barossa Valley', 'Willamette Valley'];
  const varietals = ['Cabernet Sauvignon', 'Merlot', 'Pinot Noir', 'Chardonnay', 'Sauvignon Blanc', 'Syrah'];
  const producers = ['Château Margaux', 'Opus One', 'Antinori', 'Penfolds', 'Domaine de la Romanée-Conti', 'Vega Sicilia'];
  
  return (
    <div>
      <h4>Explore Wines</h4>
      <p>Discover wines from around the world by region, varietal, or producer.</p>
      
      <ul className="nav nav-tabs mb-4">
        <li className="nav-item">
          <button 
            className={`nav-link ${activeTab === 'regions' ? 'active' : ''}`}
            onClick={() => setActiveTab('regions')}
          >
            Regions
          </button>
        </li>
        <li className="nav-item">
          <button 
            className={`nav-link ${activeTab === 'varietals' ? 'active' : ''}`}
            onClick={() => setActiveTab('varietals')}
          >
            Varietals
          </button>
        </li>
        <li className="nav-item">
          <button 
            className={`nav-link ${activeTab === 'producers' ? 'active' : ''}`}
            onClick={() => setActiveTab('producers')}
          >
            Producers
          </button>
        </li>
      </ul>
      
      <div className="row">
        {activeTab === 'regions' && regions.map((region, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">{region}</h5>
                <p className="card-text">Explore wines from {region}, known for...</p>
              </div>
              <div className="card-footer">
                <button className="btn btn-sm btn-outline-primary">View Wines</button>
              </div>
            </div>
          </div>
        ))}
        
        {activeTab === 'varietals' && varietals.map((varietal, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">{varietal}</h5>
                <p className="card-text">{varietal} is characterized by...</p>
              </div>
              <div className="card-footer">
                <button className="btn btn-sm btn-outline-primary">View Wines</button>
              </div>
            </div>
          </div>
        ))}
        
        {activeTab === 'producers' && producers.map((producer, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">{producer}</h5>
                <p className="card-text">{producer} is known for producing...</p>
              </div>
              <div className="card-footer">
                <button className="btn btn-sm btn-outline-primary">View Wines</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Explore;