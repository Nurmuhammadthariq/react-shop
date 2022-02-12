import mockApi from '../apis/mockApis';
import { ActionTypes } from '../constants/action-types';

export const listProducts = () => async (dispatch) => {
  try {
    dispatch({ type: ActionTypes.PRODUCT_LIST_REQUEST });

    const { data } = await mockApi.get('/products');

    dispatch({
      type: ActionTypes.PRODUCT_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ActionTypes.PRODUCT_LIST_FAIL,
      payload: error.response,
    });
  }
};

export const listProductsDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: ActionTypes.PRODUCT_DETAILS_REQUEST });

    const { data } = await mockApi.get(`/products/${id}`);

    dispatch({
      type: ActionTypes.PRODUCT_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ActionTypes.PRODUCT_DETAILS_FAIL,
      payload: error.response,
    });
  }
};

export const removeSelectedProduct = () => {
  return {
    type: ActionTypes.PRODUCT_DETAILS_REMOVE,
  };
};
