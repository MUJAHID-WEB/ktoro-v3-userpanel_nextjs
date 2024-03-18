import React from "react";
import { AdsComponent } from "../Home/AdsComponent";
import { adsImageContent } from "@/static/contents/home";
import useTranslator from "@/utils/useTranslator";
import { useRouter } from "next/router";

const AdsOne = () => {
  const router = useRouter();
  let { locale } = router;
  const content: any = useTranslator(locale || "en", adsImageContent);
  return (
    <section className="container flex xl:flex-row lg:flex-row md:flex-row flex-col gap-2 xl:px-4 px-0 xl:mt-8 mt-3">
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
  );
};

export default AdsOne;
