"use client";

import React from "react";
import { Button, Select, SelectItem, useDisclosure } from "@heroui/react";
import { Icon } from "@iconify/react";
import SidebarDrawer from "./sidebar-drawer";
import FiltersWrapper from "./FiltersWrapper";
import ecommerceItems from "./lib/ecommerce-items";
import ProductsGrid from "./products-grid";

export default function Catalog() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div className="max-w-8xl w-full mt-[50px] px-[78px] lg:px-[78px]">
      <div className="flex gap-x-6">
        <SidebarDrawer isOpen={isOpen} onOpenChange={onOpenChange}>
          <FiltersWrapper
            className="bg-default-100"
            items={ecommerceItems}
            scrollShadowClassName="max-h-full pb-12"
            showActions={false}
            title="Фильтры"
          />
        </SidebarDrawer>
        <div className="w-full flex-1 flex-col">
          <header className="relative z-20 flex flex-col gap-2 rounded-[25px] mb-[30px] bg-default-100 px-4 pb-3 pt-2 md:pt-3">
            <div className="flex items-center gap-1 md:hidden md:gap-2">
              <h2 className="text-large font-medium">Каталог</h2>
              <span className="text-small text-default-400">(1240)</span>
              {/* подставить реальный total когда бэк будет готов */}
            </div>
            <div className="flex  items-center justify-between gap-2 ">
              <div className="flex flex-row gap-2">
                <Button
                  className="flex border-default-200 sm:hidden"
                  startContent={
                    <Icon
                      className="text-default-500"
                      height={16}
                      icon="solar:filter-linear"
                      width={16}
                    />
                  }
                  variant="bordered"
                  onPress={onOpen}
                >
                  Фильтры
                </Button>
                <div className="hidden items-center gap-1 md:flex">
                  <h2 className="text-medium font-medium text-default">
                    Каталог
                  </h2>
                  <span className="text-small text-default-400">(1240)</span>
                  {/* подставить реальный total когда бэк будет готов */}
                </div>
              </div>
              <Select
                aria-label="Сортировка по"
                classNames={{
                  base: "items-center justify-end",
                  label:
                    "hidden lg:block text-tiny whitespace-nowrap md:text-small text-default-400",
                  mainWrapper: "max-w-[16rem]",
                  listbox: "bg-default-300 !rounded-[16px] text-default-600 ",
                  selectorIcon: "text-default-300",
                }}
                defaultSelectedKeys={["most_popular"]}
                label="Сортировка по"
                labelPlacement="outside-left"
                placeholder="Select an option"
                variant="bordered"
              >
                <SelectItem key="newest" value="newest">
                  Самые новые
                </SelectItem>
                <SelectItem key="price_low_to_high" value="price_low_to_high">
                  Дешевле
                </SelectItem>
                <SelectItem key="price_high_to_low" value="price_high_to_low">
                  Дороже
                </SelectItem>
                <SelectItem key="top_rated" value="top_rated">
                  Самый высокий рейтинг
                </SelectItem>
                <SelectItem key="most_popular" value="most_popular">
                  Наиболее популярные
                </SelectItem>
              </Select>
            </div>
          </header>
          <main className="mt-4 h-full w-full overflow-visible px-1">
            <div className="block rounded-medium border-medium border-dashed border-divider">
              <ProductsGrid />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
