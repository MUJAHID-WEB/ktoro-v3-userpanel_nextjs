import React, { useState } from "react";
import GiftColor from "../svg/GiftColor";
import { useRouter } from "next/router";
import useTranslator from "@/utils/useTranslator";
import { giftCartContent } from "@/static/contents/sidebar";
import { giftSendAccordionContent } from "@/static/contents/dashboard";

const AccordionItem = ({ title, content }: any) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  const router = useRouter();
  let { locale } = router;
  const content2: any = useTranslator(locale || "en", giftSendAccordionContent);
  return (
    <div
      className="border border-sky-500 p-4 cursor-pointer rounded-md"
      onClick={toggleAccordion}
    >
      <div>
        <h3
          style={{ margin: 0 }}
          className={`flex gap-4 items-center text-lg font-semibold ${
            locale === "ar" ? "flex-row-reverse" : "flex-row"
          }`}
        >
          <span className="p-3 bg-[#F3F6FB] rounded-full">
            <GiftColor />
          </span>
          <span>
            {title} <span className="text-sky-600">Gift</span>
          </span>
          <span
            className={` text-blue-400 text-2xl leading-6 ${
              locale === "ar" ? "mr-auto" : "ml-auto"
            }`}
          >
            <i
              className={`fas ${isOpen ? "fa-chevron-up" : "fa-chevron-down"}`}
            ></i>
          </span>
        </h3>
      </div>
      {isOpen && (
        <div className="mt-4">
          <ul className={`${locale === "ar" ? "rtl" : "ltr"}`}>
            <li className="p-4">
              {content2?.giftId} #{content.giftId}
            </li>
            <li className="p-4">
              {content2?.recipientDetailsEmail2} {content.recipientEmail}
            </li>
            <li className="p-4">
              {content2?.mobile} {content.phone}
            </li>
            <li className="p-4">
              {content2?.recipientName2} {content.recipientName}
            </li>
            <li className="p-4">
              {content2?.senderName2} {content.senderName}
            </li>
            <li className="p-4">
              {content2?.balanceValue2} {content.balance}
            </li>
            <li className="p-4">
              {content2?.date} {content.date}
            </li>
            <li className="p-4">
              {content2?.message} {content.message}
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

const GiftSendAccordion = ({ items }: any) => {
  return (
    <div className="space-y-4">
      {items.map((item: any, index: number) => (
        <AccordionItem key={index} title={item.title} content={item.content} />
      ))}
    </div>
  );
};

export default GiftSendAccordion;
