import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import type { Product } from "../../App/api";

import { initialStateProduct } from "./intialState";
import axios from 'axios';
export const fetchProducts = createAsyncThunk(
  "book/fetchproduct",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const { data } = await axios.get("http://localhost:7400/items");
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  })

const itemsSlice = createSlice({
  name: "items",
  initialState:initialStateProduct,
  reducers: {
    receivedProducts(state, action: PayloadAction<Product[]>) {
      const products = action.payload;

      products.forEach((product) => {
        state.products[product.id] = product;
      });
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchProducts.pending, (state, action) => {
      state.loading = true;
        state.error = null;
     
    })
    
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.loading = false;
        state.products = action.payload;
         state.error = null;
     
    })
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.error = action.error.message;
         state.error = true;
     
    })
  },
});
export default itemsSlice.reducer;
export const { receivedProducts } = itemsSlice.actions;
