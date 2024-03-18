import React from "react";
import GiftSvg from "../svg/GiftSvg";
import { useRouter } from "next/router";
import { giftCartContent } from "@/static/contents/sidebar";
import useTranslator from "@/utils/useTranslator";

const GiftCart = () => {
  const router = useRouter();
  let { locale } = router;
  const content: any = useTranslator(locale || "en", giftCartContent);
  return (
    <div
      className={`w-full flex items-center gap-x-4 sm:gap-x-[53px] bg-[#EAF4F9] pt-2.5 p-2.5 pr-4 sm:p-6 ${
        locale === "ar" ? " flex-row-reverse" : "flex-row "
      }`}
    >
      <GiftSvg />
      <div className="text-black-secondary space-y-2 sm:space-y-[22px]">
        <p className="capitalize text-sm font-arabic text-left">
          {content?.giftCartProductName}
        </p>
        <h6 className="capitalize text-base font-arabicBold text-left">
          {content?.giftText}
        </h6>
      </div>
      <span
        className={`border border-blue-400 rounded-md w-12 text-center text-blue-400 text-base ${
          locale === "ar" ? "mr-auto" : "ml-auto"
        }`}
      >
        {content?.giftNumber}
      </span>
    </div>
  );
};

export default GiftCart;
