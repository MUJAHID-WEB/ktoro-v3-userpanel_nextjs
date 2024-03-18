import DashboardLayout from "@/components/Layout/DashboardLayout";
import Button from "@/components/base/Button";
import TextField from "@/components/base/TextField";
import { changePasswordContent } from "@/static/contents/login";
import useTranslator from "@/utils/useTranslator";
import { useRouter } from "next/router";
import React from "react";

const ChangePassword = () => {
  const router = useRouter();
  let { locale } = router;
  const content: any = useTranslator(locale || "en", changePasswordContent);
  return (
    <div className="bg-white w-full px-2.5 pt-[52px] md:px-8 min-h-screen overflow-y-auto -mb-16">
      <div
        className={`w-full md:w-[430px] space-y-6 mb-5 ${
          locale === "ar" ? "ml-auto text-right" : "text-left mr-auto"
        }`}
      >
        <h6 className="text-base text-[#35332C] font-arabicBold">
          {content?.titleChangePass}
        </h6>
        <TextField
          inputClass="!border-black-primary !rounded-[5px]"
          labelClass="!normal-case !pb-0.5"
          label={content?.labelOldPass}
          onChangeCb={() => {}}
          identifier="password"
          inputType="password"
        />
        <TextField
          inputClass="!border-black-primary !rounded-[5px]"
          labelClass="!normal-case !pb-0.5"
          label={content?.labelNewPaWard}
          onChangeCb={() => {}}
          identifier="password"
          inputType="password"
          caption={content?.passMustBe6}
        />
        <TextField
          inputClass="!border-black-primary !rounded-[5px]"
          labelClass="!normal-case !pb-0.5"
          label={content?.labelConfirm}
          onChangeCb={() => {}}
          identifier="password"
          inputType="password"
        />
        <Button
          btnClass="!capitalize !font-arabicMedium py-3 !text-lg !rounded-md !mt-5 !text-white"
          variant="primary"
          btnText={content?.btnTextSave}
          actionCb={() => {}}
        />
      </div>
    </div>
  );
};

ChangePassword.getLayout = (page: React.ReactNode) => {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default ChangePassword;
