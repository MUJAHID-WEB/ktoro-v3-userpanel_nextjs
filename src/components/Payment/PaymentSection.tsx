import React from "react";
import ShippingInformation from "./ShippingInformation";
import AddressSection from "./AddressSection";
import PaymentMethodSection from "./PaymentMethodSection";
import OrderSummary from "./OrderSummary";
import useTranslator from "@/utils/useTranslator";
import { useRouter } from "next/router";
import PaymentItems from "./PaymentItems";
import ArrowLeft from "../svg/ArrowLeft";
import { paymentSectionContent } from "@/static/contents/payment";
import { ArrowRight } from "../svg/ArrowRight";

const PaymentSection = () => {
  const router = useRouter();
  const { locale } = router;
  const content: any = useTranslator(locale || "en", paymentSectionContent);
  console.log(locale);
  return (
    <section className="py-8">
      <div className="container">
        <div className="pb-8">
          <div
            className={`flex gap-4 ${
              locale === "ar"
                ? "flex-col md:flex-row-reverse"
                : "flex-col md:flex-row "
            }`}
          >
            <button
              className={`flex items-center gap-2 font-bold ${
                locale === "ar" ? " flex-row-reverse" : "flex-row "
              }`}
              onClick={() => router.back()}
            >
              {locale === "ar" ? <ArrowRight /> : <ArrowLeft />}{" "}
              {content?.backText}
            </button>
            <div className=" relative w-full sm:w-[400px] flex flex-row justify-between items-center px-1 z-10 mx-auto">
              <span className="absolute left-[5%] top-[46%] w-[85%] -z-10 h-0.5 bg-[#D9D9D9]" />
              <div className="space-y-1 text-center">
                <div className="bg-[#D3E4E2] flex h-14 w-14 border-[3px] border-white rounded-full justify-center items-center">
                  <i className="fa-solid fa-location-dot"></i>
                </div>
                <p className="text-[13px] leading-[19px] text-black-primary">
                  {content?.step1}
                </p>
              </div>
              <div className="space-y-1 text-center">
                <div className="bg-[#D3E4E2] flex h-14 w-14 border-[3px] border-white rounded-full justify-center items-center">
                  <i className="fa-solid fa-cart-arrow-down"></i>
                </div>
                <p className="text-[13px] leading-[19px] text-black-primary">
                  {content?.step2}
                </p>
              </div>
              <div className="space-y-1 text-center">
                <div className="bg-[#E3E3E4] flex h-14 w-14 border-[3px] border-white rounded-full justify-center items-center">
                  <i className="fa-regular fa-circle-check"></i>
                </div>
                <p className="text-[13px] leading-[19px] text-black-primary">
                  {content?.step3}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`flex justify-between flex-col ${
            locale === "ar" ? "lg:flex-row-reverse" : "lg:flex-row"
          } gap-8 lg:gap-20 xl:gap-40`}
        >
          <div className="space-y-6 w-full lg:w-[635px]">
            <ShippingInformation />
            <AddressSection />
            <PaymentMethodSection />
            <PaymentItems />
          </div>
          <div className="w-full lg:w-[484px]">
            <OrderSummary />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentSection;
