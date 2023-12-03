import React, { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../Hooks/hooks";
import { receivedCategory } from "../store/category/categorySlice";
import CardCategory from "../components/CardCategory/CardCategory";
import { getProducts } from "../App/api";

const Category = () => {
  const dispatch = useAppDispatch();

  const { categories } = useAppSelector((state) => state.category);

  useEffect(() => {
    getProducts().then((products) => {

      dispatch(receivedCategory(products.category));
    });
  }, [dispatch]);

  return (
    <div>
      <CardCategory categories={categories} />
    </div>
  );
};

export default Category;
