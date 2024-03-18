import React, { useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import { AddIcon } from "./ItemSvg/AddIcon";
import { ItemFavouriteUnselected } from "./ItemSvg/ItemFavouriteUnselected";
import { Star } from "./ItemSvg/Star";
import AppContext from "@/context/appContext";
import { relatedProductCardContent } from "@/static/contents/item";
import useTranslator from "@/utils/useTranslator";
import { useRouter } from "next/router";

type RelatedProductCardProps = {
  product: any;
  groupClass?: string;
  infoClassName?: string;
  // product: {
  //   id: number;
  //   name: string;
  //   price: number;
  //   description: string;
  //   stock: number;
  //   sizes: string[];
  //   discount: {
  //     percent: number;
  //     description: string;
  //   };
  //   rating: number;
  // };
};

export const RelatedProductCard = ({
  product,
  groupClass,
  infoClassName,
}: RelatedProductCardProps) => {
  const router = useRouter();
  let { locale } = router;
  const content: any = useTranslator(locale || "en", relatedProductCardContent);
  const { handleAddToCart } = useContext<any>(AppContext);
  const {
    id,
    name,
    price,
    discount: { percent },
    rating,
  } = product;
  return (
    <>
      <div
        className={`bg-white rounded-md md:pt-1.5 sm:pt-2 px-5 md:px-2.5 sm:px-1.5 md:pb-0 sm:pb-0 ${groupClass}`}
      >
        <Link href={`/products/${id}`} className="w-full">
          {/* product image */}
          <div className="md:aspect-[173/170] aspect-[156/150] rounded-md relative">
            <Image
              src={content?.img}
              className=""
              alt="Product Image"
              fill={true}
            />
            {/* offer */}
            <div
              className={`bg-green-400 text-white md:px-[18px] md:py-1.5 sm:px-2.5 px-2.5 py-1.5 sm:py-1.5 rounded-full text-center absolute top-2 ${
                locale === "ar" ? "right-0" : "left-0"
              } z-10 font-arabic text-xs`}
            >
              {content?.offer}
            </div>
          </div>
          {/* Category, Name, Price and Discount Price */}
          <div className={`md:py-2.5 sm:py-1.5 px-[22px] font-arabic md:text-xs sm:text-xs ${infoClassName}`}>
            <h3
              className={`font-bold text-gray-500 ${
                locale === "ar" ? "text-end" : "text-start"
              }`}
            >
              {content?.nameShampo}
            </h3>
            <h3
              className={`font-medium text-black-500 leading-6 ${
                locale === "ar" ? "text-end" : "text-start"
              }`}
            >
              {content?.shampoDetail}
              {name}
            </h3>

            {/* rating  */}
            <div
              className={`flex flex-row ${
                locale === "ar" ? "justify-end" : "justify-start"
              }  items-center gap-1 py-1`}
            >
              <p className="font-arabic text-xs text-yellow-500">{rating}</p>
              <Star />
              <p className="font-arabic text-xs text-black-primary">(145)</p>
            </div>

            <div
              className={`flex flex-col ${
                locale === "ar" ? "items-end" : " items-start"
              } `}
            >
              <p className="font-arabic text-[9px] text-gray-500 line-through">
                {content?.prevPriceSar125}
              </p>

              <div
                className={`flex ${
                  locale === "ar" ? "flex-row-reverse" : "flex-row"
                } items-center md:gap-4 sm:gap-2.5`}
              >
                <h4 className="text-blue-400 md:text-sm sm:text-base">
                  SAR {content?.price25}
                  {/* {price} */}
                </h4>
                <h6 className="text-blue-400 md:text-2.5 sm:text-xs py-1.5 px-1 bg-blue-400/[.20] rounded-[3px]">
                  -{content?.discount10}%{/* -{percent}% */}
                </h6>
              </div>
            </div>
          </div>
        </Link>

        {/* Details Button */}
        <div className="border-t border-ash-300 text-center flex items-center justify-between px-4 md:py-2 md:pb-1 sm:py-1">
          <button className="p-1" onClick={() => handleAddToCart(product)}>
            <AddIcon />
          </button>
          <button
            className="text-blue-400 font-arabic text-sm px-2"
            onClick={() => handleAddToCart(product)}
          >
            {content?.textAddToCart}
          </button>

          <button className="p-1">
            <ItemFavouriteUnselected />
          </button>
        </div>
      </div>
    </>
  );
};
