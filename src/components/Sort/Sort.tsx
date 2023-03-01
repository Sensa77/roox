import React from "react";
import styles from './Sort.module.scss';

const Sort = () => {
  return (
    <section className={styles.sortSection}>
    <span className={styles.sortTitle}>Сортировка</span>
    <button type="button" className={styles.sortButton}>
      по городу
    </button>
    <button type="button" className={styles.sortButton}>
      по компании
    </button>
  </section>
  )
};

export default Sort;
