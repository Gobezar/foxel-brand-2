"use client";

import React from "react";
import cl from "./Menu.module.scss";
import Link from "next/link";
import clsx from "clsx";
import { league_spartan, raleway } from "@/config/fonts";
import SearchIcon from "@/shared/icons/SearchIcon";
import FavoriteIcon from "@/shared/icons/FavoriteIcon";

const menuItems = [
  { label: "О нас", key: "1", href: "#about" },
  { label: "Отзывы", key: "2", href: "#reviews" },
  { label: "Покупателям", key: "3", href: "#buyers" },
  { label: "Контакты", key: "4", href: "#contacts" },
  { label: "Каталог", key: "5", href: "#catalog" },
];

const Menu = () => {
  return (
    <div className={clsx(cl.headerWrapper, "text-white")}>
      <div>
        <span className={clsx(league_spartan.className, cl.brand)}>
          foxel brand
        </span>
      </div>
      <div className={cl.menuContainer}>
        {menuItems.map((item) =>
          +item.key <= 4 ? (
            <Link
              href={item.href}
              key={item.key}
              className={clsx(cl.menuItem, raleway.className)}
              style={{ textDecoration: "none" }}
            >
              {item.label.toUpperCase()}
            </Link>
          ) : null
        )}
      </div>
      <div className={cl.actionsContainer}>
        <div className={cl.catalog}>
          <Link
            href={menuItems[4].href}
            key={menuItems[4].key}
            className={clsx(cl.menuItem, raleway.className)}
            style={{ textDecoration: "none" }}
          >
            {menuItems[4].label.toUpperCase()}
          </Link>
        </div>
        <div className={cl.actionsIconsWrapper}>
          <div className={clsx(cl.icon, cl.searchIcon)}>
            <SearchIcon />
          </div>
          <div className={clsx(cl.icon, cl.favoriteIcon)}>
            <FavoriteIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
