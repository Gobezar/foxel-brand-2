import React from "react";
import cl from "./PopularCatalogButtons.module.scss";
import ArrowRightIcon from "@/shared/icons/ArrowRightIcon";
import ArrowLeftIcon from "@/shared/icons/ArrowLeftIcon";

interface Props {
  onClick: () => void;
}

export const ButtonBack = ({ onClick }: Props) => {
  return (
    <div className={cl.buttonBack} onClick={onClick}>
      <ArrowLeftIcon />
    </div>
  );
};

export const ButtonForward = ({ onClick }: Props) => {
  return (
    <div className={cl.buttonForward} onClick={onClick}>
      <ArrowRightIcon />
    </div>
  );
};

export const ButtonAction = ({ text }: { text: string }) => {
  return <div className={cl.buttonAction}>{text}</div>;
};
