import React from "react";
import Image from "next/image";
import {
    footer1,
    footer2,
    footer3,
    footer4,
    footer5,
    footer6,
    footer7,
    footer8,
} from "../../../public/images/footer";
import FooterContactSection from "./FooterContactSection";
import FooterLinksSection from "./FooterLinksSection";

const FooterOptional = () => {
    return (
        <div className="bg-white">
            <div className="container xl:pt-[136px] lg:pt-[136px] md:pt-[136px] pt-6 pb-8 xl:px-0 lg:px-12 md:px-12 px-6 bg-white font-arabic">
                {/* top  */}
                <FooterContactSection />
                {/* links  */}
                <FooterLinksSection />

                {/* bottom  */}
                <hr className="xl:hidden lg:hidden md:hidden block mt-6" />
                <div className="mt-10 flex xl:flex-row lg:flex-row md:flex-row flex-col gap-6 justify-between items-center">
                    {/* brand images  */}
                    <div className="flex flex-wrap items-center xl:justify-start lg:justify-start  md:justify-start justify-center gap-3">
                        <Image src={footer1} alt="" />
                        <Image src={footer2} alt="" />
                        <Image src={footer3} alt="" />
                        <Image src={footer4} alt="" />
                        <Image src={footer5} alt="" />
                        <Image src={footer6} alt="" />
                        <Image src={footer7} alt="" />
                        <Image src={footer8} alt="" />
                    </div>
                    <p className="text-sm font-normal text-black-400">
                        KTORO, INC, All Rights Reserved 2023
                    </p>
                </div>
            </div>
        </div>
    );
};

export default FooterOptional;
