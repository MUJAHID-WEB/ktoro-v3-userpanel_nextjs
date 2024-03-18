import React, { FC, ReactNode, useContext, useEffect, useRef } from "react";
import Button from "../base/Button";
import LoginSvg from "../svg/LoginSvg";
import Link from "next/link";
import { useRouter } from "next/router";
import AppContext from "@/context/appContext";
import { loginSideBarContent } from "@/static/contents/sidebar";
import useTranslator from "@/utils/useTranslator";

export type loginSideBarProps = {
  value: boolean;
  setCart: (e: boolean) => void;
  children: ReactNode;
  btnText: string;
  title?: string;
  subTitle?: string;
  forgetPassUrl?: string;
  signUpUrl?: string;
  loginUrl?: string;
  codeSendBtn?: string;
  groupClass?: string;
  signUpText?: string;
  loginText?: string;
  textBelowBtn?: string;
  textAboveBtn?: string;
  loginWithText?: string;
  hasSocialBtn?: boolean;
  hasForgetPass?: boolean;
};
const LoginSideBar: FC<loginSideBarProps> = ({
  value,
  setCart,
  children,
  groupClass,
  title,
  subTitle,
  signUpText,
  signUpUrl,
  forgetPassUrl,
  loginWithText,
  btnText,
  loginText,
  codeSendBtn,
  textBelowBtn,
  hasSocialBtn = "true",
  loginUrl,
  textAboveBtn,
}) => {
  const cartBox = useRef<HTMLDivElement>(null);
  const router = useRouter();
  let { locale } = router;
  const content: any = useTranslator(locale || "en", loginSideBarContent);
  const { handleAuth } = useContext<any>(AppContext);
  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (cartBox.current && !cartBox.current.contains(event.target)) {
        setCart(false);
      } else {
        setCart(true);
      }
    };

    document.addEventListener("click", handleClickOutside, true);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [cartBox, setCart]);

  return (
    <div
      className={`h-screen bg-black-700/60 w-full flex justify-end fixed z-20 transition-opacity ease-in-out duration-700 top-0 right-0 ${
        value ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      <div
        ref={cartBox}
        className={`h-screen space-y-20 overflow-y-auto bg-white w-full lg:w-[534px] absolute transition-all duration-500 ${
          router.locale === "ar"
            ? value
              ? "right-0"
              : "-right-full"
            : value
            ? "left-0"
            : "-left-full"
        } ${groupClass}`}
      >
        <Button
          btnClass={`!w-fit text-gray-300 !mx-[18px] !mt-[26px] ${
            router.locale === "ar" ? "mr-auto" : "!ml-auto "
          }`}
          variant="naked"
          actionCb={() => {
            setCart(!value);
          }}
          icon="fa-solid fa-circle-xmark !text-[29px] !leading-[29px]"
        />
        <div className=" pl-3.5 pr-4 md:pl-[50px] md:pr-12">
          <div
            className={`flex justify-start items-start gap-x-3 ${
              router.locale === "ar" ? "flex-row-reverse" : " flex-row"
            }`}
          >
            <LoginSvg />
            <div
              className={`w-[80%] space-y-1.5  ${
                router.locale === "ar" ? "text-right" : "text-left"
              }`}
            >
              <h6 className="text-3xl leading-[44px] text-black-primary font-arabicBold">
                {title}
              </h6>
              <p className="capitalize text-[15px] leading-[22px] font-arabic text-gray-400">
                {subTitle}
              </p>
            </div>
          </div>
          <div className="space-y-[18px] mt-[54px]">
            {children}
            {forgetPassUrl && (
              <div
                className={`w-fit  ${
                  router.locale === "ar" ? "ml-auto" : "mr-auto"
                }`}
              >
                <Link
                  href={forgetPassUrl}
                  className="text-[15px] leading-[22px] font-arabicMedium text-blue-400"
                >
                  {content?.forgetText}
                </Link>
              </div>
            )}
            <div className="space-y-3">
              <div
                className={`flex justify-between text-[#979797] items-center text-sm font-arabic ${
                  router.locale === "ar" ? "flex-row-reverse" : "flex-row "
                }`}
              >
                {loginWithText && <p className="w-fit">{loginWithText}</p>}
                {textAboveBtn && (
                  <div className="text-center w-fit">
                    {textAboveBtn}
                    <Link
                      href={signUpUrl || ""}
                      className="px-1 text-black-primary font-arabicBold"
                    >
                      {signUpText}
                    </Link>
                  </div>
                )}
              </div>
              <Button
                btnClass="!capitalize !font-arabicMedium py-3 !text-lg "
                variant="primary"
                btnText={btnText}
                actionCb={handleAuth}
              />
            </div>
            {textBelowBtn && (
              <div className="text-center text-[#979797] text-sm ">
                {textBelowBtn}
                <Link
                  href={loginUrl || ""}
                  className="px-1 text-black-primary font-arabicBold w-fit"
                >
                  {loginText}
                </Link>
              </div>
            )}
            {codeSendBtn && (
              <Button
                btnClass="!normal-case !text-[#979797] !font-arabic !mt-2.5 !mb-10 !py-1 !text-sm "
                variant="naked"
                btnText={codeSendBtn}
                actionCb={() => {}}
              />
            )}
            {hasSocialBtn && (
              <>
                <div className="w-full relative flex justify-center items-center ">
                  <span className="h-px w-full bg-black-primary absolute left-1/2 -translate-x-1/2 -translate-y-1/2 top-1/2 " />{" "}
                  <p className="text-sm font-arabicBold bg-white capitalize text-black-primary px-3 relative z-10 w-fit">
                    {content?.orLoginWith}
                  </p>
                </div>
                <div className="w-full flex justify-center items-center gap-x-[42px]">
                  <Button
                    btnClass="!capitalize !font-arabicMedium !w-[42px] !h-[42px] !rounded-full "
                    variant="naked"
                    prefixIcon="!text-[34px] fa-brands fa-x-twitter"
                    actionCb={() => {}}
                  />
                  <Button
                    btnClass="!capitalize !bg-facebook !font-arabicMedium !w-[42px] !h-[42px] !rounded-full "
                    variant="primary"
                    prefixIcon="!text-[24px] fa-brands fa-facebook-f"
                    actionCb={() => {}}
                  />
                  <Button
                    btnClass="!capitalize !bg-google !font-arabicMedium !w-[42px] !h-[42px] !rounded-full "
                    variant="primary"
                    prefixIcon="!text-[24px] fa-brands fa-google"
                    actionCb={() => {}}
                  />
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSideBar;
