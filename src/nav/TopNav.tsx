import React, { useState, useRef, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { UserType } from '../App.tsx';

interface TopNavProps {
  userType: UserType;
  setUserType: (userType: UserType) => void;
}

const TopNav: React.FC<TopNavProps> = ({ userType, setUserType }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Function to handle user type change
  const handleUserTypeChange = (selectedType: UserType) => {
    setUserType(selectedType);
    setDropdownOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Get user icon and color based on user type
  const getUserIcon = () => {
    switch (userType) {
      case UserType.Enthusiast:
        return { icon: 'bi-person-fill', color: '#28a745' }; // Green for visitor
      case UserType.Producer:
        return { icon: 'bi-building', color: '#007bff' }; // Blue for producer
      case UserType.Retailer:
        return { icon: 'bi-shop', color: '#dc3545' }; // Red for retailer
      default:
        return { icon: 'bi-person', color: '#6c757d' }; // Gray for unauthenticated
    }
  };

  const { icon, color } = getUserIcon();

  return (
    <nav className="navbar navbar-light bg-light px-3">
      <span className="navbar-brand mb-0 h1">🍇 Wine Graph 🍇</span>
      <input 
        className="form-control me-2 w-25" 
        type="search" 
        placeholder="Search wines, producers, regions" 
        aria-label="Search" 
        id="search-bar"
      />
      <div className="dropdown me-3" ref={dropdownRef}>
        <div 
          className="dropdown-toggle" 
          onClick={() => setDropdownOpen(!dropdownOpen)}
          style={{ cursor: 'pointer' }}
        >
          <i 
            className={`bi ${icon} fs-4`} 
            style={{ color: color }}
            title={`Current user type: ${userType}`}
          ></i>
        </div>
        <div className={`dropdown-menu dropdown-menu-end ${dropdownOpen ? 'show' : ''}`} style={{ right: 0, left: 'auto' }}>
          <h6 className="dropdown-header">Switch User Type</h6>
          <button 
            className={`dropdown-item ${userType === UserType.Visitor ? 'active' : ''}`}
            onClick={() => handleUserTypeChange(UserType.Visitor)}
          >
            <i className="bi bi-person me-2"></i>
            Unauthenticated
          </button>
          <button 
            className={`dropdown-item ${userType === UserType.Enthusiast ? 'active' : ''}`} 
            onClick={() => handleUserTypeChange(UserType.Enthusiast)}
          >
            <i className="bi bi-person-fill me-2"></i>
            Enthusiast
          </button>
          <button 
            className={`dropdown-item ${userType === UserType.Producer ? 'active' : ''}`} 
            onClick={() => handleUserTypeChange(UserType.Producer)}
          >
            <i className="bi bi-building me-2"></i>
            Producer
          </button>
          <button 
            className={`dropdown-item ${userType === UserType.Retailer ? 'active' : ''}`} 
            onClick={() => handleUserTypeChange(UserType.Retailer)}
          >
            <i className="bi bi-shop me-2"></i>
            Retailer
          </button>
        </div>
      </div>
    </nav>
  );
};

export default TopNav;
