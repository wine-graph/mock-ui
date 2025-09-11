import React from "react";
import { SectionCard } from "./SectionCard";
import { mockWines } from "../../types/Wine";
import type { HomeUserType } from "./CommonHome";

export const RoleSnapshot: React.FC<{ userType: HomeUserType }> = ({
  userType,
}) => {
  switch (userType) {
    case "Producer":
      return (
        <SectionCard title="Producer Snapshot" icon="bi-building-gear">
          <div className="small">
            <div className="mb-2">
              Sync status:{" "}
              <span className="badge bg-light text-dark">
                Shopify Connected
              </span>
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
        </SectionCard>
      );
    case "Retailer":
      return (
        <SectionCard title="Retailer Snapshot" icon="bi-shop">
          <div className="small">
            <div className="mb-2">
              Sync status:{" "}
              <span className="badge bg-light text-dark">Square Connected</span>
            </div>
            <div className="d-grid gap-2">
              <button className="btn btn-sm btn-outline-danger">
                <i className="bi bi-arrow-down-circle me-1"></i>Fetch from
                Square
              </button>
              <button className="btn btn-sm btn-outline-secondary">
                <i className="bi bi-clipboard-data me-1"></i>Review Inventory
              </button>
            </div>
          </div>
        </SectionCard>
      );
    case "Enthusiast":
      return (
        <SectionCard title="Your Activity" icon="bi-heart">
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
        </SectionCard>
      );
    default:
      return (
        <SectionCard title="Discover" icon="bi-compass">
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
        </SectionCard>
      );
  }
};
