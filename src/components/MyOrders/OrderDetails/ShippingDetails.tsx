import { myOrderShippingDetailContent } from "@/static/contents/myOrder";
import useTranslator from "@/utils/useTranslator";
import { useRouter } from "next/router";
import React from "react";

const ShippingDetails = ({ orderItem }: any) => {
  const router = useRouter();
  const { locale } = router;
  const content: any = useTranslator(
    locale || "en",
    myOrderShippingDetailContent
  );
  return (
    <div className="border border-gray-200/70 rounded-md overflow-hidden max-h-[411px]">
      {/* Card Header */}
      <div className="p-4 border-b border-gray-200/70">
        <h3
          className={`font-semibold text-xl ${
            locale === "ar" ? "text-right" : "text-left"
          }`}
        >
          {content?.shippingDetails}
        </h3>
      </div>
      {/* Card Content */}
      <div className="space-y-4 font-semibold max-h-[328px] overflow-y-auto">
        <div
          className={`flex ${
            locale === "ar" ? "flex-row-reverse text-right" : "flex-row"
          } p-4 border-b border-gray-200/70 gap-2 bg-white`}
        >
          <div className="text-sm">
            <h4 className="text-nowrap">{content?.orderCreated}</h4>
            <p className="font-normal">{content?.orderCreatedDate}</p>
          </div>
          <div className="text-sm flex-1">
            <p className="font-normal text-gray-400">
              {content?.yourOrderHasBeenCreated}
            </p>
          </div>
        </div>
        <div
          className={`flex ${
            locale === "ar" ? "flex-row-reverse text-right" : "flex-row"
          } p-4 border-b border-gray-200/70 gap-2 bg-white`}
        >
          <div className="text-sm">
            <h4 className="text-nowrap">{content?.orderCreated}</h4>
            <p className="font-normal">{content?.orderCreatedDate}</p>
          </div>
          <div className="text-sm flex-1">
            <p className="font-normal text-gray-400">
              {content?.yourOrderHasBeenCreated}
            </p>
          </div>
        </div>
        <div
          className={`flex ${
            locale === "ar" ? "flex-row-reverse text-right" : "flex-row"
          } p-4 border-b border-gray-200/70 gap-2 bg-white`}
        >
          <div className="text-sm">
            <h4 className="text-nowrap">{content?.orderCreated}</h4>
            <p className="font-normal">{content?.orderCreatedDate}</p>
          </div>
          <div className="text-sm flex-1">
            <p className="font-normal text-gray-400">
              {content?.yourOrderHasBeenCreated}
            </p>
          </div>
        </div>
        <div
          className={`flex ${
            locale === "ar" ? "flex-row-reverse text-right" : "flex-row"
          } p-4 border-b border-gray-200/70 gap-2 bg-white`}
        >
          <div className="text-sm">
            <h4 className="text-nowrap">{content?.orderCreated}</h4>
            <p className="font-normal">{content?.orderCreatedDate}</p>
          </div>
          <div className="text-sm flex-1">
            <p className="font-normal text-gray-400">
              {content?.yourOrderHasBeenCreated}
            </p>
          </div>
        </div>
        <div
          className={`flex ${
            locale === "ar" ? "flex-row-reverse text-right" : "flex-row"
          } p-4 border-b border-gray-200/70 gap-2 bg-white`}
        >
          <div className="text-sm">
            <h4 className="text-nowrap">{content?.orderCreated}</h4>
            <p className="font-normal">{content?.orderCreatedDate}</p>
          </div>
          <div className="text-sm flex-1">
            <p className="font-normal text-gray-400">
              {content?.yourOrderHasBeenCreated}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShippingDetails;
