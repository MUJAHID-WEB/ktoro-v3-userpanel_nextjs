import React from "react";
import Link from "next/link";
import Image from "next/image";

export const ProductCard = () => {
  return (
    <>
      <Link href="">
        <div className="bg-white md:w-[292px] sm:w-[180px] rounded-md md:p-6 sm:p-3 md:pb-0 sm:pb-0">
          <div className="">
            {/* product image */}
            <div className="md:aspect-[244/227] sm:aspect-[156/150] rounded-md bg-ash-300 relative">
              <Image
                src="/images/cart/2.png"
                className=""
                alt="Product Image"
                fill={true}
              />
              {/* offer */}
              <div className="bg-yellow-600 md:px-3 md:py-2 sm:px-[10px] sm:py-[6px]  rounded-[50px] text-center absolute z-10 md:-top-[14px] md:-right-3 sm:-top-2 sm:-right-2  font-normal md:text-sm sm:text-xs">
                <p className="rtl">15% خصم</p>
              </div>
            </div>
          </div>

          {/* Category, Name, Price and Discount Price */}
          <div className="text-right md:py-4 sm:py-2 font-normal md:text-sm sm:text-xs">
            <p className="text-[#7777]">album</p>
            <p className="text-black-500 leading-6">
              Bingozones B1 Bluetooth Headphones with TFcard modles
            </p>
            <div className="flex flex-row-reverse items-center md:gap-4 sm:gap-[10px] ">
              <h4 className="text-black-500 md:text-2xl sm:text-base rtl">
                99 ر.س
              </h4>
              <h6 className="text-[#7777] md:text-sm sm:text-xs rtl">
                110 ر.س
              </h6>
            </div>
          </div>

          {/* Details Button */}
          <div className="border-t border-ash-300 text-center ">
            <button className="md:py-[14px] sm:py-[13px] text-blue-400 font-normal text-sm">
              اضف للسله
            </button>
          </div>
        </div>
      </Link>
    </>
  );
};
