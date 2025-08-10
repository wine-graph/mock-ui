import React from 'react';

const ProducerProfile: React.FC = () => {
    return (
        <div className="container py-4">
            <h4>Producer Profile</h4>
            <p>Manage your account, public info, and Shopify integration.</p>

            <div className="card mt-4">
                <div className="card-header">
                    <h5>Business Details</h5>
                </div>
                <div className="card-body">
                    <form>
                        <div className="mb-3">
                            <label className="form-label">Producer Name</label>
                            <input type="text" className="form-control" placeholder="Your winery name" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Website</label>
                            <input type="text" className="form-control" placeholder="https://yourwinery.com" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input type="email" className="form-control" placeholder="you@winery.com" />
                        </div>
                    </form>
                </div>
            </div>

            <div className="card mt-4">
                <div className="card-header">
                    <h5>Shopify Integration</h5>
                </div>
                <div className="card-body">
                    <p className="text-muted">Paste your access token to allow syncing from your Shopify store.</p>
                    <input type="text" className="form-control mb-2" placeholder="Shopify Access Token" />
                    <button className="btn btn-outline-primary">Save Integration</button>
                </div>
            </div>
        </div>
    );
};

export default ProducerProfile;