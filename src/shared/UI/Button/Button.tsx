"use client";

import { ComponentProps, FC } from "react";
import clsx from "clsx";
import cl from "./Button.module.scss";
import { raleway } from "@/config/fonts";
import ArrowTopRight from "@/shared/icons/ArrowTopRight";
import { Button } from "@heroui/react";

interface CustomButtonProps {
  onlyIcon?: boolean;
  className?: string;
}

export const StyledButton: FC<
  ComponentProps<typeof Button> & CustomButtonProps
> = ({ onlyIcon, className, ...props }) => {
  return (
    <Button
      className={clsx(
        raleway.className,
        cl.Button,
        onlyIcon ? cl.onlyIcon : "",
        className
      )}
      {...props}
    />
  );
};

export const LinkButton: FC<
  ComponentProps<typeof Button> & CustomButtonProps
> = ({ onClick, className }) => {
  return (
    <Button className={clsx(cl.linkButton, className)} onClick={onClick}>
      <ArrowTopRight />
    </Button>
  );
};
