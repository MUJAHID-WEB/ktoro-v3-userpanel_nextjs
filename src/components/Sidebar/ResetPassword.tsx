import React, { FC } from "react";
import LoginSideBar from "../common/LoginSideBar";
import { commonSideBarProps } from "@/utils/type";
import { useRouter } from "next/router";
import { resetPasswordContent } from "@/static/contents/login";
import useTranslator from "@/utils/useTranslator";
import AuthTextField from "../base/AuthTextField";

const ResetPassword: FC<commonSideBarProps> = ({ viewCart, actionCb }) => {
  const router = useRouter();
  let { locale } = router;
  const content: any = useTranslator(locale || "en", resetPasswordContent);
  return (
    <LoginSideBar
      groupClass="md:w-[534px]"
      value={viewCart}
      setCart={actionCb}
      title={content?.titleFrgtUrPass}
      subTitle={content?.subTitlePlease}
      btnText={content?.sendEmail}
      hasSocialBtn={false}
      codeSendBtn={content?.codeSendBtn}
    >
      <AuthTextField
        groupClass="mb-10"
        labelClass="!normal-case !pb-2.5"
        onChangeCb={() => {}}
        identifier="email"
        placeholder={content?.placeholderEmail}
        inputType="email"
      />
    </LoginSideBar>
  );
};

export default ResetPassword;
