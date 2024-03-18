import React from "react";
import { AdsComponent } from "./AdsComponent";

export const AddsFour = () => {
    return (
        <section className="container grid grid-cols-12 gap-5 mt-8">
            <div className="col-span-12">
                <AdsComponent
                    className="w-[49.35%] aspect-[612/300]"
                    adsImage="/images/product/01.png"
                    adsAlt="Cosplay Weapons"
                />
            </div>
            <div className="col-span-6">
                <AdsComponent
                    className="w-[49.35%] aspect-[612/300]"
                    adsImage="/images/product/01.png"
                    adsAlt="Cosplay Weapons"
                />
            </div>
            <div className="col-span-6">
                <AdsComponent
                    className="w-[49.35%] aspect-[612/300]"
                    adsImage="/images/product/01.png"
                    adsAlt="Cosplay Weapons"
                />
            </div>
            <div className="col-span-4">
                <AdsComponent
                    className="w-[49.35%] aspect-[612/300]"
                    adsImage="/images/product/01.png"
                    adsAlt="Cosplay Weapons"
                />
            </div>
            <div className="col-span-4">
                <AdsComponent
                    className="w-[49.35%] aspect-[612/300]"
                    adsImage="/images/product/01.png"
                    adsAlt="Cosplay Weapons"
                />
            </div>
            <div className="col-span-4">
                <AdsComponent
                    className="w-[49.35%] aspect-[612/300]"
                    adsImage="/images/product/01.png"
                    adsAlt="Cosplay Weapons"
                />
            </div>
        </section>
    );
};
