import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { category } from "./types";
import { initialStateCategory } from "./intialState";



const categorySlice = createSlice({
  name: "category",
  initialState:initialStateCategory,
  reducers: {
    receivedCategory(state, action: PayloadAction<category[]>) {
      const categories = action.payload;
      categories.forEach((category) => {
        state.categories[category.id] = category;
      });
    },
  },
});
export const { receivedCategory } = categorySlice.actions;
export default categorySlice.reducer;
