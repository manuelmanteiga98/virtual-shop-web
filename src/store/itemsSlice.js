import { createSlice } from "@reduxjs/toolkit";

const itemsSlice = createSlice({
  name: "items",
  initialState: {
    list: [],
    categories: [],
    filteredList: [],
    currentCategory: "",
  },
  reducers: {
    addItem(state, action) {
      state.list.push(action.payload);
      state.filteredList.push(action.payload);
      return state;
    },
    addCategory(state, action) {
      let category = action.payload;
      if (state.categories.length === 0) state.categories.push("-");
      if (!state.categories.includes(category)) state.categories.push(category);
      state.categories.sort();
      return state;
    },
    deleteItem(state, action) {
      state.list = state.list.filter((item) => item.id !== action.payload);
      state.filteredList = state.filteredList.filter(
        (item) => item.id !== action.payload
      );
      return state;
    },
    toFiltered(state, action) {
      state.filteredList = state.list.filter(
        (item) =>
          item.name.toLowerCase().includes(action.payload.toLowerCase()) &&
          (!state.currentCategory || item.category === state.currentCategory)
      );
      return state;
    },
    toFilteredByCategory(state, action) {
      const { category, text } = action.payload;
      state.currentCategory = category;
      state.filteredList = state.list.filter(
        (item) =>
          item.name.toLowerCase().includes(text.toLowerCase()) &&
          (state.currentCategory.length === 0 || item.category === category)
      );
      return state;
    },
    loadCategories(state) {
      state.categories = [];
      state.list.forEach((item) => {
        if (!state.categories.includes(item.category)) {
          state.categories.push(item.category);
        }
      });
      state.categories.unshift("-");
      state.categories.sort();
      return state;
    },
    loadCategoriesFromItems(state, action) {
      state.categories = [];
      action.payload.forEach((item) => {
        if (!state.categories.includes(item.category)) {
          state.categories.push(item.category);
        }
      });
      state.categories.unshift("-");
      state.categories.sort();
      return state;
    },
    deleteCategory(state, action) {
      state.categories = state.categories.filter(
        (category) => category !== action.payload
      );
      return state;
    },
  },
});

export const {
  addItem,
  deleteItem,
  addCategory,
  deleteCategory,
  toFiltered,
  toFilteredByCategory,
  loadCategories,
  loadCategoriesFromItems,
} = itemsSlice.actions;
export default itemsSlice.reducer;
