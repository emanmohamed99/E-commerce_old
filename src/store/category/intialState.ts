import { category } from "./types";

 interface ProductsState {
    categories: { [id: string]: category };
  }
  
export  const initialStateCategory: ProductsState = {
    categories: {},
  };