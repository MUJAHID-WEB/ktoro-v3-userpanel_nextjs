import React, { FC } from "react";
import LoginSideBar from "../common/LoginSideBar";
import { commonSideBarProps } from "@/utils/type";
import { useRouter } from "next/router";
import { registerContent } from "@/static/contents/login";
import useTranslator from "@/utils/useTranslator";
import AuthTextField from "../base/AuthTextField";

const Register: FC<commonSideBarProps> = ({ viewCart, actionCb }) => {
  const router = useRouter();
  let { locale } = router;
  const content: any = useTranslator(locale || "en", registerContent);
  return (
    <LoginSideBar
      groupClass="md:w-[534px]"
      value={viewCart}
      setCart={actionCb}
      title={content?.hiTitleWelcome}
      subTitle={content?.subTitleLoginContinue}
      btnText={content?.btnTextRegister}
      loginUrl={content?.loginPageUrl}
      textBelowBtn={content?.alreadyHaveBtn}
      loginText={content?.loginTextRegister}
    >
      <div className="mb-9 space-y-[18px]">
        <AuthTextField
          inputClass="!pl-[11px]"
          onChangeCb={() => {}}
          identifier="fullName"
          placeholder={content?.placeholderFName}
        />
        <AuthTextField
          inputClass="!pl-[11px]"
          onChangeCb={() => {}}
          identifier="fullName"
          placeholder={content?.placeholderLName}
        />
        <AuthTextField
          inputClass="!pl-[11px]"
          onChangeCb={() => {}}
          identifier="phone"
          placeholder={content?.phonePlaceholder}
        />
        <AuthTextField
          inputClass="!pl-[11px]"
          onChangeCb={() => {}}
          identifier="email"
          inputType="email"
          placeholder={content?.placeholderMail}
        />
        <AuthTextField
          inputClass="!pl-[11px]"
          onChangeCb={() => {}}
          identifier="password"
          inputType="password"
          placeholder={content?.placeholderPass}
        />
        <AuthTextField
          inputClass="!pl-[11px]"
          onChangeCb={() => {}}
          identifier="password"
          inputType="password"
          placeholder={content?.confirmPass}
        />
      </div>
    </LoginSideBar>
  );
};

export default Register;
