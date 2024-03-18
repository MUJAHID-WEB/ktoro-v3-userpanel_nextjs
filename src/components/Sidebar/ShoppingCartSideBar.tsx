import { commonSideBarProps } from "@/utils/type";
import React, { FC, useContext } from "react";
import Button from "../base/Button";
import SideBar from "../common/SideBar";
import LatestProductCart from "../cartItems/LatestProductCart";
import GiftCart from "../cartItems/GiftCart";
import ProductCart from "../cartItems/ProductCart";
import EmptyShoppingCart from "../cartItems/EmptyShoppingCart";
import { useRouter } from "next/router";
import {
  productArr,
  shoppingCartSideBarContent,
} from "@/static/contents/sidebar";
import useTranslator from "@/utils/useTranslator";
import AppContext from "@/context/appContext";

const ShoppingCartSideBar: FC<commonSideBarProps> = ({
  viewCart,
  actionCb,
}) => {
  const router = useRouter();
  let { locale } = router;
  const content: any = useTranslator(
    locale || "en",
    shoppingCartSideBarContent
  );
  const { cart } = useContext<any>(AppContext);

  // handle shopping cart route & close sidebar
  const handleSoppingCart = () => {
    actionCb(!viewCart);
    router.push(content.url);
  };

  return (
    <SideBar
      value={viewCart}
      setCart={actionCb}
      groupClass="md:!w-[546px] !bg-white"
    >
      <div className="w-full h-screen relative pt-14">
        <div className="w-full flex flex-row mb-5">
          <h6 className="ml-auto text-xl font-arabicBold text-black-secondary">
            {content?.shoppingCartTitle}
          </h6>
          <Button
            btnClass="!w-fit text-black-secondary !ml-auto !mr-4"
            variant="naked"
            actionCb={() => {
              actionCb(!viewCart);
            }}
            icon="fas fa-times !text-[24px] !leading-6"
          />
        </div>
        {/* -------------------- title button ends --------------------- */}
        {cart?.length <= 0 && <EmptyShoppingCart />}
        <div className="w-full space-y-2 sm:space-y-3.5 sm:pt-4 sm:pb-[23px] p-3 sm:px-5 md:px-[60px] bg-[#F8F8F8]">
          <p
            className={`px-4 sm:px-8 md:px-0 text-sm font-arabic tracking-tighter text-gray-500 ${
              locale === "ar" ? "text-right" : "text-left"
            }`}
          >
            {content?.freeShipping}
            <span className="font-arabicBold text-blue-400 px-px">
              {content?.placeName}
            </span>
            {content?.freeShipping2}
            <span className="text-green-400 px-px">135.15</span>
            {content?.freeShipping3}
          </p>
          <span className="relative rounded-full w-full bg-ash-400 h-2 flex">
            <span
              className={`h-2 absolute w-1/2 rounded-full bg-gradient-to-r from-sky-700 to-sky-400 ${
                locale === "ar" ? "right-0" : "left-0 "
              }`}
            />
          </span>
        </div>
        {/* -------------------- free shipping progress ends --------------------- */}
        <div className="w-full flex flex-col justify-start items-start">
          <p
            className={`w-full p-2 pl-5 border-b border-ash-300 text-xl tracking-tighter text-black-secondary uppercase font-arabicBold ${
              locale === "ar" ? "text-right" : "text-left"
            }`}
          >
            {content?.yourBag}
            <span className=" font-arabicLight">
              {" "}
              ({cart?.length} {content?.sideItem})
            </span>
          </p>
          {/* -------------------- product cart --------------------- */}
          <ProductCart cartItems={cart} />
          {/* -------------------- My Gifts  --------------------- */}
          <div className="w-full flex flex-col justify-start items-start gap-y-2">
            <p
              className={`capitalize pl-1.5 text-sm font-arabicBold text-green-400 ${
                locale === "ar" ? "ml-auto" : "mr-auto"
              }`}
            >
              {content?.titleFreeGift}
            </p>
            <GiftCart />
            <GiftCart />
          </div>
        </div>
        {/* -------------------- LatestProductCart --------------------- */}
        {/* <div className="w-full pt-9">
          <h6 className="pl-6 capitalize font-arabicMedium text-xl text-black-700 text-left">
            {router.locale === "ar"
              ? "تسوق من احدث المنتجات"
              : "the latest products"}
          </h6>
          <div className="pt-7 px-1.5 w-full flex flex-row flex-wrap justify-center items-center gap-y-4 gap-x-2 sm:gap-y-[30px] sm:gap-x-7">
          </div>
        </div> */}
        <LatestProductCart
          title={content?.titleTheProduct}
          productArr={productArr}
        />
        {/* ------------------ footer section ----------------- */}
        <div className="dropDownShadow w-full bg-white sticky mt-auto bottom-0 px-5 sm:pl-[37px] sm:pr-[29px] py-2.5 sm:py-7">
          <p className="font-arabic text-lg sm:text-xl pb-6 text-center">
            {/* {router.locale === "ar"
              ? "الإجمالي : 3 منتجات - 1950 ريال"
              : "Total: 3 products - 1950 riyals"} */}
            {content?.totalPrice1950}
          </p>
          <button
            onClick={handleSoppingCart}
            className="text-center block w-full text-white bg-black-primary capitalize font-arabic pb-4 pt-3 text-lg sm:text-xl"
          >
            {content?.btnTextOrder}
          </button>
        </div>
      </div>
    </SideBar>
  );
};

export default ShoppingCartSideBar;
