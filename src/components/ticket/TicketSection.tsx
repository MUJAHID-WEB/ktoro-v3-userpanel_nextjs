import React, { useState } from "react";
import TicketCard from "./TicketCard";
import ViewTicket from "./ViewTicket";
import { useRouter } from "next/router";

const TicketSection = () => {
    const router = useRouter();
    let { locale } = router;
    const [viewTicket, setViewTicket] = useState<boolean>(false);

    return (
        <section className="bg-white w-full xl:py-[62px] lg:py-[62px] md:py-[62px] py-[53px] xl:px-[56px] lg:px-[56px] md:px-[56px] px-0 rounded-md">
            <div className={`w-full grid grid-cols-12  gap-8`}>
                {/* ticket section  */}
                <div
                    className={`w-full xl:col-span-6 lg:col-span-12 col-span-12 ${
                        locale === "ar"
                            ? "xl:order-last order-first xl:items-end"
                            : "order-first  xl:items-start"
                    }  lg:items-center items-center justify-center flex flex-col gap-5`}
                >
                    <TicketCard
                        active
                        newTicket
                        viewTicket={viewTicket}
                        setViewTicket={setViewTicket}
                    />
                    <TicketCard
                        viewTicket={viewTicket}
                        setViewTicket={setViewTicket}
                    />
                    <TicketCard
                        active
                        viewTicket={viewTicket}
                        setViewTicket={setViewTicket}
                    />
                </div>
                {/* message section  */}
                <div className="w-full xl:col-span-6 lg:col-span-12 col-span-12 xl:items-start items-center justify-center flex">
                    {viewTicket && <ViewTicket setViewTicket={setViewTicket} />}
                </div>
            </div>
        </section>
    );
};

export default TicketSection;
