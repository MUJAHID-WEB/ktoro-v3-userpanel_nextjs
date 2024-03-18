import React from "react";
import Layout from "@/components/Layout/Layout";
import { useRouter } from "next/router";
import Insta from "@/components/svg/Insta";
import ShoppingBag from "@/components/svg/ShoppingBag";
import Snap from "@/components/svg/Snap";
import Track from "@/components/svg/Track";
import useTranslator from "@/utils/useTranslator";
import Link from "next/link";
import { orderCompleteContent } from "@/static/contents/sidebar";

const OrderComplete = () => {
  const router = useRouter();
  let { locale } = router;
  const content: any = useTranslator(locale || "en", orderCompleteContent);
  return (
    <>
      <div className="container">
        <div className="py-12">
          <div className=" relative w-full sm:w-[400px] flex flex-row justify-between items-center px-1 z-10 mx-auto">
            <span className="absolute left-[5%] top-[46%] w-[85%] -z-10 h-0.5 bg-[#D9D9D9]" />
            <div className="space-y-1 text-center">
              <div className="bg-[#D3E4E2] flex h-14 w-14 border-[3px] border-white rounded-full justify-center items-center">
                <i className="fa-solid fa-location-dot"></i>
              </div>
              <p className="text-[13px] leading-[19px] text-black-primary">
                {content?.step1}
              </p>
            </div>
            <div className="space-y-1 text-center">
              <div className="bg-[#D3E4E2] flex h-14 w-14 border-[3px] border-white rounded-full justify-center items-center">
                <i className="fa-solid fa-cart-arrow-down"></i>
              </div>
              <p className="text-[13px] leading-[19px] text-black-primary">
                {content?.step2}
              </p>
            </div>
            <div className="space-y-1 text-center">
              <div className="bg-[#D3E4E2] flex h-14 w-14 border-[3px] border-white rounded-full justify-center items-center">
                <i className="fa-regular fa-circle-check"></i>
              </div>
              <p className="text-[13px] leading-[19px] text-black-primary">
                {content?.step3}
              </p>
            </div>
          </div>
        </div>
        <div className="mb-8">
          <div className="w-full bg-white text-center relative mt-7 md:mt-0 pt-14 pb-28 md:pb-[60px] lg:pb-10">
            <i className="fa-solid fa-circle-check text-green-400 text-[80px] leading-[80px]"></i>
            <h3 className="mx-auto md:w-[580px] pt-5 text-3xl leading-[44px] md:text-[45px] font-arabicBold md:leading-[66px]">
              {content?.titleOrderConfirmed}
            </h3>
            <p className="py-9 text-3xl leading-[44px] font-arabicLight">
              {content?.orderInfo} {content?.orderInfoNum}
            </p>
            <p className="text-[25px] leading-9 font-arabicLight">
              {" "}
              {content?.canFollowUpOrder}
            </p>
            <div className="flex flex-row flex-wrap justify-center items-center gap-6 md:gap-[100px] pt-[42px] pb-[100px]">
              <Link
                href="/dashboard/my-orders"
                className="p-4 bg-black-primary text-white w-full md:w-40 rounded-md font-semibold flex justify-center items-center gap-2"
              >
                <ShoppingBag fill="#fff" /> {content?.btnMyOrder}
              </Link>
              <Link
                href="/track-order"
                className="p-4 bg-black-primary text-white w-full md:w-40 rounded-md font-semibold flex justify-center items-center gap-2"
              >
                <Track fill="#fff" /> {content?.btnTextTrack}
              </Link>
              {/* <Button
                btnText={content?.btnText}
                variant="primary"
                actionCb={() => {}}
                prefixIcon="fa-solid fa-bag-shopping !text-[24px]"
                btnClass="!w-[268px] !py-2.5 sm:!py-5 !text-2xl"
              />
              <Button
                btnText={content?.btnText2}
                variant="primary"
                actionCb={() => {}}
                prefixIcon="fa-solid fa-location-crosshairs !text-[20px]"
                btnClass="!w-[268px] !py-2.5 sm:!py-5 !text-2xl"
              /> */}
            </div>
            <div className="flex justify-center items-center gap-5">
              <Link href={content?.facebookUrl}>
                <i className="fa-brands fa-facebook text-[#1877F2] text-[40px] leading-10"></i>
              </Link>
              <Link href={content?.instagramUrl}>
                <Insta />
              </Link>
              <Link href={content?.twitterUrl}>
                <i className="fa-brands fa-square-x-twitter text-[40px] leading-10"></i>
              </Link>
              <Link href={content?.snapUrl}>
                <Snap />
              </Link>
              <Link href={content?.tiktokUrl}>
                <i className="fa-brands fa-tiktok text-[40px] leading-10"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

OrderComplete.getLayout = (page: React.ReactNode) => {
  return <Layout>{page}</Layout>;
};

export default OrderComplete;
