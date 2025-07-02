import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './SideNav.css';
import { UserType } from '../App';

interface SideNavProps {
  activeView: string;
  setActiveView: (view: string) => void;
  userType: UserType;
}

const SideNav: React.FC<SideNavProps> = ({ activeView, setActiveView, userType }) => {
  // Define all possible nav items
  const allNavItems = [
    { id: 'home', icon: 'bi-house', label: 'VisitorHome' },
    { id: 'explore', icon: 'bi-globe', label: 'VisitorExplore' },
    { id: 'cellar', icon: 'bi-box', label: 'VisitorCellar' },
    { id: 'marketplace', icon: 'bi-cart', label: 'VisitorMarketplace' },
    { id: 'profile', icon: 'bi-person', label: 'VisitorProfile' }
  ];
  
  // Filter out 'explore' for Producer and Retailer roles
  // Filter out 'cellar' for Visitor role
  const navItems = allNavItems.filter(item => {
    return !(
      (item.id === 'explore' && (userType === UserType.Producer || userType === UserType.Retailer)) ||
      (item.id === 'cellar' && userType === UserType.Visitor)
    );
  });

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
