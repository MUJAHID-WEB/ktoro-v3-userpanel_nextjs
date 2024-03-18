import React from "react";

import { ItemPageSection } from "@/components/ItemPage/ItemPageSection";
import Layout from "@/components/Layout/Layout";
import { useRouter } from "next/router";

const ItemPage = () => {
  const router = useRouter();
  const { productId } = router.query;
  return (
    <>
      <div className="">
        {/* Item Page Section */}
        <ItemPageSection productId={Number(productId)} />
      </div>
    </>
  );
};

ItemPage.getLayout = (page: any) => {
  return <Layout>{page}</Layout>;
};

export default ItemPage;
