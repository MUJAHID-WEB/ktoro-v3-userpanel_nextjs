import React from "react";
import AddressesSection from "@/components/Addresses/AddressesSection";
import DashboardLayout from "@/components/Layout/DashboardLayout";

const AddressesPage = () => {
  return <AddressesSection />;
};

AddressesPage.getLayout = (page: React.ReactNode) => {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default AddressesPage;
