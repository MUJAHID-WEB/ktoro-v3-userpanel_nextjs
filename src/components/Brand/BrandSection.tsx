import React from "react";
import { BrandCard } from "./BrandCard";
import { BrandSearch } from "./BrandSearch";
import { useRouter } from "next/router";

export const BrandSection = () => {
    const router = useRouter();

    return (
        <div className="">
            {/* search section */}
            <BrandSearch />

            {/* brand items  */}
            <div className="container grid grid-cols-10  gap-5 py-7">
                {[
                    "Apple",
                    "Microsoft",
                    "Samsung",
                    "Topface",
                    "KiKo",
                    "Lorial",
                    "Mebiline",
                    "Bondy Sands",
                    "Bobbi Brown",
                    "Acqua di Parma",
                ].map((item) => (
                    <div
                        key={item}
                        onClick={() =>
                            router.push(`/products?brand=${item.toLowerCase()}`)
                        }
                        className="xl:col-span-2 lg:col-span-5 md:col-span-5 col-span-10 flex justify-center items-center"
                    >
                        <BrandCard
                            image={"/images/brand/applelogo.png"}
                            title={item}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};
