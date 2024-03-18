import React, { FC, ReactNode, useEffect, useRef } from "react";
import Button from "../base/Button";
import { useRouter } from "next/router";
export type sideBarProps = {
  value: boolean;
  setCart: (e: boolean) => void;
  children: ReactNode;
  groupClass?: string;
};
const SideBar: FC<sideBarProps> = ({
  value,
  setCart,
  children,
  groupClass,
}) => {
  const router = useRouter();
  const cartBox = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (cartBox.current && !cartBox.current.contains(event.target)) {
        setCart(false);
      } else {
        setCart(true);
      }
    };

    document.addEventListener("click", handleClickOutside, true);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [cartBox, setCart]);

  return (
    <div
      className={`h-screen bg-black-700/60 w-full flex justify-end fixed z-20 transition-opacity ease-in-out duration-700 top-0 right-0 ${
        value ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      <div
        ref={cartBox}
        className={`h-screen overflow-y-auto bg-ash-100 w-full lg:w-[534px] absolute transition-all duration-500 ${
          router.locale === "ar"
            ? value
              ? "right-0"
              : "-right-full"
            : value
            ? "left-0"
            : "-left-full"
        } ${groupClass}`}
      >
        {children}
      </div>
    </div>
  );
};

export default SideBar;
