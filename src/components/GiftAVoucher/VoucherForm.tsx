import React from "react";
import TextField from "../base/TextField";
import Link from "next/link";
import Button from "../base/Button";
import { voucherFormContent } from "@/static/contents/dashboard";
import useTranslator from "@/utils/useTranslator";
import { useRouter } from "next/router";

const VoucherForm = () => {
  const router = useRouter();
  let { locale } = router;
  const content: any = useTranslator(locale || "en", voucherFormContent);
  return (
    <form action="#" method="post" className="space-y-4">
      <TextField
        inputType="email"
        labelClass="!normal-case !font-bold !text-black-secondary !text-base"
        label={content?.recipientDetailsEmail}
        inputClass="border-[#AEB4B9] rounded-md"
        onChangeCb={(e) => console.log(e)}
        identifier="email"
      />
      <TextField
        inputType="text"
        labelClass="!normal-case !font-bold !text-black-secondary !text-base"
        label={content?.phone}
        inputClass="border-[#AEB4B9] rounded-md"
        onChangeCb={(e) => console.log(e)}
        identifier="phone"
      />
      <TextField
        inputType="text"
        labelClass="!normal-case !font-bold !text-black-secondary !text-base"
        label={content?.recipientName}
        inputClass="border-[#AEB4B9] rounded-md"
        onChangeCb={(e) => console.log(e)}
        identifier="name"
      />
      <TextField
        inputType="text"
        labelClass="!normal-case !font-bold !text-black-secondary !text-base"
        label={content?.senderName}
        inputClass="border-[#AEB4B9] rounded-md"
        onChangeCb={(e) => console.log(e)}
        identifier="sender-name"
      />
      <div>
        <label
          htmlFor="message"
          className={`!normal-case !font-bold !text-black-secondary !text-base mb-1 block ${
            locale === "ar" ? "text-right" : "text-left"
          }`}
        >
          {content?.msg}
        </label>
        <textarea
          className="w-full border px-7 py-3.5 text-base font-medium border-[#AEB4B9] rounded-md focus-visible:border-black-primary"
          rows={8}
        />
      </div>
      <p
        className={`font-semibold ${
          locale === "ar" ? "text-right" : "text-left"
        } capitalize`}
      >
        {content?.toViewVoucherPolicy}
        <Link href="#" className="text-sky-500">
          {content?.clickHere}
        </Link>
      </p>
      <Button
        btnType="submit"
        btnText={content?.submitBtn}
        btnClass="font-semibold !mt-8"
      />
    </form>
  );
};

export default VoucherForm;
