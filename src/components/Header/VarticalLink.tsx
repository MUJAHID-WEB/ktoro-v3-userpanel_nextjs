import Link from "next/link";
import React from "react";
import ArrowRight2 from "../svg/ArrowRight2";
import { MenuLinkItem } from "@/utils/type";

interface Props {
  item: MenuLinkItem;
}

const VarticalLink = ({ item }: Props) => {
  return (
    <Link
      href={item.link}
      className="px-4 py-3 border-t border-ash-400 flex items-center justify-between"
    >
      {/* left  */}
      <div className="flex items-center gap-2">
        {/* icon */}
        {item.icon && item.icon}
        <h3
          className={`font-medium text-xs  ${
            item.logout ? "text-[#F05E5E]" : "text-[#333]"
          }`}
        >
          {item.title}
        </h3>
      </div>
      {/* right  */}
      <div className="cursor-pointer">
        <ArrowRight2 />
      </div>
    </Link>
  );
};

export default VarticalLink;
