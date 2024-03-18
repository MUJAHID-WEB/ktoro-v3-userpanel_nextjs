import Link from "next/link";
import React from "react";

interface Props {
    text: string;
    link?: string;
}

const FooterLikHeader = ({ text, link }: Props) => {
    return (
        <>
            {link && (
                <Link href={link}>
                    <h3 className="font-bold text-[22px] text-black-secondary capitalize">
                        {text}
                    </h3>
                </Link>
            )}

            {!link && (
                <h3 className="font-bold text-[22px] text-black-secondary capitalize">
                    {text}
                </h3>
            )}
        </>
    );
};

export default FooterLikHeader;
