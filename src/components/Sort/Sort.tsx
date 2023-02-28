import React from "react";
import styles from './Sort.module.scss';

const Sort = () => {
  return (
    <section className={styles.sortSection}>
    <span>Сортировка</span>
    <button type="button" className={styles.sortCity}>
      по городу
    </button>
    <button type="button" className={styles.sortCompany}>
      по компании
    </button>
  </section>
  )
};

export default Sort;
