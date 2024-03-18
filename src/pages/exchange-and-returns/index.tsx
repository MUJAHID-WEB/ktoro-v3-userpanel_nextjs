import React from "react";
import Layout from "@/components/Layout/Layout";
import ExchangeAndReturnsSection from "@/components/ExchangeAndReturns/ExchangeAndReturnsSection";

const ExchangeAndReturnsPage = () => {
  return <ExchangeAndReturnsSection />;
};

ExchangeAndReturnsPage.getLayout = (page: React.ReactNode) => {
  return <Layout>{page}</Layout>;
};

export default ExchangeAndReturnsPage;
