import React from "react";
import { RelatedProductCard } from "./RelatedProductCard";
import CustomeSlider from "../slider/CustomeSlider";
import { SwiperSlide } from "swiper/react";
export const ItemRelated = ({ products, groupClass, infoClassName }: any) => {
    return (
        <CustomeSlider
            sliderClass="h-fit"
            slidesPerView={2}
            navigation
            xl={{
                slidesPerView: 6,
                spaceBetween: 5,
            }}
            lg={{
                slidesPerView: 4,
                spaceBetween: 16,
            }}
            md={{
                slidesPerView: 4,
                spaceBetween: 16,
            }}
            sm={{
                slidesPerView: 2,
                spaceBetween: 10,
            }}
        >
            {products?.map((product: any, index: number) => (
                <SwiperSlide key={index}>
                    <RelatedProductCard
                        product={product}
                        groupClass={groupClass}
                        infoClassName={infoClassName}
                    />
                </SwiperSlide>
            ))}
        </CustomeSlider>
    );
};
