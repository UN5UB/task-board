import React from "react";
import { Card } from "../../Card/Card";
import styles from "./Done.module.scss";

export const Done = () => {
  return (
    <div className={styles.done}>
      <h3>
        <img src="icons/Main/done.svg" alt="done" /> Done
      </h3>
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
};
