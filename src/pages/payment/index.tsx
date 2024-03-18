import Layout from "@/components/Layout/Layout";
import PaymentSection from "@/components/Payment/PaymentSection";
import React from "react";

const PaymentPage = () => {
  return <PaymentSection />;
};

PaymentPage.getLayout = (page: React.ReactNode) => {
  return <Layout>{page}</Layout>;
};

export default PaymentPage;
