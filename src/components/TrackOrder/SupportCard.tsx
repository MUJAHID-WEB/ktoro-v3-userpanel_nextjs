import Image, { StaticImageData } from "next/image";
import React from "react";

interface Props {
    title: string;
    image: string | StaticImageData;
    contact: string;
    contactIcon: React.ReactNode;
}

const SupportCard = ({ title, image, contact, contactIcon }: Props) => {
    return (
        <div className="relative w-[206px] h-[160px] border border-[#D9D9D9] rounded-xl bg-[#F9FAFC] p-3 flex flex-col justify-between items-center group">
            <p className="capitalize text-xs font-bold text-[#2A3042]">
                {title}
            </p>
            {/* image  */}
            <div>
                <Image src={image} alt={title} />
            </div>
            <div className="flex items-center gap-2 capitalize text-xs font-medium text-[#2A3042]">
                <div className="w-[16px] h-[16px]">{contactIcon}</div> {contact}
            </div>
            <div className="w-[206px] h-[160px] absolute hidden justify-center items-center rounded-xl bg-[#000]  bg-opacity-40 top-0 group-hover:flex">
                <h3 className="font-bold text-2xl">Comming Soon</h3>
            </div>
        </div>
    );
};

export default SupportCard;
