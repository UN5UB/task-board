import React from "react";
import { Card } from "../../Card/Card";
import styles from "./Todo.module.scss";
import { Todo as TodoType } from "../../../../redux/slices/taskSlice";
import { useDispatch } from "react-redux";
import { updateTask } from "../../../../redux/slices/taskSlice";

interface TodoProps {
  tasks: TodoType[];
}

export const Todo: React.FC<TodoProps> = ({ tasks }) => {
  const dispatch = useDispatch();
  const todoTasks = tasks.filter((task) => !task.completed);

  const handleUpdate = (updatedTask: TodoType) => {
    dispatch(updateTask(updatedTask));
  };

  return (
    <div className={styles.todo}>
      <h3>
        <img src="icons/Main/todo.svg" alt="todo" /> To do
      </h3>
      {todoTasks.map((task) => (
        <Card key={task.id} task={task} onUpdate={handleUpdate} />
      ))}
    </div>
  );
};
