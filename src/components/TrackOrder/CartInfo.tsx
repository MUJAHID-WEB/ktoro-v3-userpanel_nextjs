import React from "react";

interface Props {
  rightText: string;
  leftText: string;
  bold?: boolean;
}

const CartInfo = ({ rightText, leftText, bold = false }: Props) => {
  return (
    <div className="flex justify-between items-center">
      <p
        className={`text-sm ${
          bold ? "text-[#333] font-medium" : "text-black-600 font-normal"
        } capitalize`}
      >
        {leftText}
      </p>
      <p
        className={`text-sm ${
          bold ? "text-[#333] font-medium" : "text-black-600 font-normal"
        } uppercase`}
      >
        {rightText}
      </p>
    </div>
  );
};

export default CartInfo;
