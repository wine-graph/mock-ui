import React, { useState } from 'react';
import { mockSquareWines, type SquareWine } from '../../data/mockSquareWines';
import { WineCoreImpl } from "../../data/models";

interface RetailerSyncQueryProps {
  onSaveToPlatform: (wines: WineCoreImpl[]) => void;
}

const RetailerSyncQuery: React.FC<RetailerSyncQueryProps> = ({ onSaveToPlatform }) => {
  const [wines, setWines] = useState<SquareWine[]>(mockSquareWines);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Handle input change for editable fields
  const handleInputChange = (id: string, field: keyof WineCoreImpl, value: any) => {
    setWines(prevWines => 
      prevWines.map(wine => 
        wine.id === id ? { ...wine, [field]: value } : wine
      )
    );
  };

  // Convert SquareWine to WineCore
  const convertToWineCore = (squareWine: SquareWine): WineCoreImpl => {
    return {
      id: squareWine.id,
      name: squareWine.name,
      vintage: squareWine.vintage,
      size: squareWine.size,
      producer: squareWine.producer,
      color: squareWine.color,
      closure: squareWine.closure,
      shape: squareWine.shape,
      type: squareWine.type,
      description: squareWine.description,
      alcohol: squareWine.alcohol,
      acid: squareWine.acid,
      pH: squareWine.pH,
      bottleAging: squareWine.bottleAging,
      subarea: squareWine.subarea
    };
  };

  // Handle save to platform
  const handleSaveToPlatform = () => {
    const wineCoreData = wines.map(convertToWineCore);
    onSaveToPlatform(wineCoreData);
  };

  // Simulate fetching wines from Square
  const handleFetchFromSquare = () => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setWines(mockSquareWines);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h4>Sync Wines from Square</h4>
        <button 
          className="btn btn-outline-primary" 
          onClick={handleFetchFromSquare}
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
              Fetching...
            </>
          ) : (
            'Fetch from Square'
          )}
        </button>
      </div>

      <p className="mb-4">
        Review and edit wine data from Square before saving to the platform. 
        Only fields that map to the WineCore schema are editable.
      </p>

      {wines.length > 0 ? (
        <>
          <div className="table-responsive">
            <table className="table table-bordered">
              <thead className="table-light">
                <tr>
                  <th colSpan={5} className="text-center bg-light">Square Data (Non-editable)</th>
                  <th colSpan={14} className="text-center bg-light">WineCore Data (Editable)</th>
                </tr>
                <tr>
                  <th>Preview</th>
                  <th>Variation</th>
                  <th>SKU</th>
                  <th>Category</th>
                  <th>Original Description</th>
                  <th>Name</th>
                  <th>Vintage</th>
                  <th>Size (ml)</th>
                  <th>Producer</th>
                  <th>Color</th>
                  <th>Closure</th>
                  <th>Shape</th>
                  <th>Type</th>
                  <th>Description</th>
                  <th>Alcohol %</th>
                  <th>Acid (g/L)</th>
                  <th>pH</th>
                  <th>Bottle Aging (months)</th>
                  <th>Subarea</th>
                </tr>
              </thead>
              <tbody>
                {wines.map(wine => (
                  <tr key={wine.id}>
                    <td>
                      <span className="badge bg-info">Preview</span>
                    </td>
                    <td>{wine.variation}</td>
                    <td>{wine.sku}</td>
                    <td>{wine.category}</td>
                    <td>{wine.originalDescription}</td>
                    <td>
                      <input
                        type="text"
                        className="form-control form-control-sm"
                        value={wine.name}
                        onChange={(e) => handleInputChange(wine.id, 'name', e.target.value)}
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        className="form-control form-control-sm"
                        value={wine.vintage}
                        onChange={(e) => handleInputChange(wine.id, 'vintage', parseInt(e.target.value) || 0)}
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        className="form-control form-control-sm"
                        value={wine.size}
                        onChange={(e) => handleInputChange(wine.id, 'size', parseInt(e.target.value) || 0)}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        className="form-control form-control-sm"
                        value={wine.producer}
                        onChange={(e) => handleInputChange(wine.id, 'producer', e.target.value)}
                      />
                    </td>
                    <td>
                      <select
                        className="form-select form-select-sm"
                        value={wine.color}
                        onChange={(e) => handleInputChange(wine.id, 'color', e.target.value)}
                      >
                        <option value="Red">Red</option>
                        <option value="White">White</option>
                        <option value="Rosé">Rosé</option>
                      </select>
                    </td>
                    <td>
                      <select
                        className="form-select form-select-sm"
                        value={wine.closure}
                        onChange={(e) => handleInputChange(wine.id, 'closure', e.target.value)}
                      >
                        <option value="Cork">Cork</option>
                        <option value="Screw Cap">Screw Cap</option>
                        <option value="Glass">Glass</option>
                      </select>
                    </td>
                    <td>
                      <select
                        className="form-select form-select-sm"
                        value={wine.shape}
                        onChange={(e) => handleInputChange(wine.id, 'shape', e.target.value)}
                      >
                        <option value="Bordeaux">Bordeaux</option>
                        <option value="Burgundy">Burgundy</option>
                        <option value="Champagne">Champagne</option>
                      </select>
                    </td>
                    <td>
                      <select
                        className="form-select form-select-sm"
                        value={wine.type}
                        onChange={(e) => handleInputChange(wine.id, 'type', e.target.value)}
                      >
                        <option value="Still">Still</option>
                        <option value="Sparkling">Sparkling</option>
                        <option value="Fortified">Fortified</option>
                      </select>
                    </td>
                    <td>
                      <input
                        type="text"
                        className="form-control form-control-sm"
                        value={wine.description}
                        onChange={(e) => handleInputChange(wine.id, 'description', e.target.value)}
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        step="0.1"
                        className="form-control form-control-sm"
                        value={wine.alcohol}
                        onChange={(e) => handleInputChange(wine.id, 'alcohol', parseFloat(e.target.value) || 0)}
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        step="0.1"
                        className="form-control form-control-sm"
                        value={wine.acid}
                        onChange={(e) => handleInputChange(wine.id, 'acid', parseFloat(e.target.value) || 0)}
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        step="0.01"
                        className="form-control form-control-sm"
                        value={wine.pH}
                        onChange={(e) => handleInputChange(wine.id, 'pH', parseFloat(e.target.value) || 0)}
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        className="form-control form-control-sm"
                        value={wine.bottleAging}
                        onChange={(e) => handleInputChange(wine.id, 'bottleAging', parseInt(e.target.value) || 0)}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        className="form-control form-control-sm"
                        value={wine.subarea}
                        onChange={(e) => handleInputChange(wine.id, 'subarea', e.target.value)}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="d-flex justify-content-end mt-4">
            <button 
              className="btn btn-primary" 
              onClick={handleSaveToPlatform}
            >
              Save to Platform
            </button>
          </div>
        </>
      ) : (
        <div className="alert alert-info">
          <i className="bi bi-info-circle me-2"></i>
          Click "Fetch from Square" to load wines.
        </div>
      )}
    </div>
  );
};

export default RetailerSyncQuery;
