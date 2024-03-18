import React, { useState } from "react";
import Clock from "../svg/Clock";
import HistoryArrow from "../svg/HistoryArrow";
import { useRouter } from "next/router";

interface Props {
    keyword: string;
    onClick: (value: string) => void;
}

const SearchHistory = ({ keyword, onClick }: Props) => {
    const router = useRouter();

    let { locale } = router;
    return (
        <div
            onClick={() => onClick(keyword)}
            className={`flex ${
                locale === "ar" ? "flex-row-reverse" : "flex-row"
            } justify-between items-center cursor-pointer`}
        >
            <div
                className={`flex ${
                    locale === "ar" ? "flex-row-reverse" : "flex-row"
                } items-center gap-2`}
            >
                <Clock />
                <p className="capitalize text-[15px] font-light text-black-primary">
                    {keyword}
                </p>
            </div>
            <HistoryArrow />
        </div>
    );
};

export default SearchHistory;
