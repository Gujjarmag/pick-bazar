import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "../store/slices/CartListSlice";
import AuthReducer from "../store/slices/AuthSlice";

export const store = configureStore({
  reducer: {
    cart: CartReducer,
    auth: AuthReducer,
  },
});
