import React, { useEffect, useState } from "react";
import Dropdown from "./Dropdown";
import Image from "next/image";
import united_states from "/public/images/header/united-states.png";
import CountryDropdownItem from "./CountryDropdownItem";
import { countrys } from "@/static/contents/header";
import { Country } from "@/utils/type";
import { useRouter } from "next/router";
import NavbarUpArrow from "../svg/NavbarUpArrow";
import NavbarBottomArrow from "../svg/NavbarBottomArrow";

interface Props {
    handleChangeLanguage: (value: string) => void;
}

const CountryDropdown = () => {
    const router = useRouter();
    const { locale } = router;
    const [open, setOpen] = useState<boolean>(false);
    const [selectedCountry, setSelectedCountry] = useState<Country>({
        code: "en",
        name: "English",
        image: united_states,
    });

    const handleCountry = (country: Country) => {
        setSelectedCountry(country);
        handleChangeLanguage(country.code);
        setOpen(false);
    };

    const handleChangeLanguage = (code: string) => {
        router.push(router.pathname, "", {
            locale: code == "en" ? "en" : "ar",
        });
    };

    useEffect(() => {
        if (locale === "ar") {
            setSelectedCountry(countrys[1]);
        } else {
            setSelectedCountry(countrys[0]);
        }
    }, [locale]);

    return (
        <div className="flex justify-between items-center w-[80px] relative">
            <div
                onClick={() => setOpen(!open)}
                className="w-20 h-10 bg-white rounded-lg flex items-center gap-1 p-[10px] cursor-pointer"
            >
                <div className="w-[23px] h-[18px]">
                    <Image
                        src={selectedCountry?.image}
                        alt={selectedCountry.name}
                    />
                </div>
                <p className="text-xs font-normal text-ash-500 uppercase">
                    {selectedCountry.code}
                </p>
                {open ? (
                    <NavbarUpArrow hight={18} width={18} color="#9E9E9E" />
                ) : (
                    <NavbarBottomArrow hight={18} width={18} color="#9E9E9E" />
                )}
            </div>
            {open && (
                <Dropdown>
                    <div className="w-[180px] pb-2">
                        <h3 className="font-bold text-lg text-center py-2">
                            Select Language
                        </h3>
                        <hr className="py-1" />
                        <div className="flex flex-col gap-1">
                            {countrys.map((country) => (
                                <CountryDropdownItem
                                    key={country.code}
                                    country={country}
                                    onClick={handleCountry}
                                    selectedCode={selectedCountry?.code}
                                />
                            ))}
                        </div>
                    </div>
                </Dropdown>
            )}
        </div>
    );
};

export default CountryDropdown;
