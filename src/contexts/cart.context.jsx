import { createContext,  useReducer } from "react";
import {createAction} from '../utils/reducer/reducer.utils'

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

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemtoCart: () => {},
  removeItemFromCart: () => {},
  deleteItemFromCart: () => {},
  cartCount: 0,
  cartTotal: 0,
});

export const INITIAL_STATE = {
  cartItems: [],
  isCartOpen: false,
  cartCount: 0,
  cartTotal: 0,
};

const CART_ITEMS_ACTION_TYPES ={
  SET_CART_ITEMS: 'SET_CART_ITEMS',
  SET_IS_CART_OPEN: 'SET_IS_CART_OPEN'

}
const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ITEMS_ACTION_TYPES.SET_CART_ITEMS:
      return {
        ...state,
        ...payload,
      };
      case CART_ITEMS_ACTION_TYPES.SET_IS_CART_OPEN:
        return {
          ...state,
          isCartOpen: payload,
        }
    default:
      throw new Error(`Unknown Type ${type} in cart Reducer`);
  }
};

export const CartProvider = ({ children }) => {
  const [{cartItems, cartCount, cartTotal,isCartOpen}, dispatch] = useReducer(cartReducer, INITIAL_STATE);
 
  const updateCartItemsReducer = (newCartItem) => {
    const newCartCount = newCartItem.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );

    const newCartTotal = newCartItem.reduce(
      (total, cartItem) => total + cartItem.price * cartItem.quantity,
      0
    );

    dispatch(
      createAction(CART_ITEMS_ACTION_TYPES.SET_CART_ITEMS, {
        cartItems: newCartItem,
        cartTotal: newCartTotal,
        cartCount: newCartCount,
      })
    )
  };

  const setIsCartOpen = ()=>{
    const updatedCartStatus = !isCartOpen

    dispatch(
      createAction(CART_ITEMS_ACTION_TYPES.SET_IS_CART_OPEN, updatedCartStatus)
     )
  }

  const addItemtoCart = (productToAdd) => {
    const newCartItems = addCartItem(cartItems, productToAdd);
    updateCartItemsReducer(newCartItems);
  };
  const removeItemFromCart = (cartItemToRemove) => {
    const newCartItems = removeCartItem(cartItems, cartItemToRemove);
    updateCartItemsReducer(newCartItems);
  };

  const deleteItemFromCart = (itemToDelete) => {
    const newCartItems = deleteCartItem(cartItems, itemToDelete);
    updateCartItemsReducer(newCartItems);
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemtoCart,
    cartCount,
    removeItemFromCart,
    deleteItemFromCart,
    cartTotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
