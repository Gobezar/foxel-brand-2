"use client";

import React from "react";
import cl from "./FrequentQuestions.module.scss";

const headerText = "Частые вопросы";

export const FrequentQuestions = () => {
  return (
    <div className={cl.container}>
      <div className={cl.headerWrapper}>
        <h2>{headerText.toUpperCase()}</h2>
      </div>
    </div>
  );
};
