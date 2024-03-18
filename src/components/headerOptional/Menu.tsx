import React, { useState } from "react";
import MenuItem from "./MenuItem";
import ArrowLeft from "../svg/ArrowLeft";
import HomeIcon from "../svg/HomeIcon";

const Menu = () => {
    const [openSubMenu, setSubMenu] = useState<boolean>(false);
    const [openSubMenuText, setSubMenuText] = useState<string>("");

    const handleSubMenu = (text: string) => {
        setSubMenuText(text);
        setSubMenu(true);
    };
    return (
        <>
            <div className="w-full xl:hidden block min-h-[calc(100vh-88px)] z-[800] bg-gray-700 absolute">
                <div className="bg-white mt-2">
                    <MenuItem
                        text="Home"
                        link="/"
                        icon={<HomeIcon />}
                        rightArrow={false}
                    />
                    <MenuItem text="Login" link="/login" />
                    <MenuItem text="Register" link="/register" />
                </div>
                <div className="bg-white mt-2">
                    <MenuItem text="K-Food" handleSubMenu={handleSubMenu} />
                    <MenuItem
                        text="Home Decore"
                        handleSubMenu={handleSubMenu}
                    />
                    <MenuItem
                        text="Photocards & Stickers"
                        handleSubMenu={handleSubMenu}
                    />
                    <MenuItem text="Jewelry" handleSubMenu={handleSubMenu} />
                    <MenuItem text="BT21" handleSubMenu={handleSubMenu} />
                    <MenuItem
                        text="Phone cases"
                        handleSubMenu={handleSubMenu}
                    />
                    <MenuItem
                        text="Electronics"
                        handleSubMenu={handleSubMenu}
                    />
                    <MenuItem text="Album" handleSubMenu={handleSubMenu} />
                    <MenuItem text="Clothing" handleSubMenu={handleSubMenu} />
                    <MenuItem
                        text="Fashion Accessories"
                        handleSubMenu={handleSubMenu}
                    />
                    <MenuItem text="Figures" handleSubMenu={handleSubMenu} />
                </div>
                <div className="bg-white mt-2">
                    <MenuItem text="Shop By Brands" link="/" />
                    <MenuItem text="Country And Language" link="/" />
                    <MenuItem text="Country And Language" link="/" />
                </div>
            </div>
            {openSubMenu && (
                <div className="w-full min-h-[calc(100vh-88px)] z-[999] bg-gray-200 absolute">
                    <div className="bg-white mt-2 py-4 px-5 flex items-center gap-4">
                        <div onClick={() => setSubMenu(false)}>
                            <ArrowLeft />
                        </div>
                        <h3 className="text-base font-medium">
                            {openSubMenuText}
                        </h3>
                    </div>
                    <div className="bg-white mt-2">
                        <MenuItem text="Home" link="/" />
                        <MenuItem text="Login" link="/" />
                        <MenuItem text="Register" link="/" />
                    </div>
                </div>
            )}
        </>
    );
};

export default Menu;
