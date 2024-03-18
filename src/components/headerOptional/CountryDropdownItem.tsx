import Image, { StaticImageData } from "next/image";
import React from "react";
import mark_sign from "../../../public/images/header/mark.png";
import { Country } from "@/utils/type";

interface Props {
    country: Country;
    onClick: (country: Country) => void;
    selectedCode?: string;
}

const CountryDropdownItem = ({
    country,
    onClick,
    selectedCode = "en",
}: Props) => {
    return (
        <div
            onClick={() => onClick(country)}
            className={`w-full h-12  ${
                selectedCode === country.code
                    ? "bg-blue-700 bg-opacity-5"
                    : "bg-white"
            } flex items-center justify-between gap-1 p-[10px] cursor-pointer hover:bg-blue-700 hover:bg-opacity-5 group`}
        >
            <div className="flex items-center gap-3">
                <div className="w-[23px] h-[18px]">
                    <Image src={country.image} alt="" />
                </div>
                <p className="text-base font-normal text-black-500 uppercase">
                    {country.name}
                </p>
            </div>
            {selectedCode === country.code && (
                <Image src={mark_sign} className="h-5 w-5" alt="" />
            )}
        </div>
    );
};

export default CountryDropdownItem;
