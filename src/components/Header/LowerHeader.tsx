import Link from "next/link";
import LogoWhite from "../svg/LogWhite";
import React, { useContext, useState } from "react";
import Cart from "../svg/Cart";
import User from "../svg/User";
import Search from "../svg/Search";
import { Menu } from "../Home/Menu";
import { LogoMobile } from "../svg/LogoMobile";
import CartSideBar from "../Sidebar/CartSideBar";
import { useRouter } from "next/router";
import DropdownMenu from "./DropdownMenu";
import AppContext from "@/context/appContext";

export const LowerHeader = () => {
  const router = useRouter();
  let { locale } = router;
  const [isOpen, setIsOpen] = useState(false);
  // state for toogle the dropdown menu
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const { cart } = useContext<any>(AppContext);

  return (
    <>
      <section className="bg-black-secondary w-full sm:hidden md:block">
        <div
          className={`container flex flex-row justify-between items-center bg-black-secondary text-ash-400 py-6 font-arabic font-normal text-base condition ${
            locale === "ar" ? "flex-row" : "flex-row-reverse"
          }`}
        >
          <div className="flex flex-row justify-start items-center gap-4">
            {/* Shopping Cart */}
            <button
              type="button"
              onClick={() => setIsOpen(true)}
              className="flex flex-row justify-start border-r pr-4 items-center gap-1.5 relative"
            >
              {cart?.length > 0 && (
                <span className="w-5 h-5 p-1 text-xs flex justify-center items-center rounded-full absolute -top-2 right-2 bg-white text-black-500">
                  {cart.length}
                </span>
              )}
              <span className=" text-base font-normal">سله المشتريات</span>
              <Cart />
            </button>
            <CartSideBar viewCart={isOpen} actionCb={setIsOpen} />
            {/* User */}
            <div
              className="flex flex-row justify-start items-center gap-1.5 relative cursor-pointer"
              onClick={() => setOpenMenu(!openMenu)}
            >
              <p className=" text-base font-normal">حسابي</p>
              <User />

              {/* my account dropdown section  */}
              {openMenu && <DropdownMenu />}
            </div>
          </div>
          {/* Search Box */}
          <div className="flex flex-row bg-[#404040] rounded-full items-center gap-2 py-3.5 px-6">
            <input
              type="text"
              placeholder="عن ماذا تبحث ؟"
              className="bg-[#404040] text-right rounded-full xl:w-[575px] lg:w-[360px] md:w-[150px]"
            />
            <Search />
          </div>
          {/* KTORO Logo*/}
          <div className="h-[56px] w-[204.12]">
            <Link href={"/"}>
              <LogoWhite />
            </Link>
          </div>
        </div>
      </section>
      {/* Mobile Responsive */}
      <section className="bg-black-secondary w-full md:hidden sm:block">
        <div className="container flex flex-row justify-between items-center bg-black-secondary text-ash-400 py-4 font-arabic font-normal text-base ">
          <div className="flex flex-row justify-start items-center gap-4">
            {/* Shopping Cart and User */}
            <div className="flex flex-row justify-start items-center gap-2.5">
              <Cart />
              <User />
            </div>
          </div>
          {/* KTORO Logo and Navbar */}
          <div className="flex flex-row justify-start items-center gap-2.5">
            <Link href={"/"}>
              <LogoMobile />
            </Link>
            <Menu />
          </div>
        </div>
      </section>
    </>
  );
};
