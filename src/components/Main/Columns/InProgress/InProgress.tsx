import React from "react";
import { Card } from "../../Card/Card";
import styles from "./InProgress.module.scss";
import { Todo as TodoType } from "../../../../redux/slices/taskSlice";
import { useDispatch } from "react-redux";
import { updateTask } from "../../../../redux/slices/taskSlice";
import { Droppable, Draggable } from "react-beautiful-dnd";

interface InProgressProps {
  tasks: TodoType[];
}

export const InProgress: React.FC<InProgressProps> = ({
  tasks,
  searchValue,
}) => {
  const dispatch = useDispatch();
  const inProgressTasks = tasks.filter((task) => task.status === "inProgress");

  const handleUpdate = (updatedTask: TodoType) => {
    dispatch(updateTask(updatedTask));
  };

  return (
    <Droppable droppableId="inProgress" direction="vertical">
      {(provided) => (
        <div
          className={styles.progress}
          {...provided.droppableProps}
          ref={provided.innerRef}
        >
          <h3>
            <img src="icons/Main/progress.svg" alt="progress" /> In Progress
          </h3>
          {inProgressTasks
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
