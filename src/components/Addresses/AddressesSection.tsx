import { addresses, otherAddresses } from "@/static";
import React from "react";
import AddressesCard from "./AddressesCard";
import Button from "../base/Button";
import { addressesSectionContent } from "@/static/contents/dashboard";
import useTranslator from "@/utils/useTranslator";
import { useRouter } from "next/router";

const AddressesSection = () => {
  const router = useRouter();
  let { locale } = router;
  const content: any = useTranslator(locale || "en", addressesSectionContent);
  return (
    <section className="bg-white pb-16">
      <div className="pt-6 px-8">
        {/* heading  */}
        <h2
          className={`font-bold text-base ${
            locale === "ar" ? "text-right" : "text-left"
          } text-[#35332C]`}
        >
          {content?.address}
        </h2>

        {/* default address  */}
        <div className="mt-[26px]">
          <div
            className={`w-full ${
              locale === "ar" ? "ms-auto" : ""
            } lg:w-2/3 space-y-4`}
          >
            {addresses.map((address) => (
              <AddressesCard key={address.id} data={address} />
            ))}
          </div>
        </div>
      </div>

      {/* horizontal line  */}
      <div className="mt-[14px] bg-[#B3B3B3] w-full h-[1px]" />

      <div className="mt-4 px-8">
        {/* heading  */}
        <h2
          className={`font-bold text-base text-[#35332C] ${
            locale === "ar" ? "text-right" : "text-left"
          }`}
        >
          {content?.otherAddress}
        </h2>

        {/* other address  */}
        <div className="mt-2">
          <div
            className={`w-full ${
              locale === "ar" ? "ms-auto" : ""
            } lg:w-2/3 space-y-4`}
          >
            {otherAddresses.map((address) => (
              <AddressesCard key={address.id} data={address} />
            ))}
            <Button btnText={content?.addAnewAddress} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddressesSection;
