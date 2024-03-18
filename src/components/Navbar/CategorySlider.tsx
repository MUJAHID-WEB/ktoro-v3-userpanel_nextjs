import React, { useState } from "react";
import NavbarDropdownLink from "./NavbarDropdownLink";
import { useRouter } from "next/router";
import { categorySliderContent } from "@/static/contents/nav";
import useTranslator from "@/utils/useTranslator";

export const dropdownLinks = [
    {
        id: 1,
        link: "/gift",
        title: "Gift a voucher",
        nestedItem: [],
    },
    {
        id: 2,
        link: "/addresses",
        title: "Addresses",
        nestedItem: [],
    },
    {
        id: 3,
        link: "/logout",
        title: "Logout",
        logout: true,
    },
];

const CategorySlider = () => {
    const router = useRouter();
    let { locale } = router;
    const content: any = useTranslator(locale || "en", categorySliderContent);
    const [openNasted, setOpenNasted] = useState(false);
    const [selectedLink, setSelectedLink] = useState<number>(0);
    return (
        <div
            className={`hidden group-hover:block absolute top-16 ${
                locale == "ar" ? "right-0" : "left-0"
            }`}
        >
            <div
                className={`w-[1200px] flex z-50${
                    locale == "ar"
                        ? "flex-row justify-end"
                        : "flex-row justify-start"
                }`}
            >
                {locale !== "ar" && (
                    <div className="shadow-md bg-[#fff] border-r border-[#DDD] w-[300px] z-50">
                        <div className="shadow-md bg-white border-r border-[#DDD] w-[300px] z-50">
                            {content?.dropdownLinks.map((item: any) => (
                                <NavbarDropdownLink
                                    key={item.id}
                                    item={item}
                                    openNasted={openNasted}
                                    setOpenNasted={setOpenNasted}
                                    selectedLink={selectedLink}
                                    setSelectedLink={setSelectedLink}
                                />
                            ))}
                        </div>
                    </div>
                )}

                {openNasted && (
                    <div className="shadow-md bg-[#fff] border-r border-[#DDD] w-[300px] z-50">
                        {content.dropdownLinks2.map((item: any) => (
                            <NavbarDropdownLink
                                key={item.id}
                                item={item}
                                openNasted={openNasted}
                                setOpenNasted={setOpenNasted}
                                selectedLink={selectedLink}
                                setSelectedLink={setSelectedLink}
                            />
                        ))}
                    </div>
                )}

                {locale === "ar" && (
                    <div className="shadow-md bg-[#fff] border-r border-[#DDD] w-[300px] z-50">
                        <div className="shadow-md bg-white border-r border-[#DDD] w-[300px] z-50">
                            {content?.dropdownLinks.map((item: any) => (
                                <NavbarDropdownLink
                                    key={item.id}
                                    item={item}
                                    openNasted={openNasted}
                                    setOpenNasted={setOpenNasted}
                                    selectedLink={selectedLink}
                                    setSelectedLink={setSelectedLink}
                                />
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CategorySlider;
