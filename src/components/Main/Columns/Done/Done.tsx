import React from "react";
import { Card } from "../../Card/Card";
import styles from "./Done.module.scss";
import { Todo as TodoType } from "../../../../redux/slices/taskSlice";
import { useDispatch } from "react-redux";
import { updateTask } from "../../../../redux/slices/taskSlice";

interface DoneProps {
  tasks: TodoType[];
}

export const Done: React.FC<DoneProps> = ({ tasks }) => {
  const dispatch = useDispatch();
  const doneTasks = tasks.filter((task) => task.done);

  const handleUpdate = (updatedTask: TodoType) => {
    dispatch(updateTask(updatedTask));
  };

  return (
    <div className={styles.done}>
      <h3>
        <img src="icons/Main/done.svg" alt="done" /> Done
      </h3>
      {doneTasks.map((task) => (
        <Card task={task} onUpdate={handleUpdate} />
      ))}
    </div>
  );
};
