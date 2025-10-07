import { createSlice } from "@reduxjs/toolkit";
import { ProductData } from "../../utils/dummyData";

const initialState = {
  Products: ProductData,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // addToCart: (state, actions) => {},
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
