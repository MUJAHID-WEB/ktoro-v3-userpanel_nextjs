import { MenuLinkItem } from "@/utils/type";
import Link from "next/link";
import React from "react";

interface Props {
    item: MenuLinkItem;
}

const HorizontalLink = ({ item }: Props) => {
    return (
        <Link
            href={item.link}
            key={item.title}
            className="flex flex-col items-center gap-2"
        >
            {item.icon}
            <h3 className="font-medium text-xs text-[#333]">{item.title}</h3>
        </Link>
    );
};

export default HorizontalLink;
