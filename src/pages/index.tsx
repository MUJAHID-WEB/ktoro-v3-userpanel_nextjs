import { Inter } from "next/font/google";
import Layout from "@/components/Layout/Layout";
import { HomePage } from "@/components/HomeOptional/HomePage";

const inter = Inter({ subsets: ["latin"] });

const Home = () => {
  return (
    <div className="bg-[#FAFAFA] py-12">
      <HomePage />
    </div>
  );
};

Home.getLayout = (page: React.ReactNode) => {
  return <Layout>{page}</Layout>;
};

export default Home;
