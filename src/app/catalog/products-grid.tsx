"use client";

import React from "react";
import { cn } from "@heroui/react";
import ProductListItem from "./product-list-item";
import products from "./lib/products";
import ProductCard from "@/widgets/productCard/ProductCard";

export type ProductGridProps = React.HTMLAttributes<HTMLDivElement> & {
  itemClassName?: string;
};

const ProductsGrid = React.forwardRef<HTMLDivElement, ProductGridProps>(
  ({ itemClassName, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          // "grid w-full grid-cols-1 gap-0 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-y-[50px]",
          "grid w-full grid-cols-1 gap-4 gap-y-[50px] sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4  ",
          className
        )}
        {...props}
      >
        {products.map((product) => (
          // <ProductListItem
          //   key={product.id}
          //   removeWrapper
          //   {...product}
          //   className={cn("w-full snap-start", itemClassName)}
          // />
          <ProductCard
            key={product.id}
            price={product.price}
            type={product.type}
            brand={product.brand}
            className={cn("!w-auto max-w-[318px] snap-start", itemClassName)}
          />
        ))}
      </div>
    );
  }
);

ProductsGrid.displayName = "ProductsGrid";

export default ProductsGrid;
