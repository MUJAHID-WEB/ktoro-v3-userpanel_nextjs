import React from "react";

export default function ArrowLeft2({
    width = "24",
    height = "24",
    fill = "#000",
}: React.SVGAttributes<SVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            height={height}
            viewBox="0 -960 960 960"
            width={width}
        >
            <path
                d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z"
                fill={fill}
            />
        </svg>
    );
}
