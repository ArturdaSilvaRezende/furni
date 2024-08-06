"use client";
import { createContext, useEffect, useState } from "react";
import { CartQuantityType } from "@/types/cartquantity";

interface CartContextType {
  cartItems: CartQuantityType[];
  addToCart: (product: CartQuantityType) => void;
  removeFromCart: (product: CartQuantityType) => void;
  buttonIncrease: (quantity: CartQuantityType) => void;
  buttonDecrease: (quantity: CartQuantityType) => void;
  getCartTotal: () => number;
}

export const CartContext = createContext<CartContextType>({
  cartItems: [],
  addToCart: () => {},
  removeFromCart: () => {},
  buttonIncrease: () => {},
  buttonDecrease: () => {},
  getCartTotal: () => 0,
});

export default function CartProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [cartItems, setCartItems] = useState<CartQuantityType[]>([]);

  const addToCart = (item: CartQuantityType) => {
    const isItemInCart = cartItems.find(
      (cartItem) => cartItem.id === item.id && cartItem.name === item.name
    );

    if (isItemInCart) {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === item.id && cartItem.name === item.name
            ? { ...cartItem, quantity: (cartItem.quantity as number) + 1 }
            : cartItem
        )
      );
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  const removeFromCart = (item: CartQuantityType) => {
    const isItemInCart = cartItems.find(
      (cartItem) => cartItem.id === item.id && cartItem.name === item.name
    );
    if (isItemInCart) {
      setCartItems(
        cartItems.filter(
          (cartItem) => cartItem.id !== item.id && cartItem.name !== item.name
        )
      );
    }
  };

  const buttonIncrease = (item: CartQuantityType) => {
    setCartItems(
      cartItems.map(
        (
          cartItem // if the item is already in the cart, increase the quantity of the item
        ) =>
          cartItem.id === item.id && cartItem.name === item.name
            ? { ...cartItem, quantity: (cartItem.quantity as number) + 1 }
            : cartItem // otherwise, return the cart item
      )
    );
  };

  const buttonDecrease = (item: CartQuantityType) => {
    setCartItems(
      cartItems.map(
        (cartItem) =>
          cartItem.id === item.id && cartItem.name === item.name
            ? {
                ...cartItem,
                quantity:
                  (cartItem.quantity as number) > 1
                    ? (cartItem.quantity as number) - 1
                    : 1,
              }
            : cartItem // [...cartItem , { ...cartItem, quantity: 1 }]
      )
    );
  };

  const getCartTotal = () => {
    const total = cartItems.reduce(
      (total, item) => total + item.price * (item.quantity as number),
      0
    );
    return Number(total.toFixed(2)); // calculate the total price of the items in the cart
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        buttonIncrease,
        buttonDecrease,
        removeFromCart,
        getCartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
