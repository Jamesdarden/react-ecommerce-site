import { CART_ACTION_TYPES } from "./cart.types";
import { createAction } from "../../utils/reducer/reducer.utils";

export const setIsCartOpen= (boolean) => createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean);



const addCartItem = (cartItems, productToAdd) => {
  // based on value returns a boolean
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );
  if (existingCartItem) {
    // we don't want to mutate the array only return a new one if changes happen.
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, cartItemToRemove) => {
  const itemToRemove = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );

  if (itemToRemove.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== itemToRemove.id);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItemToRemove.quantity - 1 }
      : cartItem
  );
};

const deleteCartItem = (cartItems, cartItemToRemove) => {
  // const itemToRemove = cartItems.find((cartItem) => cartItem.id === cartItemToRemove.id)
  return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
};


// actions

export const addItemtoCart = (cartItems, productToAdd) => {
    const newCartItems = addCartItem(cartItems, productToAdd);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS , newCartItems);
  };
  
export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const newCartItems = removeCartItem(cartItems, cartItemToRemove);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const deleteItemFromCart = (cartItems, itemToDelete) => {
  const newCartItems = deleteCartItem(cartItems, itemToDelete);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};


