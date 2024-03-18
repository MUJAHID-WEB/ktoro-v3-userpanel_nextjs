import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import {
    Pagination,
    Navigation,
    Autoplay,
    EffectCoverflow,
} from "swiper/modules";

interface Props {
    effect?: string;
    slidesPerView?: number;
    pagination?: boolean;
    navigation?: boolean;
    centeredSlides?: boolean;
    children: React.ReactNode;
    sliderClass?: string;
    paginationGap?: boolean;
    sm?: {
        slidesPerView: number;
        spaceBetween: number;
    };
    md?: {
        slidesPerView: number;
        spaceBetween: number;
    };
    lg?: {
        slidesPerView: number;
        spaceBetween: number;
    };
    xl?: {
        slidesPerView: number;
        spaceBetween: number;
    };
}

const CustomeSlider = ({
    effect,
    slidesPerView = 1,
    pagination = false,
    navigation = false,
    centeredSlides = false,
    children,
    sliderClass,
    paginationGap = false,
    sm = {
        slidesPerView: 1,
        spaceBetween: 10,
    },
    md = {
        slidesPerView: 1,
        spaceBetween: 10,
    },
    lg = {
        slidesPerView: 1,
        spaceBetween: 10,
    },
    xl = {
        slidesPerView: 1,
        spaceBetween: 10,
    },
}: Props) => {
    return (
        <div className={`${sliderClass}`}>
            <Swiper
                initialSlide={1}
                slidesPerView={slidesPerView}
                spaceBetween={10}
                effect={effect}
                loop={true}
                pagination={pagination}
                navigation={navigation}
                grabCursor={true}
                centeredSlides={centeredSlides}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: false,
                }}
                breakpoints={{
                    425: {
                        slidesPerView: sm.slidesPerView,
                        spaceBetween: sm.spaceBetween,
                    },
                    750: {
                        slidesPerView: md.slidesPerView,
                        spaceBetween: md.spaceBetween,
                    },
                    976: {
                        slidesPerView: lg.slidesPerView,
                        spaceBetween: lg.spaceBetween,
                    },
                    1440: {
                        slidesPerView: xl.slidesPerView,
                        spaceBetween: xl.spaceBetween,
                    },
                }}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                modules={[Pagination, Navigation, Autoplay, EffectCoverflow]}
                className="mySwiper"
            >
                {children}
                {paginationGap && <div className="mt-10"></div>}
            </Swiper>
        </div>
    );
};

export default CustomeSlider;
