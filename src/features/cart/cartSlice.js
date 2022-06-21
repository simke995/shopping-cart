import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  totalAmount: 0,
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increase: (state, action) => {
      const cartItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      cartItem.quantity = cartItem.quantity + 1;
      cartItem.totalPrice += cartItem.price;
      state.totalQuantity++;
      state.totalAmount += cartItem.price;
    },
    decrease: (state, action) => {
      const cartItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );

      if (cartItem.quantity === 1) {
        state.cartItems = state.cartItems.filter(
          (item) => item.id !== cartItem.id
        );
      }
      cartItem.totalPrice -= cartItem.price;
      cartItem.quantity--;
      state.totalQuantity--;
      state.totalAmount -= cartItem.price;
    },
    addToCart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.id === newItem.id
      );
      if (!existingItem) {
        state.cartItems.push({
          ...newItem,
          quantity: 1,
          totalPrice: newItem.price,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice += existingItem.price;
      }
      state.totalQuantity++;
      state.totalAmount += newItem.price;
    },
    removeFromCart: (state, action) => {
      const cartItem = action.payload;

      state.cartItems = state.cartItems.filter(
        (item) => item.id !== cartItem.id
      );

      state.totalQuantity -= cartItem.quantity;
      state.totalAmount -= cartItem.totalPrice;
    },
    clearCart: (state) => {
      state.cartItems = [];
      state.totalAmount = 0;
      state.totalQuantity = 0;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
