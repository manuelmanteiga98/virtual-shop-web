import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    logged: false,
  },
  reducers: {
    logged: (state) => {
      state.logged = true;
    },
    logout: (state) => {
      state.logged = false;
    },
  },
});

export const { logged, logout } = authSlice.actions;
export default authSlice.reducer;
