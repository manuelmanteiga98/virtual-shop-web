import { createSlice } from "@reduxjs/toolkit";
import { compareDates } from "../utils";

const salesSlice = createSlice({
  name: "sales",
  initialState: {
    list: [],
    currentSale: [],
  },
  reducers: {
    addSale: (state, action) => {
      const newList = [...state.list, action.payload];
      newList.sort(compareDates);
      return { ...state, list: newList };
    },
    addItemToSale: (state, action) => {
      const newCurrentSale = [...state.currentSale, action.payload];
      return { ...state, currentSale: newCurrentSale };
    },
    initialize: (state, action) => {
      return { ...state, currentSale: [] };
    },
  },
});

export const { addSale, addItemToSale, initialize } = salesSlice.actions;
export default salesSlice.reducer;
