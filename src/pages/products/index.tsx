import Layout from "@/components/Layout/Layout";
import ProductsPageSection from "@/components/Products/ProductsPageSection";
import React from "react";

const ProductsPage = () => {
  return <ProductsPageSection />;
};

ProductsPage.getLayout = (page: React.ReactNode) => {
  return <Layout>{page}</Layout>;
};

export default ProductsPage;
