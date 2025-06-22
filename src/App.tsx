import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';

// Layout components
import Layout from './components/layout/Layout';

// Page components
import Home from './components/pages/Home';
import Explore from './components/pages/Explore';
import Cellar from './components/pages/Cellar';
import Marketplace from './components/pages/Marketplace';
import Profile from './components/pages/Profile';

// User type enum
export enum UserType {
  Unauthenticated = 'Unauthenticated',
  Enthusiast = 'Enthusiast',
  Producer = 'Producer',
  Retailer = 'Retailer'
}

function App() {
  const [activeView, setActiveView] = useState('home');
  const [userType, setUserType] = useState<UserType>(UserType.Unauthenticated);

  // Render the active view based on the selected navigation item
  const renderActiveView = () => {
    switch (activeView) {
      case 'home':
        return <Home userType={userType} />;
      case 'explore':
        return <Explore userType={userType} />;
      case 'cellar':
        return <Cellar userType={userType} />;
      case 'marketplace':
        return <Marketplace userType={userType} />;
      case 'profile':
        return <Profile userType={userType} />;
      default:
        return <Home userType={userType} />;
    }
  };

  return (
    <Layout 
      activeView={activeView} 
      setActiveView={setActiveView}
      userType={userType}
      setUserType={setUserType}
    >
      {renderActiveView()}
    </Layout>
  );
}

export default App;
