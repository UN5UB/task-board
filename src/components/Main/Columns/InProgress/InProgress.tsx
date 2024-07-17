import React from "react";
import { Card } from "../../Card/Card";
import styles from "./InProgress.module.scss";

export const InProgress = () => {
  return (
    <div className={styles.progress}>
      <h3>
        <img src="icons/Main/progress.svg" alt="progress" /> In Progress
      </h3>
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
};
