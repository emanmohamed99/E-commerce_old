import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import type { Product } from "../../App/api";

import { initialStateProduct } from "./intialState";


const itemsSlice = createSlice({
  name: "items",
  initialState:initialStateProduct,
  reducers: {
    receivedProducts(state, action: PayloadAction<Product[]>) {
      const products = action.payload;

      products.forEach((product:any) => {
        state.products[product.id] = product;
      });
    },
  },
});
export default itemsSlice.reducer;
export const { receivedProducts } = itemsSlice.actions;
