import React from 'react';

const VisitorCellar: React.FC = () => {
    return (
        <div className="text-center p-4">
            <h4>Welcome to My Cellar</h4>
            <p>This feature is available for logged-in users. Sign up to start tracking your wine collection, wishlists, and reviews.</p>
            <button className="btn btn-outline-primary">Login / Sign Up</button>
        </div>
    );
};

export default VisitorCellar;