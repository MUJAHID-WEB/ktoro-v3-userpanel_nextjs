import React from "react";
import Link from "next/link";
import CustomeSlider from "../slider/CustomeSlider";
import { SwiperSlide } from "swiper/react";
import { RelatedProductCard } from "../ItemPage/RelatedProductCard";
import { products } from "@/static";
import { useRouter } from "next/router";
import { sectionTitleContent } from "@/static/contents/home";
import useTranslator from "@/utils/useTranslator";

interface Props {
  sectionTitle: string;
  sectionUrl: string;
}

export const ProductSection = ({ sectionTitle, sectionUrl }: Props) => {
  const router = useRouter();
  let { locale } = router;
  const content: any = useTranslator(locale || "en", sectionTitleContent);
  return (
    <>
      <section className="pt-4">
        {/* Section Heading */}
        <div
          className={`container flex ${
            locale === "ar" ? "flex-row-reverse" : "flex-row"
          } justify-between items-center gap-1 pb-6 xl:px-4  px-0`}
        >
          <h3 className="w-[calc(100%-120px)] font-medium xl:text-2xl lg:text-xl md:text-xl text-sm capitalize truncate ...">
            {sectionTitle}
          </h3>
          <button className="text-blue-400 w-[100px] font-normal xl:text-2xl lg:text-xl md:text-xl text-s capitalize">
            {content?.viewAllBtnText}
          </button>
        </div>

        {/* slider  */}
        <CustomeSlider
          navigation
          paginationGap
          slidesPerView={2}
          sliderClass="h-fit xl:ps-0 ps-0"
          xl={{
            slidesPerView: 5,
            spaceBetween: 30,
          }}
          lg={{
            slidesPerView: 4,
            spaceBetween: 30,
          }}
          md={{
            slidesPerView: 4,
            spaceBetween: 10,
          }}
          sm={{
            slidesPerView: 2,
            spaceBetween: 10,
          }}
        >
          {products.map((product, i) => (
            <SwiperSlide key={i}>
              <RelatedProductCard product={product} />
            </SwiperSlide>
          ))}
        </CustomeSlider>
      </section>
    </>
  );
};
