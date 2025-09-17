import React from "react";
import SquareOAuthButton from "../../auth/SquareOAuthButton";

const RetailerProfile: React.FC = () => {
  return (
    <div className="container py-4">
      <div className="d-flex justify-content-between">
        <div className="">
          <h4>Retailer Profile</h4>
          <p>
            Configure your shop settings and manage integration with Square.
          </p>
        </div>
        <div className="">
          <SquareOAuthButton />
        </div>
      </div>
      <div className="card mt-4">
        <div className="card-header">
          <h6>Square Integration</h6>
        </div>

        <div className="card-body">
          <form>
            <div className="mb-3">
              <label htmlFor="squareToken" className="form-label">
                Square API Token
              </label>
              <input
                type="text"
                className="form-control"
                id="squareToken"
                placeholder="••••••••••"
              />
              <small className="form-text text-muted">
                Token is encrypted and used to sync your product catalog.
              </small>
            </div>
            <button className="btn btn-outline-primary">
              Save Integration
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RetailerProfile;
