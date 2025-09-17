import React from 'react';

const RetailerProfile: React.FC = () => {
    const handleSquareConnect = () => {
        // Kick off Square OAuth data-adapter will own the OAuth flow
        // https://data-adapter.fly.dev/oauth/authorize
        // https://localhost:8085/oauth/authorize
        window.location.href = 'https://data-adapter.fly.dev/oauth/authorize';
    };

    return (
        <div className="container py-4">
            <h4>Retailer Profile</h4>
            <p>Configure your shop settings and manage integration with Square.</p>

            <div className="card mt-4">
                <div className="card-header">
                    <h6>Square Integration</h6>
                </div>
                <div className="card-body">
                    <div className="mb-3">
                        <p className="mb-2">Connect your Square account to sync inventory and sales.</p>
                        <button type="button" className="btn btn-primary" onClick={handleSquareConnect}>
                            <i className="bi bi-box-arrow-in-right me-2" aria-hidden="true"></i>
                            Connect with Square
                        </button>
                    </div>
                    <hr />
                </div>
            </div>
        </div>
    );
};

export default RetailerProfile;