import Link from "next/link";
import React from "react";
import ArrowRight2 from "../svg/ArrowRight2";
import { MenuLinkItem } from "@/utils/type";
import { useRouter } from "next/router";
import ArrowLeft2 from "../svg/ArrowLeft2";
import NavbarArrowLeft from "../svg/NavbarArrowLeft";
import NavbarArrowRight from "../svg/NavbarArrowRight";

interface Props {
    item: MenuLinkItem;
    setOpenNasted: (value: boolean) => void;
    openNasted: boolean;
    selectedLink: number;
    setSelectedLink: (value: number) => void;
}

const NavbarDropdownLink = ({
    item,
    setOpenNasted,
    openNasted,
    selectedLink,
    setSelectedLink,
}: Props) => {
    const router = useRouter();
    let { locale } = router;
    return (
        <>
            {item.nestedItem ? (
                // button for nasted navigation
                <div
                    onClick={() => {
                        setOpenNasted(selectedLink === item.id ? false : true);
                        setSelectedLink(selectedLink === item.id ? 0 : item.id);
                    }}
                    className={`px-4 py-3 h-12 ${
                        selectedLink === item.id && "bg-blue-400 bg-opacity-10"
                    } hover:bg-blue-400 hover:bg-opacity-10 flex ${
                        locale === "ar" ? "flex-row-reverse" : "flex-row"
                    } items-center justify-between cursor-pointer`}
                >
                    {/* left  */}
                    <h3
                        className={`font-medium text-xs text-[#333]"
                }`}
                    >
                        {item.title}
                    </h3>

                    {/* right  */}
                    {item.nestedItem && (
                        <div className="cursor-pointer">
                            {locale === "ar" ? (
                                selectedLink === item.id ? (
                                    <NavbarArrowRight color="#9e9e9e" />
                                ) : (
                                    <NavbarArrowLeft color="#9e9e9e" />
                                )
                            ) : selectedLink === item.id ? (
                                <NavbarArrowLeft color="#9e9e9e" />
                            ) : (
                                <NavbarArrowRight color="#9e9e9e" />
                            )}
                        </div>
                    )}
                </div>
            ) : (
                // link for navigation
                <Link
                    href={item.link}
                    className={`px-4 py-3 h-12 hover:bg-blue-400 hover:bg-opacity-10 flex ${
                        locale === "ar" ? "flex-row-reverse" : "flex-row"
                    } items-center justify-between`}
                >
                    {/* left  */}
                    <h3
                        className={`font-medium text-xs text-[#333]"
                }`}
                    >
                        {item.title}
                    </h3>

                    {/* right  */}
                    {item.nestedItem && (
                        <div
                            className="cursor-pointer"
                            onClick={() => setOpenNasted(!openNasted)}
                        >
                            <ArrowRight2 />
                        </div>
                    )}
                </Link>
            )}
        </>
    );
};

export default NavbarDropdownLink;
