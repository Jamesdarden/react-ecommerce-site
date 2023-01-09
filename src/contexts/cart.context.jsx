import { createContext, useState, useEffect } from "react";

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
  const itemToRemove = cartItems.find((cartItem) => cartItem.id === cartItemToRemove.id)

  if(itemToRemove.quantity === 1 ){
    return cartItems.filter(cartItem => cartItem.id !== itemToRemove.id)
  }

  return cartItems.map((cartItem) =>
  cartItem.id === cartItemToRemove.id
    ? { ...cartItem, quantity: cartItemToRemove.quantity - 1 }
    : cartItem
);

}

const deleteCartItem = (cartItems , cartItemToRemove) => {
  // const itemToRemove = cartItems.find((cartItem) => cartItem.id === cartItemToRemove.id)
  return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id)

}

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemtoCart: () => {},
  removeItemFromCart: ()=> {},
  deleteItemFromCart:()=>{},
  cartCount: 0,
  cartTotal: 0
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(()=>{
    const newCartCount = cartItems.reduce((prev, curr) => prev + curr.quantity, 0);
    // const newCartCount = cartItems.reduce((total, cartItem) => prev + cartItem.quantity, 0);
    setCartCount(newCartCount)
  },[cartItems])

  useEffect(()=> {
    const newPriceTotal = cartItems.reduce((total, cartItem)=> total + cartItem.price * cartItem.quantity, 0)
    setCartTotal( newPriceTotal);
  },[cartItems])

  const addItemtoCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };
  const removeItemFromCart = (cartItemToRemove) => {
    setCartItems(removeCartItem(cartItems, cartItemToRemove));
  };

  const deleteItemFromCart = (itemToDelete) => {
    setCartItems(deleteCartItem(cartItems, itemToDelete));
  }
  
  const value = { isCartOpen, setIsCartOpen, cartItems, addItemtoCart, cartCount , removeItemFromCart, deleteItemFromCart, cartTotal};

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
