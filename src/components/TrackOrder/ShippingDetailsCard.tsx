import React from "react";

const ShippingDetailsCard = () => {
    return (
        <div className="flex flex-row justify-between py-3 px-3 gap-1 w-full">
            <h5 className="w-[100px] capitalize text-[#313131] font-medium text-sm">
                order created
            </h5>
            <h5 className="w-[80px] text-[#313131] font-medium text-sm">
                27-sep-2023
            </h5>
            <p className="xl:w-[340px] lg:w-[240px] md:w-[154px] w-[164px] text-black-600 text-justify font-normal text-xs">
                your order has been created it will be shipped once its
                confirmed.
            </p>
        </div>
    );
};

export default ShippingDetailsCard;
