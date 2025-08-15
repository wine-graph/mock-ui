import React, { useMemo, useState } from 'react';
import { mockWines, type Wine } from '../../types/Wine';

// Minimal editable row type derived from Wine, allowing partials pre-save
type EditableWine = Partial<Wine> & { id: string };

type ProducerSyncProps = { mode?: 'shopify' | 'csv' }

const ProducerSync: React.FC<ProducerSyncProps> = ({ mode = 'shopify' }) => {
  const [view, setView] = useState<'query' | 'persist'>('query');
  const [rows, setRows] = useState<EditableWine[]>([]);
  const [savedWines, setSavedWines] = useState<Wine[]>([]);

  // Simulated product source - filter for Luli wines only
  const shopifyProducts = useMemo(
    () => mockWines.filter((wine) => wine.producer === 'Luli Wines'),
    []
  );

  const loadFromShopify = () => {
    // seed editable rows from Shopify
    const editable: EditableWine[] = shopifyProducts.map((p) => ({
      id: p.id,
      name: p.name,
      vintage: p.vintage,
      size: p.size ?? 750,
      producer: p.producer,
      description: p.description ?? '',
      alcohol: p.alcohol,
      acid: p.acid,
      pH: p.pH,
      bottleAging: p.bottleAging,
      color: p.color,
      closure: p.closure,
      shape: p.shape,
      type: p.type,
      subarea: p.subarea,
    }));
    setRows(editable);
  };

  const handleFetchFromShopify = () => {
    console.log('Fetching from Shopify...');
    loadFromShopify();
  };

  // Mocked CSV load: seeds rows as if imported from a CSV file
  const handleLoadCsvMock = () => {
    console.log('Loading sample CSV data...');
    const editable: EditableWine[] = shopifyProducts.map((p, idx) => ({
      id: `csv_${p.id}_${idx}`,
      name: p.name,
      vintage: p.vintage,
      size: p.size ?? 750,
      producer: p.producer,
      description: p.description ?? '',
      alcohol: p.alcohol,
      acid: p.acid,
      pH: p.pH,
      bottleAging: p.bottleAging,
      color: p.color,
      closure: p.closure,
      shape: p.shape,
      type: p.type,
      subarea: p.subarea,
    }));
    setRows(editable);
  };

  const handleChange = (
    id: string,
    field: keyof EditableWine,
    value: string
  ) => {
    setRows((prev) =>
      prev.map((r) =>
        r.id === id
          ? {
              ...r,
              [field]: coerceField(field, value),
            }
          : r
      )
    );
  };

  const handleAddRow = () => {
    const newId = `tmp_${Date.now()}`;
    setRows((prev) => [
      ...prev,
      {
        id: newId,
        name: '',
        vintage: new Date().getFullYear(),
        size: 750,
        producer: 'Luli Wines',
        description: '',
        color: 'WHITE',
        closure: 'OTHER',
        shape: 'BURGUNDY',
        type: 'STILL',
      },
    ]);
  };

  const handleRemoveRow = (id: string) => {
    setRows((prev) => prev.filter((r) => r.id !== id));
  };

  const handleSaveToPlatform = () => {
    console.log('Saving to platform...');

    const convertedWines: Wine[] = rows
      .filter((r) => (r.name || '').toString().trim().length > 0)
      .map((r) => ({
        id: r.id,
        name: r.name as string,
        vintage: (r.vintage as number) ?? new Date().getFullYear(),
        size: (r.size as number) ?? 750,
        producer: (r.producer as string) || 'Luli Wines',
        description: r.description,
        alcohol: r.alcohol,
        acid: r.acid,
        pH: r.pH,
        bottleAging: r.bottleAging,
        color: (r.color as Wine['color']) ?? 'WHITE',
        closure: (r.closure as Wine['closure']) ?? 'OTHER',
        shape: (r.shape as Wine['shape']) ?? 'BURGUNDY',
        type: (r.type as Wine['type']) ?? 'STILL',
        subarea: r.subarea,
        varietal: (r as any).varietal || 'Blend',
      }));

    setSavedWines(convertedWines);
    setView('persist');
  };

  const handleBackToQuery = () => setView('query');

  return (
    <div className="container py-4">
      {view === 'query' ? (
        <>
          <div className="d-flex flex-wrap justify-content-between align-items-center mb-3 gap-2">
            <div>
              <h5>{mode === 'shopify' ? 'Luli Wines Shopify Integration' : 'CSV Import'}</h5>
              <p>Manage inventory, upload wine data from CSV, or sync with Shopify.</p>
            </div>
            <div className="d-flex gap-2">
              {mode === 'csv' && (
                <button className="btn btn-outline-secondary" onClick={handleLoadCsvMock}>
                  <i className="bi bi-file-earmark-spreadsheet me-2"></i>
                  Load Sample CSV
                </button>
              )}
              {mode === 'shopify' && (
                <button className="btn btn-outline-primary" onClick={handleFetchFromShopify}>
                  <i className="bi bi-arrow-repeat me-2"></i>Fetch from Shopify
                </button>
              )}
            </div>
          </div>

          {mode === 'shopify' && (
            <div className="alert alert-info">
              <i className="bi bi-info-circle me-2"></i>
              Connected to: <strong>luliwines.myshopify.com</strong>
            </div>
          )}

          <div className="table-responsive">
            <table className="table table-hover align-middle">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Vintage</th>
                  <th>Size (ml)</th>
                  <th>Color</th>
                  <th>Type</th>
                  <th>Subarea</th>
                  <th>Description</th>
                  <th style={{minWidth: 100}}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr key={r.id}>
                    <td style={{minWidth: 180}}>
                      <input
                        className="form-control form-control-sm"
                        value={r.name || ''}
                        onChange={(e) => handleChange(r.id, 'name', e.target.value)}
                        placeholder="Wine name"
                      />
                    </td>
                    <td style={{maxWidth: 120}}>
                      <input
                        type="number"
                        className="form-control form-control-sm"
                        value={r.vintage ?? ''}
                        onChange={(e) => handleChange(r.id, 'vintage', e.target.value)}
                      />
                    </td>
                    <td style={{maxWidth: 120}}>
                      <input
                        type="number"
                        className="form-control form-control-sm"
                        value={r.size ?? ''}
                        onChange={(e) => handleChange(r.id, 'size', e.target.value)}
                      />
                    </td>
                    <td>
                      <select
                        className="form-select form-select-sm"
                        value={(r.color as string) || ''}
                        onChange={(e) => handleChange(r.id, 'color', e.target.value)}
                      >
                        <option value="">-</option>
                        <option value="RED">Red</option>
                        <option value="WHITE">White</option>
                        <option value="ROSE">Rosé</option>
                        <option value="ORANGE">Orange</option>
                      </select>
                    </td>
                    <td>
                      <select
                        className="form-select form-select-sm"
                        value={(r.type as string) || ''}
                        onChange={(e) => handleChange(r.id, 'type', e.target.value)}
                      >
                        <option value="">-</option>
                        <option value="STILL">Still</option>
                        <option value="SPARKLING">Sparkling</option>
                        <option value="FRIZZANTE">Frizzante</option>
                      </select>
                    </td>
                    <td style={{minWidth: 160}}>
                      <input
                        className="form-control form-control-sm"
                        value={r.subarea || ''}
                        onChange={(e) => handleChange(r.id, 'subarea', e.target.value)}
                        placeholder="Region/Subarea"
                      />
                    </td>
                    <td style={{minWidth: 220}}>
                      <input
                        className="form-control form-control-sm"
                        value={r.description || ''}
                        onChange={(e) => handleChange(r.id, 'description', e.target.value)}
                        placeholder="Short description"
                      />
                    </td>
                    <td>
                      <div className="btn-group btn-group-sm">
                        <button className="btn btn-outline-secondary" onClick={() => handleRemoveRow(r.id)}>
                          Remove
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="d-flex justify-content-between mt-3">
            <button className="btn btn-outline-secondary" onClick={handleAddRow}>
              Add Row
            </button>
            <div className="d-flex gap-2">
              <button className="btn btn-primary" onClick={handleSaveToPlatform}>
                Save to Platform
              </button>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="d-flex justify-content-between align-items-center mb-4">
            <div>
              <h5>Saved to Platform</h5>
              <p>Your products have been converted and saved to WineCore format.</p>
            </div>
            <button className="btn btn-outline-primary" onClick={handleBackToQuery}>
              {mode === 'shopify' ? 'Back to Shopify Sync' : 'Back to CSV Import'}
            </button>
          </div>

          <div className="alert alert-success">
            <i className="bi bi-check-circle me-2"></i>
            Successfully saved {savedWines.length} wines.
          </div>

          <div className="table-responsive">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Vintage</th>
                  <th>Size</th>
                  <th>Producer</th>
                  <th>Color</th>
                  <th>Type</th>
                  <th>Subarea</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                {savedWines.map((wine) => (
                  <tr key={wine.id}>
                    <td>{wine.name}</td>
                    <td>{wine.vintage}</td>
                    <td>{wine.size} ml</td>
                    <td>{wine.producer}</td>
                    <td>{wine.color}</td>
                    <td>{wine.type}</td>
                    <td>{wine.subarea}</td>
                    <td>{wine.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
};

function coerceField(field: keyof EditableWine, raw: string): any {
  const numeric: (keyof EditableWine)[] = ['vintage', 'size', 'alcohol', 'acid', 'pH', 'bottleAging'];
  if (numeric.includes(field)) {
    const n = Number(raw);
    return Number.isFinite(n) ? n : undefined;
  }
  return raw;
}

export default ProducerSync;