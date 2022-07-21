import { useState } from 'react';
import Filter from './components/filter';
import Header from './components/header';
import SalesSummary from './components/sales-summary';
import { Store } from './types';

import './App.css';

function App() {
  const [focusStore, setFocusStore] = useState<Store>();

  const onFilterChange = (store: Store) => {
    setFocusStore(store);
  };

  return (
    <>
      <Header />
      <div className="app-container">
        <Filter onFilterChange={onFilterChange} />
        <div className="sales-overview-container">
          <SalesSummary store={focusStore} />
        </div>
      </div>
    </>
  );
}

export default App;
