import React, { useContext, useState } from "react";
import Link from "next/link";
import Tabby from "../svg/Tabby";
import { ImageComponent } from "../ImageComponent";
import { Favourite } from "./ItemSvg/Favourite";
import Button from "../base/Button";
import ShoppingCartSideBar from "../Sidebar/ShoppingCartSideBar";
import AppContext from "@/context/appContext";
import useTranslator from "@/utils/useTranslator";
import { useRouter } from "next/router";
import { dropDowns } from "@/utils/type";
import { countDropDown } from "@/static";
import GiftSvg from "../svg/GiftSvg";
import Image from "next/image";
import { itemsContent } from "@/static/contents/item";

export const ItemDescription = ({ product }: any) => {
  const router = useRouter();
  let { locale } = router;
  const content: any = useTranslator(locale || "en", itemsContent);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { handleAddToCart } = useContext<any>(AppContext);
  const [open, setOpen] = useState<boolean>(false);
  const [selectedCount, setSelectedCount] = useState<dropDowns>(
    countDropDown[0]
  );
  const [selectedColor, setSelectedColor] = useState<any>(content.img[0]);

  // const { name, description, price, discount, sizes } = product;
  const { name, description, price, discount, sizes } = product || {};

  return (
    <div
      className={`w-full md:w-[438px] lg:w-[546px] flex flex-col px-4 md:px-0 gap-3 ${
        router.locale === "ar" ? " text-right" : " text-left"
      }`}
    >
      {/* Exclusive products ads */}
      <div
        className={`w-full flex justify-start items-center bg-blue-300/[0.1] p-1.5 gap-x-2.5 lg:gap-x-3 ${
          router.locale === "ar" ? " flex-row-reverse" : "flex-row"
        }`}
      >
        <div className="w-[74px] h-[52px] md:w-[93px] md:h-[65px] xl:w-[100px] xl:h-[70px] relative">
          <Image src={content?.exclusiveProductLogo} alt="" fill />
        </div>
        <div>
          <h3 className="text-lg font-arabicMedium xl:text-xl text-blue-400">
            {content?.exclusiveProductBrandName}
          </h3>
          <p className="font-arabic text-sm xl:text-base text-gray-700">
            {content?.exclusiveProductText}{" "}
            <Link
              href={content?.exclusiveProductLinkUrl}
              className="text-sm font-arabicBold xl:text-base text-green-400"
            >
              {content?.exclusiveProductLinkText}
            </Link>
          </p>
        </div>
      </div>
      {/* Product Title & code */}
      <div className="space-y-3">
        <h2 className="pt-3 font-arabic text-2xl text-black-500">
          {content?.btsMusicAlbum} {/* {name} */}
        </h2>
        <div
          className={`flex justify-start gap-x-2 text-sm xl:text-base capitalize text-gray-700 ${
            router.locale === "ar" ? " flex-row-reverse" : " flex-row"
          }`}
        >
          <span>product code</span> : <span> 451635</span>
        </div>
      </div>
      {/* Launch Date & Description */}
      <div className="space-y-2 xl:space-y-5">
        <div
          className={`flex items-center font-arabic text-sm xl:text-base gap-3 ${
            router.locale === "ar" ? " flex-row-reverse" : "flex-row "
          }`}
        >
          <p
            className={`text-gray-700 flex gap-x-1.5 ${
              router.locale === "ar" ? " flex-row-reverse" : "flex-row"
            }`}
          >
            <span>{content?.releaseDate}</span>:
            <span className="text-blue-400">{content?.date}</span>
          </p>
          <p className="bg-blue-400 text-white text-sm xl:text-base rounded-md px-3.5 py-2">
            {content?.preOrder}
          </p>
        </div>
        <p className="font-arabic text-sm xl:text-base text-gray-700">
          {content?.availableGifts}
        </p>
      </div>
      {/* Price */}
      <div className="flex flex-col font-arabic gap-1 xl:pt-2 xl:gap-2">
        <div
          className={`flex flex-row items-center gap-x-2.5 ${
            router.locale === "ar" ? " ml-auto" : " mr-auto"
          }`}
        >
          <p className="text-base xl:text-lg text-gray-700 line-through">
            {content?.currency}
            {content?.prevPrice}
          </p>
          <span className="p-1 xl:p-[5px] bg-red-200 text-sm text-red-600 rounded-md">
            -{content?.discountRate}%
          </span>
          {/* {typeof discount === "number" ? (
              <span className="p-[5px] bg-red-200 text-sm text-red-600 mr-[13px] rounded-md">
                -{discount}%
              </span>
            ) : null} */}
        </div>
        <h3 className="text-green-400 font-arabicBold text-[34px] leading-[51px] lg:text-[40px] lg:leading-[58px]">
          {content?.currency}
          {content?.price}
          {/* ${price} */}
        </h3>
      </div>
      {/* Gifts */}
      <div className="md:pt-3 space-y-3">
        <div className="text-base text-blue-400 normal-case">
          <span>{content?.gifTitle}</span>
          <span>(3)</span>{" "}
        </div>
        <div
          className={`flex flex-row gap-2 items-center ${
            router.locale === "ar" ? " justify-end" : "justify-start"
          }`}
        >
          <ImageComponent
            className="w-[60px] h-[60px] rounded-md hover:border-2 border-blue-400"
            Src={"/images/items/tshirt2.png"}
            Alt=""
          />
          <div className="w-[60px] h-[60px] rounded-md flex justify-center items-center">
            <GiftSvg />
          </div>
          <div className="w-[60px] h-[60px] rounded-md flex justify-center items-center">
            <GiftSvg />
          </div>
        </div>
      </div>
      {/* color Variant */}
      <div className="md:pb-3 space-y-3">
        <div className="text-base text-black-primary normal-case">
          {content?.colorCaption} <span>:</span>
          <span>{selectedColor.color}</span>
        </div>
        <div
          className={`flex flex-row gap-2 ${
            router.locale === "ar" ? " justify-end" : " justify-start"
          }`}
        >
          {content?.img.map((item: any, id: number) => (
            <button
              onClick={() => {
                setSelectedColor(item);
              }}
              key={id}
            >
              <ImageComponent
                className={`w-[60px] h-[60px] rounded-md ${
                  selectedColor === item
                    ? "border-2 border-blue-400"
                    : "hover:border-2 border-blue-400"
                }`}
                Src={item.src}
                Alt=""
              />
            </button>
          ))}
        </div>
      </div>
      {/* Size */}
      <div className="flex flex-col font-arabic text-base pb-2 gap-3">
        <h6
          className={`text-[#252525] flex ${
            router.locale === "ar" ? " flex-row-reverse" : " flex-row"
          }`}
        >
          {content?.sizeCaption} <span>:</span>
        </h6>
        <div
          className={`flex justify-start ${
            router.locale === "ar" ? " flex-row-reverse" : "flex-row"
          }`}
        >
          {/* {sizes?.map((size: string, index: number) => ( */}
          {content?.sizesArray?.map((size: string, index: number) => (
            <button
              key={index}
              className="text-black-primary h-[50px] w-[50px] text-base bg-ash-300 hover:bg-blue-400 hover:text-white first:rounded-l-md last:rounded-r-md"
            >
              {size}
            </button>
          ))}
        </div>
      </div>
      <div className="space-y-4 md:pb-2">
        <div
          className={`border border-ash-300 p-5 pb-2.5 rounded-md flex gap-[55px] ${
            router.locale === "ar" ? " justify-end gap-x-3" : " justify-between"
          }`}
        >
          <p className="text-xs md:text-[15px] font-arabic md:leading-6">
            {content?.paymentText}
            <span className="font-arabicMedium">{content?.paymentAmount}</span>
            <Link
              href={content?.learnUrl}
              className="font-arabicMedium underline"
            >
              {content?.learnText}
            </Link>
          </p>
          <div>
            <Tabby />
          </div>
        </div>
        <div
          className={`border border-ash-300 p-5 pb-2.5 rounded-md flex gap-[55px] ${
            router.locale === "ar" ? " justify-end gap-x-3" : " justify-between"
          }`}
        >
          <p className="text-xs md:text-[15px] font-arabic md:leading-6">
            {content?.paymentText2}
            <span className="font-arabicMedium">
              {content?.paymentAmount2}{" "}
            </span>
            {content?.spanText}
            <Link
              href={content?.learnMoreUrl}
              className="font-arabicMedium underline"
            >
              {content?.learnMoreText}
            </Link>
          </p>
          <div>
            <Tabby />
          </div>
        </div>
      </div>
      {/* Count, Add to cart and Favorite */}
      <div
        className={`w-full flex justify-start gap-2 ${
          router.locale === "ar" ? " flex-row-reverse" : " flex-row"
        }`}
      >
        <div className="flex flex-row justify-center items-center bg-ash-300 border border-ash-400 rounded-md p-1.5 gap-x-1">
          <div className="bg-white py-3 px-5 rounded-md text-black-primary text-base relative ">
            {selectedCount.name}
            <div
              className={`dropDownShadow w-full bg-white transition absolute top-full left-0 space-y-2 py-2 ${
                open
                  ? "z-50 translate-y-0 opacity-100 "
                  : "-z-20 translate-y-2 opacity-0 "
              } `}
            >
              {countDropDown.map((item: dropDowns, i: number) => (
                <p
                  key={i}
                  onClick={() => {
                    setOpen(false);
                    setSelectedCount(item);
                  }}
                  className="cursor-pointer text-center w-full text-base capitalize "
                >
                  {item.name}
                </p>
              ))}
            </div>
          </div>
          <button
            type="button"
            onClick={() => {
              setOpen(!open);
            }}
            className="px-1.5"
          >
            <i className="fa-solid fa-caret-down"></i>
          </button>
        </div>
        <Button
          btnClass="!py-1.6 m:!py-3.5 md:!px-4 !border !border-blue-400 rounded-md font-arabic !text-xl text-white"
          variant="primary"
          actionCb={() => {
            setIsOpen(true);
            handleAddToCart(product);
          }}
          btnText={content?.addToCartBtnText}
        />
        <ShoppingCartSideBar viewCart={isOpen} actionCb={setIsOpen} />
        <button type="button">
          <Favourite />
        </button>
      </div>
    </div>
  );
};
