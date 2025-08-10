import React from 'react';
import { mockWines } from '../../types/Wine';

const EnthusiastHome: React.FC = () => {
    return (
        <div className="container py-4">
            <h4>Welcome, Wine Enthusiast</h4>
            <p>Track your favorite wines, write reviews, and discover new favorites.</p>

            <div className="card mt-4">
                <div className="card-header">
                    <h5>Recently Tasted</h5>
                </div>
                <div className="card-body">
                    <ul className="list-group">
                        {mockWines.slice(0, 3).map((wine) => (
                            <li key={wine.id} className="list-group-item d-flex justify-content-between align-items-center">
                                {wine.name} ({wine.vintage})
                                <button className="btn btn-sm btn-outline-secondary">Review</button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default EnthusiastHome;