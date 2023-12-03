import style from "./CardProduct.module.css";

import { useAppDispatch } from "../../Hooks/hooks";


import { addToCart } from "../../store/cart/cartSlice";


type productType={
  id: number;
  title: string;
  price: string;
  cat_prefix: string;
  img: string;
  max_quantity: number;
}


const CardProduct = ({id, 
  title,
  price,
  cat_prefix,
  img,
  max_quantity}:productType) => {

const dispatch=useAppDispatch()
  return (
  
   
       
          <div >
            <div className={style.card}>
              <img src={img} alt={title} />
              <h2>{title}</h2>
              <p className={style.price}>{price}</p>
              <p>
                <button onClick={() => dispatch(addToCart({ id,title, price, cat_prefix, img, max_quantity}))}>
                  Add to Cart
                </button>
              </p>
            </div>
          </div>
       
      
 
  );
};

export default CardProduct;
