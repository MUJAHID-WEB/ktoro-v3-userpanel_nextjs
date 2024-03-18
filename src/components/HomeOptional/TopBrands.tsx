import React from "react";
import CustomeSlider from "../slider/CustomeSlider";
import { SwiperSlide } from "swiper/react";
import BrandImage from "../svg/BrandImage";

const TopBrands = () => {
    return (
        <div className="container mt-8">
            <h3 className="text-4xl font-black text-black-700 text-center uppercase">
                Top Brand
            </h3>
            <CustomeSlider
                sliderClass="h-fit mt-12"
                xl={{
                    slidesPerView: 6,
                    spaceBetween: 30,
                }}
                lg={{
                    slidesPerView: 5,
                    spaceBetween: 30,
                }}
                md={{
                    slidesPerView: 4,
                    spaceBetween: 10,
                }}
                sm={{
                    slidesPerView: 3,
                    spaceBetween: 10,
                }}
            >
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((brand) => (
                    <SwiperSlide key={brand}>
                        <BrandImage />
                    </SwiperSlide>
                ))}
            </CustomeSlider>
        </div>
    );
};

export default TopBrands;
