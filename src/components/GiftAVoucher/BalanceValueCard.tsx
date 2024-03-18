import React from "react";
import TextField from "../base/TextField";
import Placeholder from "../svg/Placeholder";
import Image from "next/image";
import { balancedValueCardContent } from "@/static/contents/dashboard";
import useTranslator from "@/utils/useTranslator";
import { useRouter } from "next/router";

const BalanceValueCard = () => {
  const router = useRouter();
  let { locale } = router;
  const content: any = useTranslator(locale || "en", balancedValueCardContent);
  return (
    <div className="space-y-4">
      <div className="w-full h-[350px]">
        <Placeholder />
      </div>
      <div className="border border-[#AEB4B9] p-4 rounded-md space-y-4">
        <p className="font-semibold">{content?.balanceValueTitle}</p>
        <div className="flex justify-between gap-4">
          <button className="px-3 py-2 border border-[#AEB4B9] rounded-md">
            {content?.btnSar50}
          </button>
          <button className="px-3 py-2 border border-[#AEB4B9] rounded-md">
            {content?.btnSar100}
          </button>
          <button className="px-3 py-2 border border-[#AEB4B9] rounded-md">
            {content?.btnSar200}
          </button>
          <button className="px-3 py-2 border border-[#AEB4B9] rounded-md">
            {content?.btnSar500}
          </button>
        </div>
        <TextField
          identifier="value"
          inputClass="border-[#AEB4B9] rounded-md"
          placeholder={content?.anotherValue}
          onChangeCb={() => {}}
        />
      </div>
    </div>
  );
};

export default BalanceValueCard;
