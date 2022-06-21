import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filterProducts: [],
  allProducts: [],
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    sort: (state, action) => {
      const products = action.payload;
      products.sort((a, b) => a.price - b.price);
    },
  },
});

export const filterActions = filterSlice.actions;

export default filterSlice.reducer;
