"use client";

import React, { useRef } from "react";
import cl from "./Popular.module.scss";
import {
  ButtonBack,
  ButtonForward,
} from "../lib/PopularCatalogButtons/PopularCatalogButtons";
import ProductCard from "@/widgets/productCard/ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/scss/keyboard";
import { Keyboard, Mousewheel } from "swiper/modules";
import Link from "next/link";

const popularHeader = "популярное";
const catalogLinkText = "Перейти в каталог";

const products = [
  { id: 1, type: "Кофта", brand: "Balenciaga", price: 11 },
  { id: 2, type: "Рубашка", brand: "Balenciaga", price: 22 },
  { id: 3, type: "Майка", brand: "Balenciaga", price: 151 },
  { id: 4, type: "Футболка", brand: "Balenciaga", price: 121 },
  { id: 5, type: "Джинсы", brand: "Balenciaga", price: 34 },
  { id: 6, type: "Куртка", brand: "Balenciaga", price: 56 },
];

export const Popular = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <div className={cl.container}>
      <div className={cl.actionsWrapper}>
        <h2>{popularHeader.toUpperCase()}</h2>
        <div className={cl.buttonsWrapper}>
          <ButtonBack onClick={() => swiperRef.current?.slidePrev()} />
          <ButtonForward onClick={() => swiperRef.current?.slideNext()} />
        </div>
      </div>
      <div className={cl.cardsWrapper}>
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          slidesPerView={"auto"}
          spaceBetween={10}
          mousewheel={true}
          keyboard={{ enabled: true }}
          // onSlideChange={() => console.log("slide change")}
          // onSwiper={(swiper) => console.log(swiper)}
          enabled
          modules={[Mousewheel, Keyboard]}
          // breakpoints={{
          //   0: { slidesPerView: 2, spaceBetween: 5 },
          //   768: { slidesPerView: 2, spaceBetween: 5 },
          //   992: { slidesPerView: 2, spaceBetween: 5 },
          //   1130: { slidesPerView: 3, spaceBetween: 5 },
          //   1450: { slidesPerView: 4, spaceBetween: 5 },
          //   1800: { slidesPerView: 5, spaceBetween: 5 },
          // }}
          // оставлено специально на потом(для адаптива)
        >
          {products.map((product) => (
            <SwiperSlide key={product.id} style={{ width: "auto" }}>
              <ProductCard
                type={product.type}
                brand={product.brand}
                price={product.price}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className={cl.catalogButtonWrapper}>
        <Link href="">{catalogLinkText.toUpperCase()}</Link>
      </div>
    </div>
  );
};
