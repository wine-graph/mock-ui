import React from "react";

const EnthusiastProfile: React.FC = () => {
  return (
    <div className="container py-4">
      <h4 className="fs-4">My Profile</h4>
      <p className="small">
        Manage your personal information and wine preferences.
      </p>

      <div className="card mt-3">
        <div className="card-header">
          <h6>Account Details</h6>
        </div>
        <div className="card-body">
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                defaultValue="Jane Doe"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                defaultValue="jane@example.com"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="favorites" className="form-label">
                Favorite Grapes
              </label>
              <input
                type="text"
                className="form-control"
                id="favorites"
                placeholder="Pinot Noir, Chardonnay"
              />
            </div>
            <button className="btn btn-primary">Update Profile</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EnthusiastProfile;
