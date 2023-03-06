import React, { useState } from 'react';
import styles from './App.module.scss';
import Sort from './components/Sort/Sort.tsx';
import Users from './components/Users/Users.tsx';

function App() {
  const [sortByCity, setSortByCity] = useState(false);
  const [sortByCompany, setSortByCompany] = useState(false);

  return (
    <div className={styles.app}>
      <Sort setSortByCity={setSortByCity} setSortByCompany={setSortByCompany}/>
      <Users sortByCity={sortByCity} sortByCompany={sortByCompany}/>
    </div>
  );
}

export default App;
