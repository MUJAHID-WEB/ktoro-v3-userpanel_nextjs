import React from "react";
import { ImageComponent } from "../ImageComponent";
import Image from "next/image";
import { itemImageContent } from "@/static/contents/item";
import useTranslator from "@/utils/useTranslator";
import { useRouter } from "next/router";

export const ItemImage = () => {
  const router = useRouter();
  let { locale } = router;
  const content: any = useTranslator(locale || "en", itemImageContent);
  return (
    <div className="flex flex-col w-full md:w-[326px] lg:w-[637px] justify-start items-center lg:border border-ash-400 rounded-md gap-3 md:pl-3 lg:p-6 h-fit">
      <div className="relative w-full aspect-[428/400] md:aspect-[326/310] lg:aspect-[589/564] md:border border-ash-400 rounded-md overflow-hidden">
        <Image className="object-cover" src={content?.img} alt="" fill />
        <div
          className={`hidden w-fit md:block absolute top-0 lg:left-0 py-[9px] px-2.5 bg-ash-300 ${
            router.locale === "ar" ? "md:right-0" : "md:left-0"
          }`}
        >
          <button
            type="button"
            className="rounded-full bg-white text-blue-400 py-1 px-1.5 text-[22px] leading-6"
          >
            <i className="fa-solid fa-share-nodes"></i>
          </button>
        </div>
      </div>
      <div className="flex flex-row gap-3">
        <ImageComponent
          className="md:w-14 md:h-14 lg:w-[70px] lg:h-[70px] "
          Src={content?.img2}
          Alt=""
        />
        <ImageComponent
          className="md:w-14 md:h-14 lg:w-[70px] lg:h-[70px] "
          Src={content?.img3}
          Alt=""
        />
        <ImageComponent
          className="md:w-14 md:h-14 lg:w-[70px] lg:h-[70px] "
          Src={content?.img4}
          Alt=""
        />
      </div>
    </div>
  );
};
