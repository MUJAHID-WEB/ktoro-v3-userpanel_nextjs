import Link from "next/link";
import React, { useContext, useState } from "react";
import TextField from "../base/TextField";
import AppContext from "@/context/appContext";
import { ProductType } from "@/utils/type";
import { orderSummaryContent } from "@/static/contents/payment";
import useTranslator from "@/utils/useTranslator";
import { useRouter } from "next/router";
import ArrowRight2 from "../svg/ArrowRight2";
import ArrowDownBold from "../svg/ArrowDownBold";
import ArrowLeft2 from "../svg/ArrowLeft2";

const OrderSummary = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const router = useRouter();
  let { locale } = router;
  const content: any = useTranslator(locale || "en", orderSummaryContent);
  const { cart } = useContext<any>(AppContext);
  const totalPrice = cart.reduce(
    // @ts-ignore
    (acc: ProductType, cur: ProductType) => acc + cur.price,
    0
  );
  return (
    <section>
      <div>
        <h3 className="font-semibold mb-2 text-right">
          {content?.orderSummary}
        </h3>
        <div className="bg-white p-4 flex gap-4 items-center shadow-md rounded-md">
          <div className="space-y-3 w-full">
            <div
              className={`flex justify-between items-center ${
                locale === "ar" ? " flex-row-reverse" : " flex-row"
              }`}
            >
              <span className="font-semibold">{content?.productPrice}</span>
              <span
                className={`flex gap-x-1 ${
                  locale === "ar" ? " flex-row-reverse" : " flex-row"
                }`}
              >
                {totalPrice} <span>{content?.currencyRiyals}</span>
              </span>
            </div>
            <div
              className={`flex justify-between items-center ${
                locale === "ar" ? " flex-row-reverse" : " flex-row"
              }`}
            >
              <span className="font-semibold">{content?.shippingFee}</span>
              <span
                className={`flex gap-x-1 ${
                  locale === "ar" ? " flex-row-reverse" : " flex-row"
                }`}
              >
                29 <span>{content?.currencyRiyals}</span>{" "}
              </span>
            </div>
            <div
              className={`flex justify-between items-center ${
                locale === "ar" ? " flex-row-reverse" : " flex-row"
              }`}
            >
              <span className="font-semibold">{content?.discount}</span>
              <span
                className={`flex gap-x-1 ${
                  locale === "ar" ? " flex-row-reverse" : " flex-row"
                }`}
              >
                -30 <span>{content?.currencyRiyals}</span>{" "}
              </span>
            </div>
            <hr className="border-ash-400" />
            <div
              className={`flex justify-between items-center ${
                locale === "ar" ? " flex-row-reverse" : " flex-row"
              }`}
            >
              <span className="font-semibold">{content?.total}</span>
              <span
                className={`flex gap-x-1 ${
                  locale === "ar" ? " flex-row-reverse" : " flex-row"
                }`}
              >
                527.43 <span>{content?.currencyRiyals}</span>{" "}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`text-sky-600 w-full font-semibold flex justify-between items-center rounded-md bg-white mt-4 shadow-md p-4 ${
            locale === "ar" ? " flex-row-reverse" : " flex-row"
          }`}
        >
          {content?.haveDiscountCode}{" "}
          {isOpen ? (
            <ArrowDownBold fill="#2B8DC5" width="25" height={"25"} />
          ) : locale === "ar" ? (
            <ArrowLeft2 fill="#2B8DC5" />
          ) : (
            <ArrowRight2 fill="#2B8DC5" />
          )}
        </button>
      </div>
      {isOpen && (
        <TextField
          identifier="coupon"
          inputType="text"
          onChangeCb={(e) => console.log(e.target.value)}
          groupClass="mt-4 rounded-md shadow-md"
          placeholder={content?.enterTheDiscountCoupon}
        />
      )}
      <Link
        href={content?.orderCompleteUrl}
        className="w-full rounded-[3px] font-arabicMedium flex justify-center items-center capitalize mt-8 bg-black-primary text-base text-center py-3 px-6 text-white"
      >
        {content?.completeTheRequest}
      </Link>
    </section>
  );
};

export default OrderSummary;
