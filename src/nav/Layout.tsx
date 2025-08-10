import React, {type ReactNode } from 'react';
import TopNav from './TopNav.tsx';
import SideNav from './SideNav.tsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Layout.css';
import { UserType } from '../App.tsx';

interface LayoutProps {
  children: ReactNode;
  activeView: string;
  setActiveView: (view: string) => void;
  userType: UserType;
  setUserType: (userType: UserType) => void;
}

const Layout: React.FC<LayoutProps> = ({ 
  children, 
  activeView, 
  setActiveView, 
  userType, 
  setUserType 
}) => {
  return (
    <>
      <TopNav userType={userType} setUserType={setUserType} />
      <div className="container-fluid">
        <div className="row">
          <SideNav 
            activeView={activeView} 
            setActiveView={setActiveView}
            userType={userType}
          />
          <div className="content-area p-4" id="content">
            <div className="container">
              {children}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
