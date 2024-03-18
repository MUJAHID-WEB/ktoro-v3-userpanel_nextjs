import { termsAndConditionsContent } from "@/static/contents/termsAndConditions";
import useTranslator from "@/utils/useTranslator";
import { useRouter } from "next/router";
import React from "react";

const TermsAndConditionSection = () => {
  const router = useRouter();
  let { locale } = router;
  const content: any = useTranslator(locale || "en", termsAndConditionsContent);
  return (
    <section className="py-8 bg-white">
      <div className="container">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-semibold">
            {content?.titleTermAndCondition}
          </h1>
          <p className="text-gray-400">{content?.lastUpdate29}</p>
        </div>
        <div className="mt-8">
          <p>{content?.concernDetails}</p>
          <h2 className="my-7 mb-2 font-semibold text-xl">
            {content?.subTitleNice}
          </h2>
          <p>{content?.browseDetails}</p>
          <p className="mt-2">{content?.createDetails}</p>
        </div>
      </div>
    </section>
  );
};

export default TermsAndConditionSection;
