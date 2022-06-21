import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  singleProduct: [],
  error: null,
  isLoading: false,
};

// single product
const url = "https://course-api.com/react-store-single-product?id=";

export const getSingleProduct = createAsyncThunk(
  "product/getSingleProduct",
  async (id) => {
    try {
      const response = await fetch(`${url}${id}`);
      const products = await response.json();
      return products;
    } catch (error) {
      return error.message;
    }
  }
);

const singleProductSlice = createSlice({
  name: "singleProduct",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getSingleProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getSingleProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.singleProduct = action.payload;
      })
      .addCase(getSingleProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const productsActions = singleProductSlice.actions;

export default singleProductSlice.reducer;
