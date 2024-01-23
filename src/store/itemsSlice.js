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
      return {
        ...state,
        list: [...state.list, action.payload],
        filteredList: [...state.filteredList, action.payload],
      };
    },

    addCategory(state, action) {
      const category = action.payload;
      let updatedCategories;

      if (state.categories.length === 0) {
        updatedCategories = ["-", category];
      } else if (!state.categories.includes(category)) {
        updatedCategories = [...state.categories, category];
        updatedCategories.sort();
      } else {
        updatedCategories = state.categories;
      }

      return {
        ...state,
        categories: updatedCategories,
      };
    },

    deleteItem(state, action) {
      const updatedList = state.list.filter(
        (item) => item.id !== action.payload
      );
      const updatedFilteredList = state.filteredList.filter(
        (item) => item.id !== action.payload
      );

      return {
        ...state,
        list: updatedList,
        filteredList: updatedFilteredList,
      };
    },

    toFiltered(state, action) {
      const updatedFilteredList = state.list.filter(
        (item) =>
          item.name.toLowerCase().includes(action.payload.toLowerCase()) &&
          (!state.currentCategory || item.category === state.currentCategory)
      );

      return {
        ...state,
        filteredList: updatedFilteredList,
      };
    },

    toFilteredByCategory(state, action) {
      const { category, text } = action.payload;
      const updatedCurrentCategory = category;
      const updatedFilteredList = state.list.filter(
        (item) =>
          item.name.toLowerCase().includes(text.toLowerCase()) &&
          (!updatedCurrentCategory || item.category === updatedCurrentCategory)
      );

      return {
        ...state,
        currentCategory: updatedCurrentCategory,
        filteredList: updatedFilteredList,
      };
    },

    loadCategories(state) {
      const updatedCategories = Array.from(
        new Set([
          ...state.categories,
          ...state.list.map((item) => item.category),
        ])
      ).sort();

      return {
        ...state,
        categories: updatedCategories,
      };
    },

    loadCategoriesFromItems(state, action) {
      const updatedCategories = Array.from(
        new Set([
          ...state.categories,
          ...action.payload.map((item) => item.category),
        ])
      ).sort();

      return {
        ...state,
        categories: updatedCategories,
      };
    },

    deleteCategory(state, action) {
      const updatedCategories = state.categories.filter(
        (category) => category !== action.payload
      );

      return {
        ...state,
        categories: updatedCategories,
      };
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
