import { commonSideBarProps } from "@/utils/type";
import React, { ChangeEvent, FC, useState } from "react";
import Button from "../base/Button";
import SideBar from "../common/SideBar";
import NotificationDetails from "../common/NotificationDetails";
import { useRouter } from "next/router";
import { notificationContent } from "@/static/contents/sidebar";
import useTranslator from "@/utils/useTranslator";

const NotificationSideBar: FC<commonSideBarProps> = ({
  viewCart,
  actionCb,
}) => {
  const [layout, setLayout] = useState("message");
  const router = useRouter();
  let { locale } = router;
  const content: any = useTranslator(locale || "en", notificationContent);
  return (
    <SideBar
      value={viewCart}
      setCart={actionCb}
      groupClass="!bg-white md:w-[534px]"
    >
      <div className="w-full flex flex-col justify-start items-center gap-[30px] relative h-full pt-8 ">
        <Button
          btnClass={`!w-fit text-gray-300  !mx-4 ${
            locale === "ar" ? "!mr-auto" : "!ml-auto"
          }`}
          variant="naked"
          actionCb={() => {
            actionCb(!viewCart);
          }}
          icon="fas fa-times-circle !text-[29px] !leading-[29px]"
        />
        <div className="w-full flex bg-ash-300 text-xl font-arabicMedium gap-2.5">
          <label htmlFor="identifier" className="relative w-[48%] md:w-[49%] ">
            <input
              type="radio"
              name="identifier"
              id="identifier"
              className="hidden peer"
              checked={layout === "message"}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                if (e.target.checked) {
                  setLayout("message");
                }
              }}
            />
            <div className="w-full font-arabicMedium text-[19px] leading-[27px] py-6 px-20 border-b peer-checked:border-black-700 border-transparent">
              {content?.msgTab}
            </div>
            {/* <span className="h-1.5 w-1.5 bg-red-400 rounded-full absolute translate-y-1/2 top-[37%] translate-x-1/2 left-[60%]" /> */}
          </label>
          <label htmlFor="identifier2" className="relative w-[48%] md:w-[49%] ">
            <input
              type="radio"
              name="identifier"
              id="identifier2"
              checked={layout === "offer"}
              className="hidden peer"
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                if (e.target.checked) {
                  setLayout("offer");
                }
              }}
            />
            <div className="w-full font-arabicMedium text-[19px] leading-[27px] py-6 px-20 border-b peer-checked:border-black-700 border-transparent">
              {content?.offerTab}
            </div>
            <span className="h-1.5 w-1.5 bg-red-400 rounded-full absolute translate-y-1/2 top-[37%] translate-x-1/2 left-[62%] md:left-[49%]" />
          </label>
        </div>
        {/* button area ends  */}
        {/* have some doubts */}
        {/* notification details messages */}
        {layout === "message" ? (
          <>
            <div className="w-full flex flex-col justify-start items-center gap-6 pt-[22px] px-2 md:pl-5 md:pr-7">
              <NotificationDetails
                title={content?.notifyTitle}
                url="/"
                subTitle={content?.notifySubTitle}
                date="15/12/2024 - 05:01 PM"
              />
              <NotificationDetails
                title={content?.notifyTitle2}
                url="/"
                subTitle={content?.notifySubTitle2}
                date="15/12/2024 - 05:01 PM"
              />
            </div>
            {/* empty messages cards */}
            <div className="pt-[122px] text-center">
              <i className="text-[104px] far fa-envelope-open"></i>
              <p className="mt-6 text-black-primary font-arabicMedium leading-8 text-[22px] capitalize">
                {content?.msgTitle}
              </p>
              <p className="mt-1 text-[18px] leading-[26px] text-[#6D6D6D] font-arabicMedium capitalize">
                {content?.msgSubTitle}
              </p>
            </div>
          </>
        ) : (
          <>
            <div className="w-full flex flex-col justify-start items-center gap-6 pt-[22px] pl-5 pr-7">
              <NotificationDetails
                title={content?.offerNotifyTitle}
                url="/"
                offerText={content?.offerNotifyDiscount}
                offer={content?.ofrDiscountRate}
              />
            </div>
            {/* empty offers cards */}
            <div className="pt-[122px] text-center">
              <i className="text-[104px] fas fa-gift"></i>
              <p className="mt-6 text-black-primary font-arabicMedium leading-8 text-[22px] capitalize">
                {content?.offerTitle}
              </p>
              <p className="mt-1 text-[18px] leading-[26px] text-[#6D6D6D] font-arabicMedium capitalize">
                {content?.offerSubTitle}
              </p>
            </div>
          </>
        )}
      </div>
    </SideBar>
  );
};

export default NotificationSideBar;
