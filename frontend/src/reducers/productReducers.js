import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "products",
  initialState: { loading: false, products: [], error: undefined },
  reducers: {
    REQUEST(state) {
      state.loading = true;
      state.products = [];
    },
    SUCCESS(state, action) {
      state.loading = false;
      state.products = action.payload.products;
      state.page = action.payload.page;
      state.pages = action.payload.pages;
    },
    FAIL(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const productReducers = productSlice.reducer;
export const productActions = productSlice.actions;

const productTopRatedSlice = createSlice({
  name: "productTopRated",
  initialState: { products: [] },
  reducers: {
    TOP_RATED_REQUEST(state) {
      return {
        loading: true,
        products: [],
      };
    },
    TOP_RATED_SUCCESS(state, action) {
      return {
        loading: false,
        products: action.payload,
      };
    },
    TOP_RATED_FAIL(state, action) {
      return {
        loading: false,
        error: action.payload,
      };
    },
  },
});

export const productTopRatedReducers = productTopRatedSlice.reducer;
export const productTopRatedActions = productTopRatedSlice.actions;
