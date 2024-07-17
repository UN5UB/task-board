import React from "react";
import styles from "./Logo.module.scss";

export const Logo = () => {
  return (
    <a className={styles.logo}>
      <img src="icons/logo.svg" alt="logo" />
      TaskMinder.
    </a>
  );
};
