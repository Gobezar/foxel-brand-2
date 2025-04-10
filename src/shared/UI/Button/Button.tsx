"use client";

import { ComponentProps, FC } from "react";
import clsx from "clsx";
import cl from "./Button.module.scss";
import { raleway } from "@/config/fonts";
import ArrowTopRight from "@/shared/icons/ArrowTopRight";
import { Button } from "@heroui/react";
import ArrowLeftIcon from "@/shared/icons/ArrowLeftIcon";
import ArrowRightIcon from "@/shared/icons/ArrowRightIcon";

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

export const LinkButton = ({
  onClick,
  className,
}: {
  onClick: () => void;
  className: string;
}) => {
  return (
    <div className={clsx(cl.linkButton, className)} onClick={onClick}>
      <ArrowTopRight />
    </div>
  );
};

export const ButtonBack = ({ onClick }: { onClick: () => void }) => {
  return (
    <div className={cl.buttonBack} onClick={onClick}>
      <ArrowLeftIcon />
    </div>
  );
};

export const ButtonForward = ({ onClick }: { onClick: () => void }) => {
  return (
    <div className={cl.buttonForward} onClick={onClick}>
      <ArrowRightIcon />
    </div>
  );
};
