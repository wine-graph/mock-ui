import React from "react";
import { type Wine } from "../../types/Wine";

interface WineDetailProps {
  wine: Wine;
  onClose: () => void;
}

export const WineDetail: React.FC<WineDetailProps> = ({ wine, onClose }) => {
  return (
    <div className="modal fade show d-block bg-dark bg-opacity-50">
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div
          className="modal-content"
          style={{
            maxHeight: 500,
          }}
        >
          <div className="modal-header">
            <h5 className="modal-title">
              {wine.name} ({wine.vintage})
            </h5>
            <button
              type="button"
              className="btn-close"
              onClick={onClose}
            ></button>
          </div>
          <div className="modal-body" style={{ overflowY: "auto" }}>
            <div className="wine-desc mb-3">
              <h6 className="fw-semibold mb-1">About</h6>
              <p className="small text-muted">
                {wine.description || "No description available."}
              </p>
            </div>
            <div className="info mt-4 mb-2 d-md-flex gap-3">
              <div className="overview w-100">
                <h6 className="fw-semibold mb-2">Overview</h6>
                <ul className="list-group mb-3 small">
                  <li className="list-group-item d-flex justify-content-between">
                    <span>Producer</span>
                    <span className="fw-semibold">{wine.producer}</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between">
                    <span>Varietal</span>
                    <span>{wine.varietal}</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between">
                    <span>Type</span>
                    <span>{wine.type}</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between">
                    <span>Color</span>
                    <span>{wine.color}</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between">
                    <span>Region</span>
                    <span>{wine.subarea || "—"}</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between">
                    <span>Closure</span>
                    <span>{wine.closure}</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between">
                    <span>Bottle Shape</span>
                    <span>{wine.shape}</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between">
                    <span>Price Per Bottle</span>
                    <span className="">${wine.pricePerBottle?.toFixed(2)}</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between">
                    <span>
                      Bottle Size <span className="small fst-italic">(ml)</span>
                    </span>
                    <span>{wine.size}</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between">
                    <span>
                      Bottle Aging{" "}
                      <span className="small fst-italic">(months)</span>
                    </span>
                    <span>{wine.bottleAging}</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between">
                    <span>
                      Alcohol{" "}
                      <span className="small fst-italic">(percentage)</span>
                    </span>
                    <span>{wine.alcohol}</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between">
                    <span>pH</span>
                    <span>{wine.pH}</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between">
                    <span>
                      Acid <span className="small fst-italic">(g/L)</span>
                    </span>
                    <span>{wine.acid}</span>
                  </li>
                </ul>
              </div>
              <div className="ingrediants w-100">
                {wine.wineComponents && wine.wineComponents.length > 0 && (
                  <>
                    <h6 className="fw-semibold mb-2">Composition</h6>
                    <ul className="list-group">
                      {wine.wineComponents.map((c) => (
                        <li
                          key={wine.id}
                          className="list-group-item d-flex justify-content-between"
                        >
                          <span>
                            {c.grapeName}{" "}
                            <span className="small fst-italic">
                              (percentage)
                            </span>
                          </span>
                          <span>{c.percentage}</span>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
