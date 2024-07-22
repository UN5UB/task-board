import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

interface Task {
  id: string;
  title: string;
  description: string;
  status: "todo" | "inProgress" | "done";
}

interface ReorderPayload {
  sourceIndex: number;
  destinationIndex: number;
  status: Task["status"];
}

const initialState: Task[] = [];

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: {
      reducer: (state, action: PayloadAction<Task>) => {
        state.push(action.payload);
      },
      prepare: (title: string, description: string) => ({
        payload: {
          id: uuidv4(),
          title,
          description,
          status: "todo",
        } as Task,
      }),
    },
    updateTask: (state, action: PayloadAction<Task>) => {
      const index = state.findIndex((task) => task.id === action.payload.id);
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
    removeTask: (state, action: PayloadAction<string>) => {
      return state.filter((task) => task.id !== action.payload);
    },
    setTaskStatus: (
      state,
      action: PayloadAction<{ id: string; status: Task["status"] }>
    ) => {
      const index = state.findIndex((task) => task.id === action.payload.id);
      if (index !== -1) {
        state[index].status = action.payload.status;
      }
    },
    reorderTasks: (state, action: PayloadAction<ReorderPayload>) => {
      const { sourceIndex, destinationIndex, status } = action.payload;
      const tasks = state.filter((task) => task.status === status);
      const [removed] = tasks.splice(sourceIndex, 1);
      tasks.splice(destinationIndex, 0, removed);

      const newState = state.filter((task) => task.status !== status);
      newState.push(...tasks);
      return newState;
    },
  },
});

export const { addTask, updateTask, removeTask, setTaskStatus, reorderTasks } =
  taskSlice.actions;
export default taskSlice.reducer;
