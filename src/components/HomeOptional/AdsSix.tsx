import React from "react";
import { AdsComponent } from "../Home/AdsComponent";
import CustomeSlider from "../slider/CustomeSlider";
import { SwiperSlide } from "swiper/react";
import { adsSixContent } from "@/static/contents/home";
import useTranslator from "@/utils/useTranslator";
import { useRouter } from "next/router";

const AdsSix = () => {
  const router = useRouter();
  let { locale } = router;
  const content: any = useTranslator(locale || "en", adsSixContent);
  return (
    <section className="xl:mt-8 mt-3">
      <CustomeSlider
        effect="coverflow"
        centeredSlides
        xl={{
          slidesPerView: 2,
          spaceBetween: 50,
        }}
        lg={{
          slidesPerView: 2,
          spaceBetween: 80,
        }}
        md={{
          slidesPerView: 2,
          spaceBetween: 50,
        }}
        sm={{
          slidesPerView: 1,
          spaceBetween: 10,
        }}
      >
        {content?.images.map((item: any, id: number) => (
          <SwiperSlide key={id}>
            <AdsComponent
              className="w-[614px] xl:h-[361px] lg:h-[307px] md:h-[307px] h-[150px] aspect-[614/361]"
              adsImage={item}
              adsAlt="Cosplay Weapons"
            />
          </SwiperSlide>
        ))}

        {/* <SwiperSlide>
                    <AdsComponent
                        className="w-[614px] xl:h-[361px] lg:h-[307px] md:h-[307px] h-[150px] aspect-[614/361]"
                        adsImage="/images/homepage/banner4.png"
                        adsAlt="Cosplay Weapons"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <AdsComponent
                        className="w-[614px] xl:h-[361px] lg:h-[307px] md:h-[307px] h-[150px] aspect-[614/361]"
                        adsImage="/images/homepage/banner4.png"
                        adsAlt="Cosplay Weapons"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <AdsComponent
                        className="w-[614px] xl:h-[361px] lg:h-[307px] md:h-[307px] h-[150px] aspect-[614/361]"
                        adsImage="/images/homepage/banner4.png"
                        adsAlt="Cosplay Weapons"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <AdsComponent
                        className="w-[614px] xl:h-[361px] lg:h-[307px] md:h-[307px] h-[150px] aspect-[614/361]"
                        adsImage="/images/homepage/banner4.png"
                        adsAlt="Cosplay Weapons"
                    />
                </SwiperSlide> */}
      </CustomeSlider>
    </section>
  );
};

export default AdsSix;
