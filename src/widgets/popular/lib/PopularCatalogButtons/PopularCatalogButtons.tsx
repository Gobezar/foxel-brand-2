import React from "react";
import cl from "./PopularCatalogButtons.module.scss";

export const ButtonAction = ({ text }: { text: string }) => {
  return <div className={cl.buttonAction}>{text}</div>;
};
