import Image from "next/image";
import React from "react";
import orderImage from "../../../public/images/trackorder/order_image.png";

const OrderDetailsCard = () => {
    return (
        <div className="px-6 py-3 border-t border-[#D9D9D9] flex flex-row items-center">
            {/* image  */}
            <div className="w-[51px] h-[51px]">
                <Image src={orderImage} alt="" />
            </div>
            {/* description  */}
            <div className="w-full ps-2">
                <div className="flex flex-row items-start xl:gap-[23px] lg:gap-[23px] md:gap-3 gap-1">
                    <h3 className="xl:w-[210px] lg:w-[210px] md:w-[102px] w-[102px] capitalize leading-[21px] font-medium text-sm text-[#313131] font-arabic">
                        johnson’s baby shampoo 500 ml
                    </h3>
                    <h3 className="capitalize leading-[21px] font-medium text-sm text-[#313131] font-arabic">
                        relased date:22/11/2022
                    </h3>
                </div>
                <p className="font-normal text-sm text-black-600 -mt-1">aqua</p>
                <h3 className="capitalize leading-[21px] font-medium text-sm text-[#313131] mt-1">
                    SAR 93.8
                </h3>
            </div>
        </div>
    );
};

export default OrderDetailsCard;
