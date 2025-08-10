import React from 'react';
import { mockWines } from '../../types/Wine';

const RetailerHome: React.FC = () => {
    return (
        <div className="container py-4">
            <h4>Welcome, Wine Retailer</h4>
            <p>Manage your inventory, sync with Square, and explore new wines from producers.</p>

            <div className="card mt-4">
                <div className="card-header">
                    <h5>Recently Synced Wines</h5>
                </div>
                <div className="card-body">
                    <ul className="list-group">
                        {mockWines.slice(0, 99).map((wine) => (
                            <li key={wine.id} className="list-group-item d-flex justify-content-between align-items-center">
                                {wine.name} ({wine.vintage})
                                <span className="badge bg-secondary">{wine.producer}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default RetailerHome;