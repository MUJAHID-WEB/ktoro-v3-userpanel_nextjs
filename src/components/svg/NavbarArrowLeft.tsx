import React from "react";

interface Props {
    color?: string;
    width?: number;
    hight?: number;
}

const NavbarArrowLeft = ({ color = "#fff", width = 20, hight = 20 }: Props) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            height={hight}
            viewBox="0 -960 960 960"
            width={width}
            fill={color}
            color={color}
        >
            <path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z" />
        </svg>
    );
};

export default NavbarArrowLeft;
