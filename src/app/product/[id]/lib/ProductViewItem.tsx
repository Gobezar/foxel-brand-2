"use client";

import React from "react";
import {
  Accordion,
  AccordionItem,
  Button,
  Chip,
  Image,
  RadioGroup,
  ScrollShadow,
} from "@heroui/react";
import { Icon } from "@iconify/react";
import { cn } from "@heroui/react";
import RatingRadioGroup from "./RatingRadioGroup";
import TagGroupRadioItem from "./TagGroupRadioItem";

export type ProductViewItemColor = {
  name: string;
  hex: string;
};

export type ProductViewItem = {
  id: string;
  name: string;
  description?: string;
  images: string[];
  price: number;
  rating?: number;
  ratingCount?: number;
  sizes?: string[];
  isPopular?: boolean;
  details?: {
    title: string;
    items: string[];
  }[];
};

export type ProductViewInfoProps = Omit<
  React.HTMLAttributes<HTMLDivElement>,
  "id"
> & {
  isPopular?: boolean;
  isLoading?: boolean;
  removeWrapper?: boolean;
} & ProductViewItem;

const ProductViewInfo = React.forwardRef<HTMLDivElement, ProductViewInfoProps>(
  (
    {
      name,
      images,
      price,
      sizes,
      details,
      description,
      rating,
      ratingCount,
      isPopular,
      className,
      ...props
    },
    ref
  ) => {
    const [isStarred, setIsStarred] = React.useState(false);
    const [selectedImage, setSelectedImage] = React.useState(images[0]);

    return (
      <div
        ref={ref}
        className={cn(
          "relative flex flex-col gap-4 lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8",
          className
        )}
        {...props}
      >
        {/* Product Gallery */}
        <div className="relative h-full w-full flex-none">
          {isPopular && (
            <Chip
              className="absolute left-3 top-3 z-20 h-10 gap-1 bg-background/60 pl-3 pr-2 text-foreground/90 shadow-medium backdrop-blur-md backdrop-saturate-150 dark:bg-default-100/50"
              size="lg"
              startContent={<Icon icon="solar:star-bold" />}
            >
              Популярный товар
            </Chip>
          )}
          {/* Main Image */}
          <Image
            alt={name}
            className="h-full w-full rounded-[15px]"
            radius="lg"
            src={selectedImage}
          />
          {/* Image Gallery */}
          <ScrollShadow
            className="-mx-2 -mb-4 mt-4 flex w-full max-w-full gap-4 px-2 pb-4 pt-2"
            orientation="horizontal"
          >
            {images.map((image, index) => (
              <button
                key={`${image}-${index}`}
                className="relative h-24 w-24 flex-none cursor-pointer items-center justify-center rounded-[15px] ring-offset-background transition-shadow data-[selected=true]:outline-none data-[selected=true]:ring-2 data-[selected=true]:ring-red data-[selected=true]:ring-offset-2"
                data-selected={image === selectedImage}
                onClick={() => setSelectedImage(image)}
              >
                <Image
                  removeWrapper
                  alt={name}
                  classNames={{
                    img: "h-full w-full rounded-[15px]",
                  }}
                  radius="lg"
                  src={image}
                />
              </button>
            ))}
          </ScrollShadow>
        </div>

        {/* Product Info */}
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold tracking-tight text-default-700">
            {name}
          </h1>
          <h2 className="sr-only">Информация о товаре</h2>
          <div className="my-2 flex items-center gap-2">
            <RatingRadioGroup hideStarsText size="sm" value={`${rating}`} />
            <p className="text-small text-default-400">
              {ratingCount} {ratingCount === 1 ? "отзыв" : "отзывов"}
            </p>
          </div>
          <p className="text-xl font-medium tracking-tight text-default-700">
            &#8381;{price}
          </p>
          <div className="mt-4">
            <p className="sr-only">Описание товара</p>
            <p className="line-clamp-3 text-medium text-default-500">
              {description}
            </p>
          </div>

          <div className="mt-6 flex flex-col gap-1">
            <div className="mb-4 flex items-center gap-2 text-default-700">
              <Icon icon="carbon:delivery" width={24} />
              <p className="text-small font-medium">
                Бесплатная доставка, 14 дней на возврат
              </p>
            </div>
            <RadioGroup
              aria-label="Select size"
              className="gap-1"
              defaultValue="39"
              orientation="horizontal"
            >
              {sizes?.map((size) => (
                <TagGroupRadioItem key={size} size="lg" value={size}>
                  {size}
                </TagGroupRadioItem>
              ))}
            </RadioGroup>
          </div>
          <Accordion
            className="-mx-1 mt-2"
            itemClasses={{
              title: "text-default-400",
              content: "pt-0 pb-6 text-base text-default-500",
            }}
            items={details}
            selectionMode="multiple"
          >
            {details
              ? details.map(({ title, items }) => (
                  <AccordionItem key={title} title={title}>
                    <ul className="list-inside list-disc">
                      {items.map((item) => (
                        <li key={item} className="text-default-500">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </AccordionItem>
                ))
              : []}
          </Accordion>
          <div className="mt-2 flex gap-2">
            <Button
              fullWidth
              className="text-medium font-medium bg-red rounded-full"
              size="lg"
              startContent={<Icon icon="solar:cart-large-2-bold" width={24} />}
            >
              В корзину
            </Button>
            <Button
              isIconOnly
              className="text-default-600 bg-red rounded-full"
              size="lg"
              variant="flat"
              onPress={() => setIsStarred(!isStarred)}
            >
              {isStarred ? (
                <Icon icon="solar:heart-bold" width={24} />
              ) : (
                <Icon icon="solar:heart-linear" width={24} />
              )}
            </Button>
          </div>
        </div>
      </div>
    );
  }
);

ProductViewInfo.displayName = "ProductViewInfo";

export default ProductViewInfo;
