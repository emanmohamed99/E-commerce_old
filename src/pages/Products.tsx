import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../Hooks/hooks";
import { receivedProducts } from "../store/product/productSlice";
import CardProduct from "../components/CardProduct/CardProduct";

import { getProducts } from "../App/api";

const Products = () => {
  const dispatch = useAppDispatch();
  const { products } = useAppSelector((state) => state.products);

  useEffect(() => {
    getProducts().then((products) => {
      dispatch(receivedProducts(products.items));
    });
  }, [dispatch]);

  return (
    <div>
      <CardProduct products={products} />
    </div>
  );
};

export default Products;
