import { configureStore, Tuple } from "@reduxjs/toolkit";
import { cartReducer } from "./features/cart/cartSlice";
import { thunk } from "redux-thunk";
import logger from "redux-logger";

export const makeStore = () => {
  return configureStore({
    reducer: {
      cart: cartReducer,
    },
    middleware: () => new Tuple(thunk, logger),
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
