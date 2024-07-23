import React from "react";
import { Card } from "../../Card/Card";
import styles from "./Todo.module.scss";
import { Task } from "../../../../types/taskTypes";
import { updateTask } from "../../../../redux/slices/taskSlice";
import { useDispatch } from "react-redux";
import { Droppable, Draggable } from "react-beautiful-dnd";

interface TodoProps {
  tasks: Task[];
  searchValue: string;
}

export const Todo: React.FC<TodoProps> = ({ tasks, searchValue }) => {
  const dispatch = useDispatch();
  const todoTasks = tasks.filter((task) => task.status === "todo");

  const handleUpdate = (updatedTask: Task) => {
    dispatch(updateTask(updatedTask));
  };

  return (
    <Droppable droppableId="todo" direction="vertical">
      {(provided) => (
        <div
          className={styles.todo}
          {...provided.droppableProps}
          ref={provided.innerRef}
        >
          <h3>
            <img src="icons/Main/todo.svg" alt="todo" /> To do
          </h3>
          {todoTasks
            .filter((task) =>
              task.title.toLowerCase().includes(searchValue.toLowerCase())
            )
            .map((task, index) => (
              <Draggable key={task.id} draggableId={task.id} index={index}>
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <Card task={task} onUpdate={handleUpdate} />
                  </div>
                )}
              </Draggable>
            ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};
