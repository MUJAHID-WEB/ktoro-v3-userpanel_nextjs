import React from "react";
import BannerSlider from "./BannerSlider";
import SelectField from "../base/SelectField";
import FilterSidebar from "./FilterSidebar";
import { products, productsDrowdowns } from "@/static";
import { RelatedProductCard } from "../ItemPage/RelatedProductCard";
import { useRouter } from "next/router";

const ProductsPageSection = () => {
  const router = useRouter();
  const { locale } = router;
  return (
    <section className="py-8">
      <div className="container">
        <div className="space-y-8">
          <BannerSlider />
          <h2 className="text-2xl font-semibold text-center">All Products</h2>
          <div
            className={`flex flex-col md:flex-row gap-4`}
          >
            <div className={`hidden md:block bg-white p-4 w-auto md:w-[300px] lg:w-[330px] ${locale === "ar" && "order-last"}`}>
              <FilterSidebar />
            </div>
            <div className="w-full">
              <div className="flex justify-between flex-col lg:flex-row items-center gap-4 border-b border-black-700 pb-8">
                <div className="flex gap-5">
                  <div>
                    <select name="items" id="items">
                      <option value="12">Show: 12</option>
                      <option value="24">Show: 24</option>
                      <option value="36">Show: 36</option>
                      <option value="48">Show: 48</option>
                      <option value="60">Show: 60</option>
                    </select>
                  </div>
                  <div className="flex gap-3">
                    <select onChange={(e) => console.log(e.target.value)}>
                      {productsDrowdowns.map((productDropdown, index) => (
                        <option key={index} value={productDropdown.value}>
                          {productDropdown.name}
                        </option>
                      ))}
                    </select>
                    <label className="font-semibold">Sort By</label>
                  </div>
                </div>
                <div>
                  <p>showing 1 - 20 of 896 Items | <span className="font-semibold">All Products</span></p>
                </div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2.5 mt-8">
                {products.map((product, index) => (
                  <RelatedProductCard key={index} product={product} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className={`${locale === "ar" && "order-first"}`}>
        <div className="flex justify-between items-center border-b border-black-700 pb-8">
          <p className="font-semibold">Result: (8) Items</p>
          <select onChange={(e) => console.log(e.target.value)}>
            {productsDrowdowns.map((productDropdown, index) => (
              <option key={index} value={productDropdown.value}>
                {productDropdown.name}
              </option>
            ))}
          </select>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          {products.map((product: any, index: number) => (
            <RelatedProductCard key={index} product={product} />
          ))}
        </div>
      </div> */}
      {/* </div> */}
      {/* </div> */}
      {/* </div> */}
    </section>
  );
};

export default ProductsPageSection;
