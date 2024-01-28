import axios from "axios";
import {
  orderActions,
  orderDetailsActions,
  orderPayActions,
  orderListMyActions,
  orderListActions,
  orderDeliverActions,
} from "../reducers/orderReducers";

export const createOrder = (order) => async (dispatch, getState) => {
  try {
    dispatch(orderActions.ORDER_CREATE_REQUEST());

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.post(`/api/orders/add/`, order, config);

    dispatch(orderActions.ORDER_CREATE_SUCCESS(data));
  } catch (error) {
    const payload =
      error.response && error.response.data.detail
        ? error.response.data.detail
        : error.message;

    dispatch(orderActions.ORDER_CREATE_FAIL(payload));
  }
};

export const getOrderDetails = (id) => async (dispatch, getState) => {
  try {
    dispatch(orderDetailsActions.ORDER_DETAILS_REQUEST());

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(`/api/orders/${id}/`, config);

    dispatch(orderDetailsActions.ORDER_DETAILS_SUCCESS(data));
  } catch (error) {
    const payload =
      error.response && error.response.data.detail
        ? error.response.data.detail
        : error.message;

    dispatch(orderDetailsActions.ORDER_DETAILS_FAIL(payload));
  }
};

export const payOrder = (id, paymentResult) => async (dispatch, getState) => {
  try {
    dispatch(orderPayActions.ORDER_PAY_REQUEST());

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
      `/api/orders/${id}/pay/`,
      paymentResult,
      config
    );

    dispatch(orderPayActions.ORDER_PAY_SUCCESS(data));
  } catch (error) {
    const payload =
      error.response && error.response.data.detail
        ? error.response.data.detail
        : error.message;

    dispatch(orderPayActions.ORDER_PAY_FAIL(payload));
  }
};

export const listMyOrders = (id) => async (dispatch, getState) => {
  try {
    dispatch(orderListMyActions.ORDER_LIST_MY_REQUEST());

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(`/api/orders/myorders/`, config);

    dispatch(orderListMyActions.ORDER_LIST_MY_SUCCESS(data));
  } catch (error) {
    const payload =
      error.response && error.response.data.detail
        ? error.response.data.detail
        : error.message;

    dispatch(orderListMyActions.ORDER_LIST_MY_FAIL(payload));
  }
};

export const listOrders = (id) => async (dispatch, getState) => {
  try {
    dispatch(orderListActions.ORDER_LIST_REQUEST());

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(`/api/orders/`, config);

    dispatch(orderListActions.ORDER_LIST_SUCCESS(data));
  } catch (error) {
    const payload =
      error.response && error.response.data.detail
        ? error.response.data.detail
        : error.message;

    dispatch(orderListActions.ORDER_LIST_FAIL(payload));
  }
};

export const deliverOrder = (order) => async (dispatch, getState) => {
  try {
    dispatch(orderDeliverActions.ORDER_DELIVER_REQUEST());

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
      `/api/orders/${order._id}/deliver/`,
      {},
      config
    );

    dispatch(orderDeliverActions.ORDER_DELIVER_SUCCESS(data));
  } catch (error) {
    const payload =
      error.response && error.response.data.detail
        ? error.response.data.detail
        : error.message;

    dispatch(orderDeliverActions.ORDER_DELIVER_FAIL(payload));
  }
};
