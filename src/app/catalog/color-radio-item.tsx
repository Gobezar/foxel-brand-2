"use client";

import type { RadioProps } from "@heroui/react";

import React from "react";
import { Tooltip, VisuallyHidden, useRadio } from "@heroui/react";
import { cn } from "@heroui/react";

export type ColorRadioItemProps = Omit<RadioProps, "color"> & {
  color?: string;
  tooltip?: string;
};

const ColorRadioItem = React.forwardRef<HTMLInputElement, ColorRadioItemProps>(
  ({ color, tooltip, ...props }, ref) => {
    const {
      Component,
      isSelected,
      isFocusVisible,
      getBaseProps,
      getInputProps,
    } = useRadio(props);

    return (
      <Tooltip
        content={tooltip}
        delay={1000}
        isDisabled={!tooltip}
        offset={0}
        placement="bottom"
        color="foreground"
      >
        <Component {...getBaseProps()} ref={ref}>
          <VisuallyHidden>
            <input {...getInputProps()} />
          </VisuallyHidden>
          <span
            className={cn(
              "pointer-events-none h-8 w-8 rounded-full border border-black border-opacity-10 transition-transform group-data-[pressed=true]:scale-90",
              {
                "ring-1 ring-offset-1 ring-offset-content1": isSelected,
              }
            )}
            style={{
              backgroundColor: color,
              //   @ts-ignore
              "--tw-ring-color":
                isSelected || isFocusVisible ? "white" : "transparent",
            }}
          />
        </Component>
      </Tooltip>
    );
  }
);

ColorRadioItem.displayName = "ColorRadioItem";

export default ColorRadioItem;
