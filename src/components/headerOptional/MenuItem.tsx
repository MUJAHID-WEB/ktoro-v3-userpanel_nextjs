import React from "react";
import ArrowRight2 from "../svg/ArrowRight2";
import Link from "next/link";
import { useRouter } from "next/router";
import ArrowLeft from "../svg/ArrowLeft";
import arrow_left from "../../../public/images/header/left-arrow.svg";
import Image from "next/image";

interface Props {
    text: string;
    link?: string;
    icon?: React.ReactNode;
    handleSubMenu?: (value: string) => void;
    rightArrow?: boolean;
}

const MenuItem = ({
    text,
    link,
    icon,
    handleSubMenu,
    rightArrow = true,
}: Props) => {
    const router = useRouter();
    let { locale } = router;
    return (
        <>
            {link && (
                <Link href={link}>
                    <div
                        className={`px-5 py-2 border-b border-gray-100 flex ${
                            locale === "ar" ? "flex-row-reverse" : "flex-row"
                        } items-center justify-between`}
                    >
                        <div
                            className={`flex ${
                                locale === "ar"
                                    ? "flex-row-reverse"
                                    : "flex-row"
                            } items-center gap-3`}
                        >
                            {icon}
                            <h5>{text}</h5>
                        </div>
                        {rightArrow && (
                            <>
                                {locale === "ar" ? (
                                    <Image src={arrow_left} alt="" />
                                ) : (
                                    <ArrowRight2 />
                                )}
                            </>
                        )}
                    </div>
                </Link>
            )}
            {handleSubMenu && (
                <div
                    onClick={() => handleSubMenu(text)}
                    className={`px-5 py-2 border-b border-gray-100 flex ${
                        locale === "ar" ? "flex-row-reverse" : "flex-row"
                    } items-center gap-3`}
                >
                    {icon}
                    <h5>{text}</h5>
                    {locale === "ar" ? (
                        <Image src={arrow_left} alt="" />
                    ) : (
                        <ArrowRight2 />
                    )}
                </div>
            )}
        </>
    );
};

export default MenuItem;
