import React from "react";
import { Tasks } from "./Tasks/Tasks";
import styles from "./Main.module.scss";
import { Todo } from "./Columns/Todo/Todo";
import { InProgress } from "./Columns/InProgress/InProgress";
import { Done } from "./Columns/Done/Done";

export const Main = ({ handleClick }) => {
  return (
    <main className={styles.tasks}>
      <Tasks handleClick={handleClick} />
      <div className={styles.row}>
        <Todo />
        <InProgress />
        <Done />
      </div>
    </main>
  );
};
