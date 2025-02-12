import { league_spartan } from "@/config/fonts";
import InstagramBlackIcon from "@/shared/icons/InstagramBlackIcon";
import TelegramBlackIcon from "@/shared/icons/TelegramBlackIcon";
import VkBlackIcon from "@/shared/icons/VkBlackIcon";
import clsx from "clsx";
import Link from "next/link";
import React from "react";

export const Footer = () => {
  return (
    <div className="w-full flex pt-[90px] pr-[85px] pb-[65px] pl-[75px] bg-white">
      <div className="w-[50%] flex items-end mt-[190px]">
        <h2
          className={clsx("font-bold text-[128px]", league_spartan.className)}
        >
          foxel brand
        </h2>
      </div>
      <div className="flex justify-end w-[50%] space-x-[70px]">
        <div>
          <h5 className="font-medium text-[20px] mb-[20px]">Компания</h5>
          <Link href="">
            <h6 className="font-normal text-[16px] mb-[10px]">О нас</h6>
          </Link>
          <Link href="">
            <h6 className="font-normal text-[16px] mb-[10px]">Каталог</h6>
          </Link>
          <Link href="">
            <h6 className="font-normal text-[16px] mb-[10px]">Отзывы</h6>
          </Link>
          <Link href="">
            <h6 className="font-normal text-[16px] mb-[10px]">Контакты</h6>
          </Link>
        </div>
        <div>
          <h5 className="font-medium text-[20px] mb-[20px]">Покупателям</h5>
          <Link href="">
            <h6 className="font-normal text-[16px] mb-[10px]">Гарантия</h6>
          </Link>
          <Link href="">
            <h6 className="font-normal text-[16px] mb-[10px]">
              Частые вопросы
            </h6>
          </Link>
        </div>
        <div>
          <h5 className="font-medium text-[20px] mb-[20px]">Контакты</h5>
          <span className="font-normal text-[16px] mb-[10px]">
            +7 (495) 374-92-07
          </span>
          <div className="flex  items-center space-x-[28px] mt-[48px]">
            <TelegramBlackIcon className="cursor-pointer" />
            <InstagramBlackIcon className="cursor-pointer" />
            <VkBlackIcon className="cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};
