import { privacyPolicyContent } from "@/static/contents/privacyPolicy";
import useTranslator from "@/utils/useTranslator";
import { useRouter } from "next/router";
import React from "react";

const PrivacyPolicySection = () => {
  const router = useRouter();
  let { locale } = router;
  const content: any = useTranslator(locale || "en", privacyPolicyContent);
  return (
    <section className="py-8 bg-white">
      <div className="container">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-semibold">
            {content?.titlePrivacyPolicy}
          </h1>
          <p className="text-gray-400">{content?.lUpdate}</p>
        </div>
        <div className="mt-8">
          <p>{content?.policyDetails}</p>
          <h2 className="my-7 mb-2 font-semibold text-xl">
            {content?.subTitlePolicy}
          </h2>
          <p>{content?.policyDetails2}</p>
          <p className="mt-2">{content?.policyDetails3}</p>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicySection;
