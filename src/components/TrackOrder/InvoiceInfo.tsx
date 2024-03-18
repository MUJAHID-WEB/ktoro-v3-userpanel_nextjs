import React from "react";

interface Props {
  title: string;
  details: string[];
}

const InvoiceInfo = ({ title, details }: Props) => {
  return (
    <div className="xl:text-right lg:text-right text-start">
      {/* info title  */}
      <h3 className="capitalize font-bold text-sm text-[#494949]">{title}</h3>
      {/* info details  */}
      <div className="mt-2">
        {details.map((detail, i) => (
          <p key={i} className="capitalize font-normal text-sm text-black-600">
            {detail}
          </p>
        ))}
      </div>
    </div>
  );
};

export default InvoiceInfo;
