import React from "react";

const CloseButton = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="33"
            height="32"
            viewBox="0 0 33 32"
            fill="none"
        >
            <g clipPath="url(#clip0_5445_171789)">
                <g filter="url(#filter0_d_5445_171789)">
                    <circle cx="16.2891" cy="14" r="12" fill="#E2ECF2" />
                    <circle cx="16.2891" cy="14" r="12.5" stroke="white" />
                </g>
                <path
                    d="M21.0391 9L11.2891 18.75M11.2891 9L21.0391 18.75"
                    stroke="#0085F2"
                    stroke-width="2.25"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
            </g>
            <defs>
                <filter
                    id="filter0_d_5445_171789"
                    x="-0.710938"
                    y="-1"
                    width="34"
                    height="34"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                    />
                    <feOffset dy="2" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                    />
                    <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_5445_171789"
                    />
                    <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_5445_171789"
                        result="shape"
                    />
                </filter>
                <clipPath id="clip0_5445_171789">
                    <rect
                        width="32"
                        height="32"
                        fill="white"
                        transform="translate(0.289062)"
                    />
                </clipPath>
            </defs>
        </svg>
    );
};

export default CloseButton;
