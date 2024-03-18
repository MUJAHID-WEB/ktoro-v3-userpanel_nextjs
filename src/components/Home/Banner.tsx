import React from "react";
import Image from "next/image";
import CustomeSlider from "../slider/CustomeSlider";
import { SwiperSlide } from "swiper/react";

export const Banner = () => {
    return (
        <>
            <section className="container xl:flex lg:flex md:flex flex-row justify-center items-center xl:pt-10 lg:pt-10 md:pt-6 xl:gap-6 lg:gap-4 md:gap-3 hidden">
                <div className="flex flex-col justify-start items-start xl:gap-6 lg:gap-5 md:gap-4 w-[38%]">
                    {/* Ads */}
                    <div className="bg-black-secondary w-full aspect-[397/198] relative">
                        <Image
                            src="/images/product/01.png"
                            className="text-white "
                            alt="CD PLAYER"
                            fill={true}
                        />
                    </div>
                    <div className="bg-black-secondary w-full aspect-[397/198] relative">
                        <Image
                            src="/images/product/01.png"
                            className="text-white "
                            alt="CD PLAYER"
                            fill={true}
                        />
                    </div>
                </div>

                <div className="w-[60%] aspect-[800/535] relative bg-black-500">
                    {/* Slider */}
                    <CustomeSlider pagination sliderClass="h-fit">
                        {[1, 2, 3, 4].map((value) => (
                            <SwiperSlide key={value}>
                                <div className="w-full aspect-[800/535] flex justify-center items-center">
                                    {/* <h1 className="text-white">
                                        Slider {value}
                                    </h1> */}
                                    <Image
                                        src="/images/product/01.png"
                                        className="text-white "
                                        alt="CD PLAYER"
                                        fill={true}
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </CustomeSlider>
                </div>
            </section>
            {/* mobile responsive */}
            <section className="container flex flex-row justify-center items-center sm:pt-6 md:hidden sm:block">
                <div className="bg-black-secondary sm:w-[100%] sm:aspect-[396/190] relative">
                    {/* Slider */}
                    <CustomeSlider pagination sliderClass="h-fit">
                        {[1, 2, 3, 4].map((value) => (
                            <SwiperSlide key={value}>
                                <div className="w-full sm:aspect-[396/190] flex justify-center items-center">
                                    <h1 className="text-white">
                                        Slider {value}
                                    </h1>
                                </div>
                            </SwiperSlide>
                        ))}
                    </CustomeSlider>
                </div>
            </section>
        </>
    );
};
