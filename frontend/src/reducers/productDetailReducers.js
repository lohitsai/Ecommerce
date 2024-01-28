import { createSlice } from "@reduxjs/toolkit";

const productDetailSlice = createSlice({
  name: "products",
  initialState: { loading: false, product: { reviews: [] }, error: undefined },
  reducers: {
    DETAIL_REQUEST(state) {
      state.loading = true;
    },
    DETAIL_SUCCESS(state, action) {
      state.loading = false;
      state.product = action.payload;
    },
    DETAIL_FAIL(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const productDetailReducers = productDetailSlice.reducer;
export const productDetailActions = productDetailSlice.actions;

const productDeleteSlice = createSlice({
  name: "products",
  initialState: {},
  reducers: {
    DELETE_REQUEST(state) {
      return {
        loading: true,
      };
    },
    DELETE_SUCCESS(state, action) {
      return {
        loading: false,
        success: true,
      };
    },
    DELETE_FAIL(state, action) {
      return {
        loading: false,
        error: action.payload,
      };
    },
  },
});

export const productDeleteReducers = productDeleteSlice.reducer;
export const productDeleteActions = productDeleteSlice.actions;

const productCreateSlice = createSlice({
  name: "productCreate",
  initialState: {},
  reducers: {
    CREATE_REQUEST(state) {
      return {
        loading: true,
      };
    },
    CREATE_SUCCESS(state, action) {
      return {
        loading: false,
        success: true,
        product: action.payload,
      };
    },
    CREATE_FAIL(state, action) {
      return {
        loading: false,
        error: action.payload,
      };
    },
    CREATE_RESET(state) {
      return {};
    },
  },
});

export const productCreateReducers = productCreateSlice.reducer;
export const productCreateActions = productCreateSlice.actions;

const productUpdateSlice = createSlice({
  name: "productUpdate",
  initialState: { product: {} },
  reducers: {
    UPDATE_REQUEST(state) {
      return {
        loading: true,
      };
    },
    UPDATE_SUCCESS(state, action) {
      return {
        loading: false,
        success: true,
        product: action.payload,
      };
    },
    UPDATE_FAIL(state, action) {
      return {
        loading: false,
        error: action.payload,
      };
    },
    UPDATE_RESET(state) {
      return { product: {} };
    },
  },
});

export const productUpdateReducers = productUpdateSlice.reducer;
export const productUpdateActions = productUpdateSlice.actions;

const productReviewCreateSlice = createSlice({
  name: "productReviewCreate",
  initialState: {},
  reducers: {
    CREATE_REVIEW_REQUEST(state) {
      return {
        loading: true,
      };
    },
    CREATE_REVIEW_SUCCESS(state, action) {
      return {
        loading: false,
        success: true,
      };
    },
    CREATE_REVIEW_FAIL(state, action) {
      return {
        loading: false,
        error: action.payload,
      };
    },
    CREATE_REVIEW_RESET(state) {
      return {};
    },
  },
});

export const productReviewCreateReducers = productReviewCreateSlice.reducer;
export const productReviewCreateActions = productReviewCreateSlice.actions;
