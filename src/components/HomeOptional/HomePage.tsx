import React from "react";

import { ProductSection } from "./ProductSection";
import AdsOne from "./AdsOne";
import AdsTwo from "./AdsTwo";
import AdsThree from "./AdsThree";
import AdsFour from "./AdsFour";
import AdsFive from "./AdsFive";
import TopBrands from "./TopBrands";
import AdsSix from "./AdsSix";
import AdsSeven from "./AdsSeven";
import { homepageContent } from "@/static/contents/home";
import useTranslator from "@/utils/useTranslator";
import { useRouter } from "next/router";
import Banner from "./Banner";

export const HomePage = () => {
  const router = useRouter();
  let { locale } = router;
  const content: any = useTranslator(locale || "en", homepageContent);
  return (
    <div className="xl:px-0 lg:px-0 md:px-0 px-4">
      <Banner />
      <ProductSection sectionTitle={content?.bestSellerTitle} sectionUrl="" />
      <AdsSix />
      <ProductSection sectionTitle={content?.photocardsTitle} sectionUrl="" />
      <AdsOne />
      <ProductSection sectionTitle={content?.bt21Title} sectionUrl="" />
      <AdsTwo />
      <ProductSection sectionTitle={content?.albumTitle} sectionUrl="" />
      <AdsSeven />
      <AdsThree />
      <ProductSection sectionTitle={content?.cosplayTitle} sectionUrl="" />
      <AdsFour />
      <ProductSection sectionTitle={content?.kFoodTitle} sectionUrl="" />
      <AdsSix />
      <ProductSection sectionTitle={content?.electronicTitle} sectionUrl="" />
      <AdsFive />
      <ProductSection sectionTitle={content?.travelTitle} sectionUrl="" />
      <TopBrands />
    </div>
  );
};
