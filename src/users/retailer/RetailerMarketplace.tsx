import React, {useState} from 'react';
import {mockWines} from '../../types/Wine';
import {mockProducers} from '../../types/Producer';

const RetailerMarketplace: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'discover' | 'interest' | 'offers' | 'featured'>('discover');
    const [interestedProducers, setInterestedProducers] = useState<string[]>([]);

    const toggleInterest = (producerId: string) => {
        setInterestedProducers(prev =>
            prev.includes(producerId)
                ? prev.filter(id => id !== producerId)
                : [...prev, producerId]
        );
    };

    const renderDiscoverTab = () => (
        <div className="row">
            {mockProducers.map((producer) => {
                const wines = mockWines.filter(w => w.producer === producer.name);
                const isInterested = interestedProducers.includes(producer.id);

                return (
                    <div key={producer.id} className="col-lg-4 col-md-6 mb-3">
                        <div className="card h-100 p-2" style={{ fontSize: '0.875rem' }}>
                            <div className="card-body">
                                <div className="d-flex justify-content-between align-items-start">
                                    <div>
                                        <h5 className="mb-1">{producer.name}</h5>
                                        <p className="text-muted small">{producer.areaId}</p>
                                    </div>
                                    {producer.introOffer && (
                                        <span className="badge bg-success">Intro Offer</span>
                                    )}
                                </div>
                                <p className="small">{producer.description}</p>

                                <h6 className="mt-3">Featured Wines</h6>
                                <ul className="list-group list-group-flush small">
                                    {wines.slice(0, 2).map(w => (
                                        <li key={w.id} className="list-group-item">
                                            <div className="d-flex justify-content-between">
                                                <div>
                                                    <strong>{w.vintage} {w.name}</strong><br/>
                                                    <small
                                                        className="text-muted">{w.color} · {w.shape} · {w.closure}</small>
                                                </div>
                                                <div className="text-end">
                                                    <span className="badge bg-light text-dark">{w.size}ml</span><br/>
                                                    <span
                                                        className="badge bg-primary">${(w.pricePerBottle || 18).toFixed(2)}</span>
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                    {wines.length === 0 && (
                                        <li className="list-group-item text-muted">No wines listed</li>
                                    )}
                                </ul>
                            </div>
                            <div className="card-footer d-flex justify-content-between align-items-center">
                                <button
                                    className={`btn btn-sm ${isInterested ? 'btn-secondary' : 'btn-outline-primary'}`}
                                    onClick={() => toggleInterest(producer.id)}
                                >
                                    {isInterested ? 'Remove from List' : 'Add to List'}
                                </button>
                                <button className="btn btn-sm btn-outline-success">
                                    Request Details
                                </button>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );

    const renderInterestTab = () => {
        const interested = mockProducers.filter(p => interestedProducers.includes(p.id));

        return (
            <div>
                {interested.length === 0 ? (
                    <p className="text-muted">You haven't added any producers yet.</p>
                ) : (
                    <div className="row">
                        {interested.map(p => (
                            <div key={p.id} className="col-md-6 mb-3">
                                <div className="card">
                                    <div className="card-body">
                                        <h5>{p.name}</h5>
                                        <p className="text-muted">{p.areaId}</p>
                                        <button className="btn btn-sm btn-outline-danger"
                                                onClick={() => toggleInterest(p.id)}>
                                            Remove from List
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        );
    };

    return (
        <div className="container py-4">
            <h4>Marketplace</h4>
            <p>Source wines, connect with producers, and manage your interests.</p>

            <ul className="nav nav-tabs mb-4">
                <li className="nav-item">
                    <button className={`nav-link ${activeTab === 'discover' ? 'active' : ''}`}
                            onClick={() => setActiveTab('discover')}>
                        Discover Producers
                    </button>
                </li>
                <li className="nav-item">
                    <button className={`nav-link ${activeTab === 'interest' ? 'active' : ''}`}
                            onClick={() => setActiveTab('interest')}>
                        My Interest List
                    </button>
                </li>
                <li className="nav-item">
                    <button className={`nav-link ${activeTab === 'offers' ? 'active' : ''}`}
                            onClick={() => setActiveTab('offers')}>
                        Offers
                    </button>
                </li>
                <li className="nav-item">
                    <button className={`nav-link ${activeTab === 'featured' ? 'active' : ''}`}
                            onClick={() => setActiveTab('featured')}>
                        Featured Wines
                    </button>
                </li>
            </ul>

            {/* Content per tab */}
            {activeTab === 'discover' && renderDiscoverTab()}
            {activeTab === 'interest' && renderInterestTab()}
            {activeTab === 'offers' && <p className="text-muted">Offers coming soon...</p>}
            {activeTab === 'featured' && <p className="text-muted">Featured wines coming soon...</p>}
        </div>
    );
};

export default RetailerMarketplace;