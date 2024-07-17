import React from "react";
import styles from "./Nav.module.scss";

export const Nav = () => {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <a href="#">
            <img src="icons/Aside/dashboard.svg" alt="dashboard" />
            Dashboard
          </a>
        </li>
        <li>
          <a href="#">
            <img src="icons/Aside/tasks.svg" alt="tasks" />
            Tasks
          </a>
        </li>
        <li>
          <a href="#">
            <img src="icons/Aside/calendar.svg" alt="calendar" />
            Calendar
          </a>
        </li>
      </ul>
    </nav>
  );
};
