import { exchangeAndReturnsContent } from "@/static/contents/exchangeAndReturns";
import useTranslator from "@/utils/useTranslator";
import { useRouter } from "next/router";
import React from "react";

const ExchangeAndReturnsSection = () => {
  const router = useRouter();
  let { locale } = router;
  const content: any = useTranslator(locale || "en", exchangeAndReturnsContent);
  return (
    <section className="py-8 bg-white">
      <div className="container">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-semibold">
            {content?.exchangeAndReturnTitle}
          </h1>
          <p className="text-gray-400">{content?.lastUpdate}</p>
        </div>
        <div className="mt-8">
          <p>{content?.weRespectDetails}</p>
          <h2 className="my-7 mb-2 font-semibold text-xl">
            {content?.exchangeAndReturnSubTitle}
          </h2>
          <p>{content?.everyTimeBrowseDetails}</p>
          <p className="mt-2">{content?.onceYouVisitDetails}</p>
        </div>
      </div>
    </section>
  );
};

export default ExchangeAndReturnsSection;
