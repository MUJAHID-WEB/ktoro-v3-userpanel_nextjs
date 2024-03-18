import { itemAboutContent } from "@/static/contents/item";
import useTranslator from "@/utils/useTranslator";
import { useRouter } from "next/router";
import React from "react";

export const ItemAbout = () => {
  const router = useRouter();
  let { locale } = router;
  const content: any = useTranslator(locale || "en", itemAboutContent);
  return (
    <div
      className={`flex flex-col bg-white py-[30px] gap-[60px] px-5 md:px-8 xl:px-20 ${
        router.locale === "ar"
          ? " items-end text-right"
          : " items-start text-left"
      }`}
    >
      {/* Need to use WSIWIGI (RIchText Edito) */}
      <div className="w-[389px] space-y-10">
        <h3 className=" font-arabicBold text-black-primary text-2xl">
          {content?.youTubeVideo}
        </h3>
        <div className="w-full h-[225px] bg-slate-400"></div>
      </div>
      <div className="space-y-4">
        <ul>
          <span className=" font-arabicBold">
            {content?.headingProfessional}
          </span>
          <li> {content?.hairList}</li>
          <li> {content?.featuresList}</li>
          <li> {content?.settingList}</li>
          <li> {content?.smoothingList}</li>
        </ul>
        <ul>
          <h5 className=" font-arabicBold pb-4">{content?.productInfo}</h5>
          <li>
            <span className="font-arabicBold">{content?.cableLength}</span>
            {content?.meters3}
          </li>
          <li>
            <span className="font-arabicBold">{content?.voltage}</span>
            {content?.volts240}
          </li>
          <li>
            <span className="font-arabicBold">{content?.power}</span>
            {content?.wats1200}
          </li>
          <li>
            <span className="font-arabicBold">{content?.modelNumber}</span>
            {content?.ol1010}
          </li>
          <li>
            <span className="font-arabicBold">{content?.warranty}</span>
            {content?.years2}
          </li>
        </ul>
      </div>
    </div>
  );
};
