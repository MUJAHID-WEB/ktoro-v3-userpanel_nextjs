import React, { useState } from "react";
import { DownArrow } from "../ItemPage/ItemSvg/DownArrow";
import { aboutKtoroContent } from "@/static/contents/help";
import useTranslator from "@/utils/useTranslator";
import { useRouter } from "next/router";

export const AboutKtoro = ({category}: {category: any}) => {
  const router = useRouter();
  let { locale } = router;
  const content: any = useTranslator(locale || "en", aboutKtoroContent);
  const { title, titleAr, dropdowns } = category;
  return (
    <section className="py-8">
      <div className="container">
        <div className="flex flex-col">
          <h4 className="font-medium text-2xl text-[#333] mb-8 text-center"> 
            {locale === "ar" ? `${titleAr}` : `${title}`}
          </h4>
          <div className="space-y-4">
            {dropdowns?.map((dropdown: any) => (
            <AboutKtoroBtn key={dropdown.id} btnText={dropdown} />
          ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export const AboutKtoroBtn = ({ btnText }: { btnText: any }) => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const { locale } = router;
  const { title, titleAr, contentEn } = btnText;

  return (
    <div>
      <button className={`flex ${locale === "ar" ? "flex-row-reverse" : "flex-row"} justify-between items-center bg-white p-4 w-full border border-ash-400 rounded-md`} onClick={() => setIsOpen(!isOpen)}>
        <p className="font-normal text-lg text-[#494949]">{locale === "ar" ? `${titleAr}` : `${title}`}</p>
        <DownArrow />
      </button>
      {isOpen && (
        <div className="bg-white p-4 rounded-md border-x border-b border-ash-400 text-[#494949] text-lg">
          <p className={`${locale === "ar" ? "text-right" : "text-left"}`}>{contentEn}</p>
        </div>
      )}
    </div>
  );
};
