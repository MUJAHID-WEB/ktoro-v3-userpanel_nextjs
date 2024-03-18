import React from "react";
import InvoiceInfo from "./InvoiceInfo";
import Button from "../base/Button";
import CartInfo from "./CartInfo";
import { useRouter } from "next/router";

const TrackOrderInvoice = () => {
    const router = useRouter();
    let { locale } = router;
    return (
        <div
            className={`xl:w-[550px] lg:w-[550px] md:w-full flex ${
                locale === "ar" ? "flex-row-reverse ms-auto" : "flex-row"
            } justify-between mt-[31px]`}
        >
            {/* invoice total  */}
            <div className="xl:w-[281px] lg:w-[281px] md:w-[349px] w-full flex flex-col gap-2">
                <CartInfo leftText="Subtotal" rightText="Sar 93.8" />
                <CartInfo leftText="shipping fee" rightText="Sar 0" />
                <CartInfo leftText="cash on delivery fee" rightText="Sar 0" />
                <hr className="my-[10px]" />
                <CartInfo leftText="grand total" rightText="Sar 93.8" bold />

                <div className="w-full xl:hidden lg:hidden md:hidden flex flex-row gap-5 mt-[18px]">
                    <div className="w-[252px]">
                        <InvoiceInfo
                            title="address"
                            details={[
                                "salman sir",
                                "73 financial center rd-downtown-dubai-united arab emirates",
                            ]}
                        />
                    </div>
                    <InvoiceInfo
                        title="Payment Method"
                        details={["cash on delivery"]}
                    />
                </div>
                <Button
                    btnText="Open Invoice Details"
                    btnClass="!text-[#fff] !mt-[22px]"
                />
            </div>
            {/* address & payment method */}
            <div className="w-[252px] xl:flex lg:flex md:flex hidden flex-col gap-5">
                <InvoiceInfo
                    title="address"
                    details={[
                        "salman sir",
                        "73 financial center rd-downtown-dubai-united arab emirates",
                    ]}
                />
                <InvoiceInfo
                    title="Payment Method"
                    details={["cash on delivery"]}
                />
            </div>
        </div>
    );
};

export default TrackOrderInvoice;
