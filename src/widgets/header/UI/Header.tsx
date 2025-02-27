"use client";

import Image from "next/image";
import Menu from "../lib/menu/Menu";
import headerMan from "../../../../public/headerMan.webp";
import foxelLogo from "../../../../public/foxelLogo.webp";
import cl from "./Header.module.scss";
import { league_spartan } from "@/config/fonts";
import { Button } from "@/shared";
import ArrowRightIcon from "@/shared/icons/ArrowRightIcon";
import CartIcon from "@/shared/icons/CartIcon";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
const headerButtons = {
  orderButton: "Оформить заказ",
  catalog: <ArrowRightIcon />,
  cart: <CartIcon />,
};

export const StyledHeader = () => {
  const pathname = usePathname();
  return (
    <>
      <Menu />
      {pathname === "/" && ( // Проверяем, что текущая страница - главная
        <div className={cl.container}>
          <Image src={headerMan} alt="headerMan" draggable={false} />
          <h1 className={league_spartan.className}>
            <span className={clsx(cl.firstH1, "text-white")}>foxel •</span>
            <span className={clsx(cl.secondH1, "text-white")}>brand</span>
          </h1>
          <Image
            src={foxelLogo}
            alt="foxel"
            draggable={false}
            className={cl.foxelLogo}
          />
          <div className={clsx(cl.description, "text-white")}>
            <p>Бренд для тех, кто ценит</p>
            <p>стиль, свободу и самовыражение.</p>
          </div>
          <Button className={cl.orderButton}>
            {headerButtons.orderButton.toUpperCase()}
          </Button>
          <div className={clsx(cl.actionsButtonWrapper, "text-white")}>
            <Link href="/catalog">Каталог</Link>
            <Button onlyIcon className={cl.catalogButton}>
              {headerButtons.catalog}
            </Button>
            <Button onlyIcon>{headerButtons.cart}</Button>
          </div>
        </div>
      )}
    </>
  );
};
