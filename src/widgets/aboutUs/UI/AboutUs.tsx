import clsx from "clsx";
import React from "react";
import cl from "./AboutUs.module.scss";
import { league_spartan } from "@/config/fonts";
import SquarePhotoElement from "../lib/squareElements/SquarePhotoElement";
import SquareBorderedElement from "../lib/squareElements/SquareBorderedElement";
import { LinkButton } from "@/shared";

const aboutUsTextCollection = {
  id1_1: {
    header: "О нас",
    text_1: "foxel brand",
    text_2:
      " - это бренд, который был создан с целью предоставить современные и стильные решения в области дизайна и маркетинга.",
  },
  id1_2: {
    header: null,
    text_1: null,
    text_2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
  id1_3: {
    header: "24/7",
    text_1: "работаем без выходных",
    text_2:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
  },
  id2_1: {
    header: null,
    text_1: null,
    text_2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ",
  },
  id2_2: {
    header: "95%",
    text_1: "довольных клиентов",
    text_2:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ",
  },
  id2_3: {
    header: "+55",
    text_1: "позиций одежды",
    text_2:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
  },
  id3: {
    header: null,
    text_1: null,
    text_2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ",
  },
};

export const AboutUs = () => {
  return (
    <div className={cl.container}>
      {/* Первые три ячейки */}
      <div className={clsx(cl.squareElem, cl.id1_1)}>
        <h2 className={cl.squareHeader}>
          {aboutUsTextCollection.id1_1.header.toUpperCase()}
        </h2>
        <div style={{ textAlign: "justify" }}>
          <span className={clsx(cl.id1_1_text_1, league_spartan.className)}>
            {aboutUsTextCollection.id1_1.text_1}
          </span>
          <span className={cl.id1_1_text_2}>
            {aboutUsTextCollection.id1_1.text_2}
          </span>
        </div>
      </div>
      <SquarePhotoElement
        classNames={clsx(cl.squareElem, cl.id1_2)}
        text={aboutUsTextCollection.id1_2.text_2}
      />
      <SquareBorderedElement
        classNames={clsx(cl.squareElem, cl.id1_3)}
        textHeader={aboutUsTextCollection.id1_3.header}
        text1={aboutUsTextCollection.id1_3.text_1}
        text2={aboutUsTextCollection.id1_3.text_2}
      />
      {/* Большая ячейка на 2 строки */}
      <div className={cl.verticalSquareWrapper}>
        <LinkButton className={cl.linkButton} />
        <div className={clsx(cl.verticalSquare, cl.id3)}>
          <div className={cl.bluredText}>
            <span>{aboutUsTextCollection.id3.text_2}</span>
          </div>
        </div>
      </div>
      {/* Вторая строка */}
      <SquarePhotoElement
        classNames={clsx(cl.squareElem, cl.id2_1)}
        text={aboutUsTextCollection.id2_1.text_2}
      />
      <SquareBorderedElement
        classNames={clsx(cl.squareElem, cl.id2_2)}
        textHeader={aboutUsTextCollection.id2_2.header}
        text1={aboutUsTextCollection.id2_2.text_1}
        text2={aboutUsTextCollection.id2_2.text_2}
      />
      <SquareBorderedElement
        classNames={clsx(cl.squareElem, cl.id2_3)}
        textHeader={aboutUsTextCollection.id2_3.header}
        text1={aboutUsTextCollection.id2_3.text_1}
        text2={aboutUsTextCollection.id2_3.text_2}
      />
    </div>
  );
};
