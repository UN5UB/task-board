import React from "react";
import { Card } from "../../Card/Card";
import styles from "./Done.module.scss";
import { Todo as TodoType } from "../../../../redux/slices/taskSlice";
import { useDispatch } from "react-redux";
import { updateTask } from "../../../../redux/slices/taskSlice";
import { Droppable, Draggable } from "react-beautiful-dnd";

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
    <Droppable droppableId="done">
      {(provided) => (
        <div
          className={styles.done}
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          <h3>
            <img src="icons/Main/done.svg" alt="done" /> Done
          </h3>
          {doneTasks.map((task, index) => (
            <Draggable key={task.id} draggableId={task.id} index={index}>
              {(provided) => (
                <Card
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                  task={task}
                  onUpdate={handleUpdate}
                />
              )}
            </Draggable>
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};
