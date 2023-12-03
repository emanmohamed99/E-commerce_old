import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../Hooks/hooks";
import { fetchProducts } from "../store/product/productSlice";
import { product } from '../store/product/types';
import CardProduct from "../components/CardProduct/CardProduct";
import { useParams } from "react-router-dom";
import { useState } from 'react';

import style from "../components/CardProduct/CardProduct.module.css";
import { GridList } from "../components/Layout";

const Products = () => {
  const { products ,loading ,error} = useAppSelector((state) => state.products);
  const { name } = useParams();


  const [filteredData, setFiltered] = useState(Object.values(products));

  const dispatch = useAppDispatch();
  useEffect(() => {

    if (name) {
      const newItem = Object.values(products).filter((product: product) => {
        return product.cat_prefix === name;
      });
      setFiltered(newItem);
    } else if (Object.values(products).length > 0 && !name) {
      setFiltered(Object.values(products));
    }
  }, [name, products]);


  useEffect(() => {
   
      dispatch(fetchProducts());
   
  }, [dispatch]);


  return (
  
        <div className={style.cardParent}>
    
    <GridList data={filteredData} loading={loading} error={error} renderChild={(records:product)=>(<CardProduct key={records.id} {...records}/>)}/>
  
     
    </div>
 
  );
};

export default Products;
