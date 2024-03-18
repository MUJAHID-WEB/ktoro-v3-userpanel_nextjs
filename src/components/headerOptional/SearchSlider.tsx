import React, { useEffect, useRef } from "react";
import SearchHistory from "./SearchHistory";
import { useRouter } from "next/router";
import Tag from "./Tag";
import SearchBox from "./SearchBox";

interface Props {
    open: boolean;
    setOpen: (e: boolean) => void;
    keyword: string;
    setKeyword(open: string): void;
}

const SearchSlider = ({ open, setOpen, keyword, setKeyword }: Props) => {
    const router = useRouter();
    let { locale } = router;
    const cartBox = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: any) => {
            if (cartBox.current && !cartBox.current.contains(event.target)) {
                setOpen(false);
            } else {
                setOpen(true);
            }
        };

        document.addEventListener("click", handleClickOutside, true);

        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, [cartBox, setOpen]);

    // handle search
    const handleSearch = (open: string) => {
        router.push(`/products?keyword=${open.toLowerCase()}`);
        setOpen(false);
    };

    // handle search when press enter
    const handleInputPress = (e: any) => {
        if (e.key === "Enter" || (e.key === "," && keyword)) {
            handleSearch(keyword);
        }
    };
    return (
        <div
            className={`h-screen bg-black-700/60 w-full flex justify-end fixed z-20 transition-opacity ease-in-out duration-300 top-0 right-0 translate ${
                open ? "opacity-100 visible " : "opacity-0 invisible "
            }`}
        >
            <div className="relative w-full md:w-[685px] lg:w-[685px] xl:w-[685px] my-6 mx-auto h-full lg:h-auto md:h-auto xl:mt-36 mt-24">
                <div
                    className={`translate duration-500 h-full transition-all ${
                        open
                            ? "translate-y-0 opacity-100"
                            : "-translate-y-20 opacity-0"
                    }
          `}
                >
                    <div className="xl:hidden flex justify-center mb-10">
                        <SearchBox
                            isOpen={open}
                            setIsOpen={setOpen}
                            keyword={keyword}
                        />
                    </div>
                    <div
                        ref={cartBox}
                        className="translate px-5 pt-4 pb-[25px] h-full lg:h-auto md:h-auto border-0 shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none"
                    >
                        {/*header*/}
                        <input
                            type="text"
                            value={keyword}
                            onChange={(e) => {
                                setKeyword(e.target.value);
                            }}
                            onKeyDown={handleInputPress}
                            className={`w-full border-b py-3 ${
                                locale === "ar" ? "text-right" : "text-left"
                            } bg-transparent`}
                        />
                        {/*body*/}
                        <div>
                            {/* search history  */}
                            <div className="mt-4 flex flex-col gap-[14px]">
                                <SearchHistory
                                    keyword="Apple"
                                    onClick={handleSearch}
                                />
                                <SearchHistory
                                    keyword="Brand"
                                    onClick={handleSearch}
                                />
                                <SearchHistory
                                    keyword="مقشر"
                                    onClick={handleSearch}
                                />
                            </div>

                            <div>
                                <h3
                                    className={`text-[15px] font-medium text-black-secondary my-6 ${
                                        locale === "ar"
                                            ? "text-right"
                                            : "text-left"
                                    }`}
                                >
                                    Search By Keyword
                                </h3>
                                <div
                                    className={`flex flex-wrap ${
                                        locale === "ar"
                                            ? "justify-end"
                                            : "justify-start"
                                    } gap-[10px]`}
                                >
                                    <Tag
                                        tag="Windows XP"
                                        onClick={handleSearch}
                                    />
                                    <Tag
                                        tag="Windows XP"
                                        onClick={handleSearch}
                                    />
                                    <Tag
                                        tag="Windows XP"
                                        onClick={handleSearch}
                                    />
                                    <Tag
                                        tag="Windows XP"
                                        onClick={handleSearch}
                                    />
                                    <Tag
                                        tag="Windows XP"
                                        onClick={handleSearch}
                                    />
                                    <Tag
                                        tag="Windows XP"
                                        onClick={handleSearch}
                                    />
                                    <Tag
                                        tag="Windows XP"
                                        onClick={handleSearch}
                                    />
                                </div>
                            </div>

                            <div>
                                <h3
                                    className={`text-[15px] font-medium text-black-secondary my-6 ${
                                        locale === "ar"
                                            ? "text-right"
                                            : "text-left"
                                    }`}
                                >
                                    Search By Keyword
                                </h3>
                                <div
                                    className={`flex flex-wrap justify-center gap-[10px]`}
                                >
                                    <Tag
                                        tag="Windows XP"
                                        onClick={handleSearch}
                                    />
                                    <Tag
                                        tag="Windows XP"
                                        onClick={handleSearch}
                                    />
                                    <Tag
                                        tag="Windows XP"
                                        onClick={handleSearch}
                                    />
                                    <Tag
                                        tag="Windows XP"
                                        onClick={handleSearch}
                                    />
                                    <Tag
                                        tag="Windows XP"
                                        onClick={handleSearch}
                                    />
                                    <Tag
                                        tag="Windows XP"
                                        onClick={handleSearch}
                                    />
                                    <Tag
                                        tag="Windows XP"
                                        onClick={handleSearch}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchSlider;
