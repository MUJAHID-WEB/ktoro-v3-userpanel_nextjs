import { myOrderPaymentContent } from "@/static/contents/myOrder";
import useTranslator from "@/utils/useTranslator";
import { useRouter } from "next/router";
import React from "react";

const OrderPayment = ({ orderItem }: any) => {
  const router = useRouter();
  const { locale } = router;
  const content: any = useTranslator(locale || "en", myOrderPaymentContent);
  return (
    <div className="border border-gray-200/70 rounded-md">
      {/* Card Header */}
      <div className="p-4 border-b border-gray-200/70">
        <h3
          className={`font-semibold text-xl ${
            locale === "ar" ? "text-right" : "text-left"
          }`}
        >
          {content?.paymentMethod}
        </h3>
      </div>
      {/* Card Content */}
      <div className="p-4 space-y-4 font-semibold">
        <div
          className={`flex ${
            locale === "ar" ? "flex-row-reverse" : "flex-row"
          } justify-between gap-2`}
        >
          <span>{content?.cashOnDelivery}</span>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default OrderPayment;
