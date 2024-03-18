"use client";

import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import ArrowLeft from "../svg/ArrowLeft";
import ArrowRight2 from "../svg/ArrowRight2";
import MenuIcon from "../svg/MenuIcon";
import ArrowLeft2 from "../svg/ArrowLeft2";
import { ArrowRight } from "../svg/ArrowRight";

type SidebarProps = {
  data: {
    id: number;
    href: string;
    icon: React.ReactNode;
    nameEn: string;
    nameAr: string;
  }[];
};

type SidebarLink = {
  id: number;
  href: string;
  icon: React.ReactNode;
  nameEn: string;
  nameAr: string;
};

const Sidebar = ({ data }: SidebarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const { locale } = router;
  return (
    <>
      <div className="block lg:hidden text-right mb-4">
        <button onClick={() => setIsOpen(!isOpen)}>
          <MenuIcon fill="#2f2f2f" />
        </button>
      </div>
      <ul className={`${isOpen ? "block" : "hidden"} lg:block bg-white mb-4`}>
        <li>
          <Link
            href="#"
            className={`w-full font-semibold px-8 py-4 flex items-center gap-4 ${
              locale === "ar" ? " flex-row-reverse" : " flex-row"
            }`}
          >
            {locale === "ar" ? <ArrowRight /> : <ArrowLeft />}
            <span>{locale === "ar" ? "أهلا " : "Welcome"},</span>{" "}
            <span>Salman Mir</span>
          </Link>
        </li>
      </ul>
      <ul className={`${isOpen ? "block" : "hidden"} lg:block`}>
        {data.map(({ id, href, icon, nameEn, nameAr }: SidebarLink) => (
          <li key={id} className="bg-white border-t border-gray-200/70">
            <Link
              href={href}
              className={`w-full font-semibold px-8 py-4 flex ${
                locale === "ar" ? "flex-row-reverse" : "flex-row"
              } items-center gap-4`}
            >
              <span className="w-6 h-6">{icon}</span>{" "}
              {router.locale === "ar" ? nameAr : nameEn}{" "}
              {locale === "ar" ? <ArrowLeft2 /> : <ArrowRight2 fill="#000" />}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Sidebar;
