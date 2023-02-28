import React from 'react';
import styles from './App.module.scss';
import Sort from './components/Sort/Sort.tsx';
import Users from './components/Users/Users.tsx';

function App() {
  return (
    <div className={styles.app}>
      <Sort />
      <Users />
    </div>
  );
}

export default App;
