import React from "react";
import WalletCard from "./WalletCard";
import TransactionCard from "./TransactionCard";
import { useRouter } from "next/router";

const WalletSection = () => {
    const router = useRouter();
    let { locale } = router;
    return (
        <section className="bg-white w-full rounded-md pb-8">
            {/* wallet card  */}
            <WalletCard />
            <h3
                className={`px-8 font-medium text-sm ${
                    locale === "ar" ? "text-end" : "text-start"
                }`}
            >
                Wallet History
            </h3>

            <hr className="mt-[42px] mb-[25px] border-[#D9D9D9] border" />
            <div className="px-8 mb-12">
                <TransactionCard />
            </div>
        </section>
    );
};

export default WalletSection;
