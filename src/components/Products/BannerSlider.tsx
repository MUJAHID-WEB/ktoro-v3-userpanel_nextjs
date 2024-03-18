import React from "react";
import Image from "next/image";

import bannerImage from "/public/images/banner/banner-image.jpg";
import CustomeSlider from "../slider/CustomeSlider";
import { SwiperSlide } from "swiper/react";

const BannerSlider = () => {
    return (
        <div className="pb-12">
            <CustomeSlider
                navigation
                pagination
                paginationGap
                sliderClass="h-56"
            >
                <SwiperSlide>
                    <Image
                        src={bannerImage}
                        alt="product banner"
                        width={450}
                        height={150}
                        className="w-full h-56 object-cover bg-bottom"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src={bannerImage}
                        alt="product banner"
                        width={450}
                        height={150}
                        className="w-full h-56 object-cover bg-bottom"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src={bannerImage}
                        alt="product banner"
                        width={450}
                        height={150}
                        className="w-full h-56 object-cover bg-bottom"
                    />
                </SwiperSlide>
            </CustomeSlider>
        </div>
    );
};

export default BannerSlider;
