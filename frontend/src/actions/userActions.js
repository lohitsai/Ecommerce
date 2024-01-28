import axios from "axios";
import {
  userActions,
  userRegisterActions,
  userDetailsActions,
  userUpdateProfileActions,
  userListActions,
  userDeleteActions,
  userUpdateActions,
} from "../reducers/userReducer";
import { orderListMyActions } from "../reducers/orderReducers";
export const login = (email, password) => async (dispatch) => {
  try {
    dispatch(userActions.LOGIN_REQUEST());

    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    const { data } = await axios.post(
      "/api/users/login/",
      { username: email, password },
      config
    );

    dispatch(userActions.LOGIN_SUCCESS(data));

    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    const payload =
      error.response && error.response.data.detail
        ? error.response.data.detail
        : error.message;

    dispatch(userActions.LOGIN_FAIL(payload));
  }
};

export const logout = () => (dispatch) => {
  localStorage.removeItem("userInfo");
  dispatch(userActions.LOGOUT());
  dispatch(userDetailsActions.DETAILS_RESET());
  dispatch(orderListMyActions.ORDER_LIST_MY_RESET());
  dispatch(userListActions.USER_LIST_RESET());
};

export const register = (name, email, password) => async (dispatch) => {
  try {
    dispatch(userRegisterActions.REGISTER_REQUEST());

    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    const { data } = await axios.post(
      "/api/users/register/",
      { name, email, password },
      config
    );

    dispatch(userRegisterActions.REGISTER_SUCCESS(data));
    dispatch(userActions.LOGIN_SUCCESS(data));

    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    const payload =
      error.response && error.response.data.detail
        ? error.response.data.detail
        : error.message;

    dispatch(userRegisterActions.REGISTER_FAIL(payload));
  }
};

export const getUserDetails = (id) => async (dispatch, getState) => {
  try {
    dispatch(userDetailsActions.DETAILS_REQUEST());

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(`/api/users/${id}/`, config);

    dispatch(userDetailsActions.DETAILS_SUCCESS(data));
  } catch (error) {
    const payload =
      error.response && error.response.data.detail
        ? error.response.data.detail
        : error.message;

    dispatch(userDetailsActions.DETAILS_FAIL(payload));
  }
};

export const updateUserProfile = (user) => async (dispatch, getState) => {
  try {
    dispatch(userUpdateProfileActions.UPDATE_PROFILE_REQUEST());

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.put(
      `/api/users/profile/update/`,
      user,
      config
    );

    dispatch(userUpdateProfileActions.UPDATE_PROFILE_SUCCESS(data));
    dispatch(userActions.LOGIN_SUCCESS(data));
    dispatch(getUserDetails("profile"));

    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    const payload =
      error.response && error.response.data.detail
        ? error.response.data.detail
        : error.message;

    dispatch(userUpdateProfileActions.UPDATE_PROFILE_FAIL(payload));
  }
};

export const listUsers = () => async (dispatch, getState) => {
  try {
    dispatch(userListActions.USER_LIST_REQUEST());

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(`/api/users/`, config);

    dispatch(userListActions.USER_LIST_SUCCESS(data));
  } catch (error) {
    const payload =
      error.response && error.response.data.detail
        ? error.response.data.detail
        : error.message;

    dispatch(userListActions.USER_LIST_FAIL(payload));
  }
};

export const deleteUser = (id) => async (dispatch, getState) => {
  try {
    dispatch(userDeleteActions.USER_DELETE_REQUEST());

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.delete(`/api/users/delete/${id}/`, config);

    dispatch(userDeleteActions.USER_DELETE_SUCCESS(data));
  } catch (error) {
    const payload =
      error.response && error.response.data.detail
        ? error.response.data.detail
        : error.message;

    dispatch(userDeleteActions.USER_DELETE_FAIL(payload));
  }
};

export const updateUser = (user) => async (dispatch, getState) => {
  try {
    dispatch(userUpdateActions.USER_UPDATE_REQUEST());

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.put(
      `/api/users/update/${user._id}/`,
      user,
      config
    );

    dispatch(userUpdateActions.USER_UPDATE_SUCCESS());
    dispatch(userDetailsActions.DETAILS_SUCCESS(data));
  } catch (error) {
    const payload =
      error.response && error.response.data.detail
        ? error.response.data.detail
        : error.message;

    dispatch(userUpdateActions.USER_UPDATE_FAIL(payload));
  }
};
