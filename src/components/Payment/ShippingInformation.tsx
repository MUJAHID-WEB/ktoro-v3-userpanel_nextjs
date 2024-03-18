import React from "react";
import Truck from "../svg/Truck";
import { shippingInformationContent } from "@/static/contents/payment";
import useTranslator from "@/utils/useTranslator";
import { useRouter } from "next/router";
import Truck2 from "../svg/Truck2";

const ShippingInformation = () => {
  const router = useRouter();
  let { locale } = router;
  const content: any = useTranslator(
    locale || "en",
    shippingInformationContent
  );
  return (
    <div
      className={`rounded-md ${locale === "ar" ? " text-right" : " text-left"}`}
    >
      <h3 className="font-semibold mb-2">{content?.title}</h3>
      <div
        className={`bg-white p-4 flex gap-4 items-center shadow-md rounded-md ${
          locale === "ar" ? " flex-row-reverse" : " flex-row"
        }`}
      >
        <div>{locale === "ar" ? <Truck2 /> : <Truck />}</div>
        <div className="space-y-2">
          <p className="text-gray-600">{content?.delivery}</p>
          <p className="text-gray-600">{content?.freeDelivery}</p>
          <p className="text-green-800">{content?.leftForFreeDelivery}</p>
        </div>
      </div>
    </div>
  );
};

export default ShippingInformation;
