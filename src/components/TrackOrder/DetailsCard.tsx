import { useRouter } from "next/router";
import React from "react";

interface Props {
    children: React.ReactNode;
    title: string;
    data?: boolean;
}

const DetailsCard = ({ children, title, data = false }: Props) => {
    const router = useRouter();
    let { locale } = router;
    return (
        <div className="xl:w-[594px] lg:w-[640px] md:w-[640px] min-h-[346px]">
            {/* header */}
            <div
                className={` px-4 py-3 rounded-t-lg bg-black-secondary ${
                    !data && "bg-opacity-50"
                }`}
            >
                <h1
                    className={`font-bold text-sm text-[#fff] ${
                        locale === "ar" ? "text-right" : "text-left"
                    }`}
                >
                    {title}
                </h1>
            </div>
            {/* body  */}
            <div
                className={`min-h-[346px] border border-black-secondary ${
                    !data && "border-opacity-25"
                } rounded-b-lg`}
            >
                {children}
            </div>
        </div>
    );
};

export default DetailsCard;
