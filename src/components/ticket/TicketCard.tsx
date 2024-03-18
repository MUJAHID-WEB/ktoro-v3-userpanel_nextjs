import React, { useState } from "react";
import LockOutline from "../svg/LockOutline";
import NewTag from "../svg/NewTag";
import Eye from "../svg/Eye";
import TicketInfo from "./TicketInfo";
import Wait from "../svg/Wait";
import EyeClose from "../svg/EyeClose";
import { ticketCardContent } from "@/static/contents/dashboard";
import useTranslator from "@/utils/useTranslator";
import { useRouter } from "next/router";

interface Props {
  active?: boolean;
  newTicket?: boolean;
  viewTicket: boolean;
  setViewTicket: (value: boolean) => void;
}

const TicketCard = ({
  active = false,
  newTicket = false,
  viewTicket,
  setViewTicket,
}: Props) => {
  const router = useRouter();
  let { locale } = router;
  const content: any = useTranslator(locale || "en", ticketCardContent);
  const handleViewTicket = () => {
    setViewTicket(!viewTicket);
  };
  return (
    <div
      className={`w-[423px] h-[196px] rounded-md ${
        active ? "bg-blue-400 bg-opacity-20" : "bg-ash-300"
      }`}
    >
      {/* header  */}
      <div
        className={`px-5 py-3 flex ${
          locale === "ar" ? "flex-row-reverse" : "flex-row"
        } justify-between items-center`}
      >
        {/* header left  */}
        <div
          className={`flex ${
            locale === "ar" ? "flex-row-reverse" : "flex-row"
          } items-center gap-3`}
        >
          <div
            className={`min-w-[50%] h-[32px] rounded-3xl px-3 flex ${
              locale === "ar" ? "flex-row-reverse" : "flex-row"
            } items-center gap-2 ${active ? "bg-blue-500" : "bg-ash-500"}`}
          >
            {active ? <Wait /> : <LockOutline />}

            <p
              className={`font-bold text-[10px] mt-1 ${
                active ? "text-black-secondary" : "text-white"
              }`}
            >
              {active ? content?.titleActive : content?.titleClose}
            </p>
          </div>
          {/* if ticket is new  */}
          {newTicket && <NewTag />}
        </div>
        {/* header right  */}
        <div
          className={`w-[32px] h-[32px] ${
            viewTicket ? "bg-white" : "bg-blue-500"
          } rounded-md cursor-pointer flex justify-center items-center`}
          onClick={() => handleViewTicket()}
        >
          {viewTicket ? <EyeClose /> : <Eye />}
        </div>
      </div>
      <hr className="border-dashed border border-blue-500" />
      {/* body  */}
      <div className="px-5 py-3 grid grid-cols-12 gap-2">
        <TicketInfo
          leftText={content?.ticketNo}
          rightText={content?.hfjjjkd6239}
        />
        <TicketInfo
          leftText={content?.reasonText}
          rightText={content?.extraItems}
        />
        <TicketInfo
          leftText={content?.dateText}
          rightText={content?.timeText}
          rightSmallText
        />
        <TicketInfo
          leftText={content?.lastUpdate}
          rightText={content?.lastUpdateTime}
          rightSmallText
        />
      </div>
    </div>
  );
};

export default TicketCard;
