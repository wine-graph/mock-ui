import React from 'react';
import { WineCoreImpl } from '../../data/models';

interface RetailerSyncPersistProps {
  wines: WineCoreImpl[];
  onBackToQuery: () => void;
}

const RetailerSyncPersist: React.FC<RetailerSyncPersistProps> = ({ wines, onBackToQuery }) => {
  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h4>Saved Wines</h4>
        <button 
          className="btn btn-outline-secondary" 
          onClick={onBackToQuery}
        >
          Back to Query
        </button>
      </div>

      <p className="mb-4">
        The following wines have been successfully saved to the platform in the WineCore format.
      </p>

      {wines.length > 0 ? (
        <div className="row">
          {wines.map(wine => (
            <div key={wine.id} className="col-md-6 col-lg-4 mb-4">
              <div className="card h-100">
                <div className="card-header d-flex justify-content-between align-items-center">
                  <h5 className="card-title mb-0">{wine.name}</h5>
                  <span className="badge bg-success">
                    <i className="bi bi-check-circle me-1"></i>
                    Saved to Platform
                  </span>
                </div>
                <div className="card-body">
                  <dl className="row mb-0">
                    <dt className="col-sm-6">ID</dt>
                    <dd className="col-sm-6">{wine.id}</dd>

                    <dt className="col-sm-6">Vintage</dt>
                    <dd className="col-sm-6">{wine.vintage || 'N/A'}</dd>

                    <dt className="col-sm-6">Size</dt>
                    <dd className="col-sm-6">{wine.size} ml</dd>

                    <dt className="col-sm-6">Producer</dt>
                    <dd className="col-sm-6">{wine.producer}</dd>

                    <dt className="col-sm-6">Color</dt>
                    <dd className="col-sm-6">{wine.color}</dd>

                    <dt className="col-sm-6">Closure</dt>
                    <dd className="col-sm-6">{wine.closure}</dd>

                    <dt className="col-sm-6">Shape</dt>
                    <dd className="col-sm-6">{wine.shape}</dd>

                    <dt className="col-sm-6">Type</dt>
                    <dd className="col-sm-6">{wine.type}</dd>

                    <dt className="col-sm-6">Alcohol</dt>
                    <dd className="col-sm-6">{wine.alcohol}%</dd>

                    <dt className="col-sm-6">Acid</dt>
                    <dd className="col-sm-6">{wine.acid} g/L</dd>

                    <dt className="col-sm-6">pH</dt>
                    <dd className="col-sm-6">{wine.pH}</dd>

                    <dt className="col-sm-6">Bottle Aging</dt>
                    <dd className="col-sm-6">{wine.bottleAging} months</dd>

                    <dt className="col-sm-6">Subarea</dt>
                    <dd className="col-sm-6">{wine.subarea}</dd>

                    <dt className="col-sm-12">Description</dt>
                    <dd className="col-sm-12">{wine.description}</dd>
                  </dl>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="alert alert-warning">
          <i className="bi bi-exclamation-triangle me-2"></i>
          No wines have been saved to the platform yet.
        </div>
      )}
    </div>
  );
};

export default RetailerSyncPersist;
