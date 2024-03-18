import React from "react";
import GiftSendAccordion from "./GiftSendAccordion";
import { accordionItems } from "@/static";

const SendGiftContent = () => {
  return (
    <div>
      <GiftSendAccordion items={accordionItems} />
    </div>
  );
};

export default SendGiftContent;
