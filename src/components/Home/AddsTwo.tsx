import React from "react";
import { AdsComponent } from "./AdsComponent";

export const AddsTwo = ({
    adsImage,
    adsAlt,
}: {
    adsImage: string;
    adsAlt: string;
}) => {
    return (
        <>
            <section className="container flex flex-row justify-start items-start xl:gap-4 lg:gap-[12px] md:gap-[9.6px] sm:gap-[4px] md:pt-[60px] sm:pt-6">
                <AdsComponent
                    className="w-full aspect-[1240/300]"
                    adsImage={adsImage}
                    adsAlt={adsAlt}
                />
            </section>
        </>
    );
};
