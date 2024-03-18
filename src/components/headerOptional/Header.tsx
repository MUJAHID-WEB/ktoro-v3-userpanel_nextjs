import Link from "next/link";
import React, { useContext, useState } from "react";
import LogoWhite from "../svg/LogWhite";
import CartHeader from "../svg/CartHeader";
import Profile from "../svg/Profile";
import Notification from "../svg/Notification";
import Image from "next/image";
import music_image from "/public/images/header/music.png";
import MenuIcon from "../svg/MenuIcon";
import NotificationBadge from "./NotificationBadge";
import { useRouter } from "next/router";
import AppContext from "@/context/appContext";
import DropdownMenu from "../Header/DropdownMenu";
import SearchBox from "./SearchBox";
import CountryDropdown from "./CountryDropdown";
import CurrencyDropdown from "./CurrencyDropdown";
import SearchHeader from "../svg/SearchHeader";
import Menu from "./Menu";
import close_btn from "/public/images/header/close.png";
import ShoppingCartSideBar from "../Sidebar/ShoppingCartSideBar";
import SearchSlider from "./SearchSlider";

const Header = () => {
    const router = useRouter();
    let { locale } = router;
    const [isOpen, setIsOpen] = useState(false);

    // state for tab & mobile menu
    const [isOpenMenu, setIsOpenMenu] = useState(false);

    // search state
    const [isOpenSearch, setIsOpenSearch] = useState(false);
    const [keyword, setKeyword] = useState<string>("");

    // state for toogle the dropdown menu
    const [openMenu, setOpenMenu] = useState<boolean>(false);
    const { cart } = useContext<any>(AppContext);

    return (
        <div className="h-[88px] bg-black-primary  sticky top-0 z-20">
            <div
                className={`container h-[88px] flex ${
                    locale === "ar" ? "flex-row-reverse" : "flex-row"
                } justify-between items-center xl:px-5 lg:px-5 px-4`}
            >
                {/* KTORO Logo*/}
                <div
                    className={`flex ${
                        locale === "ar" ? "flex-row-reverse" : "flex-row"
                    } items-center gap-[10px]`}
                >
                    <div
                        onClick={() => setIsOpenMenu(!isOpenMenu)}
                        className="xl:hidden block"
                    >
                        <MenuIcon />
                    </div>
                    <div className="h-[43px] w-[156px]">
                        <Link href={"/"}>
                            <LogoWhite />
                        </Link>
                    </div>
                </div>

                {/* Search Box */}
                <div className="xl:flex hidden items-center gap-4">
                    <CurrencyDropdown />
                    <CountryDropdown />
                    <SearchBox
                        isOpen={isOpenSearch}
                        setIsOpen={setIsOpenSearch}
                        keyword={keyword}
                    />
                </div>

                {/* right side  */}
                <div
                    className={`flex ${
                        locale === "ar" ? "flex-row-reverse" : "flex-row"
                    } items-center gap-[23px]`}
                >
                    {/* tab & mobile section hidden  */}
                    <div className="xl:flex hidden items-center">
                        {locale === "ar" && (
                            <div className="h-6 w-[2px] bg-white me-2"></div>
                        )}

                        <div className="h-7 w-7 cursor-pointer">
                            <Image src={music_image} alt="music" />
                        </div>

                        <p className="text-base font-normal text-white ms-4">
                            100% Original music available
                        </p>
                        {locale !== "ar" && (
                            <div className="h-6 w-[2px] bg-white ms-2"></div>
                        )}
                    </div>

                    {/* for web  */}
                    <div
                        className={`xl:flex hidden flex-row items-center gap-[23px]`}
                    >
                        <div
                            onClick={() => setIsOpenSearch(true)}
                            className="cursor-pointer relative xl:hidden block"
                        >
                            <SearchHeader />
                        </div>
                        <div className="cursor-pointer xl:block hidden relative">
                            <Notification />
                            <NotificationBadge count={1} />
                        </div>
                        <div
                            onClick={() => setIsOpen(true)}
                            className="cursor-pointer relative"
                        >
                            <CartHeader />
                            <NotificationBadge count={cart.length} />
                        </div>
                        <div
                            onClick={() => setIsOpenSearch(!isOpenSearch)}
                            className="cursor-pointer xl:hidden block relative"
                        >
                            <Notification />
                            <NotificationBadge count={1} />
                        </div>
                        <div
                            onClick={() => setOpenMenu(!openMenu)}
                            className="cursor-pointer xl:block hidden relative"
                        >
                            <Profile />
                            {/* my account dropdown section  */}
                            {openMenu && <DropdownMenu />}
                        </div>
                    </div>

                    {/* with menu close btn for tab & mobile device  */}
                    <div className="xl:hidden block">
                        {isOpenMenu ? (
                            <div
                                onClick={() => setIsOpenMenu(false)}
                                className="text-2xl text-white "
                            >
                                <Image src={close_btn} alt="close" />
                            </div>
                        ) : (
                            <div
                                className={`flex flex-row items-center gap-[23px]`}
                            >
                                <div
                                    onClick={() => setIsOpenSearch(true)}
                                    className="cursor-pointer relative xl:hidden block"
                                >
                                    <SearchHeader />
                                </div>
                                <div className="cursor-pointer xl:block hidden relative">
                                    <Notification />
                                    <NotificationBadge count={1} />
                                </div>
                                <div
                                    onClick={() => setIsOpen(true)}
                                    className="cursor-pointer relative"
                                >
                                    <CartHeader />
                                    <NotificationBadge count={cart.length} />
                                </div>
                                <div className="cursor-pointer xl:hidden block relative">
                                    <Notification />
                                    <NotificationBadge count={1} />
                                </div>
                                <div
                                    onClick={() => setOpenMenu(!openMenu)}
                                    className="cursor-pointer xl:block hidden relative"
                                >
                                    <Profile />
                                    {/* my account dropdown section  */}
                                    {openMenu && <DropdownMenu />}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* cart slider  */}
                    <ShoppingCartSideBar
                        viewCart={isOpen}
                        actionCb={setIsOpen}
                    />

                    {/* search slider  */}
                    <SearchSlider
                        open={isOpenSearch}
                        setOpen={setIsOpenSearch}
                        keyword={keyword}
                        setKeyword={setKeyword}
                    />
                </div>
            </div>

            {/* mobile & tab menu  */}
            {isOpenMenu && <Menu />}
        </div>
    );
};

export default Header;
