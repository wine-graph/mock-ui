import React, { useState } from 'react';
import { WineCoreImpl } from '../../data/models';
import RetailerSyncQuery from './RetailerSyncQuery';
import RetailerSyncPersist from './RetailerSyncPersist';

const RetailerSync: React.FC = () => {
  const [view, setView] = useState<'query' | 'persist'>('query');
  const [savedWines, setSavedWines] = useState<WineCoreImpl[]>([]);

  // Handle saving wines to platform
  const handleSaveToPlatform = (wines: WineCoreImpl[]) => {
    setSavedWines(wines);
    setView('persist');
  };

  // Handle going back to query view
  const handleBackToQuery = () => {
    setView('query');
  };

  return (
    <div>
      {view === 'query' ? (
        <RetailerSyncQuery onSaveToPlatform={handleSaveToPlatform} />
      ) : (
        <RetailerSyncPersist wines={savedWines} onBackToQuery={handleBackToQuery} />
      )}
    </div>
  );
};

export default RetailerSync;
