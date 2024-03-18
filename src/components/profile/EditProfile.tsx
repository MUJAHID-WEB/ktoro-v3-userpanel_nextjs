import React from "react";
import TextField from "../base/TextField";
import Button from "../base/Button";
import { useRouter } from "next/router";
import { profileSectionContent } from "@/static/contents/dashboard";
import useTranslator from "@/utils/useTranslator";

const EditProfile = () => {
  const router = useRouter();
  let { locale } = router;
  const content: any = useTranslator(locale || "en", profileSectionContent);
  return (
    <div
      className={`mt-5 xl:w-[438px] lg:w-[438px] md:w-[438px] w-full ${
        locale === "ar" ? "ms-auto" : "me-auto"
      } flex flex-col gap-5`}
    >
      <TextField
        inputType="text"
        label={content?.firstName}
        required
        labelClass={`font-medium text-sm !text-black-600 !normal-case ${
          locale === "ar"
            ? "!justify-start w-full flex-row-reverse"
            : "!justify-start"
        }`}
        onChangeCb={() => {}}
        identifier="firstName"
        placeholder={content?.salman}
        groupClass="gap-2"
        inputClass={`!text-[#999] !font-medium !text-sm !border !border-[#AEB4B9] !rounded-md ${
          locale === "ar" ? "text-right" : "text-left"
        }`}
      />
      <TextField
        inputType="text"
        label={content?.lastName}
        required
        labelClass={`font-medium text-sm !text-black-600 !normal-case ${
          locale === "ar"
            ? "!justify-start w-full flex-row-reverse"
            : "!justify-start"
        }`}
        onChangeCb={() => {}}
        identifier="lastName"
        placeholder={content?.mir}
        groupClass="gap-2"
        inputClass={`!text-[#999] !font-medium !text-sm !border !border-[#AEB4B9] !rounded-md ${
          locale === "ar" ? "text-right" : "text-left"
        }`}
      />
      <TextField
        inputType="email"
        label={content?.email}
        required
        labelClass={`font-medium text-sm !text-black-600 !normal-case ${
          locale === "ar"
            ? "!justify-start w-full flex-row-reverse"
            : "!justify-start"
        }`}
        onChangeCb={() => {}}
        identifier="email"
        placeholder={content?.salmanGmail}
        groupClass="gap-2"
        inputClass={`!text-[#999] !font-medium !text-sm !border !border-[#AEB4B9] !rounded-md ${
          locale === "ar" ? "text-right" : "text-left"
        }`}
      />
      <TextField
        inputType="text"
        label={content?.labelPhon}
        required
        labelClass={`font-medium text-sm !text-black-600 !normal-case ${
          locale === "ar"
            ? "!justify-start w-full flex-row-reverse"
            : "!justify-start"
        }`}
        onChangeCb={() => {}}
        identifier="phone"
        placeholder={content?.placeholderNumber}
        groupClass="gap-2"
        inputClass={`!text-[#999] !font-medium !text-sm !border !border-[#AEB4B9] !rounded-md ${
          locale === "ar" ? "text-right" : "text-left"
        }`}
      />
      <TextField
        inputType="text"
        label={content?.gender}
        labelClass={`font-medium text-sm !text-black-600 !normal-case ${
          locale === "ar"
            ? "!justify-start w-full flex-row-reverse"
            : "!justify-start"
        }`}
        onChangeCb={() => {}}
        identifier="gender"
        placeholder={content?.male}
        groupClass="gap-2"
        inputClass={`!text-[#999] !font-medium !text-sm !border !border-[#AEB4B9] !rounded-md ${
          locale === "ar" ? "text-right" : "text-left"
        }`}
      />
      <Button
        btnText={content?.editProfileBtn}
        btnClass="!font-medium !text-lg !rounded-md"
      />
    </div>
  );
};

export default EditProfile;
