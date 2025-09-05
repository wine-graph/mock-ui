import React, {useEffect, useState} from 'react';
import {mockWines} from "../../types/Wine.ts";
import {mockInventory, type RetailerInventory} from "../../types/Retailer.ts";

const RetailerCellar: React.FC = () => {
    const [inventory, setInventory] = useState<RetailerInventory[]>([]);
    const [editingIndex] = useState<number | null>(null);
    const [requestingUpdateIndex, setRequestingUpdateIndex] = useState<number | null>(null);

    // New state for Square sync flow
    const [squareItems, setSquareItems] = useState<RetailerInventory[] | null>(null);
    const [squareIsLoading, setSquareIsLoading] = useState(false);
    const [addedFromSquare, setAddedFromSquare] = useState<Set<string>>(new Set());
    const [selectedSquare, setSelectedSquare] = useState<Set<string>>(new Set());

    // Load Current Inventory on mount: show first 5 items for current retailer (rest will appear in Square Sync)
    useEffect(() => {
        const currentRetailerId = 'r1';
        const all = mockInventory.filter(item => item.retailerId === currentRetailerId);
        const initial = all.slice(0, 5);
        setInventory(initial);
    }, []);

    const handleSyncFromSquare = () => {
        // Simulate fetching editable items from Square: show all remaining retailer items not already in inventory, but editable table lists only SQUARE items
        setSquareIsLoading(true);
        setTimeout(() => {
            const currentRetailerId = 'r1';
            const all = mockInventory.filter(item => item.retailerId === currentRetailerId);
            // Items not currently shown in inventory become the Sync pool (include both SQUARE and CANONICAL)
            const invIds = new Set(inventory.map(i => i.externalItemId));
            const remainder = all.filter(i => !invIds.has(i.externalItemId));
            // Deep copy to avoid mutating mockInventory
            const cloned = remainder.map(i => ({...i}));
            setSquareItems(cloned);
            setSquareIsLoading(false);
        }, 800);
    };

    const handleEditChange = (index: number, field: keyof RetailerInventory, value: any) => {
        const updated = [...inventory];
        // @ts-ignore
        updated[index][field] = value;
        setInventory(updated);
    };

    const handleSquareEditChange = (index: number, field: keyof RetailerInventory, value: any) => {
        if (!squareItems) return;
        const updated = [...squareItems];
        // @ts-ignore
        updated[index][field] = value;
        setSquareItems(updated);
    };

    const handleAddFromSquare = (index: number) => {
        if (!squareItems) return;
        const item = squareItems[index];
        setSelectedSquare(prev => {
            const next = new Set(prev);
            if (next.has(item.externalItemId)) next.delete(item.externalItemId); else next.add(item.externalItemId);
            return next;
        });
    };

    const handleBatchPersist = () => {
        if (!squareItems) return;
        const invIds = new Set(inventory.map(i => i.externalItemId));
        const toPersist = squareItems.filter(i => selectedSquare.has(i.externalItemId) && !addedFromSquare.has(i.externalItemId) && !invIds.has(i.externalItemId));
        if (toPersist.length === 0) {
            alert('Select one or more items to add.');
            return;
        }
        // Preserve Square item properties; do not override matched flag. If item.matched was true (already matched), keep it.
        const augmented = toPersist.map(item => ({
            ...item,
            matched: item.matched === true
        } as RetailerInventory));
        setInventory(prev => [...prev, ...augmented]);
        setAddedFromSquare(prev => {
            const next = new Set(prev);
            toPersist.forEach(i => next.add(i.externalItemId));
            return next;
        });
        alert(`Persisted ${toPersist.length} item(s) and sent for WineCanon matching.`);
        // After saving, remove the Square table and clear selection state
        setSquareItems(null);
        setSelectedSquare(new Set());
        setAddedFromSquare(new Set());
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
                    <h4>Retailer Cellar</h4>
                    <p>Current Inventory shown below. Fetch from Square to review and add new wines.</p>
                </div>
            </div>

            <div className="table-responsive">
                <table className="table table-hover align-middle">
                    <thead className="table-light">
                    <tr>
                        <th>Wine</th>
                        <th>Vintage</th>
                        <th>Varietal</th>
                        <th>Producer</th>
                        <th>Price</th>
                        <th>Source</th>
                    </tr>
                    </thead>
                    <tbody>
                        {inventory.map((item, index) => {
                            const isEditing = editingIndex === index;
                            const isCanonical = item.source === 'CANONICAL';
                            const isMatched = item.matched;

                            return (
                                <React.Fragment key={`row-${index}`}>
                                    <tr>
                                        <td>
                                            {isEditing ? (
                                                <input
                                                    className="form-control form-control-sm"
                                                    value={item.name}
                                                    onChange={e => handleEditChange(index, 'name', e.target.value)}
                                                />
                                            ) : (
                                                <div>
                                                    {item.name}
                                                    {!isCanonical && isMatched && (
                                                        <div className="mt-1">
                                                            <div className="d-flex align-items-center">
                                                                <span className="badge bg-info me-2">Matched</span>
                                                                {(() => {
                                                                    const matchedWine = mockWines.find(wine => wine.id === item.wineId);
                                                                    return matchedWine ? (
                                                                        <span className="small text-muted">
                                                                            {matchedWine.name} ({matchedWine.vintage}) {matchedWine.varietal}
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
                                                    onChange={e => handleEditChange(index, 'vintage', parseInt(e.target.value))}
                                                />
                                            ) : (
                                                item.vintage
                                            )}
                                        </td>
                                        <td>
                                            {isEditing ? (
                                                <input
                                                    className="form-control form-control-sm"
                                                    value={item.varietal}
                                                    type="number"
                                                    onChange={e => handleEditChange(index, 'varietal', e.target.value)}
                                                />
                                            ) : (
                                                item.varietal
                                            )}
                                        </td>
                                        <td>
                                            {isEditing ? (
                                                <input
                                                    className="form-control form-control-sm"
                                                    value={item.producer}
                                                    onChange={e => handleEditChange(index, 'producer', e.target.value)}
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
                                                    onChange={e => handleEditChange(index, 'price', e.target.value)}
                                                />
                                            ) : (
                                                item.price
                                            )}
                                        </td>
                                        <td>
                                          <span className={`badge ${isCanonical ? 'bg-success' : 'bg-secondary'}`}>
                                            {item.source}
                                          </span>
                                        </td>
                                    </tr>
                                    
                                    {requestingUpdateIndex === index && (
                                        <tr key={`update-request-${index}`}>
                                            <td colSpan={5} className="bg-light p-3">
                                                <div>
                                                    <h6>Request Canonical Update</h6>
                                                    {(() => {
                                                        const matchedWine = mockWines.find(wine => wine.id === item.wineId);
                                                        return matchedWine ? (
                                                            <div className="card mt-2 border-0">
                                                                <div className="card-body p-0">
                                                                    <div className="row mb-3">
                                                                        <div className="col-md-6">
                                                                            <div className="d-flex align-items-center mb-2">
                                                                                <span className="badge bg-secondary me-2">Current</span>
                                                                                <strong>{matchedWine.name}</strong>
                                                                            </div>
                                                                            <div className="small text-muted mb-1">Producer: {matchedWine.producer}</div>
                                                                            <div className="small text-muted mb-1">Vintage: {matchedWine.vintage}</div>
                                                                            <div className="small text-muted">Type: {matchedWine.type}</div>
                                                                        </div>
                                                                        <div className="col-md-6">
                                                                            <div className="form-check mb-2">
                                                                                <input className="form-check-input" type="checkbox" id="persistAsCanonical" />
                                                                                <label className="form-check-label" htmlFor="persistAsCanonical">
                                                                                    Request for canonical wine
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="d-flex justify-content-end">
                                                                        <button 
                                                                            className="btn btn-sm btn-secondary me-2"
                                                                            onClick={() => setRequestingUpdateIndex(null)}
                                                                        >
                                                                            Cancel
                                                                        </button>
                                                                        <button 
                                                                            className="btn btn-sm btn-primary"
                                                                            onClick={() => handleSubmitUpdateRequest()}
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
                                </React.Fragment>
                            );
                        })}
                        </tbody>
                    </table>
                </div>
        
            {/* Square Sync section */}
            <div className="card mt-4">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <span>Square Sync</span>
                    <button className="btn btn-sm btn-outline-primary" onClick={handleSyncFromSquare} disabled={squareIsLoading}>
                        <i className="bi bi-arrow-repeat me-2"></i>{squareIsLoading ? 'Fetching…' : 'Fetch from Square'}
                    </button>
                </div>
                <div className="card-body">
                    {!squareItems && !squareIsLoading && (
                        <div className="text-muted">Click "Fetch from Square" to load your POS items for review and add them to your inventory.</div>
                    )}
                    {squareIsLoading && (
                        <div className="text-center my-3">
                            <div className="spinner-border text-primary" role="status"/>
                            <div className="mt-2">Loading Square items…</div>
                        </div>
                    )}
                    {squareItems && !squareIsLoading && (
                        <>
                        <div className="d-flex justify-content-between align-items-center mb-2">
                            <div className="small text-muted">
                                {Array.from(selectedSquare).length} selected
                            </div>
                            <div>
                                <button className="btn btn-sm btn-primary" onClick={handleBatchPersist} disabled={!squareItems || Array.from(selectedSquare).length === 0}>Save selected to Inventory</button>
                            </div>
                        </div>
                        <div className="table-responsive">
                            <table className="table table-sm align-middle">
                                <thead>
                                    <tr>
                                        <th style={{width: 40}}>
                                            <input className="form-check-input" type="checkbox" aria-label="Select all"
                                                checked={!!squareItems && (() => { const invIds = new Set(inventory.map(i => i.externalItemId)); const selectable = squareItems.filter(i => !addedFromSquare.has(i.externalItemId) && !invIds.has(i.externalItemId)); return selectable.length > 0 && selectable.every(i => selectedSquare.has(i.externalItemId)); })()}
                                                onChange={() => {
                                                    if (!squareItems) return;
                                                    const invIds = new Set(inventory.map(i => i.externalItemId));
                                                    const allSelectable = squareItems.filter(i => !addedFromSquare.has(i.externalItemId) && !invIds.has(i.externalItemId));
                                                    const allSelected = allSelectable.every(i => selectedSquare.has(i.externalItemId));
                                                    setSelectedSquare(prev => {
                                                        const next = new Set(prev);
                                                        if (allSelected) {
                                                            allSelectable.forEach(i => next.delete(i.externalItemId));
                                                        } else {
                                                            allSelectable.forEach(i => next.add(i.externalItemId));
                                                        }
                                                        return next;
                                                    });
                                                }}
                                            />
                                        </th>
                                        <th>Wine</th>
                                        <th>Vintage</th>
                                        <th>Varietal</th>
                                        <th>Producer</th>
                                        <th>Price</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {squareItems.map((item, idx) => (
                                        <tr key={item.externalItemId}>
                                            <td>
                                                <input className="form-check-input" type="checkbox" checked={selectedSquare.has(item.externalItemId)} disabled={addedFromSquare.has(item.externalItemId) || inventory.some(inv => inv.externalItemId === item.externalItemId)} onChange={() => handleAddFromSquare(idx)} />
                                            </td>
                                            <td>
                                                <input className="form-control form-control-sm" value={item.name} onChange={e => handleSquareEditChange(idx, 'name', e.target.value)} readOnly={item.source !== 'SQUARE'} />
                                            </td>
                                            <td style={{maxWidth: 110}}>
                                                <input className="form-control form-control-sm" type="number" value={item.vintage} onChange={e => handleSquareEditChange(idx, 'vintage', parseInt(e.target.value))} readOnly={item.source !== 'SQUARE'} />
                                            </td>
                                            <td>
                                                <input className="form-control form-control-sm" value={item.varietal} onChange={e => handleSquareEditChange(idx, 'varietal', e.target.value)} readOnly={item.source !== 'SQUARE'} />
                                            </td>
                                            <td>
                                                <input className="form-control form-control-sm" value={item.producer} onChange={e => handleSquareEditChange(idx, 'producer', e.target.value)} readOnly={item.source !== 'SQUARE'} />
                                            </td>
                                            <td style={{maxWidth: 140}}>
                                                <input className="form-control form-control-sm" value={item.price} onChange={e => handleSquareEditChange(idx, 'price', e.target.value)} readOnly={item.source !== 'SQUARE'} />
                                            </td>
                                            <td className="text-end">
                                                {addedFromSquare.has(item.externalItemId) ? (
                                                    <span className="badge bg-success">Added • Sent for matching</span>
                                                ) : selectedSquare.has(item.externalItemId) ? (
                                                    <span className="badge bg-secondary">Selected</span>
                                                ) : null}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default RetailerCellar;