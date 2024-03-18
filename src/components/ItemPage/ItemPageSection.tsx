import React from "react";
import { ItemDescription } from "./ItemDescription";
import { ServiceOffers } from "./ServiceOffers";
import { ItemRelated } from "./ItemRelated";
import { ItemReviews } from "./ItemReviews";
import Tabs from "../base/Tabs";
import { ItemAbout } from "./ItemAbout";
import { products } from "@/static";
import { ItemImage } from "./ItemImage";
import { itemPageContent } from "@/static/contents/item";
import useTranslator from "@/utils/useTranslator";
import { useRouter } from "next/router";
import Sizes from "./Sizes";
import { tabContent } from "@/static/contents/size";

// const tabs = [
//   {
//     label: "About this product",
//     content: <ItemAbout />,
//   },
//   {
//     label: "(365) Reviews",
//     content: <ItemReviews />,
//   },
//   {
//     label: "Sizes",
//     content: <Sizes />,
//   },
// ];

type ItemPageSectionProps = {
    productId: number;
};

export const ItemPageSection = ({ productId }: ItemPageSectionProps) => {
    const router = useRouter();
    let { locale } = router;
    const content: any = useTranslator(locale || "en", itemPageContent);
    const content2: any = useTranslator(locale || "en", tabContent);
    const product = products.find((product) => product.id === productId);
    return (
        <section className="pt-14">
            <h4
                className={`px-5 py-3 font-normal text-base text-black-500 ${
                    router.locale === "ar" ? "text-right" : "text-left"
                }`}
            >
                {content?.breadcrumbs}
            </h4>
            <div className="w-full md:bg-transparent lg:bg-white">
                <div
                    className={`container flex flex-col justify-center md:gap-6 lg:gap-[42px] md:pt-6 lg:pt-[37px] rounded-md md:bg-white pb-[70px] md:pb-[77px] xl:pb-[115px] ${
                        router.locale === "ar"
                            ? " md:flex-row-reverse lg:flex-row"
                            : "md:flex-row "
                    }`}
                >
                    <ItemImage />
                    <ItemDescription product={product} />
                </div>
            </div>
            <div className="flex flex-col py-4 lg:p-5 gap-6 ">
                {/* Item Image and Description */}

                {/* Service Offers */}
                <ServiceOffers />

                {/* About this Product and Reviews */}
                <div className="bg-white">
                    {/* <ItemAbout /> */}
                    <Tabs tabs={content2.tabs} />
                </div>

                {/* Related Products */}
                <div className="container my-2 xl:w-[90%] w-full mx-auto">
                    <ItemRelated
                        products={products}
                        groupClass={
                            "xl:w-[210px] lg:w-[230px] md:w-[183px] w-[193px]"
                        }
                        infoClassName={
                            '!px-[6px]'
                        }
                    />
                </div>
            </div>
        </section>
    );
};
