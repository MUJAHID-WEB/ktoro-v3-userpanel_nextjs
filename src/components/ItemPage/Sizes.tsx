import { useRouter } from "next/router";
import React, { FC, useState } from "react";
import useTranslator from "@/utils/useTranslator";
import { sizesContent } from "@/static/contents/size";

const Sizes = () => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const router = useRouter();
  let { locale } = router;
  const content: any = useTranslator(locale || "en", sizesContent);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };
  return (
    <div className="hidden md:block mt-2.5 md:mt-0 px-5 md:px-8 xl:px-20">
      <div
        className={`w-full md:w-[650px] bg-white space-y-3 ${
          locale === "ar" ? "ml-auto" : "mr-auto"
        }`}
      >
        <div
          className={`flex  justify-start ${
            locale === "ar" ? " flex-row-reverse" : "flex-row"
          }`}
        >
          {content?.tabs.map((tab: any, index: number) => (
            <button
              type="button"
              key={index}
              onClick={(event: React.MouseEvent<HTMLButtonElement>) =>
                handleTabClick(index)
              }
              className={`px-4 py-1 text-base md:px-10 md:py-3 md:text-xl font-arabicMedium  uppercase border-[2px] border-black-primary ${
                activeTab === index
                  ? "bg-black-primary text-white"
                  : "bg-white text-black-primary "
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
        {content?.tabs[activeTab].content}
      </div>
    </div>
  );
};

export default Sizes;
