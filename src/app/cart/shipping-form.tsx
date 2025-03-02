"use client";

import type { InputProps } from "@heroui/react";

import React from "react";
import { Autocomplete, AutocompleteItem, Avatar, Input } from "@heroui/react";
import { cn } from "@heroui/react";

import countries from "./lib/countries";

export type ShippingFormProps = React.HTMLAttributes<HTMLDivElement> & {
  variant?: InputProps["variant"];
  hideTitle?: boolean;
};

const ShippingForm = React.forwardRef<HTMLDivElement, ShippingFormProps>(
  ({ variant = "flat", className, hideTitle }, ref) => {
    return (
      <div ref={ref} className={cn("flex flex-col gap-4", className)}>
        {!hideTitle && (
          <span className="relative text-foreground-500">
            Shipping Information
          </span>
        )}
        <Input
          isRequired
          label="Email"
          labelPlacement="outside"
          placeholder="Введите Ваш email"
          type="email"
          variant={variant}
        />
        <div className="flex flex-wrap items-center gap-4 sm:flex-nowrap">
          <Input
            isRequired
            label="Имя"
            labelPlacement="outside"
            placeholder="Иван"
            variant={variant}
          />
          <Input
            isRequired
            label="Фамилия"
            labelPlacement="outside"
            placeholder="Иванов"
            variant={variant}
          />
        </div>
        <div className="flex flex-wrap items-center gap-4 sm:flex-nowrap">
          <Input
            isRequired
            label="Город"
            labelPlacement="outside"
            placeholder="Воронеж"
            variant={variant}
          />
          <Autocomplete
            isRequired
            defaultItems={countries}
            label="Страна"
            labelPlacement="outside"
            placeholder="Россия"
            showScrollIndicators={false}
            variant={variant}
          >
            {(item) => (
              <AutocompleteItem
                key={item.code}
                startContent={
                  <Avatar
                    alt="Country Flag"
                    className="h-6 w-6"
                    src={`https://flagcdn.com/${item.code.toLowerCase()}.svg`}
                  />
                }
                value={item.code}
              >
                {item.name}
              </AutocompleteItem>
            )}
          </Autocomplete>
        </div>
        <div className="flex flex-wrap items-center gap-4 sm:flex-nowrap">
          <Input
            isRequired
            label="Улица"
            labelPlacement="outside"
            placeholder="ул. Пушкина"
            variant={variant}
          />
          <Input
            isRequired
            label="Номер дома"
            labelPlacement="outside"
            placeholder="11"
            type="number"
            variant={variant}
          />
          <Input
            label="Номер квартиры"
            labelPlacement="outside"
            placeholder="143"
            type="number"
            variant={variant}
          />
        </div>

        <div className="flex flex-wrap items-center gap-4 sm:flex-nowrap">
          <Input
            isRequired
            label="Индекс"
            labelPlacement="outside"
            placeholder="12345"
            variant={variant}
          />
          <Input
            isRequired
            label="Номер телефона"
            labelPlacement="outside"
            placeholder="+7 (999) 555-5555"
            variant={variant}
          />
          <Input
            isRequired
            label="Telegram / WhatsApp"
            labelPlacement="outside"
            placeholder="@ivanovivan"
            variant={variant}
          />
        </div>
      </div>
    );
  }
);

ShippingForm.displayName = "ShippingForm";

export default ShippingForm;
