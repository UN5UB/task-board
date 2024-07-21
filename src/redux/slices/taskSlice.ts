import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

interface Task {
  id: string;
  title: string;
  description: string;
  status: "todo" | "inProgress" | "done";
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
      action: PayloadAction<{
        id: string;
        status: "todo" | "inProgress" | "done";
      }>
    ) => {
      const index = state.findIndex((task) => task.id === action.payload.id);
      if (index !== -1) {
        state[index].status = action.payload.status;
      }
    },
  },
});

export const { addTask, updateTask, removeTask, setTaskStatus } =
  taskSlice.actions;
export default taskSlice.reducer;
