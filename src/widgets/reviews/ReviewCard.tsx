import { Avatar } from "@heroui/react";
import React from "react";

interface Props {
  name: string;
  text: string;
}

const ReviewCard = ({ name, text }: Props) => {
  return (
    <div className="w-[611px] h-[251px] rounded-[35px] bg-transparent border-1 border-white border py-[35px] pr-[43px] pl-[35px] flex">
      <Avatar
        className="w-[182px] h-[182px] mr-[38px] rounded-none text-xl font-semibold"
        showFallback
        src="https://images.unsplash.com/broken"
      />

      <div className="flex flex-direction flex-col mt-[5px] text-white">
        <span className="mb-[42px] text-xl font-semibold">{name}</span>
        <p className="font-light text-base">{text}</p>
      </div>
    </div>
  );
};

export default ReviewCard;
