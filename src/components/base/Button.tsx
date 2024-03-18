import React, { FC, ReactElement } from "react";

type buttonProps = {
  btnType?: "submit" | "reset" | "button";
  btnText?: string;
  btnClass?: string;
  icon?: string;
  suffixIcon?: string;
  prefixIcon?: string;
  variant?: "primary" | "naked" | "outlined";
  disabled?: boolean;
} & (
  | {
      btnType?: "reset" | "button";
      actionCb: () => void;
    }
  | {
      btnType?: "submit";
      actionCb?: () => void;
    }
);

/**
 *
 * @param param0
 * @returns
 */

const Button: FC<buttonProps> = ({
  btnText,
  icon,
  suffixIcon,
  prefixIcon,
  btnClass,
  actionCb,
  btnType = "button",
  variant = "primary",
  disabled
}) => {
  return (
    <button
      type={btnType}
      onClick={actionCb}
      className={`w-full rounded-[3px] font-arabicMedium flex justify-center items-center capitalize ${
        icon
          ? "px-0 py-0"
          : prefixIcon || suffixIcon
          ? "gap-x-2"
          : btnText
          ? "text-base text-center py-3 px-6"
          : ""
      } ${
        variant === "primary"
          ? "bg-black-primary text-white"
          : variant === "outlined"
          ? "bg-white text-black-primary border border-black-primary"
          : variant === "naked"
          ? "text-black-primary bg-white"
          : ""
      } ${btnClass} ${disabled ? "cursor-not-allowed bg-gray-200/20 text-gray-200" : ""}`}
      disabled={disabled}
    >
      {prefixIcon && <i className={`text-base ${prefixIcon}`}></i>}
      {icon && <i className={`text-xl ${icon}`}></i>}
      {btnText}
      {suffixIcon && <i className={`text-base ${suffixIcon}`}></i>}
    </button>
  );
};

export default Button;
