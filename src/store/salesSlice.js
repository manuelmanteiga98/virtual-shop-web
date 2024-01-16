import { createSlice } from "@reduxjs/toolkit";

const salesSlice = createSlice({
  name: "sales",
  initialState: {
    list: [],
  },
  reducers: {
    addSale(state, action) {
      state.list.push(action.payload);
      return state;
    },
  },
});

export const { addSale } = salesSlice.actions;
export default salesSlice.reducer;
