import React from "react";
import { Tasks } from "./Tasks/Tasks";
import styles from "./Main.module.scss";
import { Todo } from "./Columns/Todo/Todo";
import { InProgress } from "./Columns/InProgress/InProgress";
import { Done } from "./Columns/Done/Done";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { reorderTasks } from "../../redux/slices/taskSlice";

interface MainProps {
  handleClick: () => void;
}

export const Main: React.FC<MainProps> = ({ handleClick }) => {
  const dispatch = useDispatch();
  const tasks = useSelector((state: RootState) => state.todos);

  const handleOnDragEnd = (result: any) => {
    const { source, destination } = result;

    if (!destination) return;

    const reorderedTasks = reorderTasks(tasks, source.index, destination.index);
    dispatch(reorderedTasks);
  };

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId="droppable" direction="horizontal">
        {(provided) => (
          <main
            className={styles.tasks}
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            <Tasks handleClick={handleClick} />
            <div className={styles.row}>
              <Todo tasks={tasks} />
              <InProgress tasks={tasks} />
              <Done tasks={tasks} />
            </div>
            {provided.placeholder}
          </main>
        )}
      </Droppable>
    </DragDropContext>
  );
};
