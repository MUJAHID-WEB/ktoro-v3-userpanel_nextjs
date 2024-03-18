import React from "react";
import DashboardLayout from "@/components/Layout/DashboardLayout";
import GiftAVoucherSection from "@/components/GiftAVoucher/GiftAVoucherSection";

const UserGiftPage = () => {
  return <GiftAVoucherSection />;
};

UserGiftPage.getLayout = (page: any) => {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default UserGiftPage;
