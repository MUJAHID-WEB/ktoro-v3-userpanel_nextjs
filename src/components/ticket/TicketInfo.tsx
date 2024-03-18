import { useRouter } from "next/router";
import React from "react";

interface Props {
    leftText: string;
    rightText: string;
    rightSmallText?: boolean;
}

const TicketInfo = ({ leftText, rightText, rightSmallText = false }: Props) => {
    const router = useRouter();
    let { locale } = router;
    return (
        <>
            {locale === "ar" ? (
                <>
                    <div className="col-span-8">
                        <h3
                            className={` text-right ${
                                rightSmallText
                                    ? "text-black-600 font-medium text-[11px]"
                                    : "text-[#35332C] font-bold text-sm"
                            } font-arabic `}
                        >
                            {rightText}
                        </h3>
                    </div>
                    <div className="col-span-4">
                        <h3 className="font-bold text-sm text-[#35332C] font-arabic text-right">
                            :{leftText}
                        </h3>
                    </div>
                </>
            ) : (
                <>
                    <div className="col-span-4">
                        <h3 className="font-bold text-sm text-[#35332C] font-arabic">
                            {leftText}:
                        </h3>
                    </div>
                    <div className="col-span-8">
                        <h3
                            className={`${
                                rightSmallText
                                    ? "text-black-600 font-medium text-[11px]"
                                    : "text-[#35332C] font-bold text-sm"
                            } font-arabic `}
                        >
                            {rightText}
                        </h3>
                    </div>
                </>
            )}
        </>
    );
};

export default TicketInfo;
