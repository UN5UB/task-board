import React from "react";
import { Card } from "../../Card/Card";
import styles from "./InProgress.module.scss";
import { Todo as TodoType } from "../../../../redux/slices/taskSlice";
import { useDispatch } from "react-redux";
import { updateTask } from "../../../../redux/slices/taskSlice";

interface InProgressProps {
  tasks: TodoType[];
}

export const InProgress: React.FC<InProgressProps> = ({ tasks }) => {
  const dispatch = useDispatch();
  const inProgressTasks = tasks.filter((task) => task.completed && !task.done);

  const handleUpdate = (updatedTask: TodoType) => {
    dispatch(updateTask(updatedTask));
  };

  return (
    <div className={styles.progress}>
      <h3>
        <img src="icons/Main/progress.svg" alt="progress" /> In Progress
      </h3>
      {inProgressTasks.map((task) => (
        <Card task={task} onUpdate={handleUpdate} />
      ))}
    </div>
  );
};
