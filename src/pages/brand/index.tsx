import { BrandCard } from "@/components/Brand/BrandCard";
import { BrandSection } from "@/components/Brand/BrandSection";
import Layout from "@/components/Layout/Layout";

const Brand = () => {
  return (
    <>
      <div className="">
        {/* Brand Section */}
        <BrandSection />
      </div>
    </>
  );
};

Brand.getLayout = (page: any) => {
  return <Layout>{page}</Layout>;
};

export default Brand;
