import React, { useState } from "react";
import ArrowDownBlack from "../svg/ArrowDownBlack";
import SquareBox from "../svg/SquareBox";
import { useRouter } from "next/router";
import useTranslator from "@/utils/useTranslator";
import navbarItems from "@/static/contents/layout";
import CategorySlider from "./CategorySlider";

export const Navbar = () => {
    const router = useRouter();
    let { locale } = router;
    const [openCategorySlider, setOpenCategorySlider] =
        useState<boolean>(false);

    const content = useTranslator(locale || "en", navbarItems);

    // handle all category dropdown menu
    const handleToogleCategory = (text: string) => {
        if (text === "All categories" || text === "جميع الفئات") {
            setOpenCategorySlider(!openCategorySlider);
        }
    };
    return (
        <>
            <nav className="w-full bg-white font-arabic font-normal text-base xl:block lg:block md:block hidden">
                <div
                    className={`container relative flex gap-8 md:gap-6 text-right py-4 bg-white condition 
                    ${ locale === "ar" ? "flex-row-reverse" : "flex-row" } `}
                >
                    {content?.map((item: any, index: number) => (
                        <div
                            onClick={() => handleToogleCategory(item.title)}
                            key={index}
                            className={`navItem cursor-pointer  ${
                                item.nestedItem
                                    ? "flex justify-start items-center gap-1.5"
                                    : ""
                            } condition ${
                                locale == "ar" ? "flex-row" : "flex-row-reverse"
                            }`}
                        >
                            {item.nestedItem ? <ArrowDownBlack /> : <></>}
                            {/* if nasted item avaliable then dropdown otherwise link  */}
                            {item.nestedItem ? (
                                <p className="text-base font-medium capitalize text-black-500">
                                    {item.title}
                                </p>
                            ) : (
                                <a
                                    href={item.link}
                                    className="text-base font-medium capitalize text-black-500"
                                >
                                    {item.title}
                                </a>
                            )}

                            {item.hasIcon ? <SquareBox /> : <></>}
                        </div>
                    ))}
                    {openCategorySlider && <CategorySlider />}
                </div>
            </nav>
        </>
    );
};
