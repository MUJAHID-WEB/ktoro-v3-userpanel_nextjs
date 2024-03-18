import React, { ReactNode, useState } from "react";
import { HowCanHelp } from "../../components/HelpPage/HowCanHelp";
import { AboutKtoro } from "../../components/HelpPage/AboutKtoro";
import Layout from "@/components/Layout/Layout";
import { helpCategoryContents } from "@/static/contents/help";

export const HelpPage = () => {
  const [category, setCategory] = useState(helpCategoryContents[0]);
  return (
    <>
      <div className="bg-[#F9FAFB]">
        {/* How Can We Help You? */}
        <HowCanHelp setCategory={setCategory} />

        {/* About Ktoro */}
        <AboutKtoro category={category} />
      </div>
    </>
  );
};

HelpPage.getLayout = (page: any) => {
  return <Layout>{page}</Layout>;
};

export default HelpPage;
