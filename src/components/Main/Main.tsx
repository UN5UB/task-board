import React from "react";
import { Tasks } from "./Tasks/Tasks";
import styles from "./Main.module.scss";
import { Todo } from "./Columns/Todo/Todo";
import { InProgress } from "./Columns/InProgress/InProgress";
import { Done } from "./Columns/Done/Done";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { setTaskStatus, reorderTasks } from "../../redux/slices/taskSlice";

interface MainProps {
  handleClick: () => void;
}

export const Main: React.FC<MainProps> = ({ handleClick }) => {
  const dispatch = useDispatch();
  const tasks = useSelector((state: RootState) => state.todos);

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;
    if (!destination) return;

    if (source.droppableId === destination.droppableId) {
      dispatch(
        reorderTasks({
          sourceIndex: source.index,
          destinationIndex: destination.index,
          status: source.droppableId as "todo" | "inProgress" | "done",
        })
      );
    } else {
      dispatch(
        setTaskStatus({
          id: result.draggableId,
          status: destination.droppableId as "todo" | "inProgress" | "done",
        })
      );
    }
  };

  return (
    <main className={styles.tasks}>
      <Tasks handleClick={handleClick} />
      <DragDropContext onDragEnd={onDragEnd}>
        <div className={styles.row}>
          <Todo tasks={tasks} />
          <InProgress tasks={tasks} />
          <Done tasks={tasks} />
        </div>
      </DragDropContext>
    </main>
  );
};
