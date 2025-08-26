// slices/categorySlice.js
import { createSlice } from "@reduxjs/toolkit";

const categorySlice = createSlice({
  name: "categories",
  initialState: {
    selectedCategories: [],
  },
  reducers: {
    addCategory: (state, action) => {
      if (!state.selectedCategories.includes(action.payload)) {
        state.selectedCategories.push(action.payload);
      }
    },
    removeCategory: (state, action) => {
      state.selectedCategories = state.selectedCategories.filter(
        (category) => category !== action.payload
      );
    },
    resetCategory: (state) => {
      state.selectedCategories = [];
    },
  },
});

export const { addCategory, removeCategory, resetCategory } =
  categorySlice.actions;

export default categorySlice.reducer;
