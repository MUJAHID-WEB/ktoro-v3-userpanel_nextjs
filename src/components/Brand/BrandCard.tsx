import Image from "next/image";
import React from "react";

export const BrandCard = ({
    image,
    title,
}: {
    image: string;
    title: string;
}) => {
    return (
        <div className="w-[220px] h-[160px] flex flex-col justify-between items-center p-4 bg-white border border-gray-600 rounded-md cursor-pointer">
            <Image
                src={image}
                alt="My SVG"
                className=""
                width={80}
                height={80}
            />

            <h5 className="font-bold text-xl text-black-secondary">{title}</h5>
        </div>
    );
};
