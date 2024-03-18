import React from "react";
import EmptyShoppingCartSvg from "../svg/EmptyShoppingCartSvg";
import { useRouter } from "next/router";
import { emptyShoppingCartContent } from "@/static/contents/sidebar";
import useTranslator from "@/utils/useTranslator";

const EmptyShoppingCart = () => {
  const router = useRouter();
  let { locale } = router;
  const content: any = useTranslator(locale || "en", emptyShoppingCartContent);
  return (
    <div className="w-[285px] space-y-3 mx-auto my-12">
      <div className="w-32 h-32 rounded-full bg-blue-200 flex justify-center items-center mx-auto">
        <EmptyShoppingCartSvg />
      </div>
      <h6 className="text-xl text-center text-black-secondary font-arabicBold">
        {content?.emptyCartTitle}
      </h6>
      <p className="text-lg text-center text-black-secondary font-arabicLight">
        {content?.emptyCartSubTitle}
      </p>
    </div>
  );
};

export default EmptyShoppingCart;
