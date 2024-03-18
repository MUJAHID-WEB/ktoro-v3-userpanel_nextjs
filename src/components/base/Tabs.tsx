"use client";

import { useRouter } from "next/router";
import React, { useState } from "react";

type Tab = {
  label: string;
  content: React.ReactNode;
};

type TabsProps = {
  tabs: Tab[];
};

const Tabs: React.FC<TabsProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const router = useRouter();

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <>
      <div
        className={`flex flex-col justify-start gap-px md:gap-4 md:py-6 md:px-8 xl:px-20 ${
          router.locale === "ar" ? " md:flex-row-reverse" : "md:flex-row"
        }`}
      >
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={(event: React.MouseEvent<HTMLButtonElement>) =>
              handleTabClick(index)
            }
            className={`py-3 px-6 md:pb-1 md:pt-0 md:px-1 font-semibold w-full flex justify-between md:w-auto ${
              activeTab === index
                ? "border-b md:border-b-2 border-ash-400 md:border-black-primary text-black-primary"
                : "border-b md:border-b-2 border-ash-400 md:border-transparent text-black-primary md:text-gray-200"
            } ${router.locale === "ar" ? " flex-row-reverse" : " flex-row"}`}
          >
            {tab.label}
            <span className="text-gray-200 flex md:hidden">
              <i
                className={`fa-solid  ${
                  activeTab === index
                    ? "fa-chevron-down"
                    : router.locale === "ar"
                    ? "fa-chevron-left"
                    : "fa-chevron-right"
                }`}
              ></i>
            </span>
          </button>
        ))}
      </div>
      <div className="md:border-t border-ash-400 md:py-6">
        {tabs[activeTab].content}
      </div>
    </>
  );
};

export default Tabs;
