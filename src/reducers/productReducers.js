import { ActionTypes } from '../constants/action-types';

export const productListReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case ActionTypes.PRODUCT_LIST_REQUEST:
      return { loading: true, products: [] };
    case ActionTypes.PRODUCT_LIST_SUCCESS:
      return {
        loading: false,
        products: action.payload,
      };
    case ActionTypes.PRODUCT_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const productDetailsReducer = (
  state = { product: [] },
  { type, payload }
) => {
  switch (type) {
    case ActionTypes.PRODUCT_DETAILS_REQUEST:
      return { loading: true, ...state };
    case ActionTypes.PRODUCT_DETAILS_SUCCESS:
      return {
        loading: false,
        product: payload,
      };
    case ActionTypes.PRODUCT_DETAILS_REMOVE:
      return {
        product: {},
      };
    case ActionTypes.PRODUCT_DETAILS_FAIL:
      return { loading: false, error: payload };
    default:
      return state;
  }
};
