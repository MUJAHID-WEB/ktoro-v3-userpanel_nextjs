import Layout from "@/components/Layout/Layout";
import PrivacyPolicySection from "@/components/PrivacyPolicy/PrivacyPolicySection";
import React from "react";

const PrivacyPolicyPage = () => {
  return (
    <>
      <PrivacyPolicySection />
    </>
  );
};

PrivacyPolicyPage.getLayout = (page: React.ReactNode) => {
  return <Layout>{page}</Layout>;
};

export default PrivacyPolicyPage;
