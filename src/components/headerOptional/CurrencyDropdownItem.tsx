import Image, { StaticImageData } from "next/image";
import React from "react";
import mark_sign from "../../../public/images/header/mark.png";
import { Country, Currency } from "@/utils/type";

interface Props {
    currency: Currency;
    onClick: (currency: Currency) => void;
    selectedCode?: string;
}

const CurrencyDropdownItem = ({
    currency,
    onClick,
    selectedCode = "sar",
}: Props) => {
    return (
        <div
            onClick={() => onClick(currency)}
            className={`w-full  ${
                selectedCode === currency.code
                    ? "bg-blue-700 bg-opacity-5"
                    : "bg-white"
            } flex items-center justify-between gap-1 p-[10px] cursor-pointer hover:bg-blue-700 hover:bg-opacity-5 group`}
        >
            <div className="flex items-center gap-3">
                <div className="w-[23px] h-[18px]">
                    <Image src={currency.image} alt="" />
                </div>
                <div>
                    <h5 className="text-base font-semibold text-black-500 capitalize">
                        {currency.name}
                    </h5>
                    <p className="uppercase text-xs">{currency.code}</p>
                </div>
            </div>
            {selectedCode === currency.code && (
                <Image src={mark_sign} className="h-5 w-5" alt="" />
            )}
        </div>
    );
};

export default CurrencyDropdownItem;
