import React, { ChangeEvent, FC, FocusEvent, useRef } from "react";
import Flag from "../svg/Flag";
import { useRouter } from "next/router";

export type inputProps = {
  inputType?: "text" | "number";
  onChangeCb: (e: ChangeEvent<HTMLInputElement>) => void;
  identifier: string;
  label?: string;
  labelClass?: string;
  prefixCb?: () => void;
  suffixCb?: () => void;
  value?: string | number | readonly string[] | undefined;
  onBlurCb?: (e: FocusEvent<HTMLInputElement>) => void;
  errorMsg?: string | false | undefined;
  option?: string;
  placeholder?: string;
  groupClass?: string;
  inputClass?: string;
  prefixIcon?: string;
  suffixIcon?: string;
};

const NumberField: FC<inputProps> = ({
  onChangeCb,
  prefixCb,
  suffixCb,
  prefixIcon,
  suffixIcon,
  label,
  inputClass,
  groupClass,
  errorMsg,
  placeholder,
  identifier,
  value,
  onBlurCb,
  labelClass,
  option,
  inputType = "text",
}) => {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div
      className={`w-full flex flex-col justify-start items-start gap-1 ${groupClass}`}
    >
      {label && (
        <label
          htmlFor={identifier}
          className={`text-black-primary text-[12px] uppercase leading-[15px] ${labelClass}`}
        >
          {label}
        </label>
      )}
      <div className="relative w-full">
        {prefixIcon && (
          <div
            className={`absolute z-20 top-1/2 -translate-y-1/2 h-9 flex justify-center items-center gap-x-[9px] ${
              router.locale === "ar"
                ? "right-5 flex-row-reverse"
                : "left-5 flex-row"
            }`}
          >
            <button
              type="button"
              onClick={() => {
                inputRef.current?.focus();
                prefixCb && prefixCb();
              }}
              className={`flex justify-center items-center gap-x-3.5 ${
                router.locale === "ar" ? "flex-row-reverse" : "flex-row"
              }`}
            >
              <Flag />
              <span
                className={`text-[13px] leading-[19px] font-arabicMedium text-black-secondary border-ash-200 py-0.5 ${
                  router.locale === "ar"
                    ? "border-l pl-[9px]"
                    : "border-r pr-[9px]"
                }`}
              >
                +966
                <i className={`pl-0.5 text-sm ${prefixIcon}`}></i>
              </span>
            </button>
            {suffixIcon && (
              <button
                type="button"
                onClick={() => {
                  inputRef.current?.focus();
                  suffixCb && suffixCb();
                }}
                className="flex justify-center items-center gap-x-3.5"
              >
                <span
                  className={`text-[13px] leading-[19px] font-arabicMedium text-black-secondary border-ash-200 py-0.5 ${
                    router.locale === "ar"
                      ? "border-l pl-[9px]"
                      : "border-r pr-[9px]"
                  }`}
                >
                  50
                  <i className={`pl-0.5 text-sm ${suffixIcon}`}></i>
                </span>
              </button>
            )}
          </div>
        )}
        <input
          ref={inputRef}
          type={inputType}
          name={identifier}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            onChangeCb(e);
          }}
          placeholder={placeholder}
          value={value}
          onBlur={onBlurCb}
          id={identifier}
          className={`w-full border border-ash-200 rounded-[3px] py-4 text-sm font-arabicMedium pr-5 relative z-10 ${
            suffixIcon && prefixIcon
              ? router.locale === "ar"
                ? "pr-[166px]"
                : "pl-[166px]"
              : prefixIcon
              ? router.locale === "ar"
                ? "pr-28"
                : "pl-28"
              : "pl-6"
          } ${
            errorMsg
              ? "placeholder:text-red-400 bg-red-300 focus-visible:border-white text-red-400 text-sm"
              : "placeholder:text-[#9E9E9E] bg-white placeholder:capitalize focus-visible:placeholder:text-black-primary focus-visible:border-black-primary text-black-primary focus-visible:bg-white"
          } ${
            router.locale === "ar"
              ? " placeholder:text-right"
              : " placeholder:text-left"
          } ${inputClass} `}
        />
        {option && (
          <p
            className={`Capitalize text-xs text-gray-400 font-arabicMedium absolute -top-2  z-10 px-1.5 bg-white ${
              router.locale === "ar" ? "right-[18px]" : "left-[18px]"
            }`}
          >
            {option}
          </p>
        )}
      </div>
    </div>
  );
};

export default NumberField;
