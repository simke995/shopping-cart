import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cart/cartSlice";
import modalReducer from "../features/modal/modalSlice";
import productsReducer from "../features/products/productsSlice";
import singleProductReducer from "../features/products/singleProductSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    modal: modalReducer,
    products: productsReducer,
    singleProduct: singleProductReducer,
  },
});

export default store;
