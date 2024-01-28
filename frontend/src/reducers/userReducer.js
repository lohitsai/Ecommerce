import { createSlice } from "@reduxjs/toolkit";
// loading: undefined, userInfo: undefined, error: undefined

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const userLoginSlice = createSlice({
  name: "user",
  initialState: { userInfo: userInfoFromStorage },
  reducers: {
    LOGIN_REQUEST(state) {
      state.loading = true;
    },
    LOGIN_SUCCESS(state, action) {
      state.loading = false;
      state.userInfo = action.payload;
      state.error = undefined;
    },
    LOGIN_FAIL(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    LOGOUT(state) {
      return {};
    },
  },
});

export const userReducers = userLoginSlice.reducer;
export const userActions = userLoginSlice.actions;

const userRegisterSlice = createSlice({
  name: "user",
  initialState: {},
  reducers: {
    REGISTER_REQUEST(state) {
      state.loading = true;
    },
    REGISTER_SUCCESS(state, action) {
      state.loading = false;
      state.userInfo = action.payload;
      state.error = undefined;
    },
    REGISTER_FAIL(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    LOGOUT(state) {
      return {};
    },
  },
});

export const userRegisterReducers = userRegisterSlice.reducer;
export const userRegisterActions = userRegisterSlice.actions;

const userDetailsSlice = createSlice({
  name: "user",
  initialState: { user: {} },
  reducers: {
    DETAILS_REQUEST(state) {
      state.loading = true;
      state.error = undefined;
    },
    DETAILS_SUCCESS(state, action) {
      state.loading = false;
      state.user = action.payload;
      state.error = undefined;
    },
    DETAILS_FAIL(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    DETAILS_RESET() {
      return { user: {} };
    },
  },
});

export const userDetailsReducers = userDetailsSlice.reducer;
export const userDetailsActions = userDetailsSlice.actions;

const userUpdateProfileSlice = createSlice({
  name: "user",
  initialState: {},
  reducers: {
    UPDATE_PROFILE_REQUEST(state) {
      state.loading = true;
      state.error = undefined;
    },
    UPDATE_PROFILE_SUCCESS(state, action) {
      state.loading = false;
      state.user = action.payload;
      state.success = true;
      state.error = undefined;
    },
    UPDATE_PROFILE_FAIL(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    UPDATE_PROFILE_RESET(state) {
      return {};
    },
  },
});

export const userUpdateProfileReducers = userUpdateProfileSlice.reducer;
export const userUpdateProfileActions = userUpdateProfileSlice.actions;

const userListSlice = createSlice({
  name: "userList",
  initialState: { users: [] },
  reducers: {
    USER_LIST_REQUEST(state) {
      state.loading = true;
    },
    USER_LIST_SUCCESS(state, action) {
      return { loading: false, users: action.payload };
    },
    USER_LIST_FAIL(state, action) {
      return { loading: false, error: action.payload };
    },
    USER_LIST_RESET(state) {
      return { users: [] };
    },
  },
});

export const userListReducers = userListSlice.reducer;
export const userListActions = userListSlice.actions;

const userDeleteSlice = createSlice({
  name: "userDelete",
  initialState: {},
  reducers: {
    USER_DELETE_REQUEST(state) {
      state.loading = true;
    },
    USER_DELETE_SUCCESS(state) {
      return { loading: false, success: true };
    },
    USER_DELETE_FAIL(state, action) {
      return { loading: false, error: action.payload };
    },
  },
});

export const userDeleteReducers = userDeleteSlice.reducer;
export const userDeleteActions = userDeleteSlice.actions;

const userUpdateSlice = createSlice({
  name: "userUpdate",
  initialState: { user: {} },
  reducers: {
    USER_UPDATE_REQUEST(state) {
      state.loading = true;
    },
    USER_UPDATE_SUCCESS() {
      return { loading: false, success: true };
    },
    USER_UPDATE_FAIL(state, action) {
      return { loading: false, error: action.payload };
    },
    USER_UPDATE_RESET() {
      return { user: {} };
    },
  },
});

export const userUpdateReducers = userUpdateSlice.reducer;
export const userUpdateActions = userUpdateSlice.actions;
