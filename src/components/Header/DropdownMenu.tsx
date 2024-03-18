import React from "react";
import ArrowRight2 from "../svg/ArrowRight2";
import HorizontalLink from "./HorizontalLink";
import VarticalLink from "./VarticalLink";
import { menuHorizontalLinks, menuVarticalLinks } from "@/static";
import { useRouter } from "next/router";

const DropdownMenu = () => {
    const router = useRouter();
    let { locale } = router;
    return (
        <div
            className={`bg-[#fff] w-[340px] shadow-md border border-[#E7E7E7] rounded-md absolute top-16 ${
                locale === "ar" ? "left-0" : "right-0"
            } z-50`}
        >
            {/* header  */}
            <div className="px-4 py-2 flex justify-between items-center">
                <div>
                    <h3 className="font-medium text-base text-[#212B36]">
                        Salman
                    </h3>
                    <p className="text-[#9E9E9E] text-xs font-normal">
                        Official_mir@hotmail.com
                    </p>
                </div>
                <div className="cursor-pointer">
                    <ArrowRight2 />
                </div>
            </div>

            <div className="my-2 h-[1px] w-full bg-[#E7E7E7]" />

            {/* link horizontal  */}
            <div className="px-4 py-2 flex justify-evenly gap-2">
                {menuHorizontalLinks.map((item) => (
                    <HorizontalLink key={item.id} item={item} />
                ))}
            </div>

            {/* link vartical  */}
            <div className="flex flex-col mt-2">
                {menuVarticalLinks.map((item) => (
                    <VarticalLink key={item.id} item={item} />
                ))}
            </div>
        </div>
    );
};

export default DropdownMenu;
