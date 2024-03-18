import React, { useContext, useState } from "react";
import TrackOrderCard from "./TrackOrderCard";
import DetailsCard from "./DetailsCard";
import OrderDetails from "./OrderDetails";
import ShippingDetails from "./ShippingDetails";
import TrackOrderInvoice from "./TrackOrderInvoice";
import TrackOrderTimeline from "./TrackOrderTimeline";
import AppContext from "@/context/appContext";
import { useRouter } from "next/router";

const TrackOrder = () => {
    const router = useRouter();
    let { locale } = router;
    // state
    const [trackOrderNumber, setTruckOrderNumber] = useState<string>("");
    const { auth } = useContext<any>(AppContext);
    return (
        <div className="w-full xl:min-h-[576px] lg:min-h-[554px] md:min-h-[403px] min-h-[401px] bg-white flex flex-col items-center px-2 pb-28">
            {/* search order form  */}
            <div
                className={
                    trackOrderNumber
                        ? "xl:mt-[80px] lg:mt-[80px] md:mt-[70px] mt-[26px]"
                        : "xl:mt-[115px] lg:mt-[115px] md:mt-[68px] mt-[53px]"
                }
            >
                <TrackOrderCard
                    trackOrderNumber={trackOrderNumber}
                    setTruckOrderNumber={setTruckOrderNumber}
                />
            </div>

            {/* track order timeline  */}
            {trackOrderNumber && <TrackOrderTimeline />}

            {/* if order found then show order details  */}
            {/* NOTE: change trackOrderNumber to order when backend data is available */}
            {trackOrderNumber && (
                <div className="container  xl:mt-[57px] lg:mt-[57px] md:mt-[50px] mt-[34px] xl:ps-0 lg:ps-0 px-2 md:ps-14">
                    <div className="xl:w-[80%] lg:w-[65%] w-full mx-auto">
                        {/* order id & date  */}
                        <div className="flex xl:flex-row lg:flex-row flex-col justify-start">
                            <p className="xl:text-ash-600 lg:text-ash-600 text-ash-700  xl:text-base lg:text-base text-lg xl:font-normal lg:font-normal font-medium font-arabic uppercase">
                                Order No.: <span>6514004D48D156E4658AC1F6</span>
                            </p>
                            <p className="xl:text-ash-600 lg:text-ash-600 text-ash-700  xl:text-base lg:text-base text-lg xl:font-normal lg:font-normal font-medium font-arabic xl:ms-[40px] lg:ms-[40px]">
                                Dated: <span>27-sep-2023</span>
                            </p>
                        </div>

                        {/* order & shipping details  */}
                        <div className="flex xl:flex-row flex-col gap-11 mt-[22px]">
                            <DetailsCard title="Order Details" data>
                                <OrderDetails />
                            </DetailsCard>

                            {auth ? (
                                <DetailsCard title="Shipping Details" data>
                                    <ShippingDetails />
                                </DetailsCard>
                            ) : (
                                <DetailsCard title="Shipping Details">
                                    <ShippingDetails />
                                </DetailsCard>
                            )}
                        </div>

                        {/* invoice & support section */}

                        {auth && <TrackOrderInvoice />}
                    </div>
                </div>
            )}
        </div>
    );
};

export default TrackOrder;
