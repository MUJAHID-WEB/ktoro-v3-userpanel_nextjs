import Image from "next/image";
import React from "react";

export const CallUsCard = ({
  image,
  title,
  subTitle,
}: {
  image: string;
  title: string;
  subTitle?: string;
}) => {
  return (
    <div
      className="flex flex-col justify-start items-center p-6 bg-white border border-ash-400 rounded-md w-[177px]"
      style={{ backgroundColor: "#fff" }}
    >
      <Image src={image} alt="My SVG" width={70} height={70} />

      <h5 className="pt-4 font-medium text-xl text-black-secondary">{title}</h5>
      {subTitle && (
        <p className="font-normal text-sm text-gray-400">{subTitle}</p>
      )}
    </div>
  );
};
