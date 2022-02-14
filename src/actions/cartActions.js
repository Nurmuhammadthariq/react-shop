import mockApi from '../apis/mockApis';
import { ActionTypes } from '../constants/action-types';

export const addToCart = (id, qty) => async (dispatch, getState) => {
  const { data } = await mockApi.get(`/products/${id}`);

  dispatch({
    type: ActionTypes.CART_ADD_ITEM,
    payload: {
      product: data.id,
      name: data.name,
      image: data.image,
      price: data.price,
      stock: data.stock,
      qty,
    },
  });

  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};
