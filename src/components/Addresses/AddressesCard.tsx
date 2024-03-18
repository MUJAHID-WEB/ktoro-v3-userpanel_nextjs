import { addressesCardContent } from "@/static/contents/dashboard";
import useTranslator from "@/utils/useTranslator";
import { useRouter } from "next/router";
import React from "react";

type AddressesCardProps = {
    data: {
        id: number;
        name: string;
        address: string;
        phone: string;
        status: string;
        isDefault: boolean;
    };
};

const AddressesCard = ({ data }: AddressesCardProps) => {
    const router = useRouter();
    let { locale } = router;
    const content: any = useTranslator(locale || "en", addressesCardContent);
    const { name, address, phone, status, isDefault } = data;
    return (
        <div
            className={`border border-[#AEB4B9] p-4 ${
                isDefault && "bg-sky-600 bg-opacity-10"
            }  rounded-md relative group`}
        >
            {isDefault && (
                <span
                    className={`capitalize absolute cursor-pointer ${
                        locale === "ar" ? "left-3" : "right-3"
                    } top-3 bg-sky-600 px-3 py-1 rounded-md text-white`}
                >
                    {content?.default}
                </span>
            )}
            <div className={`${locale === "ar" ? "text-right" : "text-left"}`}>
                <p className="font-semibold">{name}</p>
                <p className="font-semibold text-gray-500">{address}</p>
                <p className="font-semibold">{phone}</p>
                <p className="font-semibold text-red-500">{status}</p>
            </div>
            <hr className="my-4" />
            <div
                className={`flex ${
                    locale === "ar" ? "flex-row-reverse" : "flex-row"
                } items-center gap-4`}
            >
                <button className="capitalize px-4 py-2 font-semibold text-sky-500">
                    Edit
                </button>
                {/* {isDefault ? null : (
                    <button className="px-4 py-2 font-semibold normal-case text-sky-500">
                        {content?.makeDefault}
                    </button>
                )} */}
                <button className="capitalize px-4 py-2 font-semibold text-red-500">
                    Delete
                </button>
            </div>
        </div>
    );
};

export default AddressesCard;
