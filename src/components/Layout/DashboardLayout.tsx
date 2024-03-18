import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import { userSidebars } from "@/static";
import FooterOptional from "../Footer/FooterOptional";
import Header from "../headerOptional/Header";
import Navbar from "../headerOptional/Navbar";
import { useRouter } from "next/router";

type DashboardLayout = {
    children: React.ReactNode;
};

const DashboardLayout = ({ children }: DashboardLayout) => {
  const router = useRouter();
  const { locale } = router;
    return (
        <>
            {/* Header */}
            <Header />
            <Navbar />

            <main>
                <div className="container">
                    <div className={`flex flex-col ${locale === "ar" ? "lg:flex-row-reverse" : "lg:flex-row"} gap-4 py-8`}>
                        <div>
                            <Sidebar data={userSidebars} />
                        </div>
                        <div className="flex-1">
                          {children}
                        </div>
                    </div>
                </div>
            </main>
            <FooterOptional />
        </>
    );
};

export default DashboardLayout;
