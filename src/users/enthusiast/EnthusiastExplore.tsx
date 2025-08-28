import React from "react";
import { mockRegions, mockGrapes } from "../../types/WineDomain";
import { mockProducers } from "../../types/Producer";

const EnthusiastExplore: React.FC = () => {
  return (
    <div className="container py-4">
      <h4 className="fs-4">Explore the World of Wine</h4>
      <p>
        Browse by region, varietal, or producer to discover your next favorite.
      </p>

      <div className="row mt-4">
        <div className="col-md-4">
          <h6>Regions</h6>
          <ul className="list-group">
            {mockRegions.map((r) => (
              <li key={r.id} className="list-group-item">
                {r.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="col-md-4">
          <h6>Grapes</h6>
          <ul className="list-group">
            {mockGrapes.map((g) => (
              <li key={g.id} className="list-group-item">
                {g.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="col-md-4">
          <h6>Producers</h6>
          <ul className="list-group">
            {mockProducers.map((p) => (
              <li key={p.id} className="list-group-item">
                {p.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EnthusiastExplore;
