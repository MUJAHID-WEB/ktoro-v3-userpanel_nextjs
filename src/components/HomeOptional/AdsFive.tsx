import React from "react";
import { AdsComponent } from "../Home/AdsComponent";
import CustomeSlider from "../slider/CustomeSlider";
import { SwiperSlide } from "swiper/react";
import { adsImageContent } from "@/static/contents/home";
import useTranslator from "@/utils/useTranslator";
import { useRouter } from "next/router";

const AdsFive = () => {
  const router = useRouter();
  let { locale } = router;
  const content: any = useTranslator(locale || "en", adsImageContent);
  return (
    <>
      <section className="container xl:flex lg:flex md:flex hidden flex-row flex-wrap px-4  mt-8">
        <AdsComponent
          className="xl:w-[50%] lg:w-[48%] md:w-[48%] w-[100%] !h-[189px] aspect-[614/268]"
          adsImage={content?.img}
          adsAlt="Cosplay Weapons"
        />
        <AdsComponent
          className="xl:w-[25%] lg:w-[23%] md:w-[23%] w-[100%] !h-[189px] aspect-[614/268]"
          adsImage={content?.img}
          adsAlt="Cosplay Weapons"
        />
        <AdsComponent
          className="xl:w-[25%] lg:w-[23%] md:w-[23%] w-[100%] !h-[189px] aspect-[614/268]"
          adsImage={content?.img}
          adsAlt="Cosplay Weapons"
        />
        <AdsComponent
          className="xl:w-[50%] lg:w-[48%] md:w-[48%] w-[100%] !h-[189px] aspect-[614/268]"
          adsImage={content?.img}
          adsAlt="Cosplay Weapons"
        />
        <AdsComponent
          className="xl:w-[25%] lg:w-[23%] md:w-[23%] w-[100%] !h-[189px] aspect-[614/268]"
          adsImage={content?.img}
          adsAlt="Cosplay Weapons"
        />
        <AdsComponent
          className="xl:w-[25%] lg:w-[23%] md:w-[23%] w-[100%] !h-[189px] aspect-[614/268]"
          adsImage={content?.img}
          adsAlt="Cosplay Weapons"
        />
      </section>

      <section className="container xl:hidden lg:hidden md:hidden xl:flex-row lg:flex-row md:flex-row flex-col gap-5 mt-3">
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
              adsImage={content?.img}
              adsAlt="Cosplay Weapons"
            />
          </SwiperSlide>
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
              adsImage={content?.img}
              adsAlt="Cosplay Weapons"
            />
          </SwiperSlide>
        </CustomeSlider>
      </section>
    </>
  );
};

export default AdsFive;
