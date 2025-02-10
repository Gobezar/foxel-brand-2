"use client";

import { ButtonBack, ButtonForward } from "@/shared";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/scss/keyboard";
import { Keyboard, Mousewheel } from "swiper/modules";
import ReviewCard from "./ReviewCard";

const reviewsHeader = "отзывы";
const reviews = [
  { id: 1, name: "Иван", text: "Все супер!" },
  { id: 2, name: "Хуич", text: "Все супер!" },
  { id: 3, name: "Ниггер", text: "Все супер!" },
  { id: 4, name: "Шляпа", text: "Все супер!" },
  { id: 5, name: "Щека", text: "Все супер!" },
  { id: 6, name: "Тутифрути", text: "Все супер!" },
];

export const Reviews = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <div className="pt-[98px] pb-[127px] bg-red w-full">
      <div className="flex items-center justify-between mb-[85px] px-[75px]">
        <h2 className="text-6xl text-white font-bold">
          {reviewsHeader.toUpperCase()}
        </h2>
        <div className="flex items-center">
          <ButtonBack onClick={() => swiperRef.current?.slidePrev()} />
          <ButtonForward onClick={() => swiperRef.current?.slideNext()} />
        </div>
      </div>
      <div className="flex items-center overflow-auto mb-[58px]">
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          slidesPerView={"auto"}
          spaceBetween={38}
          mousewheel={true}
          keyboard={{ enabled: true }}
          enabled
          modules={[Mousewheel, Keyboard]}
        >
          {reviews.map((review) => (
            <SwiperSlide
              key={review.id}
              style={{ width: "auto" }}
              className="first:ml-[77px] last:mr-[77px]"
            >
              <ReviewCard text={review.text} name={review.name} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
