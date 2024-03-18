import React from "react";
import { AdsComponent } from "../Home/AdsComponent";

const AdsSeven = () => {
    return (
        <section className="container xl:hidden lg:hidden md:hidden flex xl:px-4 px-0 mt-2">
            <AdsComponent
                className="w-[100%] !h-[150px] aspect-[1245/286]"
                adsImage="/images/homepage/Fashion 4.png"
                adsAlt="Cosplay Weapons"
            />
        </section>
    );
};

export default AdsSeven;
