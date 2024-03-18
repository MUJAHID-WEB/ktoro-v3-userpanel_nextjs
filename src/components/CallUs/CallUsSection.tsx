import React from "react";
import { CallUsCard } from "./CallUsCard";
import { useRouter } from "next/router";
import useTranslator from "@/utils/useTranslator";
import { callUsArr, callUsContent } from "@/static/contents/callUs";

export const CallUsSection = () => {
  const router = useRouter();
  let { locale } = router;
  const content: any = useTranslator(locale || "en", callUsContent);
  return (
    <>
      <div className="flex flex-col justify-center items-center px-[53px] rtl">
        <h4 className="pt-[100px] pb-3 font-medium text-[36px] text-black-secondary">
          {content?.callUsTitle}
        </h4>

        <p className="font-normal text-xl text-gray-400">
          {content?.callUsSubTitle}
        </p>
        <div className="flex flex-row flex-wrap justify-center gap-[14px] py-[71px]">
          {/* <CallUsCard
            image="/images/CallUsSvg/TrackOrder.svg"
            title="Track Order"
          />
          <CallUsCard
            image="/images/CallUsSvg/Gmail.svg"
            title="راسلنا عبر الايمل"
          />
          <CallUsCard
            image="/images/CallUsSvg/Facebook.svg"
            title="راسلنا عبر فيسبوك"
          />
          <CallUsCard
            image="/images/CallUsSvg/Instagram.svg"
            title="راسلنا عبر انستقرام"
          />
          <CallUsCard
            image="/images/CallUsSvg/Twitter.svg"
            title="راسلنا عبر x"
          />
          <CallUsCard
            image="/images/CallUsSvg/Message.svg"
            title="دردش معنا"
            subTitle="سنعود للتواجد أونلاين قريبا"
          /> */}
          {callUsArr.map((item: any, id: number) => (
            <CallUsCard
              key={id}
              image={item.img}
              title={item.title}
              subTitle={item.subtitle}
            />
          ))}
        </div>
      </div>
    </>
  );
};
