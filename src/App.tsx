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

function App() {
  const [activeView, setActiveView] = useState('home');

  // Render the active view based on the selected navigation item
  const renderActiveView = () => {
    switch (activeView) {
      case 'home':
        return <Home />;
      case 'explore':
        return <Explore />;
      case 'cellar':
        return <Cellar />;
      case 'marketplace':
        return <Marketplace />;
      case 'profile':
        return <Profile />;
      default:
        return <Home />;
    }
  };

  return (
    <Layout activeView={activeView} setActiveView={setActiveView}>
      {renderActiveView()}
    </Layout>
  );
}

export default App;
