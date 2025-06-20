import React from 'react';

const Home: React.FC = () => {
  return (
    <div>
      <h4>Welcome to the Wine Platform</h4>
      <p>Discover wines, learn about producers and regions — no login required.</p>
      
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