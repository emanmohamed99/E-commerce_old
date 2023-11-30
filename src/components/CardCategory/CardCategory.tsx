import React from "react";
import Style from "./Card.module.css";

import { useNavigate } from "react-router-dom";
import { category } from "../../store/category/types";
export type categoryType = {
  categories: { [id: string]: category };
};

const Card = ({ categories }: categoryType) => {
  const navigate = useNavigate();

  return (
    <div>
      <div className={Style.cardParent}>
        {Object.values(categories).map((category: any) => (
          <div onClick={() => navigate(`${category.prefix}`)} key={category.id}>
            <div className={Style.card}>
              <div className={Style.imageWrapper}>
                <img src={category.img} alt={category.title} />
              </div>
              <div>{category.title}</div>
              <div></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
