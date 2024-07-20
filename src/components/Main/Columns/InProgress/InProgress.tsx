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

export const InProgress: React.FC<InProgressProps> = ({ tasks }) => {
  const dispatch = useDispatch();
  const inProgressTasks = tasks.filter((task) => task.completed && !task.done);

  const handleUpdate = (updatedTask: TodoType) => {
    dispatch(updateTask(updatedTask));
  };

  return (
    <Droppable droppableId="inProgress">
      {(provided) => (
        <div
          className={styles.progress}
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          <h3>
            <img src="icons/Main/progress.svg" alt="progress" /> In Progress
          </h3>
          {inProgressTasks.map((task, index) => (
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