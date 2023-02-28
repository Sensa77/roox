import React from "react";
import styles from "./Users.module.scss";

const users = [
  {
    id: 0,
    name: "Иван Иванов",
    city: "Москва",
    company: "ООО 'Пример'"
  },
  {
    id: 1,
    name: "Петя Петров",
    city: "Волгоград",
    company: "ООО 'Пример'"
  },
  {
    id: 2,
    name: "Семен Семеныч",
    city: "Калуга",
    company: "ООО 'Пример'"
  }
  ]

const Users = () => {
  return (
    <section className={styles.users}>
      <span className={styles.usersTitle}>Список пользователей</span>
        {users.map((user) => {
          return (
            <div className={styles.user} key={user.id}>
              <p className={styles.characteristic}>
                ФИО: <span className={styles.userData}>{user.name}</span>
              </p>
              <p className={styles.characteristic}>
                город: <span className={styles.userData}>{user.city}</span>
              </p>
              <p className={styles.characteristic}>
                компания: <span className={styles.userData}>{user.company}</span>
              </p>
              <a className={styles.userDetail} href="#">
                Подробнее
              </a>
            </div>
          );
        })}
    </section>
  );
};

export default Users;
