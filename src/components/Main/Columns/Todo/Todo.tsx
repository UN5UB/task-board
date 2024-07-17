import React from "react";
import styles from "./Todo.module.scss";
import { Card } from "../../Card/Card";

export const Todo = () => {
  return (
    <div className={styles.todo}>
      <h3>
        <img src="icons/Main/todo.svg" alt="todo" /> To do
      </h3>
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
};
