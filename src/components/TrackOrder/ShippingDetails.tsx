import React, { useContext } from "react";
import ShippingDetailsCard from "./ShippingDetailsCard";
import AppContext from "@/context/appContext";

const ShippingDetails = () => {
    const { auth } = useContext<any>(AppContext);
    return (
        <div className="w-full h-full flex flex-col gap-4">
            {auth && (
                <>
                    {[1, 2, 3].map((item, i) => (
                        <ShippingDetailsCard key={i} />
                    ))}
                </>
            )}
        </div>
    );
};

export default ShippingDetails;
