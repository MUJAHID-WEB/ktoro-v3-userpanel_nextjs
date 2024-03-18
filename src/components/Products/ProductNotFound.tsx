import React, { useState } from "react";
import TextField from "../base/TextField";
import Button from "../base/Button";

const ProductNotFound = () => {
    // state
    const [selectedColor, setSelectedColor] = useState<string>("");
    const [selectedSize, setSelectedSize] = useState<string>("");
    const [selectedBrand, setSelectedBrand] = useState<string>("");
    const [openBrandDropdown, setOpenBrandDropdown] = useState<boolean>(false);

    return (
        <div className="flex w-full min-h-screen xl:py-20 lg:py-20  md:py-20 py-10 flex-col items-center">
            {/* product not found description  */}
            <h3 className="text-3xl font-bold text-black-700">
                Not Found This Product
            </h3>
            <p className="xl:text-xl lg:text-xl md:text-xl text-lg font-normal text-red-700 text-center xl:mt-0 lg:mt-0 md:mt-0 mt-5">
                We apologize, we could not find the{" "}
                <br className="xl:hidden lg:hidden md:hidden block" /> product.
                Try the
                <br className="xl:block lg:block md:block hidden" />
                advanced search to find it
            </p>

            {/* product find filter section  */}
            <div className="flex xl:flex-row lg:flex-row md:flex-row flex-col gap-8 mt-11">
                {/* right col  */}
                <div className="xl:w-[433px] lg:w-[433px] md:w-[433px] w-[360px] flex flex-col gap-8">
                    <div className="border border-black-primary p-4 rounded-[5px]">
                        <p className="text-[15px] font-medium text-black-secondary">
                            أكتب النص
                        </p>

                        {/* TODO: range slider  */}
                    </div>
                    <div className="border border-black-primary p-4 rounded-[5px]">
                        <p className="text-[15px] font-medium text-black-secondary">
                            أكتب النص
                        </p>
                        <div className="mt-[10px] flex gap-[10px] items-center">
                            {["1X", "2X", "3X", "4X", "5X"].map((size) => (
                                <div
                                    onClick={() => setSelectedSize(size)}
                                    key={size}
                                    className={`w-[34px] h-[34px] bg-[#D9D9D9] border ${
                                        selectedSize === size
                                            ? "border-blue-400"
                                            : "border-[#D9D9D9]"
                                    }  hover:border-blue-400 flex justify-center items-center cursor-pointer`}
                                >
                                    {size}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="border border-black-primary p-4 rounded-[5px]">
                        <p className="text-[15px] font-medium text-black-secondary">
                            أكتب النص
                        </p>
                        <div className="mt-[10px] flex gap-[10px] items-center">
                            {[
                                {
                                    code: "#E2E2E2",
                                    color: "white",
                                },
                                {
                                    code: "#2B8DC5",
                                    color: "blue",
                                },
                                {
                                    code: "#F6CA37",
                                    color: "yellow",
                                },
                                {
                                    code: "#16AD64",
                                    color: "green",
                                },
                                {
                                    code: "#2F2F2F",
                                    color: "black",
                                },
                                {
                                    code: "#FF0000",
                                    color: "red",
                                },
                            ].map((item) => (
                                <div
                                    onClick={() => setSelectedColor(item.color)}
                                    style={{
                                        backgroundColor: item.code,
                                    }}
                                    key={item.code}
                                    className={`w-[34px] h-[34px] flex justify-center items-center rounded-full cursor-pointer`}
                                ></div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* left col  */}
                <div className="xl:w-[433px] lg:w-[433px] md:w-[433px] w-[360px] flex flex-col gap-6">
                    <TextField
                        inputClass="!border-black-primary !placeholder:text-black-primary"
                        identifier="productName"
                        onChangeCb={() => {}}
                        placeholder="Product Name"
                    />
                    <TextField
                        inputClass="!border-black-primary !placeholder:text-black-primary"
                        identifier="productCode"
                        onChangeCb={() => {}}
                        placeholder="Product Code"
                    />
                    <TextField
                        inputClass="!border-black-primary !placeholder:text-black-primary"
                        identifier="productDescription"
                        onChangeCb={() => {}}
                        placeholder="Product Description"
                    />
                    <div className="">
                        <TextField
                            inputClass="!border-black-primary !placeholder:text-black-primary"
                            identifier="brandName"
                            onChangeCb={() => setOpenBrandDropdown(true)}
                            placeholder="Brand Name"
                            value={selectedBrand}
                        />

                        {/* dropdown  */}
                        {openBrandDropdown && (
                            <div className="mt-4 xl:w-[433px] lg:w-[433px] md:w-[433px] w-[360px] bg-white rounded-[4px] py-[7px]">
                                {["Apple", "Google", "Microsoft"].map(
                                    (brand) => (
                                        <div
                                            key={brand}
                                            onClick={() => {
                                                setOpenBrandDropdown(false);
                                                setSelectedBrand(brand);
                                            }}
                                            className="h-[52px] flex justify-center items-center cursor-pointer hover:bg-black-primary group"
                                        >
                                            <h3 className="text-[22px] font-medium text-black-700 group-hover:text-white">
                                                {brand}
                                            </h3>
                                        </div>
                                    )
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <div className="mt-9">
                <Button btnText="Search" btnClass="!w-[247px] !bg-blue-400" />
            </div>
        </div>
    );
};

export default ProductNotFound;
