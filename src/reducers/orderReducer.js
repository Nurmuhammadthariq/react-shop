import { ActionTypes } from '../constants/action-types';

export const orderCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case ActionTypes.ORDER_CREATE_SUCCESS:
      return {
        loading: false,
        success: true,
        order: action.payload,
      };
    case ActionTypes.ORDER_CREATE_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
