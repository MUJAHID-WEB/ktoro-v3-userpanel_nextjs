import React from "react";
import { Search } from "../HelpPage/HelpSvg/Search";
import { useRouter } from "next/router";
import { brandSearchContent } from "@/static";
import useTranslator from "@/utils/useTranslator";

export const BrandSearch = () => {
  const router = useRouter();
  let { locale } = router;
  const content: any = useTranslator(locale || "en", brandSearchContent);
  return (
    <>
      <div className="pt-[54px]">
        <div className="container flex flex-col justify-start items-center xl:px-0 lg:px-0 md:px-4 sm:px-4 px-4">
          {/* Search Field */}
          <div
            className={`w-fit flex ${
              locale === "ar" ? "flex-row-reverse" : "flex-row"
            } justify-between items-center bg-white border border-gray-600 rounded-md px-2`}
          >
            <input
              type="text"
              placeholder={content?.placeholder}
              className={`py-2 ${
                locale === "ar" ? "pl-7 text-end" : "pr-7 text-start"
              } xl:w-[650px] lg:w-[635px] md:w-[635px] sm:w-[350px] w-[200px] text-left`}
            />
            <button
              className={`flex items-center justify-center ${
                locale === "ar" ? "pl-7" : "pr-7"
              }`}
            >
              <Search />
            </button>
          </div>

          {/* Search by Letter */}
          <div
            className={`w-full flex ${
              locale === "ar" ? "flex-row-reverse" : "flex-row"
            } flex-wrap justify-start items-center gap-[18px] py-7  mt-10`}
          >
            <button className="bg-black-secondary rounded-md py-2 px-6 text-white font-arabicBold text-base">
              {content?.btnText}
            </button>

            {/* Letter Button A-Z */}
            <div
              className={`flex justify-start gap-x-8 ${
                locale === "ar" ? "flex-row-reverse" : "flex-row"
              }`}
            >
              {[
                "#",
                "A",
                "B",
                "C",
                "D",
                "E",
                "F",
                "G",
                "H",
                "I",
                "J",
                "K",
                "L",
                "M",
                "N",
                "O",
                "P",
                "Q",
                "R",
                "S",
                "T",
                "U",
                "V",
                "W",
                "X",
                "Y",
                "Z",
              ].map((item) => (
                <button
                  key={item}
                  className="py-2 text-black-secondary font-arabicBold text-base"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="my-[24px] border-t border-[#9E9E9E] w-full z-10 relative">
          <div className="flex justify-center items-center bg-black-secondary border rounded-full w-[40px] h-[40px] absolute -top-5 left-[50%] transform -translate-x-1/2">
            <p className="font-normal text-base text-white text-center">A</p>
          </div>
        </div>
      </div>
    </>
  );
};
