import Link from "next/link";
import React, { useState } from "react";
import menuIcon from "../../../public/images/header/menu.png";
import Image from "next/image";
import NavbarBottomArrow from "../svg/NavbarBottomArrow";
import CategorySlider from "../Navbar/CategorySlider";
import { useRouter } from "next/router";
import { navBarContent } from "@/static/contents/nav";
import useTranslator from "@/utils/useTranslator";
import NavbarUpArrow from "../svg/NavbarUpArrow";

const Navbar = () => {
    const router = useRouter();
    let { locale } = router;
    const content: any = useTranslator(locale || "en", navBarContent);

    const [openCategorySlider, setOpenCategorySlider] =
        useState<boolean>(false);
    return (
        <div className="w-full h-16 bg-white xl:block hidden">
            <div
                className={`container h-16 flex ${
                    locale === "ar" ? "flex-row-reverse" : "flex-row"
                } items-center gap-6 relative`}
            >
                {/* all category menu button  */}
                <div
                    className={`w-[227px] h-full bg-black-primary px-6 flex items-center gap-1.5 cursor-pointer relative group`}
                >
                    <div
                        onClick={() =>
                            setOpenCategorySlider(!openCategorySlider)
                        }
                        className={`flex ${
                            locale === "ar" ? "flex-row-reverse" : "flex-row"
                        } items-center gap-2`}
                    >
                        <Image src={menuIcon} alt="" />
                        <p className="text-base font-bold text-white">
                            {content?.category}
                        </p>
                        <div className="mt-1 block group-hover:hidden transition delay-300">
                            <NavbarBottomArrow />
                        </div>
                        <div className="mt-1 hidden group-hover:block transition delay-300">
                            <NavbarUpArrow />
                        </div>
                    </div>

                    <CategorySlider />
                </div>

                {/* links  */}
                {content?.navLink.map((item: any, id: number) => (
                    <Link
                        key={id}
                        href={item.url}
                        className="text-base font-bold text-black-secondary"
                    >
                        {item.text}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Navbar;
