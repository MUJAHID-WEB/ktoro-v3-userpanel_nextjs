import React from "react";
import FooterLinkItem from "./FooterLinkItem";
import FooterLikHeader from "./FooterLikHeader";

const FooterLinksSection = () => {
    return (
        <div className="flex justify-start flex-wrap xl:gap-[25px] lg:gap-[50px] md:gap-[50px] gap-5 xl:mt-28 lg:mt-4 md:mt-4 mt-3">
            {/* col 1  */}
            <div className="flex flex-col gap-2 xl:w-[216px] lg:w-[216px] sm:w-[174px] w-[150px]">
                <FooterLikHeader text="Album" link="/" />
                <FooterLikHeader text="Cosplay" />
                {[
                    {
                        text: "Costume",
                        url: "/",
                    },
                    {
                        text: "Cosplay Weapons",
                    },
                    {
                        text: "Cosplay Contact Lenses",
                    },
                ].map((link, i) => (
                    <FooterLinkItem key={i} link={link} />
                ))}

                {/* Accessories */}
                <div className="mt-[18px] flex flex-col gap-2">
                    <FooterLikHeader text="Accessories" link="/" />
                    {[
                        {
                            text: "Stationery",
                            url: "/",
                        },
                        {
                            text: "Home Accessories",
                        },
                        {
                            text: "Phone Accessories",
                        },
                        {
                            text: "Jewelry",
                        },
                    ].map((link, i) => (
                        <FooterLinkItem key={i} link={link} />
                    ))}
                </div>
            </div>

            {/* col 2  */}
            <div className="flex flex-col gap-2 xl:w-[216px] lg:w-[216px] sm:w-[174px] w-[150px]">
                {/* Fashion  */}
                <FooterLikHeader text="Fashion" link="/" />
                {[
                    {
                        text: "Clothing",
                        url: "/",
                    },
                    {
                        text: "Fashion Accessories",
                    },
                ].map((link, i) => (
                    <FooterLinkItem key={i} link={link} />
                ))}

                {/* K-Food  */}
                <div className="mt-[18px] flex flex-col gap-2">
                    <FooterLikHeader text="K-Food" link="/" />
                    {[
                        {
                            text: "Noodles",
                            url: "/",
                        },
                        {
                            text: "Hot Sauces",
                        },
                        {
                            text: "Snacks",
                        },
                        {
                            text: "Coffee",
                        },
                        {
                            text: "Drinks",
                        },
                        {
                            text: "Protiens",
                        },
                    ].map((link, i) => (
                        <FooterLinkItem key={i} link={link} />
                    ))}
                </div>
            </div>

            {/* col 3  */}
            <div className="flex flex-col gap-2 xl:w-[216px] lg:w-[216px] sm:w-[174px] w-[150px]">
                {/* Home decor */}
                <FooterLikHeader text="Home decor" link="/" />
                {[
                    {
                        text: "Mugs",
                        url: "/",
                    },
                    {
                        text: "Travel Mugs",
                    },
                    {
                        text: "Pillows",
                    },
                    {
                        text: "Acrylic Stand",
                    },
                    {
                        text: "Figuers",
                    },
                ].map((link, i) => (
                    <FooterLinkItem key={i} link={link} />
                ))}

                {/* Electronics */}
                <div className="mt-[18px] flex flex-col gap-2">
                    <FooterLikHeader text="Electronics" link="/" />
                    {[
                        {
                            text: "Hand Fans",
                            url: "/",
                        },
                        {
                            text: "CD PLAYER",
                        },
                        {
                            text: "Microphone Bluetooth",
                        },
                        {
                            text: "Light Sticks",
                        },
                        {
                            text: "Camera",
                        },
                        {
                            text: "Night Light",
                        },
                    ].map((link, i) => (
                        <FooterLinkItem key={i} link={link} />
                    ))}
                </div>
            </div>

            {/* col 4  */}
            <div className="flex flex-col gap-2 xl:w-[216px] lg:w-[216px] sm:w-[174px] w-[150px]">
                {/* Photocards & Stickers */}
                <FooterLikHeader text="Photocards & Stickers" link="/" />
                {[
                    {
                        text: "Photocards",
                        url: "/",
                    },
                    {
                        text: "photocards-1-10",
                    },
                    {
                        text: "photocards-11-30",
                    },
                    {
                        text: "photocards-31-50",
                    },
                    {
                        text: "photocards-50-110",
                    },
                    {
                        text: "Stickers",
                    },
                    {
                        text: "stickers-1-85",
                    },
                    {
                        text: "stickers-86-100",
                    },
                    {
                        text: "stickers-100-120",
                    },
                ].map((link, i) => (
                    <FooterLinkItem key={i} link={link} />
                ))}
            </div>

            {/* col 5  */}
            <div className="flex flex-col gap-2 xl:w-[216px] lg:w-[216px] sm:w-[174px] w-[150px]">
                {/* BT21 */}
                <FooterLikHeader text="BT21" link="/" />
                {[
                    {
                        text: "Airpods",
                        url: "/",
                    },
                    {
                        text: "Thermal Cup",
                    },
                    {
                        text: "Hair Pins",
                    },
                    {
                        text: "socks",
                    },
                    {
                        text: "Notebook pens",
                    },
                    {
                        text: "Figurs",
                    },
                    {
                        text: "Cafe Model Watch",
                    },
                    {
                        text: "Dalgona Maker",
                    },
                    {
                        text: "Monitor Lamp",
                    },
                    {
                        text: "Mouse",
                    },
                    {
                        text: "MousePad",
                    },
                ].map((link, i) => (
                    <FooterLinkItem key={i} link={link} />
                ))}
            </div>

            {/* col 6  */}
            <div className="flex flex-col gap-2 xl:w-[216px] lg:w-[216px] sm:w-[174px] w-[150px]">
                {[
                    {
                        text: "Car Air Freshener",
                        url: "/",
                    },
                    {
                        text: "Air Tag case",
                    },
                    {
                        text: "Moon Light",
                    },
                ].map((link, i) => (
                    <FooterLinkItem key={i} link={link} />
                ))}
            </div>
        </div>
    );
};

export default FooterLinksSection;
