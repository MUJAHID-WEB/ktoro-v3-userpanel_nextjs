import React from "react";
import Search from "../svg/Search";
import { useRouter } from "next/router";

interface Props {
    isOpen: boolean;
    setIsOpen(value: boolean): void;
    keyword: string;
}

const SearchBox = ({ isOpen, setIsOpen, keyword }: Props) => {
    const router = useRouter();
    let { locale } = router;

    return (
        <>
            <div
                onClick={() => {
                    setIsOpen(!isOpen);
                }}
                className="w-[390px] h-[40px] relative"
            >
                <p
                    className={`bg-white ${
                        locale === "ar"
                            ? "text-right pe-4 ps-10"
                            : "text-left ps-4 pe-10"
                    } w-[390px] h-[40px] rounded-md  pe-10 py-2 placeholder:text-ash-500 text-base font-normal`}
                >
                    {keyword}
                </p>
                <div
                    className={`absolute ${
                        locale === "ar" ? "left-4" : "right-4"
                    } top-3`}
                >
                    <Search />
                </div>
            </div>
        </>
    );
};

export default SearchBox;
