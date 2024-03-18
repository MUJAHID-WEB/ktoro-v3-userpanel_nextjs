import { useRouter } from "next/router";
import React, { ChangeEvent, FC, FocusEvent, useRef, useState } from "react";

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

const AuthTextField: FC<inputProps> = ({
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
  const [hasContent, setHasContent] = useState(!!value);

  return (
    <div
      className={`w-full flex flex-col justify-start items-start gap-1 group ${groupClass}`}
    >
      {label && (
        <label
          htmlFor={identifier}
          className={`text-gray-400 text-sm capitalize flex items-start gap-1  ${
            hasContent ? "opacity-0" : "group-focus-within:opacity-0"
          } ${
            router.locale === "ar"
              ? "flex-row-reverse ml-auto"
              : "flex-row mr-auto"
          } ${labelClass}`}
        >
          {label} {required && <span className="-mt-1">*</span>}
        </label>
      )}
      <div className="relative w-full group">
        {prefixIcon && (
          <button
            type="button"
            onClick={() => {
              inputRef.current?.focus();
              prefixCb && prefixCb();
            }}
            className="absolute z-50 left-5 top-1/2 -translate-y-1/2 w-6 h-6"
          >
            <i className={`text-gray-400 text-sm ${prefixIcon}`}></i>
          </button>
        )}
        <input
          ref={inputRef}
          type={inputType}
          name={identifier}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            onChangeCb(e);
            setHasContent(!!e.target.value);
          }}
          placeholder={placeholder}
          value={value}
          onBlur={(e: FocusEvent<HTMLInputElement>) => {
            onBlurCb && onBlurCb(e);
            setHasContent(!!e.target.value);
          }}
          id={identifier}
          className={`w-full border border-black-primary rounded-[5px] py-3.5 text-base font-medium pr-5 relative z-10 ${
            prefixIcon ? "pl-[52px]" : "pl-[27px]"
          } ${
            errorMsg
              ? "focus-visible:border-red-400 text-red-400 text-sm"
              : hasContent
              ? "placeholder:text-black-secondary bg-white focus-visible:placeholder:text-transparent focus-visible:border-blue-400  focus-visible:bg-white"
              : "placeholder:text-black-secondary bg-white focus-visible:placeholder:text-transparent focus-visible:border-blue-400  focus-visible:bg-white"
          } ${
            router.locale === "ar"
              ? " placeholder:text-right"
              : " placeholder:text-left"
          } ${inputClass} `}
        />
        <span
          ref={inputRef}
          className={`absolute transition-all font-arabicBold duration-200 bg-white px-4 transform  ${
            hasContent
              ? "-translate-y-1/2 z-10"
              : "group-focus-within:-translate-y-1/2 group-focus-within:z-10 translate-y-1/2"
          } ${errorMsg ? "text-red-400" : "text-black-primary "} ${
            router.locale === "ar" ? "right-3" : " left-3"
          } `}
        >
          {placeholder}
        </span>
        {caption && (
          <p className="text-xs text-gray-400 font-arabicMedium pt-1">
            {caption}
          </p>
        )}
      </div>
    </div>
  );
};

export default AuthTextField;
