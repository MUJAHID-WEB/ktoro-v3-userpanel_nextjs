import React from "react";

const MenuIcon = ({fill = "#E7E7E7", width = "32", height = "32"}: React.SVGAttributes<SVGElement>) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            viewBox="0 0 32 32"
            fill="none"
        >
            <path d="M28 9H4" stroke={fill} strokeWidth="2.5" />
            <path d="M28 16H4" stroke={fill} strokeWidth="2.5" />
            <path d="M28 23H4" stroke={fill} strokeWidth="2.5" />
        </svg>
    );
};

export default MenuIcon;
