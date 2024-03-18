import React from "react";

interface Props {
  color?: string;
}

export const ArrowRight = ({ color = "black" }: Props) => {
  return (
    <svg
      width="14"
      height="13"
      viewBox="0 0 14 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        id="Vector"
        d="M7.83057 1.60156L12.9998 6.40156L7.83057 11.2016M12.2819 6.40156H1.7998"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
