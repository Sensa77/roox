import React, { useEffect, useState } from "react";
import styles from "./Users.module.scss";

const Users = ({sortByCity, sortByCompany}) => {
  const [users, setUsers] = useState([] as any);
  const [sortUsers, setSortUsers] = useState([] as any);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(result => setUsers(result))
  }, [])

  useEffect(() => {
    setSortUsers(users)
  }, [users])

  const sortUsersByCity = () => {
    const sort = [...sortUsers].sort((a, b) => {
      if(a.address.city > b.address.city) {
        return 1
      }
      if(a.address.city < b.address.city) {
        return -1
      }
      return 0
    })
    setSortUsers(sort);
  }

  const sortUsersByCompany = () => {
    const sort = [...sortUsers].sort((a, b) => {
      if(a.company.name > b.company.name) {
        return 1
      }
      if(a.company.name < b.company.name) {
        return -1
      }
      return 0;
    })
    setSortUsers(sort);
  }

  useEffect(() => {
    if (sortByCity) {
      sortUsersByCity()
    }
    if (sortByCompany) {
      sortUsersByCompany()
    }
  }, [sortByCity, sortByCompany])

  return (
    <section className={styles.users}>
      <span className={styles.usersTitle}>Список пользователей</span>
        {users.length === 0 ? <div className={styles.ldsSpinner}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div> : 
        sortUsers.map((user) => {
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
