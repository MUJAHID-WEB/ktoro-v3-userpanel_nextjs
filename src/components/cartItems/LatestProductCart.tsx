import Image from "next/image";
import React, { FC } from "react";
import Button from "../base/Button";
import { useRouter } from "next/router";
export type LatestProductCartTypes = {
  title: string;
  productArr: any[];
};
const LatestProductCart: FC<LatestProductCartTypes> = ({
  title,
  productArr,
}) => {
  const router = useRouter();
  return (
    <div className="w-full pt-9">
      <h6
        className={`pl-6 capitalize font-arabicMedium text-xl text-black-700 ${
          router.locale === "ar" ? "text-right" : "text-left"
        }`}
      >
        {title}
      </h6>
      <div className="pt-7 px-1.5 w-full flex flex-row flex-wrap justify-center items-center gap-y-4 gap-x-2 sm:gap-y-[30px] sm:gap-x-7">
        {productArr?.map((item: any, id: number) => (
          <div key={id} className="w-[150px] px-2.5 pb-6">
            <div className="h-[108px] w-[120px] relative">
              <Image src={item?.img} alt="" fill />
              <span
                className={`absolute p-px px-3 bg-green-400 rounded-full font-arabic text-sm text-white ${
                  router.locale === "ar" ? "right-0" : "left-0"
                }`}
              >
                {item?.offerText}
              </span>
            </div>
            <div className="text-center text-black-500 text-[11px] leading-6">
              {item?.productName}
            </div>
            <div className="flex flex-row-reverse w-full justify-between pt-1.5">
              <p className="text-gray-500 text-[9px] leading-3 line-through">
                {item?.prvPrice}
              </p>
              <span className="text-yellow-500 text-xs">
                {item?.rating}
                <i className="fa-solid fa-star px-1"></i>
              </span>
            </div>
            <p className="py-px text-blue-400 text-sm font-arabicMedium text-left">
              {item?.price}
              <span className="rounded bg-blue-200 font-arabic text-[10px] leading-[14px] px-1 pb-px ml-1">
                {item?.discount}
              </span>
            </p>
            <div className="flex flex-row-reverse w-full justify-between pt-4">
              <Button
                btnClass="!w-fit !text-blue-400 !text-[9px] !leading-[13px]"
                btnText={item?.btnText}
                variant="naked"
                icon="fa-solid fa-plus !text-[8px] !pl-0.5"
                actionCb={() => {}}
              />
              <i className="fa-regular fa-heart text-xs text-blue-400"></i>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestProductCart;
