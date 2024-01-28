import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
  name: "order",
  initialState: {},
  reducers: {
    ORDER_CREATE_REQUEST(state) {
      state.loading = true;
      state.error = undefined;
    },
    ORDER_CREATE_SUCCESS(state, action) {
      state.success = true;
      state.loading = false;
      state.order = action.payload;
      state.error = undefined;
    },
    ORDER_CREATE_FAIL(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    ORDER_CREATE_RESET() {
      return {};
    },
    ORDER_DETAILS_REQUEST(state) {},
    ORDER_DETAILS_SUCCESS(state) {},
    ORDER_DETAILS_FAIL(state) {},
  },
});

export const orderActions = orderSlice.actions;
export const orderReducers = orderSlice.reducer;

const orderDetailsSlice = createSlice({
  name: "orderDetails",
  initialState: { loading: true },
  reducers: {
    ORDER_DETAILS_REQUEST(state) {
      state.loading = true;
    },
    ORDER_DETAILS_SUCCESS(state, action) {
      return {
        loading: false,
        order: action.payload,
      };
    },
    ORDER_DETAILS_FAIL(state, action) {
      return {
        loading: false,
        error: action.payload,
      };
    },
  },
});

export const orderDetailsActions = orderDetailsSlice.actions;
export const orderDetailsReducers = orderDetailsSlice.reducer;

const orderPaySlice = createSlice({
  name: "orderPay",
  initialState: {},
  reducers: {
    ORDER_PAY_REQUEST(state) {
      state.loading = true;
    },
    ORDER_PAY_SUCCESS(state) {
      return {
        loading: false,
        success: true,
      };
    },
    ORDER_PAY_FAIL(state, action) {
      return {
        loading: false,
        error: action.payload,
      };
    },
    ORDER_PAY_RESET() {
      return {};
    },
  },
});

export const orderPayActions = orderPaySlice.actions;
export const orderPayReducers = orderPaySlice.reducer;

const orderListMySlice = createSlice({
  name: "orderListMy",
  initialState: { orders: [] },
  reducers: {
    ORDER_LIST_MY_REQUEST(state) {
      state.loading = true;
    },
    ORDER_LIST_MY_SUCCESS(state, action) {
      return {
        loading: false,
        orders: action.payload,
      };
    },
    ORDER_LIST_MY_FAIL(state, action) {
      return {
        loading: false,
        error: action.payload,
      };
    },
    ORDER_LIST_MY_RESET() {
      return {
        order: [],
      };
    },
  },
});

export const orderListMyActions = orderListMySlice.actions;
export const orderListMyReducers = orderListMySlice.reducer;

const orderListSlice = createSlice({
  name: "orderList",
  initialState: { orders: [] },
  reducers: {
    ORDER_LIST_REQUEST(state) {
      state.loading = true;
    },
    ORDER_LIST_SUCCESS(state, action) {
      return {
        loading: false,
        orders: action.payload,
      };
    },
    ORDER_LIST_FAIL(state, action) {
      return {
        loading: false,
        error: action.payload,
      };
    },
    ORDER_LIST_RESET() {
      return {
        order: [],
      };
    },
  },
});

export const orderListActions = orderListSlice.actions;
export const orderListReducers = orderListSlice.reducer;

const orderDeliverSlice = createSlice({
  name: "orderDeliver",
  initialState: {},
  reducers: {
    ORDER_DELIVER_REQUEST(state) {
      state.loading = true;
    },
    ORDER_DELIVER_SUCCESS(state) {
      return {
        loading: false,
        success: true,
      };
    },
    ORDER_DELIVER_FAIL(state, action) {
      return {
        loading: false,
        error: action.payload,
      };
    },
    ORDER_DELIVER_RESET() {
      return {};
    },
  },
});

export const orderDeliverActions = orderDeliverSlice.actions;
export const orderDeliverReducers = orderDeliverSlice.reducer;
