import React from "react";
import Transaction from "./Transaction";
import { transactionCardContent } from "@/static/contents/dashboard";
import useTranslator from "@/utils/useTranslator";
import { useRouter } from "next/router";

const TransactionCard = () => {
  const router = useRouter();
  let { locale } = router;
  const content: any = useTranslator(locale || "en", transactionCardContent);
  return (
    <div className="border border-[#B3B3B3] rounded-md">
      {/* header  */}
      <div
        className={`flex ${
          locale === "ar" ? "flex-row-reverse" : "flex-row"
        } justify-between items-center px-8 py-3 bg-ash-400`}
      >
        <h1 className="text-xl font-medium text-black-secondary">
          {content?.transaction}
        </h1>
        <h1 className="text-xl font-medium text-black-secondary">
          {content?.theAmount}
        </h1>
      </div>

      {/* body  */}
      <div className="flex flex-col">
        <Transaction
          label={content?.addToYourAccount}
          date={content?.date10}
          plusAmount={content?.amountSar}
        />
        <Transaction
          label={content?.paymentOrder}
          date={content?.date8}
          minusAmount={content?.amountSar2}
        />
        <Transaction
          label={content?.moneyBack}
          date={content?.date2023}
          plusAmount={content?.amountSar3}
        />
      </div>
    </div>
  );
};

export default TransactionCard;
