import React from "react";
import styles from "./Sort.module.scss";

const Sort = ({ setSortByCity, setSortByCompany }) => {
  return (
    <section className={styles.sortSection}>
      <span className={styles.sortTitle}>Сортировка</span>
      <button
        type="button"
        className={styles.sortButton}
        onClick={() => {
          setSortByCompany(false);
          setSortByCity(true);
        }}
      >
        по городу
      </button>
      <button
        type="button"
        className={styles.sortButton}
        onClick={() => {
          setSortByCity(false);
          setSortByCompany(true);
        }}
      >
        по компании
      </button>
    </section>
  );
};

export default Sort;
