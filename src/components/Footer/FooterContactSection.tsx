import React from "react";
import Headphone from "../svg/Headphone";
import { Facebook } from "../svg/Facebook";
import TwitterNew from "../svg/TwitterNew";
import Printer from "../svg/Printer";
import { Instagram } from "../svg/Instagram";
import Linkedin from "../svg/Linkedin";
import Snapchat from "../svg/Snapchat";
import Tiktok from "../svg/Tiktok";
import Link from "next/link";
import { SmsBlack } from "../svg/SmsBlack";
import Contact from "../svg/Contact";
import { useRouter } from "next/router";
import { footerContactContent } from "@/static/contents/footer";
import useTranslator from "@/utils/useTranslator";

const FooterContactSection = () => {
  const router = useRouter();
  let { locale } = router;
  const content: any = useTranslator(locale || "en", footerContactContent);
  return (
    <div
      className={`flex xl:flex-row flex-col-reverse flex-wrap justify-between gap-7`}
    >
      {/* social media links for tab & mobile */}
      <hr className="xl:hidden block my-3" />
      <div
        className={`xl:hidden  flex flex-col justify-center  xl:text-center ${
          locale === "ar" ? "text-end" : "text-start"
        }  `}
      >
        <h5 className="text-lg font-bold text-black-700 capitalize">
          {content?.getInTouch}
        </h5>
        <p className="text-sm font-normal text-black-400">
          {content?.followUs}
        </p>
        <div
          className={`mt-7 flex flex-wrap ${
            locale === "ar" ? "justify-end" : "justify-start"
          } items-center gap-[14px]`}
        >
          {/* social media links for tab & mobile */}
          <hr className="xl:hidden block my-3" />
          <div
            className={`xl:hidden  flex flex-col justify-center  xl:text-center ${
              locale === "ar" ? "text-end" : "text-start"
            }  `}
          >
            <h5 className="text-lg font-bold text-black-700 capitalize">
              {content?.getInTouch}
            </h5>
            <p className="text-sm font-normal text-black-400">
              {content?.followUs}
            </p>
            <div
              className={`mt-7 flex flex-wrap ${
                locale === "ar" ? "justify-end" : "justify-start"
              } items-center gap-[14px]`}
            >
              {[
                {
                  icon: <Facebook />,
                  link: "/",
                },
                {
                  icon: <TwitterNew />,
                  link: "/",
                },
                {
                  icon: <Printer />,
                  link: "/",
                },
                {
                  icon: <Instagram />,
                  link: "/",
                },
                {
                  icon: <Linkedin />,
                  link: "/",
                },
                {
                  icon: <Snapchat />,
                  link: "/",
                },
                {
                  icon: <Tiktok />,
                  link: "/",
                },
              ].map((socialLink, index) => (
                <Link href={socialLink.link} key={index}>
                  <div className="h-12 w-12 rounded-full border-2 border-[#DADADA] flex justify-center items-center cursor-pointer">
                    {socialLink.icon}
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <hr className="xl:hidden  block" />
          <div
            className={` ${
              locale === "ar"
                ? "xl:text-end lg:text-center md:text-center text-center"
                : "xl:text-start lg:text-center md:text-center text-start"
            }`}
          >
            <h5 className="text-lg font-bold text-black-700">
              {content?.helpText}
            </h5>
            <p className="text-sm font-normal text-black-400">
              {content?.helpDescription}
            </p>
            <div
              className={`flex ${
                locale === "ar" ? "xl:flex-row flex-row-reverse " : "flex-row"
              } items-center xl:justify-start lg:justify-center md:justify-center justify-start xl:gap-10 lg:gap-48 md:gap-48 gap-1 mt-7`}
            >
              <Link href={"/help"}>
                <div
                  className={`flex ${
                    locale === "ar" ? "flex-row-reverse" : "flex-row"
                  } items-center xl:gap-3 lg:gap-3 md:gap-3 gap-1 hover:bg-[#F4F6F8] py-2 xl:px-3 lg:px-3 md:px-3 sm:px-2 px-1 rounded-md group`}
                >
                  <div className="block group-hover:hidden">
                    <Headphone />
                  </div>
                  <div className="hidden group-hover:block">
                    <Headphone color="#47A6DC" />
                  </div>

                  <div
                    className={`${locale === "ar" ? "text-end" : "text-start"}`}
                  >
                    <h5 className="text-lg font-bold text-black-700 group-hover:text-[#47A6DC] capitalize">
                      {content?.helpCenter}
                    </h5>
                    <p className="text-sm font-normal text-black-400 group-hover:text-[#47A6DC]">
                      help.center@ktoro.com
                    </p>
                  </div>
                </div>
              </Link>
              <Link href={"/call-us"}>
                <div
                  className={`flex ${
                    locale === "ar" ? "flex-row-reverse" : "flex-row"
                  } items-center xl:gap-3 lg:gap-3 md:gap-3 gap-1 hover:bg-[#F4F6F8] py-2 xl:px-3 lg:px-3 md:px-3 sm:px-2 px-1 rounded-md group`}
                >
                  <div className="block group-hover:hidden">
                    <Contact />
                  </div>
                  <div className="hidden group-hover:block">
                    <Contact color="#47A6DC" />
                  </div>
                  <div
                    className={`${locale === "ar" ? "text-end" : "text-start"}`}
                  >
                    <h5 className="text-lg font-bold text-black-700 group-hover:text-[#47A6DC] capitalize">
                      {content?.contactUs}
                    </h5>
                    <p className="text-sm font-normal text-black-400 group-hover:text-[#47A6DC]">
                      support@ktoro.com
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <hr />

          {/* social media links for web */}
          <div className="xl:flex  hidden flex-col justify-center  xl:text-center lg:text-center text-start">
            <h5 className="text-lg font-bold text-black-700 capitalize">
              {content?.getInTouch}
            </h5>
            <p className="text-sm font-normal text-black-400">
              {content?.followUs}
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-[14px]">
              {[
                {
                  icon: <Facebook />,
                  link: "/",
                },
                {
                  icon: <TwitterNew />,
                  link: "/",
                },
                {
                  icon: <Printer />,
                  link: "/",
                },
                {
                  icon: <Instagram />,
                  link: "/",
                },
                {
                  icon: <Linkedin />,
                  link: "/",
                },
                {
                  icon: <Snapchat />,
                  link: "/",
                },
                {
                  icon: <Tiktok />,
                  link: "/",
                },
              ].map((socialLink, index) => (
                <Link href={socialLink.link} key={index}>
                  <div className="h-12 w-12 rounded-full border-2 border-[#DADADA] flex justify-center items-center cursor-pointer">
                    {socialLink.icon}
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* newsleter  */}
          <div>
            <div className={`${locale === "ar" ? "text-end" : "text-start"}`}>
              <h5 className="text-lg font-bold text-black-700 capitalize">
                {content?.subscribe}
              </h5>
              <p className="text-sm font-normal text-black-400">
                {content?.subDetail}
              </p>
            </div>
            <div
              className={`w-full flex ${
                locale === "ar" ? "xl:flex-row flex-row-reverse" : "flex-row"
              } flex-row items-start justify-start gap-4 mt-7`}
            >
              <div
                className={`bg-white flex ${
                  locale === "ar" ? "flex-row" : "flex-row-reverse"
                } items-center border border-[#5C5E64] p-[14px] rounded-md xl:w-[332px] lg:w-[383px] md:w-[383px] w-[282px]`}
              >
                <input
                  type="text"
                  placeholder={content?.enterYourMail}
                  className={`text-black-secondary bg-white ${
                    locale === "ar" ? "text-end pr-2" : "text-start pl-2"
                  } w-full  text-sm font-normal`}
                />
                <SmsBlack />
              </div>
              <button className="bg-black-secondary text-white xl:px-6 lg:px-6 md:px-6  sm:px-5 px-3 py-[14px] rounded-md">
                {content?.btnText}
              </button>
            </div>
          </div>
        </div>
      </div>

      <hr className="xl:hidden  block" />
      <div
        className={` ${
          locale === "ar"
            ? "xl:text-end lg:text-center md:text-center text-center"
            : "xl:text-start lg:text-center md:text-center text-start"
        }`}
      >
        <h5 className="text-lg font-bold text-black-700">
          {content?.helpText}
        </h5>
        <p className="text-sm font-normal text-black-400">
          {content?.helpDescription}
        </p>
        <div
          className={`flex ${
            locale === "ar" ? "xl:flex-row flex-row-reverse " : "flex-row"
          } items-center xl:justify-start lg:justify-center md:justify-center justify-start xl:gap-10 lg:gap-48 md:gap-48 gap-0 mt-7`}
        >
          <Link href={"/help"}>
            <div
              className={`flex ${
                locale === "ar" ? "flex-row-reverse" : "flex-row"
              } items-center xl:gap-3 lg:gap-3 md:gap-3 gap-1 hover:bg-[#F4F6F8] py-2 px-3 rounded-md group`}
            >
              <div className="block group-hover:hidden">
                <Headphone />
              </div>
              <div className="hidden group-hover:block">
                <Headphone color="#47A6DC" />
              </div>

              <div className={`${locale === "ar" ? "text-end" : "text-start"}`}>
                <h5 className="text-lg font-bold text-black-700 group-hover:text-[#47A6DC] capitalize">
                  {content?.helpCenter}
                </h5>
                <p className="text-sm font-normal text-black-400 group-hover:text-[#47A6DC]">
                  help.center@ktoro.com
                </p>
              </div>
            </div>
          </Link>
          <Link href={"/call-us"}>
            <div
              className={`flex ${
                locale === "ar" ? "flex-row-reverse" : "flex-row"
              } items-center xl:gap-3 lg:gap-3 md:gap-3 gap-1 hover:bg-[#F4F6F8] py-2 px-3 rounded-md group`}
            >
              <div className="block group-hover:hidden">
                <Contact />
              </div>
              <div className="hidden group-hover:block">
                <Contact color="#47A6DC" />
              </div>
              <div className={`${locale === "ar" ? "text-end" : "text-start"}`}>
                <h5 className="text-lg font-bold text-black-700 group-hover:text-[#47A6DC] capitalize">
                  {content?.contactUs}
                </h5>
                <p className="text-sm font-normal text-black-400 group-hover:text-[#47A6DC]">
                  support@ktoro.com
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
      <hr />

      {/* social media links for web */}
      <div className="xl:flex  hidden flex-col justify-center  xl:text-center lg:text-center text-start">
        <h5 className="text-lg font-bold text-black-700 capitalize">
          {content?.getInTouch}
        </h5>
        <p className="text-sm font-normal text-black-400">
          {content?.followUs}
        </p>
        <div className="mt-7 flex flex-wrap items-center gap-[14px]">
          {[
            {
              icon: <Facebook />,
              link: "/",
            },
            {
              icon: <TwitterNew />,
              link: "/",
            },
            {
              icon: <Printer />,
              link: "/",
            },
            {
              icon: <Instagram />,
              link: "/",
            },
            {
              icon: <Linkedin />,
              link: "/",
            },
            {
              icon: <Snapchat />,
              link: "/",
            },
            {
              icon: <Tiktok />,
              link: "/",
            },
          ].map((socialLink, index) => (
            <Link href={socialLink.link} key={index}>
              <div className="h-12 w-12 rounded-full border-2 border-[#DADADA] flex justify-center items-center cursor-pointer">
                {socialLink.icon}
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* newsleter  */}
      <div>
        <div className={`${locale === "ar" ? "text-end" : "text-start"}`}>
          <h5 className="text-lg font-bold text-black-700 capitalize">
            {content?.subscribe}
          </h5>
          <p className="text-sm font-normal text-black-400">
            {content?.subDetail}
          </p>
        </div>
        <div
          className={`w-full flex ${
            locale === "ar" ? "xl:flex-row flex-row-reverse" : "flex-row"
          } flex-row items-start justify-start gap-4 mt-7`}
        >
          <div
            className={`bg-white flex ${
              locale === "ar" ? "flex-row" : "flex-row-reverse"
            } items-center border border-[#5C5E64] p-[14px] rounded-md xl:w-[332px] lg:w-[383px] md:w-[383px] w-[282px]`}
          >
            <input
              type="text"
              placeholder={content?.enterYourMail}
              className={`text-black-secondary bg-white ${
                locale === "ar" ? "text-end pr-2" : "text-start pl-2"
              } w-full  text-sm font-normal`}
            />
            <SmsBlack />
          </div>
          <button className="bg-black-secondary text-white px-6 py-[14px] rounded-md">
            {content?.btnText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default FooterContactSection;
