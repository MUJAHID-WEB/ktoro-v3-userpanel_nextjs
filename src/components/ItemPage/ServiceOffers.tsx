import React, { ReactNode } from "react";
import { FreeDelivery } from "./ItemSvg/FreeDelivery";
import { FreeExchange } from "./ItemSvg/FreeExchange";
import { Payment } from "./ItemSvg/Payment";
import Gaon from "../svg/Gaon";
import { serviceOfferContent } from "@/static/contents/item";
import useTranslator from "@/utils/useTranslator";
import { useRouter } from "next/router";

export const ServiceOffers = () => {
  const router = useRouter();
  let { locale } = router;
  const content: any = useTranslator(locale || "en", serviceOfferContent);
  return (
    <section className="flex flex-row flex-wrap justify-center gap-10 md:gap-[120px] bg-white py-10">
      <ServiceOffersCard
        icon={<FreeDelivery />}
        heading={content?.freeDelivery}
        description={content?.freeDeliveryDetails}
      />

      <ServiceOffersCard
        icon={<FreeExchange />}
        heading={content?.freeExchange}
        description={content?.freeExchangeDetails}
      />

      <ServiceOffersCard
        icon={<Payment />}
        heading={content?.paymentWhenReceiving}
        description={content?.paymentWhenReceivingDetails}
      />

      <ServiceOffersCard
        icon={<Gaon />}
        heading={content?.poweredBy}
        description={content?.poweredByDetails}
      />

      {/* <div className="flex flex-col justify-center items-center w-[197px]">
        <Image
          src="/images/items/PoweredByGaon.png"
          width={50}
          height={50}
          alt="Powered By"
        />

        <h3 className="font-bold text-xl py-3">مدعوم من قبل</h3>
        <p className="font-normal text-base pt-3 text-center">
          جميع البوماتنا تحسب ضمن مخطط هانتيو وقاون
        </p>
      </div> */}
    </section>
  );
};

export const ServiceOffersCard = ({
  icon,
  heading,
  description,
}: {
  icon: ReactNode;
  heading: string;
  description: string;
}) => {
  return (
    <div className="flex flex-col justify-start items-center w-28 md:w-[213px] gap-3">
      <div className="p-4 border rounded-full border-gray-700">{icon}</div>
      <h3 className="text-center font-arabicBold text-sm md:text-xl">
        {heading}
      </h3>
      <p className="font-arabic text-xs md:text-base md:pt-3 text-center">
        {description}
      </p>
    </div>
  );
};
