import React from "react";
import EmptyShoppingCartSvg from "../svg/EmptyShoppingCartSvg";
import { useRouter } from "next/router";
import { AddedCheckedCartContent } from "@/static/contents/sidebar";
import useTranslator from "@/utils/useTranslator";

const AddedCheckedCart = () => {
  const router = useRouter();
  let { locale } = router;
  const content: any = useTranslator(locale || "en", AddedCheckedCartContent);
  return (
    <div className="w-full space-y-3 mx-auto">
      <div className="relative w-[108px] h-[108px] rounded-full border-4 border-black bg-white flex justify-center items-center mx-auto">
        <span className="absolute w-14 h-28 -top-1 translate-x-1/2 bg-white"></span>
        <i className="fa-solid fa-circle-check text-[80px] text-[#4ECB71] relative z-10"></i>
      </div>
      <h6 className="text-lg md:text-xl text-center text-black-secondary font-arabicBold">
        {content?.productHasBeenAdded}
      </h6>
      <p className="text-lg md:text-xl text-center text-black-secondary font-arabicBold border-b border-ash-400 pb-[18px]">
        {content?.priceIs125}
      </p>
    </div>
  );
};

export default AddedCheckedCart;
