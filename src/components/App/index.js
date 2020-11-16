// == Import npm
import React, { useState } from 'react';
import Card from '../Card';
import Toggle from '../Toggle';
import Data from '../../assets/data/data';

// == Import
import './styles.scss';

// == Composant
const App = () => {
  const [isMonthly, setIsMonthly] = useState(false);

  const allData = Data.map((elt) => (
    <Card
      type={elt.type}
      price={isMonthly ? elt.priceMonthly : elt.priceAnnualy}
      storage={elt.storage}
      user={elt.usersAllowed}
      sendUp={elt.sendUp}
    />
  ));

  return (
    <div className="app">
      <h1>Our Pricing</h1>
      <Toggle setIsMonthly={setIsMonthly} isMonthly={isMonthly} />
      <div className="allCards">
        {allData}
      </div>

    </div>
  );
};

// == Export
export default App;
