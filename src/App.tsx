import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';

// Layout
import Layout from './nav/Layout';

// Visitor pages
import VisitorHome from './users/visitor/VisitorHome';
import VisitorExplore from './users/visitor/VisitorExplore';
import VisitorMarketplace from './users/visitor/VisitorMarketplace';
import VisitorProfile from './users/visitor/VisitorProfile';

// Retailer pages
import RetailerCellar from './users/retailer/RetailerCellar';
import RetailerMarketplace from './users/retailer/RetailerMarketplace';
import RetailerProfile from './users/retailer/RetailerProfile';
import RetailerHome from './users/retailer/RetailerHome';

// Producer pages
import ProducerCellar from './users/producer/ProducerCellar';
import ProducerMarketplace from './users/producer/ProducerMarketplace';
import ProducerProfile from './users/producer/ProducerProfile';
import ProducerHome from './users/producer/ProducerHome';

// Enthusiast pages
import EnthusiastCellar from './users/enthusiast/EnthusiastCellar';
import EnthusiastMarketplace from './users/enthusiast/EnthusiastMarketplace';
import EnthusiastProfile from './users/enthusiast/EnthusiastProfile';
import EnthusiastHome from './users/enthusiast/EnthusiastHome';

// User type
// @ts-ignore
export enum UserType {
  Visitor = 'Visitor',
  Enthusiast = 'Enthusiast',
  Producer = 'Producer',
  Retailer = 'Retailer',
}

function App() {
  const [activeView, setActiveView] = useState('home');
  const [userType, setUserType] = useState<UserType>(UserType.Visitor);

  const renderActiveView = () => {
    switch (activeView) {
      case 'home':
        switch (userType) {
          case UserType.Producer:
            return <ProducerHome />;
          case UserType.Retailer:
            return <RetailerHome />;
          case UserType.Enthusiast:
            return <EnthusiastHome />;
          default:
            return <VisitorHome userType={userType} />;
        }
      case 'explore':
        return <VisitorExplore />;
      case 'cellar':
        switch (userType) {
          case UserType.Producer:
            return <ProducerCellar />;
          case UserType.Retailer:
            return <RetailerCellar />;
          case UserType.Enthusiast:
            return <EnthusiastCellar />;
          default:
            return <VisitorHome userType={userType} />;
        }
      case 'marketplace':
        switch (userType) {
          case UserType.Producer:
            return <ProducerMarketplace />;
          case UserType.Retailer:
            return <RetailerMarketplace />;
          case UserType.Enthusiast:
            return <EnthusiastMarketplace />;
          default:
            return <VisitorMarketplace />;
        }
      case 'profile':
        switch (userType) {
          case UserType.Producer:
            return <ProducerProfile />;
          case UserType.Retailer:
            return <RetailerProfile />;
          case UserType.Enthusiast:
            return <EnthusiastProfile />;
          default:
            return <VisitorProfile />;
        }
      default:
        return <VisitorHome userType={userType} />;
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