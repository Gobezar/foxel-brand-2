import Image from "next/image";
import React from "react";
import contactsMan from "../../../public/contactsMan.webp";
import TelegramIcon from "@/shared/icons/TelegramIcon";
import InstagramIcon from "@/shared/icons/InstagramIcon";
import VkIcon from "@/shared/icons/VkIcon";

const headerText1 = "Свяжитесь с нами";
const headerText2 = "любым удобным для вас способом";

export const Contacts = () => {
  return (
    <div className="w-full pt-[214px] pl-[77px] flex justify-between">
      <div>
        <h3 className="text-white text-[48px]  leading-[56px] mt-[93px] mb-[55px]">
          <span className="font-bold">{headerText1.toUpperCase()}</span>
          <br />
          <span className="font-medium">{headerText2.toUpperCase()}</span>
        </h3>
        <div className="text-white flex mb-[60px]">
          <div className="mr-[100px]  text-xl">
            <p className="mb-[28px] font-semibold">Контактный номер</p>
            <p className="font-medium">+7 (495) 374-92-07</p>
          </div>
          <div className="text-xl flex flex-col justify-evenly ">
            <p className="font-semibold">Время работы:</p>
            <p className="font-normal">ежедневно</p>
          </div>
        </div>
        <div className="text-white text-xl">
          <p className="font-semibold">Социальные сети:</p>
          <div className="flex items-center space-x-[28px]">
            <TelegramIcon className="cursor-pointer" />
            <InstagramIcon className="cursor-pointer" />
            <VkIcon className="cursor-pointer" />
          </div>
        </div>
      </div>
      <div>
        <Image src={contactsMan} alt="man" />
      </div>
    </div>
  );
};
