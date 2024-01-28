import axios from "axios";
import {
  productDetailActions,
  productDeleteActions,
  productCreateActions,
  productUpdateActions,
  productReviewCreateActions,
} from "../reducers/productDetailReducers";

export const listProductDetails = (id) => async (dispatch) => {
  try {
    dispatch(productDetailActions.DETAIL_REQUEST());

    const { data } = await axios.get(`/api/products/${id}/`);

    dispatch(productDetailActions.DETAIL_SUCCESS(data));
  } catch (error) {
    const payload =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;

    dispatch(productDetailActions.DETAIL_FAIL(payload));
  }
};

export const deleteProduct = (id) => async (dispatch, getState) => {
  try {
    dispatch(productDeleteActions.DELETE_REQUEST());

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    await axios.delete(`/api/products/delete/${id}/`, config);

    dispatch(productDeleteActions.DELETE_SUCCESS());
  } catch (error) {
    const payload =
      error.response && error.response.data.detail
        ? error.response.data.detail
        : error.message;

    dispatch(productDeleteActions.DELETE_FAIL(payload));
  }
};

export const createProduct = () => async (dispatch, getState) => {
  try {
    dispatch(productCreateActions.CREATE_REQUEST());

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.post(`/api/products/create/`, {}, config);

    dispatch(productCreateActions.CREATE_SUCCESS(data));
  } catch (error) {
    const payload =
      error.response && error.response.data.detail
        ? error.response.data.detail
        : error.message;

    dispatch(productCreateActions.CREATE_FAIL(payload));
  }
};

export const updateProduct = (product) => async (dispatch, getState) => {
  try {
    dispatch(productUpdateActions.UPDATE_REQUEST());

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.post(
      `/api/products/update/${product._id}/`,
      product,
      config
    );

    dispatch(productUpdateActions.UPDATE_SUCCESS(data));
    dispatch(productDetailActions.DETAIL_SUCCESS(data));
  } catch (error) {
    const payload =
      error.response && error.response.data.detail
        ? error.response.data.detail
        : error.message;

    dispatch(productUpdateActions.UPDATE_FAIL(payload));
  }
};

export const createProductReview =
  (productId, review) => async (dispatch, getState) => {
    try {
      dispatch(productReviewCreateActions.CREATE_REVIEW_REQUEST());

      const {
        userLogin: { userInfo },
      } = getState();

      const config = {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      const { data } = await axios.post(
        `/api/products/${productId}/reviews/`,
        review,
        config
      );

      dispatch(productReviewCreateActions.CREATE_REVIEW_SUCCESS(data));
    } catch (error) {
      const payload =
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message;

      dispatch(productReviewCreateActions.CREATE_REVIEW_FAIL(payload));
    }
  };
