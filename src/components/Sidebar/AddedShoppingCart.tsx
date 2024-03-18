import { commonSideBarProps } from "@/utils/type";
import React, { FC } from "react";
import Button from "../base/Button";
import SideBar from "../common/SideBar";
import LatestProductCart from "../cartItems/LatestProductCart";
import AddedCheckedCart from "../cartItems/AddedCheckedCart";
import { useRouter } from "next/router";
import { addedShoppingContent } from "@/static/contents/sidebar";
import useTranslator from "@/utils/useTranslator";

const AddedShoppingCart: FC<commonSideBarProps> = ({ viewCart, actionCb }) => {
  const router = useRouter();
  let { locale } = router;
  const content: any = useTranslator(locale || "en", addedShoppingContent);
  return (
    <SideBar
      value={viewCart}
      setCart={actionCb}
      groupClass="md:!w-[546px] !bg-white"
    >
      <div className="w-full h-full relative pt-8">
        <div
          className={`w-full flex items-start justify-between mb-11 px-8 ${
            locale === "ar" ? "flex-row-reverse" : "flex-row"
          }`}
        >
          <Button
            btnClass="!w-fit text-black-secondary "
            variant="naked"
            actionCb={() => {
              actionCb(!viewCart);
            }}
            icon="fa-solid fa-share-nodes !text-[34px] !leading-[38px]"
          />
          <Button
            btnClass="!w-fit text-black-secondary "
            variant="naked"
            actionCb={() => {
              actionCb(!viewCart);
            }}
            icon="fas fa-times !text-[24px] !leading-6"
          />
        </div>
        {/* -------------------- title button ends --------------------- */}
        <AddedCheckedCart />
        {/* -------------------- LatestProductCart --------------------- */}
        <div className="w-full pt-2.5">
          <h6 className="pl-6 capitalize font-arabicMedium text-xl text-black-700 text-left">
            {content?.latestProductsTitle}
          </h6>
          <div className="pt-7 px-1.5 w-full flex flex-row flex-wrap justify-center items-center gap-y-4 gap-x-2 sm:gap-y-[30px] sm:gap-x-7">
            {/* <LatestProductCart title="" /> */}
          </div>
        </div>
        {/* ------------------ footer section ----------------- */}
        <div className="dropDownShadow w-full flex flex-row justify-between bg-white sticky mt-auto bottom-0 pl-5 pr-3.5 py-7">
          <Button
            btnClass="!w-[48%] !capitalize !font-arabic !pb-2.5 !text-lg sm:!text-xl"
            variant="outlined"
            btnText={content?.continueMarketing}
          />
          <Button
            btnClass="!w-[48%] !capitalize !font-arabic !pb-2.5 !text-lg sm:!text-xl"
            variant="primary"
            btnText={content?.completeTheOrder}
          />
        </div>
      </div>
    </SideBar>
  );
};

export default AddedShoppingCart;
