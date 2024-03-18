import DashboardLayout from "@/components/Layout/DashboardLayout";
import MyOrderSection from "@/components/MyOrders/MyOrderSection";
import React from "react";

const MyOrdersPage = () => {
  return <MyOrderSection />;
};

MyOrdersPage.getLayout = (page: React.ReactNode) => {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default MyOrdersPage;
