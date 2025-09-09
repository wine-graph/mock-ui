import React, { useState } from "react";
import { mockWines } from "../../types/Wine.ts";
import { mockInventory, type RetailerInventory } from "../../types/Retailer.ts";

const RetailerCellar: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [inventory, setInventory] =
    useState<RetailerInventory[]>(mockInventory);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [requestingUpdateIndex, setRequestingUpdateIndex] = useState<
    number | null
  >(null);

  const handleSyncFromSquare = () => {
    setIsLoading(true);
    setTimeout(() => {
      setInventory(mockInventory);
      setIsLoading(false);
    }, 1500);
  };

  const handleEditChange = (
    index: number,
    field: keyof RetailerInventory,
    value: any
  ) => {
    const updated = [...inventory];
    // @ts-ignore
    updated[index][field] = value;
    setInventory(updated);
  };

  const handleRequestUpdate = (index: number) => {
    // Toggle requesting update for this item
    if (requestingUpdateIndex === index) {
      setRequestingUpdateIndex(null);
    } else {
      setRequestingUpdateIndex(index);
      // Close any open editing
      if (editingIndex !== null) {
        setEditingIndex(null);
      }
    }
  };

  const handleSubmitUpdateRequest = () => {
    // In a real application, this would send the request to the backend
    // For now, just show a success message and close the form
    alert("Update request submitted successfully!");
    setRequestingUpdateIndex(null);
  };

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h4>Retailer Inventory</h4>
          <p>
            Manage your inventory synced from Square. Only unmatched wines are
            editable.
          </p>
        </div>
        <button className="btn btn-primary" onClick={handleSyncFromSquare}>
          <i className="bi bi-arrow-repeat me-2"></i>Sync from Square
        </button>
      </div>

      {isLoading ? (
        <div className="text-center my-5">
          <div className="spinner-border text-primary" role="status" />
          <div className="mt-3">Syncing with Square...</div>
        </div>
      ) : (
        <div className="table-responsive">
          <table className="table table-hover align-middle">
            <thead className="table-light">
              <tr>
                <th>Wine</th>
                <th>Vintage</th>
                <th>Producer</th>
                <th>Price</th>
                <th>Source</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {inventory.map((item, index) => {
                const isEditing = editingIndex === index;
                const isCanonical = item.source === "CANONICAL";
                const isMatched = item.matched;

                return (
                  <>
                    <tr key={`item-${index}`}>
                      <td>
                        {isEditing ? (
                          <input
                            className="form-control form-control-sm"
                            value={item.name}
                            onChange={(e) =>
                              handleEditChange(index, "name", e.target.value)
                            }
                          />
                        ) : (
                          <div>
                            {item.name}
                            {isMatched && (
                              <div className="mt-1">
                                <div className="d-flex align-items-center">
                                  <span className="badge bg-info me-2">
                                    Matched
                                  </span>
                                  {(() => {
                                    const matchedWine = mockWines.find(
                                      (wine) => wine.id === item.wineId
                                    );
                                    return matchedWine ? (
                                      <span className="small text-muted">
                                        {matchedWine.name} (
                                        {matchedWine.vintage})
                                      </span>
                                    ) : null;
                                  })()}
                                </div>
                              </div>
                            )}
                          </div>
                        )}
                      </td>
                      <td>
                        {isEditing ? (
                          <input
                            className="form-control form-control-sm"
                            value={item.vintage}
                            type="number"
                            onChange={(e) =>
                              handleEditChange(
                                index,
                                "vintage",
                                parseInt(e.target.value)
                              )
                            }
                          />
                        ) : (
                          item.vintage
                        )}
                      </td>
                      <td>
                        {isEditing ? (
                          <input
                            className="form-control form-control-sm"
                            value={item.producer}
                            onChange={(e) =>
                              handleEditChange(
                                index,
                                "producer",
                                e.target.value
                              )
                            }
                          />
                        ) : (
                          item.producer
                        )}
                      </td>
                      <td>
                        {isEditing ? (
                          <input
                            className="form-control form-control-sm"
                            value={item.price}
                            onChange={(e) =>
                              handleEditChange(index, "price", e.target.value)
                            }
                          />
                        ) : (
                          item.price
                        )}
                      </td>
                      <td>
                        <span
                          className={`badge ${
                            isCanonical ? "bg-success" : "bg-secondary"
                          }`}
                        >
                          {item.source}
                        </span>
                      </td>
                      <td>
                        {!isCanonical && (
                          <div className="d-flex gap-2">
                            {isMatched ? (
                              <button
                                className="btn btn-sm btn-outline-secondary"
                                onClick={() => handleRequestUpdate(index)}
                              >
                                {requestingUpdateIndex === index
                                  ? "Cancel"
                                  : "Request Update"}
                              </button>
                            ) : (
                              <button
                                className="btn btn-sm btn-outline-primary"
                                onClick={() =>
                                  setEditingIndex(
                                    index === editingIndex ? null : index
                                  )
                                }
                              >
                                {isEditing ? "Save" : "Edit"}
                              </button>
                            )}
                          </div>
                        )}
                      </td>
                    </tr>

                    {requestingUpdateIndex === index && (
                      <tr key={`update-request-${index}`}>
                        <td colSpan={6} className="bg-light p-3">
                          <div>
                            <h6>Request Canonical Update</h6>
                            {(() => {
                              const matchedWine = mockWines.find(
                                (wine) => wine.id === item.wineId
                              );
                              return matchedWine ? (
                                <div className="card mt-2 border-0">
                                  <div className="card-body p-0">
                                    <div className="row mb-3">
                                      <div className="col-md-6">
                                        <div className="d-flex align-items-center mb-2">
                                          <span className="badge bg-secondary me-2">
                                            Current
                                          </span>
                                          <strong>{matchedWine.name}</strong>
                                        </div>
                                        <div className="small text-muted mb-1">
                                          Producer: {matchedWine.producer}
                                        </div>
                                        <div className="small text-muted mb-1">
                                          Vintage: {matchedWine.vintage}
                                        </div>
                                        <div className="small text-muted">
                                          Type: {matchedWine.type}
                                        </div>
                                      </div>
                                      <div className="col-md-6">
                                        <div className="form-check mb-2">
                                          <input
                                            className="form-check-input"
                                            type="checkbox"
                                            id="persistAsCanonical"
                                          />
                                          <label
                                            className="form-check-label"
                                            htmlFor="persistAsCanonical"
                                          >
                                            Request for canonical wine
                                          </label>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="d-flex justify-content-end">
                                      <button
                                        className="btn btn-sm btn-secondary me-2"
                                        onClick={() =>
                                          setRequestingUpdateIndex(null)
                                        }
                                      >
                                        Cancel
                                      </button>
                                      <button
                                        className="btn btn-sm btn-primary"
                                        onClick={() =>
                                          handleSubmitUpdateRequest()
                                        }
                                      >
                                        Submit Request
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              ) : (
                                <div className="alert alert-warning">
                                  Wine information not found.
                                </div>
                              );
                            })()}
                          </div>
                        </td>
                      </tr>
                    )}
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default RetailerCellar;
