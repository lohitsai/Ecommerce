import { createSlice } from "@reduxjs/toolkit";

const cartItemsFromStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const shippingAddressFromStorage = localStorage.getItem("shippingAddress")
  ? JSON.parse(localStorage.getItem("shippingAddress"))
  : {};

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: cartItemsFromStorage,
    shippingAddress: shippingAddressFromStorage,
  },
  reducers: {
    CART_ADD_ITEM(state, action) {
      const item = action.payload;
      const existItem = state.cartItems.find((x) => x.product === item.product);

      if (existItem) {
        state.cartItems = state.cartItems.map((x) =>
          x.product === existItem.product ? item : x
        );
      } else {
        state.cartItems = [...state.cartItems, item];
      }
    },
    CART_REMOVE_ITEM(state, action) {
      state.cartItems = state.cartItems.filter(
        (x) => x.product !== action.payload
      );
    },
    CART_SAVE_SHIPPING_ADDRESS(state, action) {
      state.shippingAddress = action.payload;
    },
    CART_SAVE_PAYMENT_METHOD(state, action) {
      state.paymentMethod = action.payload;
    },
    CART_CLEAR_ITEMS(state) {
      localStorage.removeItem("cartItems");
      state.cartItems = [];
    },
  },
});

export const cartSliceReducers = cartSlice.reducer;
export const cartSliceActions = cartSlice.actions;
