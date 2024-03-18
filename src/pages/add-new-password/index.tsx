import AuthTextField from "@/components/base/AuthTextField";
import Button from "@/components/base/Button";
import LoginSvg from "@/components/svg/LoginSvg";
import { addNewPasswordContent } from "@/static/contents/login";
import useTranslator from "@/utils/useTranslator";
import { useRouter } from "next/router";
import React from "react";

const AddNewPassword = () => {
  const router = useRouter();
  let { locale } = router;
  const content: any = useTranslator(locale || "en", addNewPasswordContent);
  return (
    <section className="w-full bg-white min-h-screen">
      <div className="px-2.5 md:px-0 mx-auto w-full md:w-[430px] pt-56 ">
        <div className="flex flex-row justify-center items-start gap-x-3">
          <LoginSvg />
          <h6 className="text-left text-3xl leading-[44px] text-black-primary font-arabicBold">
            {content?.titleForget}
          </h6>
        </div>
        <div className="space-y-[18px] mb-10 mt-[50px]">
          <AuthTextField
            onChangeCb={() => {}}
            identifier="password"
            placeholder={content?.enterNewPass}
            inputType="password"
          />
          <AuthTextField
            onChangeCb={() => {}}
            identifier="password"
            placeholder={content?.confirmNewPass}
            inputType="password"
          />
        </div>
        <Button
          btnClass="!capitalize !font-arabicMedium py-3 !text-lg "
          variant="primary"
          btnText={content?.btnTextConfirm}
          actionCb={() => {}}
        />
      </div>
    </section>
  );
};

export default AddNewPassword;
