import { configureStore } from "@reduxjs/toolkit";
import {
  productReducers,
  productTopRatedReducers,
} from "./reducers/productReducers";
import { cartSliceReducers } from "./reducers/cartReducers";
import {
  productCreateReducers,
  productDeleteReducers,
  productDetailReducers,
  productReviewCreateReducers,
  productUpdateReducers,
} from "./reducers/productDetailReducers";
import {
  userDetailsReducers,
  userListReducers,
  userReducers,
  userRegisterReducers,
  userUpdateProfileReducers,
  userDeleteReducers,
  userUpdateReducers,
} from "./reducers/userReducer";
import {
  orderDetailsReducers,
  orderPayReducers,
  orderReducers,
  orderListMyReducers,
  orderListReducers,
  orderDeliverReducers,
} from "./reducers/orderReducers";

const store = configureStore({
  reducer: {
    cart: cartSliceReducers,

    products: productReducers,
    productDetails: productDetailReducers,
    productDelete: productDeleteReducers,
    productCreate: productCreateReducers,
    productUpdate: productUpdateReducers,
    productReviewCreate: productReviewCreateReducers,
    productTopRated: productTopRatedReducers,

    userLogin: userReducers,
    userRegister: userRegisterReducers,
    userDetails: userDetailsReducers,
    userUpdateProfile: userUpdateProfileReducers,
    userList: userListReducers,
    userDelete: userDeleteReducers,
    userUpdate: userUpdateReducers,

    orderCreate: orderReducers,
    orderDetails: orderDetailsReducers,
    orderPay: orderPayReducers,
    orderListMy: orderListMyReducers,
    orderList: orderListReducers,
    orderDeliver: orderDeliverReducers,
  },
});

export default store;
