import { addressSectionContent } from "@/static/contents/payment";
import useTranslator from "@/utils/useTranslator";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const AddressSection = () => {
  const router = useRouter();
  let { locale } = router;
  const content: any = useTranslator(locale || "en", addressSectionContent);
  return (
    <div className={`${locale === "ar" ? " text-right" : " text-left"}`}>
      <h3 className="font-semibold mb-2">{content?.title}</h3>
      <div className="bg-white p-4 shadow-md rounded-md">
        <div className="space-y-2">
          <p className="text-gray-600">{content?.text}</p>
          <p className="text-gray-600">{content?.address}</p>
          <div
            className={`flex justify-between text-sky-500 text-sm ${
              locale === "ar" ? " flex-row-reverse" : "flex-row"
            }`}
          >
            <p className=" w-fit">{content?.contact}</p>
            <Link href="/address">{content?.btnText}</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddressSection;
