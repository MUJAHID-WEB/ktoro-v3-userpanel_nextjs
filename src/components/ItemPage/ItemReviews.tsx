import React from "react";
import { Star } from "./ItemSvg/Star";
import Link from "next/link";
import { itemReviewContent } from "@/static/contents/item";
import useTranslator from "@/utils/useTranslator";
import { useRouter } from "next/router";

export const ItemReviews = () => {
  const router = useRouter();
  let { locale } = router;
  const content: any = useTranslator(locale || "en", itemReviewContent);
  return (
    <div className="flex flex-col bg-white justify-center md:py-6">
      <div
        className={`flex justify-start px-0 flex-wrap md:px-5 xl:px-20 xl:flex-nowrap gap-5 xl:gap-24 ${
          router.locale === "ar" ? " flex-row-reverse" : " flex-row"
        }`}
      >
        {/* Ratings */}
        <div className="hidden md:flex flex-col justify-start items-center">
          <h4 className="font-arabic text-[64px] leading-none text-yellow-700">
            {content?.reviewCount}
          </h4>
          <div className="flex flex-row py-6 gap-[0.5px]">
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
          </div>
          <p className="font-arabic text-base text-black-400">
            {content?.basedOn323Reviews}
          </p>
        </div>
        {/* Comments */}
        <div className="hidden md:flex flex-col md:w-[75%] lg:w-[80%] ">
          <div
            className={`flex justify-between mb-6 mt-auto ${
              router.locale === "ar" ? " flex-row-reverse" : "flex-row "
            }`}
          >
            <button
              className={`p-5 py-2.5 font-arabic text-base text-black-700 flex items-center border border-gray-200 rounded-md gap-x-10 ${
                router.locale === "ar" ? " flex-row-reverse" : "  flex-row"
              }`}
            >
              {content?.recentlyAddedBtnText}
              <i className="fa-solid fa-chevron-down text-gray-200"></i>
            </button>
            <button className="bg-blue-400 rounded-md py-2.5 px-5 font-arabic text-lg text-white">
              {content?.recentlyAddedBtnText2}
            </button>
          </div>
          {/* only for Desktop device */}
          <div
            className={`hidden xl:flex flex-col justify-start border border-gray-200 rounded-md p-4 mb-4 relative ${
              router.locale === "ar"
                ? "items-end text-right"
                : "items-start text-left"
            }`}
          >
            <div className="flex flex-row gap-[0.5]">
              <Star />
              <Star />
              <Star />
              <Star />
              <Star />
            </div>
            <h4 className="py-1 font-arabic text-base text-[#000]">
              {content?.name}
            </h4>
            <h6 className="font-arabic text-[13px] text-black-400">
              {content?.date626}
            </h6>
            <p className="py-3 font-arabic text-sm text-black-400 w-[75%]">
              {content?.reviewComment}
            </p>
            <div
              className={`flex flex-row justify-start items-center gap-x-2.5 text-gray-500 absolute bottom-5 ${
                router.locale === "ar" ? "left-5" : "right-5"
              }`}
            >
              <button className="flex gap-x-1.5 justify-center items-center">
                <i className="fa-regular fa-thumbs-up"></i>
                <span>1</span>
              </button>
              <button className="flex gap-x-1.5 justify-center items-center">
                <i className="fa-regular fa-message"></i>
                <span>1</span>
              </button>
            </div>
          </div>
        </div>
        {/* only for Mobile and Tab device */}
        <div
          className={`w-full xl:hidden flex flex-col justify-start border border-ash-400 rounded-md p-3 md:p-4 md:mb-4 relative mx-5 md:mx-0 ${
            router.locale === "ar"
              ? " items-end text-right"
              : " items-start text-left"
          }`}
        >
          <div className="flex flex-row gap-[0.5]">
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
          </div>
          <h4 className="py-1 font-arabic text-base text-[#000]">
            {content?.name}
          </h4>
          <h6 className="font-arabic text-[13px] text-black-400">
            {content?.date626}
          </h6>
          <p className="py-3 font-arabic text-sm text-black-400 w-[75%]">
            {content?.reviewComment}
          </p>
          <div className="flex flex-row justify-start items-center gap-x-2.5 text-gray-500 ml-auto">
            <button className="flex gap-x-1.5 justify-center items-center">
              <i className="fa-regular fa-thumbs-up"></i>
              <span>1</span>
            </button>
            <button className="flex gap-x-1.5 justify-center items-center">
              <i className="fa-regular fa-message"></i>
              <span>1</span>
            </button>
          </div>
        </div>
      </div>
      {/* for Tab and desktop device */}
      <div className="hidden md:block my-[50px] border-t border-ash-400 relative">
        <button className="flex justify-between items-center bg-ash-300 border border-gray-200 rounded-full px-5 py-3.5 w-40 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 font-arabic text-base text-black-400">
          {content?.showMoreText}
          <i className="fa-solid fa-chevron-down"></i>
        </button>
      </div>
      {/* only for Mobile  */}
      <div
        className={`md:hidden m-5 flex gap-x-6 ${
          router.locale === "ar" ? " ml-auto" : " mr-auto"
        }`}
      >
        <Link href={""} className="text-sm text-blue-400">
          {content?.allReviewText}
        </Link>
        <Link href={""} className="text-sm text-blue-400">
          {content?.addYourReviewText}
        </Link>
      </div>
    </div>
  );
};
