import React from "react";
import Style from "./Card.module.css";

import { useNavigate } from "react-router-dom";


  type categoryType = {
    id: number;
    title: string;
    prefix: string;
    img: string;
}


const Card = ({title,prefix,img}:categoryType) => {
  console.log(title);
  const navigate = useNavigate();
console.log(title);
  return (
    <div className={Style.card}>
     
          <div onClick={() => navigate(`${prefix}`)} >
            <div>
              <div className={Style.imageWrapper}>
                <img src={img} alt={title} />
              </div>
              <div>{title}</div>
              <div></div>
            </div>
          </div>
      
 
    </div>
  );
};

export default Card;
