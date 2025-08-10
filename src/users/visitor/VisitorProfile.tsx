import React from 'react';

const VisitorProfile: React.FC = () => {
    return (
        <div className="container py-4 text-center">
            <h4>Visitor Profile</h4>
            <p>This platform allows you to explore wine regions, producers, and varietals without creating an account.</p>
            <p>Want to save wines, write reviews, and build a cellar?</p>
            <button className="btn btn-primary">Sign Up to Personalize Your Experience</button>
        </div>
    );
};

export default VisitorProfile;