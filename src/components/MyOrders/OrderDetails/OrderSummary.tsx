import React from "react";
import { useRouter } from "next/router";
import { myOrderSummaryContent } from "@/static/contents/myOrder";
import useTranslator from "@/utils/useTranslator";

const OrderSummary = ({ orderItem }: any) => {
  const router = useRouter();
  const { locale } = router;
  const content: any = useTranslator(locale || "en", myOrderSummaryContent);
  return (
    <div className="border border-gray-200/70 rounded-md">
      {/* Card Header */}
      <div className="p-4 border-b border-gray-200/70">
        <h3
          className={`font-semibold text-xl ${
            locale === "ar" ? "text-right" : "text-left"
          }`}
        >
          {content?.orderSummary}
        </h3>
      </div>
      {/* Card Content */}
      <div className="p-4 space-y-4 font-semibold">
        <div
          className={`flex ${
            locale === "ar" ? "flex-row-reverse" : "flex-row"
          } justify-between gap-2`}
        >
          <span>{content?.subTotal}</span>
          <span>SAR 115</span>
        </div>
        <div
          className={`flex ${
            locale === "ar" ? "flex-row-reverse" : "flex-row"
          } justify-between gap-2`}
        >
          <span>{content?.shippingFee}</span>
          <span>SAR 0</span>
        </div>
        <div
          className={`flex ${
            locale === "ar" ? "flex-row-reverse" : "flex-row"
          } justify-between gap-2`}
        >
          <span>{content?.cashOnDeliveryFee}</span>
          <span>SAR 0</span>
        </div>
      </div>
      {/* Card Footer */}
      <div className="border-t border-gray-200/70 p-4">
        <div
          className={`flex ${
            locale === "ar" ? "flex-row-reverse" : "flex-row"
          } justify-between gap-2 font-semibold`}
        >
          <span>{content?.grandTotal}</span>
          <span>SAR 115</span>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
