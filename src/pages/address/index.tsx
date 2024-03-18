import Layout from "@/components/Layout/Layout";
import AddAddressSideBar from "@/components/Sidebar/AddAddressSideBar";
import Button from "@/components/base/Button";
import { addressPageContent } from "@/static/contents/sidebar";
import useTranslator from "@/utils/useTranslator";
import { useRouter } from "next/router";
import Link from "next/link";
import React, { ReactNode, useContext, useState } from "react";
import AppContext from "@/context/appContext";
const Address = () => {
  const [address, setAddress] = useState(false);
  const router = useRouter();
  let { locale } = router;
  const { userAddress } = useContext<any>(AppContext);
  const content: any = useTranslator(locale || "en", addressPageContent);

  console.log(userAddress);

  return (
    <section className="relative min-h-screen h-full md:h-auto bg-ash-100 w-full flex flex-col justify-start items-center pt-[46px] md:pt-[133px] lg:py-[60px] gap-y-6 md:gap-y-[84px] lg:gap-y-[127px]">
      <div className=" relative w-full sm:w-[400px] flex flex-row justify-between items-center px-1 z-10">
        <span className="absolute left-[5%] top-[36%] w-[85%] -z-10 h-0.5 bg-[#D9D9D9]" />
        <div className="space-y-1 text-center">
          <div className="bg-[#D3E4E2] flex h-14 w-14 border-[3px] border-white rounded-full justify-center items-center">
            <i className="fa-solid fa-location-dot"></i>
          </div>
          <p className="text-[13px] leading-[19px] text-black-primary">
            {content?.step1Address}
          </p>
        </div>
        <div className="space-y-1 text-center">
          <div className="bg-[#E3E3E4] flex h-[46px] w-[46px] border-[3px] border-white rounded-full justify-center items-center">
            <i className="fa-solid fa-cart-arrow-down"></i>
          </div>
          <p className="text-[13px] leading-[19px] text-black-primary">
            {content?.step2CheckOut}
          </p>
        </div>
        <div className="space-y-1 text-center">
          <div className="bg-[#E3E3E4] flex h-[46px] w-[46px] border-[3px] border-white rounded-full justify-center items-center">
            <i className="fa-regular fa-circle-check"></i>
          </div>
          <p className="text-[13px] leading-[19px] text-black-primary">
            {content?.step3Complete}
          </p>
        </div>
      </div>
      <div className="w-full md:w-[669px] px-3 sm:px-5 md:px-0 md:pb-0">
        <h6 className="text-base font-arabicBold text-black-700 pb-5">
          {content?.addressPageTitle}
        </h6>
        <div className="flex flex-col justify-start gap-3.5 md:gap-6">
          <Button
            btnText={content?.addressPageBtnText}
            prefixIcon="fa-solid fa-plus"
            variant="outlined"
            btnClass="!rounded-[6px] !font-arabicMedium !justify-start !py-4 !px-5 !border-[#B3B3B3]"
            actionCb={() => {
              setAddress(true);
            }}
          />
          <AddAddressSideBar viewCart={address} actionCb={setAddress} />
          <h1 className="capitalize text-2xl md:text-3xl leading-[44px] text-black-primary font-arabicMedium lg:px-12 my-10 text-center">
            {content?.headingThereIsNoAddress}
          </h1>
          {/* Default address  */}
          <div className="w-full bg-[#EEF5F9] border border-[#C2C2C2] rounded pt-2 pr-3.5 pl-3.5 pb-2.5 sm:pl-6 sm:pb-5">
            <div className="w-full flex flex-row justify-between items-start">
              <div className="pb-3.5">
                <p className="text-sm font-arabicBold text-black-secondary">
                  Salman Mir
                </p>
                <p className="text-sm font-arabicMedium text-[#787878]">
                  28347, Saudi Arabia
                </p>
                <p className="text-sm font-arabicBold text-black-secondary">
                  966584739822
                </p>
                <p className="text-sm font-arabicMedium text-red-400">
                  Phone no. not verified
                </p>
              </div>
              <Button
                variant="primary"
                btnText={content?.defaultBtnText}
                btnClass="!bg-blue-400 !w-fit !text-[8px] !leading-[12px] !font-arabicBold !px-[17px] !py-[5px]"
              />
            </div>
            <div className="w-full md:w-[80%] flex flex-row justify-start gap-4 pb-1 border-t border-[#C2C2C2]">
              <Button
                variant="naked"
                btnText={content?.editBtnText}
                btnClass="!text-[#0085F2] !w-fit !bg-transparent !pt-1 !pb-0 !px-0 !text-sm !font-arabicBold"
                actionCb={() => {}}
              />
              <Button
                variant="naked"
                btnText={content?.deleteBtnText}
                btnClass="!text-yellow-400 !w-fit !bg-transparent !pt-1 !pb-0 !px-0 !text-sm !font-arabicBold"
                actionCb={() => {}}
              />
            </div>
          </div>
          {/* Default address  */}
          <div className="hidden lg:block w-full border-t border-[#C2C2C2] pt-10 px-24">
            <Link
              href={content.paymentPageUrl}
              className="w-full block text-center rounded-[3px] bg-black-primary text-white font-arabicMedium capitalize text-base px-6 py-[9px]"
            >
              {content?.btnProceedToPay}
            </Link>
          </div>
        </div>
      </div>
      {/* for mobile only */}
      <div className="w-full mt-auto lg:hidden sticky bottom-0">
        <Link
          href={content.paymentPageUrl}
          className="w-full block text-center rounded-[3px] bg-black-primary text-white font-arabicMedium capitalize text-base px-6 py-[9px]"
        >
          {content?.btnProceedToPay}
        </Link>
      </div>
    </section>
  );
};

Address.getLayout = (page: ReactNode) => {
  return <Layout>{page}</Layout>;
};

export default Address;
