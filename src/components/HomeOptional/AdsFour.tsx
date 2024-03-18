import React from "react";
import { AdsComponent } from "../Home/AdsComponent";
import { adsFourContent } from "@/static/contents/home";
import useTranslator from "@/utils/useTranslator";
import { useRouter } from "next/router";

const AdsFour = () => {
  const router = useRouter();
  let { locale } = router;
  const content: any = useTranslator(locale || "en", adsFourContent);
  return (
    <section className="container flex xl:px-4 px-0 xl:mt-8 mt-3">
      <AdsComponent
        className="w-[100%] xl:!h-[286px] lg:!h-[298px] !h-[150px] aspect-[1245/286]"
        adsImage={content?.img}
        adsAlt="Cosplay Weapons"
      />
    </section>
  );
};

export default AdsFour;
