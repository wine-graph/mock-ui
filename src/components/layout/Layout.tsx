import React, { ReactNode } from 'react';
import TopNav from './TopNav';
import SideNav from './SideNav';
import 'bootstrap/dist/css/bootstrap.min.css';

interface LayoutProps {
  children: ReactNode;
  activeView: string;
  setActiveView: (view: string) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, activeView, setActiveView }) => {
  return (
    <>
      <TopNav />
      <div className="container-fluid">
        <div className="row">
          <SideNav activeView={activeView} setActiveView={setActiveView} />
          <div className="col-md-10 p-4" id="content">
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;