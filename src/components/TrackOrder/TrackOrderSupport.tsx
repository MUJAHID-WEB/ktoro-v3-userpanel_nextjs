import React from "react";
import SupportCard from "./SupportCard";
import supportImage from "../../../public/images/trackorder/support (1).png";
import { CallingBlack } from "../svg/CallingBlack";

const TrackOrderSupport = () => {
    return (
        <div className="w-full xl:col-span-6 lg:col-span-6 col-span-12">
            <div className="flex justify-center items-center flex-row flex-wrap gap-5">
                <SupportCard
                    title="shipped by saee"
                    image={supportImage}
                    contact="support@ktoro.com"
                    contactIcon={<CallingBlack />}
                />
                <SupportCard
                    title="shipped by saee"
                    image={supportImage}
                    contact="support@ktoro.com"
                    contactIcon={<CallingBlack />}
                />
            </div>
        </div>
    );
};

export default TrackOrderSupport;
