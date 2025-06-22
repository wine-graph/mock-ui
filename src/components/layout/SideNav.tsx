import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './SideNav.css';

interface SideNavProps {
  activeView: string;
  setActiveView: (view: string) => void;
}

const SideNav: React.FC<SideNavProps> = ({ activeView, setActiveView }) => {
  const navItems = [
    { id: 'home', icon: 'bi-house', label: 'Home' },
    { id: 'explore', icon: 'bi-globe', label: 'Explore' },
    { id: 'cellar', icon: 'bi-box', label: 'Cellar' },
    { id: 'marketplace', icon: 'bi-cart', label: 'Marketplace' },
    { id: 'profile', icon: 'bi-person', label: 'Profile' }
  ];

  return (
    <div 
      className="sidenav-container collapsed" 
      id="left-nav"
    >
      <div className="nav flex-column p-3">
        {navItems.map(item => (
          <div 
            key={item.id}
            className={`nav-item ${activeView === item.id ? 'active' : ''}`}
            data-view={item.id}
            onClick={() => setActiveView(item.id)}
            style={{ cursor: 'pointer' }}
          >
            <i className={`bi ${item.icon}`}></i> 
            <span className="nav-label">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideNav;
