import axios from "axios";
import {
  productActions,
  productTopRatedActions,
} from "../reducers/productReducers";

export const listProducts =
  (keyword = "") =>
  async (dispatch) => {
    try {
      dispatch(productActions.REQUEST());

      const { data } = await axios.get(`/api/products${keyword}`);

      dispatch(productActions.SUCCESS(data));
    } catch (error) {
      const payload =
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message;

      dispatch(productActions.FAIL(payload));
    }
  };

export const listTopProducts = () => async (dispatch) => {
  try {
    dispatch(productTopRatedActions.TOP_RATED_REQUEST());

    const { data } = await axios.get(`/api/products/top/`);

    dispatch(productTopRatedActions.TOP_RATED_SUCCESS(data));
  } catch (error) {
    const payload =
      error.response && error.response.data.detail
        ? error.response.data.detail
        : error.message;

    dispatch(productTopRatedActions.TOP_RATED_FAIL(payload));
  }
};
