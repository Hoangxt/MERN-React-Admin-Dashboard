import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "dark",
};

export const themeSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === "dark" ? "light" : "dark";
    },
  },
});

export const { setMode } = themeSlice.actions;

export default themeSlice.reducer;
