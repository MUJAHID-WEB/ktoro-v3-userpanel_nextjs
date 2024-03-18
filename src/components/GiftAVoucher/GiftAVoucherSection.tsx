import React from "react";
import Tabs from "../base/Tabs";
import GiftVoucherContent from "./GiftVoucherContent";
import SendGiftContent from "./SendGiftContent";
import { giftsVoucherTabTitleContent } from "@/static/contents/dashboard";
import useTranslator from "@/utils/useTranslator";
import { useRouter } from "next/router";

const GiftAVoucherSection = () => {
  const router = useRouter();
  const { locale } = router;
  const content: any = useTranslator(
    locale || "en",
    giftsVoucherTabTitleContent
  );
  const tabs = [
    { label: content?.giftAvoucher, content: <GiftVoucherContent /> },
    { label: content?.sendGift, content: <SendGiftContent /> },
  ];
  return (
    <section className="bg-white w-full p-4">
      <div className="container">
        <Tabs tabs={tabs} />
      </div>
    </section>
  );
};

export default GiftAVoucherSection;
