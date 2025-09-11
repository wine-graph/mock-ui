import { type Wine } from "../../types/Wine";

interface WineGridProps {
  wines: Wine[];
  onView: (wine: Wine) => void;
}

export const WineGrid: React.FC<WineGridProps> = ({ wines, onView }) => {
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
