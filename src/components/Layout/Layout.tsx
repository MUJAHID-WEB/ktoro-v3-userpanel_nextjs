import React from "react";
// import { LowerHeader } from "../Header/LowerHeader";
// import { UpperHeader } from "../Header/UpperHeader";
// import { Footer } from "../Footer/Footer";
// import { RootProvider } from "@/context/rootContext";
import Header from "../headerOptional/Header";
import Navbar from "../headerOptional/Navbar";
import FooterOptional from "../Footer/FooterOptional";

type LayoutProps = {
    children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
    return (
        <>
            {/* Header */}
            {/* <UpperHeader />
        <LowerHeader />
        <Navbar /> */}
            <Header />
            <Navbar />
            <main>{children}</main>
            {/* Footer */}
            <FooterOptional />
        </>
    );
};

export default Layout;
