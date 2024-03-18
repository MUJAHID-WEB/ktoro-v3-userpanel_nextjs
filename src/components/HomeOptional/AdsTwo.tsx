import React from "react";
import { AdsComponent } from "../Home/AdsComponent";
import CustomeSlider from "../slider/CustomeSlider";
import { SwiperSlide } from "swiper/react";
import { adsImageContent } from "@/static/contents/home";
import useTranslator from "@/utils/useTranslator";
import { useRouter } from "next/router";

const AdsTwo = () => {
  const router = useRouter();
  let { locale } = router;
  const content: any = useTranslator(locale || "en", adsImageContent);
  return (
    <>
      <section className="container xl:flex lg:flex md:flex hidden xl:flex-row lg:flex-row md:flex-row flex-col gap-5 px-4 mt-8">
        <AdsComponent
          className="xl:w-[50%] lg:w-[50%] md:w-[50%] w-[100%] aspect-[614/268]"
          adsImage={content?.img}
          adsAlt="Cosplay Weapons"
        />

        <AdsComponent
          className="xl:w-[50%] lg:w-[50%] md:w-[50%] w-[100%] aspect-[614/268]"
          adsImage={content?.img2}
          adsAlt="Cosplay Weapons"
        />
      </section>

      <section className="container xl:hidden lg:hidden md:hidden xl:flex-row lg:flex-row md:flex-row flex-col gap-5 mt-8">
        <CustomeSlider pagination>
          <SwiperSlide>
            <AdsComponent
              className="xl:w-[50%] lg:w-[50%] md:w-[50%] w-[100%] aspect-[614/268]"
              adsImage={content?.img}
              adsAlt="Cosplay Weapons"
            />
          </SwiperSlide>
          <SwiperSlide>
            <AdsComponent
              className="xl:w-[50%] lg:w-[50%] md:w-[50%] w-[100%] aspect-[614/268]"
              adsImage={content?.img2}
              adsAlt="Cosplay Weapons"
            />
          </SwiperSlide>
        </CustomeSlider>
      </section>
    </>
  );
};

export default AdsTwo;
