import React from "react";
import Wallet from "../svg/Wallet";
import wallet_img from "../../../public/images/dashboard/wallet.png";
import Image from "next/image";
import { useRouter } from "next/router";

const WalletCard = () => {
    const router = useRouter();
    let { locale } = router;
    return (
        <div className="p-8">
            <div
                className={`w-full h-[127px] px-8 py-6 bg-blue-400 bg-opacity-20 rounded-md  shadow-sm flex ${
                    locale === "ar" ? "flex-row-reverse" : "flex-row"
                } justify-between items-center`}
            >
                <div
                    className={`${
                        locale === "ar" ? "text-right" : "text-left"
                    }`}
                >
                    <p className="font-medium text-sm">Balance</p>
                    <h1 className="font-bold text-4xl leading-[54px] text-[#0085F2] mt-[5px]">
                        37.5 SAR
                    </h1>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <div>
                        <Image src={wallet_img} alt="wallet" />
                    </div>
                    <p className="font-medium text-sm uppercase text-[#35332C] mt-2">
                        Salman mir
                    </p>
                </div>
            </div>
        </div>
    );
};

export default WalletCard;
