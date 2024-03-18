import React, { useContext, useState } from "react";
import Button from "../base/Button";
import Image from "next/image";
import AppContext from "@/context/appContext";
import { useRouter } from "next/router";
import Delete from "../svg/Delete";

const ProductCart = ({ cartItems }: any) => {
  const [first, setFirst] = useState(0);
  const { handleCartDelete } = useContext<any>(AppContext);
  const router = useRouter();

  return (
    <>
      <div className="space-y-2 w-full">
        {cartItems?.map((cartItem: any, index: number) => (
          <div
            className={`w-full flex justify-start items-center gap-x-1.5 sm:gap-x-[37px] py-5 px-2.5 bg-white rounded-md shadow ${
              router.locale === "ar" ? "flex-row-reverse" : "flex-row"
            }`}
            key={index}
          >
            <div className="relative h-14 w-14 sm:h-[70px] sm:w-[70px]">
              <Image src={cartItem.image} alt={cartItem.name} fill />
            </div>
            <div className="md:w-[274px] space-y-3">
              <p
                className={`w-full capitalize text-sm font-arabic truncate ${
                  router.locale === "ar" ? "text-right" : "text-left"
                }`}
              >
                {cartItem.name}
              </p>
              <div
                className={`w-full flex  items-center justify-start gap-x-4 ${
                  router.locale === "ar" ? "flex-row-reverse" : "flex-row"
                }`}
              >
                <div className="border border-ash-400 rounded-md flex flex-row-reverse justify-center items-center gap-x-1 p-0.5 sm:gap-x-3 sm:py-[7px] sm:px-[5px]">
                  <Button
                    btnClass="!w-fit text-[#7E848A] !px-[3px]"
                    // btnText="+"
                    variant="naked"
                    icon="fa-solid fa-plus !text-xs md:!text-sm !leading-[14px]"
                    actionCb={() => {
                      setFirst(first + 1);
                    }}
                  />
                  <span className="text-sm text-[#7E848A] font-arabic">
                    {first}
                  </span>
                  <Button
                    btnClass="!w-fit text-[#7E848A] !px-[3px]"
                    // btnText="-"
                    variant="naked"
                    icon="fa-solid fa-minus !text-xs md:!text-sm !leading-[14px]"
                    actionCb={() => {
                      setFirst(first - 1);
                    }}
                  />
                </div>
                <p className="text-base md:text-xl text-black-secondary font-arabic">
                  SAR {cartItem.price}{" "}
                  {typeof cartItem.discount === "number" && (
                    <sup className="text-[#7E848A] text-sm md:text-base line-through">
                      SAR {cartItem.discount}
                    </sup>
                  )}
                </p>
              </div>
            </div>
            <button
              type="button"
              className={`mx-4 ${
                router.locale === "ar" ? "mr-auto" : "ml-auto"
              }`}
              onClick={() => {
                handleCartDelete(cartItem);
              }}
            >
              <Delete />
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductCart;
