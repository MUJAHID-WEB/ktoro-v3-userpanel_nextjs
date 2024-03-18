import React from "react";
import Image from "next/image";

export const ImageComponent = ({
  className = "",
  Src,
  Alt,
}: {
  className: string;
  Src: string;
  Alt: string;
}) => {
  return (
    <div className={`${className} overflow-hidden relative`}>
      <Image src={Src} className="text-white object-cover " alt={Alt} fill />
      {/* <Image src="/girl.jpg" alt="" fill className="" /> */}
    </div>
  );
};
