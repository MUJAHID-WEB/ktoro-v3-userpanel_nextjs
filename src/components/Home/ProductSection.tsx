import React from "react";
import { ProductCard } from "../ProductCard/ProductCard";
import Link from "next/link";
import CustomeSlider from "../slider/CustomeSlider";
import { SwiperSlide } from "swiper/react";

export const ProductSection = ({
    sectionTitle,
    sectionUrl,
}: {
    sectionTitle: string;
    sectionUrl: string;
}) => {
    return (
        <>
            <section className="container md:pt-[60px] sm:pt-6">
                {/* Section Heading */}
                <div className="flex flex-row-reverse justify-between items-center pb-6 font-medium md:text-2xl sm:text-lg">
                    <h3 className=""> {sectionTitle}</h3>
                    <Link href={sectionUrl} className="text-blue-400">
                        عرض الكل
                    </Link>
                </div>

                <CustomeSlider
                    pagination
                    paginationGap
                    sliderClass="h-fit"
                    xl={{
                        slidesPerView: 3,
                        spaceBetween: 30,
                    }}
                    lg={{
                        slidesPerView: 3,
                        spaceBetween: 30,
                    }}
                    md={{
                        slidesPerView: 2,
                        spaceBetween: 10,
                    }}
                    sm={{
                        slidesPerView: 2,
                        spaceBetween: 10,
                    }}
                >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((slider) => (
                        <SwiperSlide key={slider}>
                            <ProductCard />
                        </SwiperSlide>
                    ))}
                </CustomeSlider>
            </section>
        </>
    );
};
