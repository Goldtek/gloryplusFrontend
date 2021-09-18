import _ from 'underscore';
import { UPDATE_CART } from './action-type';

const updateCart = (cart) => ({
  type: UPDATE_CART,
  cart,
});

export const addItemToCart = (cartItem) => (dispatch, getState) => {
  const { Cart: { cart } } = getState();
  const newC = {};
  const index = _.findIndex(cart.items, (item) => item.id === cartItem.id);
  if (index !== -1) {
    cart.items[index].quantity += cartItem.quantity;
    newC.items = [...cart.items];
  } else {
    newC.items = [...cart.items, cartItem];
  }

  newC.totalPrice = _.reduce(newC.items, (memo, item) => memo + (item.amount * item.quantity), 0);
  dispatch(updateCart(newC));
};

export const removeItemFromCart = (cartIt) => (dispatch, getState) => {
  console.log('remove')
  const { Cart: { cart } } = getState();
  const newC = { ...cart };

  newC.items = _.reject(newC.items, (item) => item.id === cartIt.id);
  newC.totalPrice = _.reduce(newC.items, (memo, item) => memo + item.amount, 0);
  dispatch(updateCart(newC));
};
