import { CallUsSection } from "@/components/CallUs/CallUsSection";
import Layout from "@/components/Layout/Layout";
import React from "react";

const CallUs = () => {
  return (
    <>
      {/* Call Us Section */}
      <CallUsSection />
    </>
  );
};

CallUs.getLayout = (page: React.ReactNode) => {
  return <Layout>{page}</Layout>;
};

export default CallUs;
