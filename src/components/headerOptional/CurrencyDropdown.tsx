import React, { useState } from "react";
import Dropdown from "./Dropdown";
import Image from "next/image";
import saudi_arabia from "/public/images/header/saudi-arabia.png";
import { Currency } from "@/utils/type";
import { currencys } from "@/static/contents/header";
import CurrencyDropdownItem from "./CurrencyDropdownItem";
import NavbarUpArrow from "../svg/NavbarUpArrow";
import NavbarBottomArrow from "../svg/NavbarBottomArrow";

const CurrencyDropdown = () => {
    // state
    const [open, setOpen] = useState<boolean>(false);
    // default currency value
    const [selectedCurrency, setSelectedCurrency] = useState<Currency>({
        code: "sar",
        name: "Saudi Arabia",
        image: saudi_arabia,
    });

    // handle change currency
    const handleCurrency = (currency: Currency) => {
        setSelectedCurrency(currency);
        setOpen(false);
    };
    return (
        <div className="flex justify-between items-center w-[80px] relative">
            <div
                onClick={() => setOpen(!open)}
                className="w-20 h-10 bg-white rounded-lg flex items-center gap-1 p-[10px] cursor-pointer"
            >
                <div className="w-[23px] h-[18px]">
                    <Image
                        src={selectedCurrency.image}
                        alt={selectedCurrency.name}
                    />
                </div>
                <p className="text-xs font-normal text-ash-500 uppercase">
                    {selectedCurrency.code}
                </p>
                {open ? (
                    <NavbarUpArrow hight={18} width={18} color="#9E9E9E" />
                ) : (
                    <NavbarBottomArrow hight={18} width={18} color="#9E9E9E" />
                )}
            </div>
            {/* dropdown  */}
            {open && (
                <Dropdown>
                    <div className="w-[300px] ">
                        <h3 className="font-bold text-lg text-start py-2 px-4">
                            Select Currency
                        </h3>
                        <hr className="py-1" />
                        <div className="flex flex-col gap-1 py-2">
                            {currencys.map((currency) => (
                                <CurrencyDropdownItem
                                    key={currency.code}
                                    currency={currency}
                                    onClick={handleCurrency}
                                    selectedCode={selectedCurrency.code}
                                />
                            ))}
                        </div>
                    </div>
                </Dropdown>
            )}
        </div>
    );
};

export default CurrencyDropdown;
