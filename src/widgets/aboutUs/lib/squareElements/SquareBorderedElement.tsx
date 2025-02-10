import React from "react";
import cl from "./SquareElem.module.scss";

interface Props {
  classNames: string;
  textHeader: string;
  text1: string;
  text2: string;
}

const SquareBorderedElement = ({
  classNames,
  textHeader,
  text1,
  text2,
}: Props) => {
  return (
    <div className={classNames}>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <span className={cl.squareHeader}>{textHeader}</span>
        <span>{text1}</span>
      </div>
      <span>{text2}</span>
    </div>
  );
};

export default SquareBorderedElement;
