import React, { useEffect, useState } from "react";
import styles from "./Users.module.scss";

const array = [
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
  const [users, setUsers] = useState([] as any);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(result => setUsers(result))
  }, [])

  return (
    <section className={styles.users}>
      <span className={styles.usersTitle}>Список пользователей</span>
        {users.length === 0 ? <div className={styles.ldsSpinner}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div> : 
        users.map((user) => {
          return (
            <div className={styles.user} key={user.id}>
              <p className={styles.characteristic}>
                ФИО: <span className={styles.userData}>{user.name}</span>
              </p>
              <p className={styles.characteristic}>
                город: <span className={styles.userData}>{user.address.city}</span>
              </p>
              <p className={styles.characteristic}>
                компания: <span className={styles.userData}>{user.company.name}</span>
              </p>
              <a className={styles.userDetail} href="#">
                Подробнее
              </a>
            </div>
          );
        })}
        <p className={styles.usersLength}>Найдено {users.length} пользователей</p>
    </section>
  );
};

export default Users;
