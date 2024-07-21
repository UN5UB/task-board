import React from "react";
import { Tasks } from "./Tasks/Tasks";
import styles from "./Main.module.scss";
import { Todo } from "./Columns/Todo/Todo";
import { InProgress } from "./Columns/InProgress/InProgress";
import { Done } from "./Columns/Done/Done";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
interface MainProps {
  handleClick: () => void;
}

export const Main: React.FC<MainProps> = ({ handleClick }) => {
  const dispatch = useDispatch();
  const tasks = useSelector((state: RootState) => state.todos);

  return (
    <main className={styles.tasks}>
      <Tasks handleClick={handleClick} />
      <div className={styles.row}>
        <Todo tasks={tasks} />
        <InProgress tasks={tasks} />
        <Done tasks={tasks} />
      </div>
    </main>
  );
};
