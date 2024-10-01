import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartQuantityType } from "@/types/cartquantity";

interface CartState {
  cartItems: CartQuantityType[];
  addToCart: (product: CartQuantityType) => void;
  removeFromCart: (product: CartQuantityType) => void;
  buttonIncrease: (quantity: CartQuantityType) => void;
  buttonDecrease: (quantity: CartQuantityType) => void;
}

const initialState: CartState = {
  cartItems: [],
  addToCart: () => {},
  removeFromCart: () => {},
  buttonIncrease: () => {},
  buttonDecrease: () => {},
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartQuantityType>) => {
      const item = action.payload;
      const isItemInCart = state.cartItems.find(
        (cartItem) => cartItem.id === item.id && cartItem.name === item.name
      );

      if (isItemInCart) {
        state.cartItems = state.cartItems.map((cartItem) =>
          cartItem.id === item.id && cartItem.name === item.name
            ? { ...cartItem, quantity: (cartItem.quantity as number) + 1 }
            : cartItem
        );
      } else {
        state.cartItems.push({ ...item, quantity: 1 });
      }
    },

    removeFromCart: (state, action: PayloadAction<CartQuantityType>) => {
      const item = action.payload;
      const isItemInCart = state.cartItems.find(
        (cartItem) => cartItem.id === item.id && cartItem.name === item.name
      );

      if (isItemInCart) {
        state.cartItems = state.cartItems.filter(
          (cartItem) => cartItem.id !== item.id || cartItem.name !== item.name
        );
      }
    },

    increaseQuantity: (state, action: PayloadAction<CartQuantityType>) => {
      const item = action.payload;
      state.cartItems = state.cartItems.map((cartItem) =>
        cartItem.id === item.id && cartItem.name === item.name
          ? { ...cartItem, quantity: (cartItem.quantity as number) + 1 }
          : cartItem
      );
    },

    decreaseQuantity: (state, action: PayloadAction<CartQuantityType>) => {
      const item = action.payload;
      state.cartItems = state.cartItems.map((cartItem) =>
        cartItem.id === item.id && cartItem.name === item.name
          ? {
              ...cartItem,
              quantity:
                (cartItem.quantity as number) > 1
                  ? (cartItem.quantity as number) - 1
                  : 1,
            }
          : cartItem
      );
    },
  },
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } =
  cartSlice.actions;
export const cartReducer = cartSlice.reducer;
