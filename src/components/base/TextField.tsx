import { useRouter } from "next/router";
import React, { ChangeEvent, FC, FocusEvent, useRef } from "react";

export type inputProps = {
  inputType?: "text" | "email" | "password";
  onChangeCb: (e: ChangeEvent<HTMLInputElement>) => void;
  identifier: string;
  label?: string;
  required?: boolean;
  prefixCb?: () => void;
  value?: string | number | readonly string[] | undefined;
  onBlurCb?: (e: FocusEvent<HTMLInputElement>) => void;
  errorMsg?: string | false | undefined;
  placeholder?: string;
  labelClass?: string;
  caption?: string;
  groupClass?: string;
  inputClass?: string;
  prefixIcon?: string;
} & (
  | {
      inputType: "password";
      showStrength?: boolean;
    }
  | {
      inputType?: Exclude<"text" | "email", "password">;
      showStrength?: never;
    }
);

const TextField: FC<inputProps> = ({
  onChangeCb,
  prefixCb,
  prefixIcon,
  label,
  required = false,
  labelClass,
  inputClass,
  groupClass,
  errorMsg,
  placeholder,
  identifier,
  value,
  onBlurCb,
  inputType = "text",
  caption,
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
          className={`text-gray-400 text-[12px] uppercase leading-[15px] flex items-start gap-1 ${
            router.locale === "ar"
              ? "flex-row-reverse ml-auto"
              : "flex-row mr-auto"
          } ${labelClass}`}
        >
          {label} {required && <span className="-mt-1">*</span>}
        </label>
      )}
      <div className="relative w-full">
        {prefixIcon && (
          <button
            type="button"
            onClick={() => {
              inputRef.current?.focus();
              prefixCb && prefixCb();
            }}
            className="absolute z-50 left-5 top-1/2 -translate-y-1/2 w-6 h-6  "
          >
            <i className={`text-gray text-sm ${prefixIcon}`}></i>
          </button>
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
          className={`w-full border border-ash-200 rounded-[3px] py-3.5 text-base font-medium pr-5 relative z-10 ${
            prefixIcon ? "pl-[52px]" : "pl-[27px]"
          } ${
            errorMsg
              ? "placeholder:text-red-400 bg-red-300 focus-visible:border-white text-red-400 text-sm"
              : "placeholder:text-ash-600 bg-white focus-visible:placeholder:text-black-primary focus-visible:border-black-primary text-black-primary focus-visible:bg-white"
          } ${
            router.locale === "ar"
              ? " placeholder:text-right"
              : " placeholder:text-left"
          } ${inputClass} `}
        />
        {caption && (
          <p className="text-xs text-gray-400 font-arabicMedium pt-1">
            {caption}
          </p>
        )}
      </div>
    </div>
  );
};

export default TextField;
