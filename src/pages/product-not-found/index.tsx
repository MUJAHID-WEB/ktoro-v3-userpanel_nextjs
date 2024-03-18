import ProductNotFound from "@/components/Products/ProductNotFound";
import Header from "@/components/headerOptional/Header";
import Navbar from "@/components/headerOptional/Navbar";
import React from "react";

const ProductNotFoundPage = () => {
    return (
        <>
            <Header />
            <Navbar />
            <ProductNotFound />
        </>
    );
};

export default ProductNotFoundPage;
