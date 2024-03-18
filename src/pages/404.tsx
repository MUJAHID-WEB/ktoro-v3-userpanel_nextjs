import Layout from "@/components/Layout/Layout";
import NotFound from "@/components/NotFound";
import React from "react";
const Custom404Page = () => {
    return <NotFound />;
};

Custom404Page.getLayout = (page: React.ReactNode) => {
    return <Layout>{page}</Layout>;
};

export default Custom404Page;
