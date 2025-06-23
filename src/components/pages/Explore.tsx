import React, { useState } from 'react';
import { UserType } from '../../App';
import { getRegionsFromWines, getVarietalsFromWines } from '../../data/MockWine';
import { getProducerNamesForExplore } from '../../data/MockProducer';
import './Explore.css';

interface ExploreProps {
  userType: UserType;
}

const Explore: React.FC<ExploreProps> = ({ userType }) => {
  const [activeTab, setActiveTab] = useState<string>('regions');

  // Get data from centralized mock files
  const regions = getRegionsFromWines();
  const varietals = getVarietalsFromWines();
  const producers = getProducerNamesForExplore();

  return (
    <div className="explore-container">
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

      <div className="row card-container">
        {activeTab === 'regions' && regions.map((region, index) => (
          <div key={index} className="col-lg-4 col-md-6 col-sm-12 mb-4">
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
          <div key={index} className="col-lg-4 col-md-6 col-sm-12 mb-4">
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
          <div key={index} className="col-lg-4 col-md-6 col-sm-12 mb-4">
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
