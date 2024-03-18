import React, { useState } from "react";
import SearchIcon from "../svg/SearchIcon";
import Link from "next/link";
import { trackOrderCardContent } from "@/static/contents/trackOrder";
import useTranslator from "@/utils/useTranslator";
import { useRouter } from "next/router";

interface Props {
  trackOrderNumber: string;
  setTruckOrderNumber: (value: string) => void;
}

const TrackOrderCard = ({ trackOrderNumber, setTruckOrderNumber }: Props) => {
  const router = useRouter();
  let { locale } = router;
  const content: any = useTranslator(locale || "en", trackOrderCardContent);
  // state
  const [error, setError] = useState<boolean>(false);

  // handle search order
  const handleOrder = () => {
    trackOrderNumber ? setError(false) : setError(true);
  };
  return (
    <div
      className={`bg-ash-300 ${
        !error
          ? "xl:w-[658px] lg:w-[658px] md:w-[658px] w-[383px] xl:h-[213px] lg:h-[213px] md:h-[213px] h-[175px] pt-[33px] xl:ps-[69px] lg:ps-[69px] md:ps-[76px] ps-[20px] xl:pe-[84px] lg:pe-[84px] md:pe-[84px] pe-[26px]"
          : "xl:w-[595px] lg:w-[595px] md:w-[595px] w-[423px] h-[266px] pt-[41px] xl:ps-[69px] lg:ps-[69px] md:ps-[69px] ps-[49px] xl:pe-[75px] lg:pe-[75px] md:pe-[75px] pe-[53px]"
      }  rounded-[27px] `}
    >
      {/* heading  */}
      <h1
        className={`font-bold text-black-secondary xl:leading-[54px] md:leading-[54px] text-4xl ${
          error ? (locale === "ar" ? "text-end" : "text-start") : "text-center"
        }`}
      >
        {content?.titleTrackOrder}
      </h1>
      {/* if input is null  */}
      {error && (
        <p
          className={`text-red-700 font-normal text-xs leading-[18px] mt-[9px] ${
            locale === "ar" ? "text-right" : "text-left"
          }`}
        >
          {content?.errorOrderFirst}
        </p>
      )}

      {/* form section  */}
      <div
        className={`flex ${
          locale === "ar" ? "flex-row-reverse" : "flex-row"
        } items-center ${error ? "mt-[5px]" : "mt-8"}`}
      >
        {/* input  */}
        <div
          className={`${
            !error
              ? "xl:w-[390px] lg:w-[390px] md:w-[390px] w-[232px]"
              : "xl:w-[352px] lg:w-[352px] md:w-[352px] w-[352px]"
          } ${
            locale === "ar" ? "flex-row-reverse" : "flex-row"
          } h-[40px] bg-white flex items-center justify-start gap-2 border border-gray-700 rounded-[5px] py-2 xl:px-[11px] lg:px-[11px] md:px-[11px] px-[10px]`}
        >
          <p className="text-black-600 font-medium text-sm font-arabic xl:w-[100px] lg:w-[100px] md:w-[100px] w-[130px]">
            {content?.textOrderNo}
          </p>
          <div className="mt-1">
            <SearchIcon />
          </div>
          <input
            onChange={(e) => {
              setTruckOrderNumber(e.target.value);
              setError(e.target.value ? false : true);
            }}
            type="text"
            placeholder="Type your tracking number"
            className={`${
              locale === "ar" ? "text-right" : "text-left"
            } text-gray-100 placeholder:text-gray-700 w-[100%] font-normal text-base`}
          />
        </div>
        {/* button  */}

        <button
          onClick={handleOrder}
          className={`xl:w-[88px] lg:w-[88px] md:w-[88px] w-[88px] h-[40px] rounded-md bg-black-secondary text-white text-base font-bold font-arabic ${
            locale === "ar"
              ? "xl:me-[20px] lg:me-[20px] md:me-[20px] me-[16px]"
              : "xl:ms-[20px] lg:ms-[20px] md:ms-[20px] ms-[16px]"
          } `}
        >
          {content?.trackBtnText}
        </button>
      </div>

      {/* if input is null  */}
      {error && (
        <p
          className={`text-ash-500 font-normal text-xs mt-[6px] ${
            locale === "ar" ? "text-right" : "text-left"
          }`}
        >
          {content?.doNotKnowNumber}
          <Link
            href={content?.trackOrderPageUrl}
            className="text-blue-400 ms-1"
          >
            {content?.myOrderLinkText}
          </Link>
        </p>
      )}
    </div>
  );
};

export default TrackOrderCard;
