import React from "react";
import Image from "next/image";
import Link from "next/link";
import { SmsBlack } from "../svg/SmsBlack";
import { CallingBlack } from "../svg/CallingBlack";
import { Twitter } from "../svg/Twitter";
import { Facebook } from "../svg/Facebook";
import { Instagram } from "../svg/Instagram";

export const Footer = () => {
    return (
        <>
            <footer className="bg-white py-16">
                <div className="container flex flex-col justify-center items-center">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-6">
                        {/* Column 01 */}
                        <div className="flex flex-col items-end justify-end gap-4">
                            <h3 className="text-black-500 font-bold">
                                اشترك في رسائل البريد الإلكتروني
                            </h3>
                            <p className="text-[#494949]">
                                احصل على أحدث عروضنا وأخبارنا مباشرة في بريدك
                                الوارد
                            </p>

                            <div className="w-full flex flex-row items-start justify-start gap-4">
                                <button className="bg-black-secondary text-white px-6 py-[14px] rounded-md">
                                    ارسال
                                </button>

                                <div className="bg-ash-300 flex flex-row items-center p-[14px] rounded-md w-full">
                                    <input
                                        type="text"
                                        placeholder="البريد الالكتروني"
                                        className="text-black-secondary bg-ash-300 text-right w-full pr-2"
                                    />
                                    <SmsBlack />
                                </div>
                            </div>
                        </div>

                        {/* Column 02 */}
                        <div className="flex flex-col items-end justify-end gap-4">
                            <h3 className="text-black-500 font-bold">
                                نحن دائما هنا للمساعدة
                            </h3>
                            {/* Phone Number */}
                            <div className="flex flex-row ">
                                <p className="pr-[6px]">+96658574785</p>
                                <CallingBlack />
                            </div>
                            {/* Support mail */}
                            <div className="flex flex-row ">
                                <p className="pr-[6px]">
                                    support@domainstore.com
                                </p>
                                <SmsBlack />
                            </div>
                        </div>

                        {/* Column 03 */}
                        <div className="flex flex-col items-end justify-end gap-4">
                            <h3 className="text-black-500 font-bold">
                                روابط مهمه
                            </h3>

                            <Link href="/" className="text-[#494949]">
                                سله المشتريات
                            </Link>
                            <Link href="/" className="text-[#494949]">
                                حسابي
                            </Link>
                            <Link href="/" className="text-[#494949]">
                                المنتجات
                            </Link>
                            <Link href="/" className="text-[#494949]">
                                من نحن
                            </Link>
                            <Link href="/" className="text-[#494949]">
                                الشروط والاحكام
                            </Link>
                        </div>

                        {/* Column 04 */}
                        <div className="flex flex-col items-end justify-end gap-4">
                            <Image
                                src="/logo_footer.png"
                                className="text-black-primary "
                                alt="Logo"
                                height={60}
                                width={86}
                            />
                            <p className="text-[#494949] text-right">
                                نص مثال يمكن ان يستبدل في نفس المساحه نص مثال
                                يمكن ان يستبدل في نفس المساحه نص مثال يمكن ان
                                يستبدل في نفس المساحه
                            </p>

                            <div className="flex flex-row items-start justify-start gap-2 ">
                                <Link
                                    href={"/"}
                                    className="p-[10px] border border-ash-400 rounded-full "
                                >
                                    {" "}
                                    <Facebook />{" "}
                                </Link>
                                <Link
                                    href={"/"}
                                    className="p-[10px] border border-ash-400 rounded-full "
                                >
                                    {" "}
                                    <Twitter />{" "}
                                </Link>
                                <Link
                                    href={"/"}
                                    className="p-[10px] border border-ash-400 rounded-full "
                                >
                                    {" "}
                                    <Instagram />{" "}
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Lower Footer */}
                    <div className="border-t border-ash-300 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
                        <div className="flex flex-row  gap-3">
                            <Image
                                src="/images/paymentway/apple_pay.png"
                                className="text-black-primary "
                                alt="Logo"
                                height={36}
                                width={55}
                            />
                            <Image
                                src="/images/paymentway/master_card.png"
                                className="text-black-primary "
                                alt="Logo"
                                height={36}
                                width={55}
                            />
                            <Image
                                src="/images/paymentway/cs10_mada.png"
                                className="text-black-primary "
                                alt="Logo"
                                height={36}
                                width={55}
                            />
                            <Image
                                src="/images/paymentway/visa.png"
                                className="text-black-primary "
                                alt="Logo"
                                height={36}
                                width={55}
                            />
                        </div>
                        <div>
                            <p className="text-center md:text-left">
                                COPYRIHGT@2022-PRESENT KTORO, INC. ALL RIGHT
                                RESERVED
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};
