import React, { FC } from "react";
import LoginSideBar from "../common/LoginSideBar";
import { commonSideBarProps } from "@/utils/type";
import { useRouter } from "next/router";
import { verificationCodeContent } from "@/static/contents/login";
import useTranslator from "@/utils/useTranslator";
import AuthTextField from "../base/AuthTextField";

const VerificationCode: FC<commonSideBarProps> = ({ viewCart, actionCb }) => {
  const router = useRouter();
  let { locale } = router;
  const content: any = useTranslator(locale || "en", verificationCodeContent);
  return (
    <LoginSideBar
      groupClass="md:w-[534px]"
      value={viewCart}
      setCart={actionCb}
      title={content?.hiTitle}
      subTitle={content?.continueToLog}
      btnText={content?.confirmBtn}
      codeSendBtn={content?.btnAgainSend}
      hasSocialBtn={false}
    >
      <AuthTextField
        groupClass="mb-32"
        labelClass="!normal-case !pb-2.5 !font-arabicMedium !text-[15px] !text-black-primary"
        onChangeCb={() => {}}
        identifier="phoneNumber"
        label={content?.labelEnterSentCode}
      />
    </LoginSideBar>
  );
};

export default VerificationCode;
