import React from "react";
import cl from "./ProductCard.module.scss";
import { ButtonAction } from "../popular/lib/PopularCatalogButtons/PopularCatalogButtons";

const ProductCard = ({
  price,
  type,
  brand,
}: {
  type: string;
  price: number;
  brand: string;
}) => {
  return (
    <div className={cl.container}>
      <div className={cl.cardWrapper}>
        <div className={cl.image}></div>
        <div className={cl.cardInfoWrapper}>
          <div className={cl.cardNameWrapper}>
            <span>
              {type} {brand}
            </span>
          </div>
          <div className={cl.cardPriceWrapper}>
            <span>{price}₽</span>
          </div>
        </div>
      </div>
      <div className={cl.actionsButtonWrapper}>
        <ButtonAction text="Подробнее" />
        <ButtonAction text="В корзину" />
      </div>
    </div>
  );
};

export default ProductCard;
