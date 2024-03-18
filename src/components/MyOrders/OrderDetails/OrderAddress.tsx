import React from "react";
import { useRouter } from "next/router";
import { myOrderAddressContent } from "@/static/contents/myOrder";
import useTranslator from "@/utils/useTranslator";

const OrderAddress = ({ orderItem }: any) => {
  const router = useRouter();
  const { locale } = router;
  const content: any = useTranslator(locale || "en", myOrderAddressContent);
  return (
    <div className="border border-gray-200/70 rounded-md">
      {/* Card Header */}
      <div className="p-4 border-b border-gray-200/70">
        <h3
          className={`font-semibold text-xl ${
            locale === "ar" ? "text-right" : "text-left"
          }`}
        >
          {content?.orderAddressTitle}
        </h3>
      </div>
      {/* Card Content */}
      <div className="p-4 space-y-4 font-semibold">
        <div className={`${locale === "ar" ? "text-right" : "text-left"}`}>
          <p>{content?.abdallhElzayat} </p>
          <p>({content?.yourAddressHere})</p>
        </div>
      </div>
    </div>
  );
};

export default OrderAddress;
