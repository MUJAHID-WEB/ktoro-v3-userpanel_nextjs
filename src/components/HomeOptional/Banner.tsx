import React from "react";
import Image from "next/image";
import useTranslator from "@/utils/useTranslator";
import { bannerContent } from "@/static/contents/home";
import { useRouter } from "next/router";
import { Swiper, SwiperSlide } from "swiper/react";
import { homeBannerImages } from "@/static";
import {
    Autoplay,
} from "swiper/modules";
const Banner = () => {
  const router = useRouter();
  const { locale } = router;
  const content: any = useTranslator(locale || "en", bannerContent);
    return (
        <div className="container">
          <div className="flex gap-2 md:gap-4 lg:gap-5">
          {/* Left side */}
          <div className="hidden md:flex flex-1 w-[30%]">
            <div className="flex flex-col gap-2 md:gap-4 lg:gap-5">
              <div>
                <Image src="/images/homepage/banner2.png" alt="Banner 2" width={500} height={350} />
              </div>
              <div>
                <Image src="/images/homepage/banner3.png" alt="Banner 3" width={500} height={350} />
              </div>
            </div>
          </div>
          {/* Right side */}
          <div className="flex-[2]">
            {/* <Image src="/images/homepage/banner1.png" alt="Banner 1" width={500} height={350} className="w-full h-full" /> */}
            <div className="container h-full">
              <Swiper
                loop={true}
                className="h-full"
                autoplay={{
                  delay: 4000,
                  disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                >
              {homeBannerImages.map(({id, title, src}, index) => (
                <SwiperSlide key={index} className="!w-full !h-full">
                  <Image src={src} alt={title} width={500} height={350} className="w-full h-full" />
                </SwiperSlide>
              ))}
            </Swiper>
            </div>
          </div>
        </div>
        </div>
    );
};
export default Banner;

// import React from "react";
// import Image from "next/image";
// import CustomeSlider from "../slider/CustomeSlider";
// import { SwiperSlide } from "swiper/react";
// import { bannerContent } from "@/static/contents/home";
// import useTranslator from "@/utils/useTranslator";
// import { useRouter } from "next/router";

// export const Banner = () => {
//     const router = useRouter();
//     let { locale } = router;
//     const content: any = useTranslator(locale || "en", bannerContent);
//     return (
//         <>
//             <section className="container xl:flex lg:flex md:flex flex-row justify-center items-center px-4 pt-3 xl:gap-6 lg:gap-4 md:gap-3 hidden">
//                 <div className="flex flex-col justify-start items-start xl:gap-6 lg:gap-5 md:gap-4 w-[38%]">
//                     {/* Ads */}
//                     <div className="bg-black-secondary w-full aspect-[397/198] relative">
//                         <Image
//                             src={content?.img}
//                             className="text-white "
//                             alt="CD PLAYER"
//                             fill={true}
//                         />
//                     </div>
//                     <div className="bg-black-secondary w-full aspect-[397/198] relative">
//                         <Image
//                             src={content?.img2}
//                             className="text-white "
//                             alt="CD PLAYER"
//                             fill={true}
//                         />
//                     </div>
//                 </div>

//                 <div className="w-[60%] aspect-[800/530] relative bg-black-500">
//                     {/* Slider */}
                    // <CustomeSlider sliderClass="h-fit">
                    //     {content?.images.map((value: any) => (
                    //         <SwiperSlide key={value}>
                    //             <div className="w-full aspect-[800/530] flex justify-center items-center">
                    //                 <Image
                    //                     src={value}
                    //                     className="text-white "
                    //                     alt="CD PLAYER"
                    //                     fill={true}
                    //                 />
                    //             </div>
                    //         </SwiperSlide>
                    //     ))}
                    // </CustomeSlider>
//                 </div>
//             </section>

//             {/* mobile responsive */}
//             <section className="container flex flex-row justify-center items-center sm:pt-3 md:hidden sm:block">
//                 <div className="w-full sm:aspect-[396/190] relative">
//                     {/* Slider */}
//                     <CustomeSlider pagination paginationGap sliderClass="h-fit">
//                         {content?.images.map((value: any) => (
//                             <SwiperSlide key={value}>
//                                 <div className="w-full sm:aspect-[396/190] flex justify-center items-center">
//                                     <Image
//                                         src={value}
//                                         className="text-white "
//                                         alt="CD PLAYER"
//                                         fill={true}
//                                     />
//                                 </div>
//                             </SwiperSlide>
//                         ))}
//                     </CustomeSlider>
//                 </div>
//             </section>
//         </>
//     );
// };