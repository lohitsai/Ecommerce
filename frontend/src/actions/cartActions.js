import axios from "axios";
import { cartSliceActions } from "../reducers/cartReducers";

export const addToCart = (id, qty) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/products/${id}`);

  dispatch(
    cartSliceActions.CART_ADD_ITEM({
      product: data._id,
      name: data.name,
      image: data.image,
      price: data.price,
      countInStock: data.countInStock,
      qty,
    })
  );

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (id) => (dispatch, getState) => {
  dispatch(cartSliceActions.CART_REMOVE_ITEM(id));
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

export const saveShippingAddress = (data) => (dispatch) => {
  dispatch(cartSliceActions.CART_SAVE_SHIPPING_ADDRESS(data));
  localStorage.setItem("shippingAddress", JSON.stringify(data));
};

export const savePaymentMethod = (data) => (dispatch) => {
  dispatch(cartSliceActions.CART_SAVE_PAYMENT_METHOD(data));
  localStorage.setItem("paymentMethod", JSON.stringify(data));
};
