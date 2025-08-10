import React from 'react';
import { mockWines } from '../../types/Wine';

const ProducerHome: React.FC = () => {
    // Filter only Luli wines
    const luliWines = mockWines.filter(wine => wine.producer === "Luli Wines");
    return (
        <div className="container py-4">
            <h4>Welcome, Luli Wines</h4>
            <p>Manage your wines, sync with Shopify, and reach retailers through the platform.</p>

            <div className="card mt-4">
                <div className="card-header">
                    <h5>Recently Added Wines</h5>
                </div>
                <div className="card-body">
                    <ul className="list-group">
                        {luliWines.slice(0, 3).map((wine) => (
                            <li key={wine.id} className="list-group-item d-flex justify-content-between align-items-center">
                                {wine.name} ({wine.vintage})
                                <span className="badge bg-secondary">{wine.type}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ProducerHome;