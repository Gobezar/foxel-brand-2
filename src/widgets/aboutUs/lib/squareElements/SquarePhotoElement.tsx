import React from "react";
import cl from "./SquareElem.module.scss";
import { LinkButton } from "@/shared";

interface Props {
  classNames: string;
  text: string;
}

const SquarePhotoElement = ({ classNames, text }: Props) => {
  return (
    <div className={classNames}>
      <LinkButton className={cl.linkButton} />
      <div className={cl.bluredText}>
        <span>{text}</span>
      </div>
    </div>
  );
};

export default SquarePhotoElement;
