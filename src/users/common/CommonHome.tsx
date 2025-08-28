import React, { useState } from "react";
import { mockWines, type Wine } from "../../types/Wine";
import { mockProducers } from "../../types/Producer";

// Local userType union to avoid circular import with App.tsx
type HomeUserType = "Visitor" | "Enthusiast" | "Producer" | "Retailer";

interface CommonHomeProps {
  userType?: HomeUserType;
}

// Helper to create deterministic pseudo-metrics from an id string
function pseudoMetric(id: string, salt: number): number {
  let hash = 0;
  for (let i = 0; i < id.length; i++) {
    hash = (hash * 31 + id.charCodeAt(i) + salt) >>> 0;
  }
  // keep in a human-friendly range
  return (hash % 97) + 3; // 3..99
}

const sectionCard = (
  title: string,
  icon: string,
  children: React.ReactNode
) => (
  <div className="card h-100 mb-3 equal-card">
    <div className="card-header d-flex align-items-center gap-2 py-2 px-2">
      <i className={`bi ${icon}`}></i>
      <h6 className="mb-0">{title}</h6>
    </div>
    <div className="card-body p-2">{children}</div>
  </div>
);

const WineModal: React.FC<{ wine: Wine; onClose: () => void }> = ({
  wine,
  onClose,
}) => {
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

const WineGrid: React.FC<{ wines: Wine[]; onView: (wine: Wine) => void }> = ({
  wines,
  onView,
}) => {
  return (
    <div className="row">
      {wines.map((wine) => (
        <div key={wine.id} className="col-lg-4 col-md-6 col-sm-12 mb-3">
          <div className="card h-100">
            <div className="card-body p-2">
              <div className="d-flex justify-content-between align-items-start">
                <div>
                  <div className="fw-semibold small mb-1">{wine.name}</div>
                  <div className="text-muted small">
                    {wine.vintage} • {wine.subarea || "—"} • {wine.producer}
                  </div>
                </div>
                {wine.pricePerBottle !== undefined && (
                  <span className="badge bg-light text-dark">
                    ${wine.pricePerBottle?.toFixed(2)}
                  </span>
                )}
              </div>
              <p className="mt-2 mb-0 small text-muted">
                {wine.description && wine.description.length > 80
                  ? wine.description.slice(0, 80) + "…"
                  : wine.description ||
                    "A delightful wine with notes of fruit and spice."}
              </p>
            </div>
            <div className="card-footer d-flex gap-2 p-2">
              <button
                className="btn btn-sm btn-outline-primary "
                onClick={() => onView(wine)}
              >
                <i className="bi bi-search me-1"></i>View
              </button>
              <button className="btn btn-sm btn-outline-secondary">
                <i className="bi bi-bookmark me-1"></i>Save
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const RoleSnapshot: React.FC<{ userType: HomeUserType }> = ({ userType }) => {
  switch (userType) {
    case "Producer":
      return sectionCard(
        "Producer Snapshot",
        "bi-building-gear",
        <div className="small">
          <div className="mb-2">
            Sync status:{" "}
            <span className="badge bg-light text-dark">Shopify Connected</span>
          </div>
          <div className="d-grid gap-2">
            <button className="btn btn-sm btn-outline-primary">
              <i className="bi bi-upload me-1"></i>Sync to Shopify
            </button>
            <button className="btn btn-sm btn-outline-secondary">
              <i className="bi bi-plus-circle me-1"></i>Add Wine
            </button>
          </div>
        </div>
      );
    case "Retailer":
      return sectionCard(
        "Retailer Snapshot",
        "bi-shop",
        <div className="small">
          <div className="mb-2">
            Sync status:{" "}
            <span className="badge bg-light text-dark">Square Connected</span>
          </div>
          <div className="d-grid gap-2">
            <button className="btn btn-sm btn-outline-danger">
              <i className="bi bi-arrow-down-circle me-1"></i>Fetch from Square
            </button>
            <button className="btn btn-sm btn-outline-secondary">
              <i className="bi bi-clipboard-data me-1"></i>Review Inventory
            </button>
          </div>
        </div>
      );
    case "Enthusiast":
      return sectionCard(
        "Your Activity",
        "bi-heart",
        <div className="small">
          <ul className="list-group">
            {mockWines.slice(0, 3).map((w) => (
              <li
                key={w.id}
                className="list-group-item d-flex justify-content-between align-items-center py-2"
              >
                <span>
                  {w.name} <span className="text-muted">({w.vintage})</span>
                </span>
                <button className="btn btn-sm btn-outline-secondary">
                  Review
                </button>
              </li>
            ))}
          </ul>
        </div>
      );
    default:
      return sectionCard(
        "Discover",
        "bi-compass",
        <div className="d-grid gap-2">
          <button className="btn btn-sm btn-outline-secondary">
            Browse by Region
          </button>
          <button className="btn btn-sm btn-outline-secondary">
            Browse by Varietal
          </button>
          <button className="btn btn-sm btn-outline-secondary">
            Browse by Producer
          </button>
        </div>
      );
  }
};

const CommonHome: React.FC<CommonHomeProps> = ({ userType = "Visitor" }) => {
  const [selectedWine, setSelectedWine] = useState<Wine | null>(null);
  const [showModal, setShowModal] = useState(false);
  // Derive pseudo metrics
  const winesWithMetrics = mockWines.map((w) => ({
    wine: w,
    reviews: pseudoMetric(w.id, 7),
    tastings: pseudoMetric(w.id, 19),
    offerScore:
      (w.pricePerBottle
        ? Math.max(1, 100 - Math.round(w.pricePerBottle))
        : 50) +
      (pseudoMetric(w.id, 3) % 10),
  }));

  const mostReviewed = winesWithMetrics
    .slice(0, 3)
    .sort((a, b) => b.reviews - a.reviews)
    .slice(0, 6)
    .map((x) => x.wine);

  const trendingOffers = winesWithMetrics
    .slice()
    .sort((a, b) => b.offerScore - a.offerScore)
    .slice(0, 8)
    .map((x) => x.wine);

  const newProducers = mockProducers.slice(2, 5);

  return (
    <div className="container py-3">
      <div className="text-center mb-4">
        <h5 className="mb-1 fs-2">Wine Graph Home</h5>
        <p className="text-muted mb-0 small">
          Unified snapshot across the platform — surfacing most reviewed and
          tasted wines, trending retailer offers, and new producers.
        </p>
      </div>
      <div className="row align-items-stretch mb-3 gap-3 gap-lg-0">
        <div className="col-lg-8 col-md-12">
          {sectionCard(
            "Most Reviewed Wines",
            "bi-chat-left-text",
            <WineGrid
              wines={mostReviewed}
              onView={(wine) => {
                setSelectedWine(wine);
                setShowModal(true);
              }}
            />
          )}
        </div>

        <div className="col-lg-4 col-md-12">
          {/* Role-specific compact snapshot */}
          <RoleSnapshot userType={userType} />
        </div>
      </div>
      <div className="row align-items-stretch gap-3 gap-lg-0">
        <div className="col-lg-8 col-md-12">
          {sectionCard(
            "Trending Retailer Offers",
            "bi-graph-up",
            <ul className="list-group">
              {trendingOffers.map((w) => (
                <li
                  key={w.id}
                  className="list-group-item d-flex justify-content-between align-items-center py-2"
                >
                  <span>
                    {w.name} <span className="text-muted">({w.vintage})</span>
                  </span>
                  <span className="badge bg-secondary">{w.producer}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="col-lg-4 col-md-12">
          {sectionCard(
            "New Producers & Wines",
            "bi-stars",
            <div>
              <ul className="list-group mb-3">
                {newProducers.map((p) => (
                  <li
                    key={p.id}
                    className="list-group-item d-flex justify-content-between align-items-center py-2"
                  >
                    <span>{p.name}</span>
                    {p.introOffer && (
                      <span className="badge bg-success">Intro</span>
                    )}
                  </li>
                ))}
              </ul>
              <div className="small text-muted mb-2">Recently added wines</div>
              <ul className="list-group">
                {mockWines.slice(0, 3).map((w) => (
                  <li
                    key={w.id}
                    className="list-group-item d-flex justify-content-between align-items-center py-2"
                  >
                    {w.name}
                    <span className="badge bg-light text-dark">
                      {w.varietal}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
      {/* wine modal */}
      {showModal && selectedWine && (
        <WineModal wine={selectedWine} onClose={() => setShowModal(false)} />
      )}
    </div>
  );
};

export default CommonHome;
