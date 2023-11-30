import { product } from "./types";


export interface ProductsState {
    products: { [id: string]: product };
  }
  
 export const initialStateProduct: ProductsState = {
    products: {},
  };
  