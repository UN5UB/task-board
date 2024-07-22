import React from "react";
import { Card } from "../../Card/Card";
import styles from "./Todo.module.scss";
import { Todo as TodoType } from "../../../../redux/slices/taskSlice";
import { useDispatch } from "react-redux";
import { updateTask } from "../../../../redux/slices/taskSlice";
import { Droppable, Draggable } from "react-beautiful-dnd";

interface TodoProps {
  tasks: TodoType[];
}

export const Todo: React.FC<TodoProps> = ({ tasks }) => {
  const dispatch = useDispatch();
  const todoTasks = tasks.filter((task) => task.status === "todo");

  const handleUpdate = (updatedTask: TodoType) => {
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
          {todoTasks.map((task, index) => (
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
