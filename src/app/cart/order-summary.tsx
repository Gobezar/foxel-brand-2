"use client";

import React from "react";
import { Button, Divider, Input } from "@heroui/react";
import OrderSummaryItem, { OrderSummaryItemType } from "./order-summary-item";

export type OrderSummaryProps = React.HTMLAttributes<HTMLDivElement> & {
  hideTitle?: boolean;
  items: OrderSummaryItemType[];
};

const OrderSummary = React.forwardRef<HTMLDivElement, OrderSummaryProps>(
  ({ hideTitle, items, ...props }, ref) => (
    <div ref={ref} {...props}>
      {!hideTitle && (
        <>
          <h2 className="font-medium text-default-500">Ваш заказ</h2>
          <Divider className="mt-4" />
        </>
      )}
      <h3 className="sr-only">Товары в Вашей корзине</h3>
      <ul>
        {items?.map((item) => (
          <OrderSummaryItem key={item.id} {...item} />
        ))}
      </ul>
      <div>
        <form
          className="mb-4 mt-6 flex items-end gap-2"
          onSubmit={(e) => e.preventDefault()}
        >
          <Input
            classNames={{
              label: "text-default-700",
              inputWrapper: "bg-background",
              input: "text-white ",
            }}
            color="default"
            label="Промокод"
            labelPlacement="outside"
            placeholder="Введите Ваш промокод"
            variant="bordered"
          />
          <Button className="bg-red rounded-full">Применить</Button>
        </form>
        <dl className="flex flex-col gap-4 py-4">
          <div className="flex justify-between">
            <dt className="text-small text-default-500">Стоимость</dt>
            <dd className="text-small font-semibold text-default-700">
              $159.96
            </dd>
          </div>
          <div className="flex justify-between">
            <dt className="text-small text-default-500">Скидка</dt>
            <dd className="text-small font-semibold text-success"> - $10.99</dd>
          </div>
          <Divider />
          <div className="flex justify-between">
            <dt className="text-small font-semibold text-default-500">
              Итоговая стоимость
            </dt>
            <dd className="text-small font-semibold text-default-700">
              $172.96
            </dd>
          </div>
        </dl>
      </div>
    </div>
  )
);

OrderSummary.displayName = "OrderSummary";

export default OrderSummary;
