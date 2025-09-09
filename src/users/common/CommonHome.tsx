import React, { useState } from "react";
import { mockWines, type Wine } from "../../types/Wine";
import { mockProducers } from "../../types/Producer";
import { WineDetail } from "./WineDetail";
import { RoleSnapshot } from "./RoleSnapshot";
import { WineGrid } from "./WineGrid";
import { SectionCard } from "./SectionCard";

// Local userType union to avoid circular import with App.tsx
export type HomeUserType = "Visitor" | "Enthusiast" | "Producer" | "Retailer";

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
          <SectionCard title="Most Reviewed Wines" icon="bi-chat-left-text">
            <WineGrid
              wines={mostReviewed}
              onView={(wine) => {
                setSelectedWine(wine);
                setShowModal(true);
              }}
            />
          </SectionCard>
        </div>

        <div className="col-lg-4 col-md-12">
          {/* Role-specific compact snapshot */}
          <RoleSnapshot userType={userType} />
        </div>
      </div>
      <div className="row align-items-stretch gap-3 gap-lg-0">
        <div className="col-lg-8 col-md-12">
          <SectionCard title="Trending Retailer Offers" icon="bi-graph-up">
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
          </SectionCard>
        </div>

        <div className="col-lg-4 col-md-12">
          <SectionCard title="New Producers & Wines" icon="bi-stars">
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
          </SectionCard>
        </div>
      </div>
      {/* wine modal */}
      {showModal && selectedWine && (
        <WineDetail wine={selectedWine} onClose={() => setShowModal(false)} />
      )}
    </div>
  );
};

export default CommonHome;
