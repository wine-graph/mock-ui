import React from "react";
import { mockWines } from "../../types/Wine";

const EnthusiastCellar: React.FC = () => {
  return (
    <div className="container py-4">
      <div className="header">
        <h4 className="fs-4">My Cellar</h4>
        <p className="small">
          Here's your personal wine collection, including ratings, reviews, and
          wishlisted wines.
        </p>
      </div>
      <div className="row">
        {mockWines.map((wine) => (
          <div key={wine.id} className="col-md-6 col-lg-4 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">
                  {wine.name} ({wine.vintage})
                </h5>
                <p className="card-text">
                  {wine.producer} · {wine.subarea}
                </p>
                <p>{wine.description?.slice(0, 100)}...</p>
              </div>
              <div className="card-footer d-flex justify-content-between">
                <button className="btn btn-sm btn-outline-primary">View</button>
                <button className="btn btn-sm btn-outline-secondary">
                  Rate
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EnthusiastCellar;
