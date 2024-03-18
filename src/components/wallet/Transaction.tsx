import { useRouter } from "next/router";
import React, { FC } from "react";
export type transactionType = {
    label: string;
    date: string;
    minusAmount?: string;
    plusAmount?: string;
};
const Transaction: FC<transactionType> = ({
    label,
    date,
    plusAmount,
    minusAmount,
}) => {
    const router = useRouter();
    let { locale } = router;
    return (
        <div
            className={`flex ${
                locale === "ar" ? "flex-row-reverse" : "flex-row"
            } justify-between items-center px-8 py-3 border-b border-[#B3B3B3]`}
        >
            <div className={`${locale === "ar" ? "text-end" : "text-start"}`}>
                <h3 className="text-base font-medium">{label}</h3>
                <p className="text-sm font-medium text-black-600">{date}</p>
            </div>
            <div className={`${locale === "ar" ? "text-start" : "text-end"}`}>
                {minusAmount && (
                    <h3 className="text-base font-bold text-red-400">
                        - {minusAmount}
                    </h3>
                )}
                {plusAmount && (
                    <h3 className="text-base font-bold text-green-400">
                        + {plusAmount}
                    </h3>
                )}
                <p className="text-sm font-medium text-black-600">
                    {minusAmount ? "Points deleted" : "Points Added"}
                </p>
            </div>
        </div>
    );
};

export default Transaction;
