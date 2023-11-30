import style from "./CardProduct.module.css";
import { useParams } from "react-router-dom";
import { useAppDispatch } from "../../Hooks/hooks";
import { useEffect, useState } from "react";

import { addToCart } from "../../store/cart/cartSlice";
import { product } from "../../store/product/types";


export type productType = {
  products: { [id: string]: product };
};
const CardProduct = ({ products }: productType) => {
  const { name } = useParams();

  const data = Object.values(products);
  const [filteredData, setFiltered] = useState(data);

  const dispatch = useAppDispatch();
  useEffect(() => {
    if (name) {
      const newItem = Object.values(products).filter((product: any) => {
        return product.cat_prefix === name;
      });
      setFiltered(newItem);
    } else if (data.length > 0 && !name) {
      setFiltered(data);
    }
  }, [name, products]);

  return (
    <div>
      <div className={style.cardParent}>
        {filteredData.map((product: product) => (
          <div key={product.id}>
            <div className={style.card}>
              <img src={product.img} alt={product.title} />
              <h2>{product.title}</h2>
              <p className={style.price}>{product.price}</p>
              <p>
                <button onClick={() => dispatch(addToCart(product))}>
                  Add to Cart
                </button>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardProduct;
