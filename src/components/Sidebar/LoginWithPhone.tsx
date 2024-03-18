import React, { FC } from "react";
import LoginSideBar from "../common/LoginSideBar";
import { commonSideBarProps } from "@/utils/type";
import { useRouter } from "next/router";
import { loginWithPhoneContent } from "@/static/contents/login";
import useTranslator from "@/utils/useTranslator";
import AuthTextField from "../base/AuthTextField";

const LoginWithPhone: FC<commonSideBarProps> = ({ viewCart, actionCb }) => {
  const router = useRouter();
  let { locale } = router;
  const content: any = useTranslator(locale || "en", loginWithPhoneContent);
  return (
    <LoginSideBar
      groupClass="md:w-[534px]"
      value={viewCart}
      setCart={actionCb}
      title={content?.welcomeTitle}
      subTitle={content?.fillTheSubTitle}
      btnText={content?.LogTextBtn}
      signUpUrl={content?.textSignUrl}
      forgetPassUrl={content?.frgtPassUrl}
      loginWithText={content?.withEmailText}
      textAboveBtn={content?.haveAnAccount}
      signUpText={content?.textSign}
    >
      <AuthTextField
        onChangeCb={() => {}}
        identifier="phoneNumber"
        placeholder={content?.placePhoneNumber}
      />
    </LoginSideBar>
  );
};

export default LoginWithPhone;
