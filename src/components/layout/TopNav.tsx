import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const TopNav: React.FC = () => {
  return (
    <nav className="navbar navbar-light bg-light px-3">
      <span className="navbar-brand mb-0 h1">🍇 Wine Platform 🍇</span>
      <input 
        className="form-control me-2 w-25" 
        type="search" 
        placeholder="Search wines, producers, regions" 
        aria-label="Search" 
        id="search-bar"
      />
      <button className="btn btn-outline-primary" id="login-btn">Login / Sign Up</button>
    </nav>
  );
};

export default TopNav;