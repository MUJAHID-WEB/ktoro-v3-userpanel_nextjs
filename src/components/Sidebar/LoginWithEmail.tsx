import React, { FC } from "react";
import LoginSideBar from "../common/LoginSideBar";
import { commonSideBarProps } from "@/utils/type";
import { useRouter } from "next/router";
import useTranslator from "@/utils/useTranslator";
import { loginWithEmailContent } from "@/static/contents/login";
import AuthTextField from "../base/AuthTextField";

const LoginWithEmail: FC<commonSideBarProps> = ({ viewCart, actionCb }) => {
  const router = useRouter();
  let { locale } = router;
  const content: any = useTranslator(locale || "en", loginWithEmailContent);
  return (
    <LoginSideBar
      groupClass="md:w-[534px]"
      value={viewCart}
      setCart={actionCb}
      title={content?.titleHi}
      subTitle={content?.subTitleContinue}
      btnText={content?.btnLoginText}
      loginWithText={content?.withPhonLog}
      forgetPassUrl={content?.forgetUrl}
      textAboveBtn={content?.dontHaveAcc}
      signUpUrl={content?.signUpBtnUrl}
      signUpText={content?.signUpBtn}
    >
      <div className=" space-y-[18px]">
        <AuthTextField
          onChangeCb={() => {}}
          identifier="email"
          inputType="email"
          labelClass="!text-[16px]"
          label={content?.labelContinueFill}
          placeholder={content?.placeEAddress}
        />
        <AuthTextField
          onChangeCb={() => {}}
          identifier="password"
          inputType="password"
          placeholder={content?.placeHoPass}
        />
      </div>
    </LoginSideBar>
  );
};

export default LoginWithEmail;
