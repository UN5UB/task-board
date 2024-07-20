import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./slices/openSlice";
import todoReducer from "./slices/taskSlice";

export const store = configureStore({
  reducer: {
    modal: modalReducer,
    todos: todoReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
