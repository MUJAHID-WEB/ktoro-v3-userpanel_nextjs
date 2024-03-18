import React from "react";
import Image from "next/image";
import Tshirt from "/public/images/product/mens-blue-tshirt.png";
import Trash from "../svg/Trash";
import { useRouter } from "next/router";
import useTranslator from "@/utils/useTranslator";
import { favoriteSectionContent } from "@/static/contents/dashboard";

const FavoriteCard = () => {
  const router = useRouter();
  let { locale } = router;
  const content: any = useTranslator(locale || "en", favoriteSectionContent);
  return (
    <div>
      <div className="bg-white border border-gray-300 rounded-md">
        <div className="p-4">
          <Image src={Tshirt} alt="Blur Shirt" className="mx-auto" />
        </div>
        <div
          className={`p-4 border-t border-gray-300 ${
            locale === "ar" ? "text-right" : "text-left"
          } space-y-2`}
        >
          <h3 className="font-semibold">T-Shirt</h3>
          <p className="text-gray-500 font-semibold">
            Test shirt snk, red, green
          </p>
          <p className="line-through text-gray-500">SAR 117</p>
          <p className="text-red-500 font-semibold">
            SAR 112{" "}
            <span className="bg-red-100 px-2 py-1 rounded-md">-20%</span>
          </p>
        </div>
      </div>
      <div className="flex gap-2 pt-4">
        <button className="bg-red-100 text-white p-2 rounded-md">
          <Trash />
        </button>
        <button className="bg-sky-600 text-white p-2 rounded-md flex-1">
          {content?.moveToCartBtn}
        </button>
      </div>
    </div>
  );
};

export default FavoriteCard;
