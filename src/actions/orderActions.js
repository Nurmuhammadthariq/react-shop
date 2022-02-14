import { ActionTypes } from '../constants/action-types';
import mockApis from '../apis/mockApis';

export const createOrder = (order) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const { data } = await mockApis.post('/orders', order, config);
    dispatch({
      type: ActionTypes.ORDER_CREATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ActionTypes.ORDER_CREATE_FAIL,
      payload: error,
    });
  }
};
