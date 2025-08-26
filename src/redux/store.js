// store.js
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import categoryReducer from "./categorySlice"; // Create this file later

const store = configureStore({
  reducer: {
    cart: cartReducer,
    category: categoryReducer,
  },

  devTools: process.env.NODE_ENV !== "production",
});

export default store;
