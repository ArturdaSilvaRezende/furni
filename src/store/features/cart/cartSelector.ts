import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "@/store/store";
import { CartQuantityType } from "@/types/cartquantity";

export const selectCartItems = (state: RootState): CartQuantityType[] =>
  state.cart.cartItems;

export const selectCartTotal = createSelector(
  [selectCartItems],
  (cartItems: CartQuantityType[]): number => {
    const total = cartItems.reduce(
      (total, item) => total + item.price * (item.quantity as number),
      0
    );
    return Number(total.toFixed(2));
  }
);

export const cartQuantityItens = createSelector(
  [selectCartItems],
  (cartItems: CartQuantityType[]) => {
    const quantityItens = cartItems.reduce(
      (acc, item) => acc + (item.quantity as number),
      0
    );
    return quantityItens;
  }
);
