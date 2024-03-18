import React from "react";

interface Props {
    color?: string;
    width?: number;
    hight?: number;
}

const NavbarUpArrow = ({ color = "#fff", width = 20, hight = 20 }: Props) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            height={hight}
            viewBox="0 -960 960 960"
            width={width}
            color={color}
            fill={color}
        >
            <path d="M480-528 296-344l-56-56 240-240 240 240-56 56-184-184Z" />
        </svg>
    );
};

export default NavbarUpArrow;
