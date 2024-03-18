import React from "react";
import DashboardLayout from "@/components/Layout/DashboardLayout";
import OrderDetailsSection from "@/components/MyOrders/OrderDetails/OrderDetailsSection";

const OrderDetails = () => {
  return <OrderDetailsSection />;
};

OrderDetails.getLayout = (page: any) => {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default OrderDetails;
