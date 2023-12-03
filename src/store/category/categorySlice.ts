import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { initialStateCategory } from "./intialState";
import axios from "axios";

export const fetchCategories = createAsyncThunk(
  "book/fetchcategory",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const { data } = await axios.get("http://localhost:7400/category");
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const categorySlice = createSlice({
  name: "category",
  initialState:initialStateCategory,
  reducers: {
  
  },
 extraReducers(builder) {
  builder.addCase(fetchCategories.pending, (state, action) => {
    state.loading = true;
      state.error = null;
   
  })
  
  builder.addCase(fetchCategories.fulfilled, (state, action) => {
    state.loading = false;
      state.categories = action.payload;
       state.error = null;
   
  })
  builder.addCase(fetchCategories.rejected, (state, action) => {
    state.error = action.error.message;
       state.error = true;
   
  })
 },
});
// export const { receivedCategory } = categorySlice.actions;
export default categorySlice.reducer;
