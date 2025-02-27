"use client";

import type { CheckboxProps } from "@heroui/react";

import React from "react";
import { Chip, VisuallyHidden, useCheckbox } from "@heroui/react";
import { Icon } from "@iconify/react";
import { cn } from "@heroui/react";

export type TagGroupItemProps = Omit<CheckboxProps, "icon"> & {
  icon?: string;
};

const TagGroupItem = React.forwardRef<HTMLLabelElement, TagGroupItemProps>(
  ({ icon, size = "md", ...props }, ref) => {
    const {
      children,
      isSelected,
      isFocusVisible,
      getBaseProps,
      getLabelProps,
      getInputProps,
    } = useCheckbox({
      ...props,
    });

    return (
      <label {...getBaseProps()} ref={ref}>
        <VisuallyHidden>
          <input {...getInputProps()} />
        </VisuallyHidden>
        <Chip
          classNames={{
            base: cn({
              "outline-none ring-2 ring-focus ring-offset-2 ring-offset-background ":
                isFocusVisible,
              "bg-red": isSelected,
            }),
            content: cn("!text-small text-primary-foreground", {
              "text-primary-foreground": isSelected,
              "pr-1": !!icon,
            }),
          }}
          radius="sm"
          size={size}
          startContent={
            icon ? (
              <Icon
                className={cn("text-default-400", {
                  "text-primary-foreground": isSelected,
                })}
                icon={icon}
                width={16}
              />
            ) : undefined
          }
          variant="flat"
          {...(getLabelProps() as any)}
        >
          {children}
        </Chip>
      </label>
    );
  }
);

TagGroupItem.displayName = "TagGroupItem";

export default TagGroupItem;
