import React, { ReactNode, useState } from "react";
import { Search } from "./HelpSvg/Search";
import {
  helpCategoryContents,
  howCanHelpContent,
} from "@/static/contents/help";
import useTranslator from "@/utils/useTranslator";
import { useRouter } from "next/router";

export const HowCanHelp = ({ setCategory }: any) => {
  const [selectedCategory, setSelectedCategory] = useState<any>(
    helpCategoryContents[0].title
  );
  const router = useRouter();
  let { locale } = router;
  const content: any = useTranslator(locale || "en", howCanHelpContent);
  return (
    <div className="bg-[#f4f4f4] flex flex-col justify-center items-center px-[20px]">
      <div className="flex flex-col py-[40px] justify-center items-center">
        <h3 className="pb-6 font-medium text-[32px] text-black-secondary">
          {content?.howCanWeHelp}{" "}
        </h3>

        <div className="w-[80%] flex flex-row items-center bg-white rounded-md px-5 mb-[40px]">
          <input
            type="text"
            placeholder={content?.placeholderWhatDoYouNeed}
            className=" w-full py-[18px] pr-3 font-normal text-base text-gray-400"
          />
          <Search />
        </div>

        <p className="font-normal capitalize text-xl text-gray-400 pb-6">
          {content?.subTitleChooseCategory}
        </p>

        <div
          className={`flex ${
            locale === "ar" ? "flex-row-reverse" : "flex-row"
          } flex-wrap gap-4`}
        >
          {helpCategoryContents.map((categoryContent) => (
            <HelpCard
              key={categoryContent.id}
              categoryContent={categoryContent}
              isSelected={selectedCategory === categoryContent.title}
              onClick={() => {
                setSelectedCategory(categoryContent.title);
                setCategory(categoryContent);
              }}
            />
          ))}
          {/* <HelpCard image={<AboutKtoro/>} title={content?.helpCardTitle} setCategoryTitle={setCategoryTitle} />
          <HelpCard image={<Account />} title={content?.helpCardTitle2} setCategoryTitle={setCategoryTitle}  />
          <HelpCard image={<Orders />} title={content?.helpCardTitle3}  setCategoryTitle={setCategoryTitle} />
          <HelpCard image={<Payment />} title={content?.helpCardTitle4} setCategoryTitle={setCategoryTitle}  />
          <HelpCard image={<Wallet />} title={content?.helpCardTitle5} setCategoryTitle={setCategoryTitle}  />
          <HelpCard image={<Shipment />} title={content?.helpCardTitle6} setCategoryTitle={setCategoryTitle}  />
          <HelpCard image={<OrderIssues />} title={content?.helpCardTitle7} setCategoryTitle={setCategoryTitle}  /> */}
        </div>
      </div>
    </div>
  );
};

export const HelpCard = ({
  categoryContent,
  isSelected,
  onClick,
}: {
  categoryContent: any;
  isSelected: boolean;
  onClick: () => void;
}) => {
  const router = useRouter();
  let { locale } = router;
  const { title, titleAr, icon: Icon } = categoryContent;
  return (
    <div
      className={`flex flex-col justify-start items-center p-6 bg-white border-2 border-transparent hover:border-[#47A6DC] ${
        isSelected ? "border-[#47A6DC]" : ""
      } rounded-md w-[163px] cursor-pointer`}
      onClick={onClick}
    >
      <div className="bg-[#F1F1F2] w-[75px] h-[75px] rounded-[50px] flex items-center justify-center">
        {/* {image} */}
        <Icon fill={isSelected ? "#47A6DC" : "#333"} />
      </div>
      <h5 className="pt-3 font-normal capitalize text-lg text-[#494949] text-center">
        {locale === "ar" ? `${titleAr}` : `${title}`}
      </h5>
    </div>
  );
};
