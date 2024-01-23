import { createSlice } from "@reduxjs/toolkit";
import { compareDates } from "../utils";

const ordersSlice = createSlice({
  name: "orders",
  initialState: {
    list: [],
  },
  reducers: {
    addOrder: (state, action) => {
      const newList = [...state.list, action.payload];
      newList.sort(compareDates);
      return { ...state, list: newList };
    },
  },
});

export const { addOrder } = ordersSlice.actions;
export default ordersSlice.reducer;
