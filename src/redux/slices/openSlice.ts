import { createSlice } from "@reduxjs/toolkit";

export interface CloseState {
  isOpen: boolean;
}

const initialState: CloseState = {
  isOpen: false,
};

export const openSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    toggleOpen: (state, { payload }) => {
      state.isOpen = payload;
    },
  },
});

export const { toggleOpen } = openSlice.actions;
export default openSlice.reducer;
