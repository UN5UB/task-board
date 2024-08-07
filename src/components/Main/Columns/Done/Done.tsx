import React from "react";
import { Card } from "../../Card/Card";
import styles from "./Done.module.scss";
import { Task } from "../../../../types/taskTypes";
import { updateTask } from "../../../../redux/slices/taskSlice";
import { useDispatch } from "react-redux";
import { Droppable, Draggable } from "react-beautiful-dnd";

interface DoneProps {
  tasks: Task[];
  searchValue: string;
}

export const Done: React.FC<DoneProps> = ({ tasks, searchValue }) => {
  const dispatch = useDispatch();
  const doneTasks = tasks.filter((task) => task.status === "done");

  const handleUpdate = (updatedTask: Task) => {
    dispatch(updateTask(updatedTask));
  };

  return (
    <Droppable droppableId="done" direction="vertical">
      {(provided) => (
        <div
          className={styles.done}
          {...provided.droppableProps}
          ref={provided.innerRef}
        >
          <h3>
            <img src="icons/Main/done.svg" alt="done" /> Done
          </h3>
          {doneTasks
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
