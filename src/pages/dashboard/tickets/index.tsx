import DashboardLayout from "@/components/Layout/DashboardLayout";
import TicketSection from "@/components/ticket/TicketSection";
import React from "react";

const UserTicketPage = () => {
    return <TicketSection />;
};

UserTicketPage.getLayout = (page: any) => {
    return <DashboardLayout>{page}</DashboardLayout>;
};

export default UserTicketPage;
