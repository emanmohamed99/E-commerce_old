import { category } from "./types";

 interface ProductsState {
    categories: { [id: string]: category };
    loading:boolean,
error:null|boolean|undefined|string,
  }
  
export  const initialStateCategory: ProductsState = {
    categories: {},
    loading:false,
    error:null,
  };