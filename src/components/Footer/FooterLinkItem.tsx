import Link from "next/link";
import React from "react";

interface Link {
    text: string;
    url?: string;
}

interface Props {
    link: Link;
}

const FooterLinkItem = ({ link }: Props) => {
    return (
        <>
            {link.url && (
                <Link href={link.url}>
                    <p className="font-normal text-xl text-black-secondary capitalize">
                        {link.text}
                    </p>
                </Link>
            )}

            {!link.url && (
                <p className="font-normal text-xl text-black-secondary capitalize">
                    {link.text}
                </p>
            )}
        </>
    );
};

export default FooterLinkItem;
