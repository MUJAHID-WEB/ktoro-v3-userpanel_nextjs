import Link from "next/link";
import React, { FC } from "react";
export type notificationDetailsProps = {
  title: string;
  url: string;
  subTitle?: string;
  date?: string;
  offer?: string;
  offerText?: string;
};
const NotificationDetails: FC<notificationDetailsProps> = ({
  title,
  url,
  subTitle,
  date,
  offer,
  offerText,
}) => {
  return (
    <Link
      href={url}
      className="relative w-full flex flex-col justify-start items-start gap-2 bg-ash-300 py-[18px] pl-4 "
    >
      <span className="absolute -top-2.5 right-0 md:-right-2 h-[21px] w-[21px] rounded-full bg-blue-300" />
      <h6 className="text-xl font-arabicMedium text-black-500 capitalize">
        {title}
      </h6>
      {subTitle && (
        <p className="leading-[19px] text-[13px] font-arabic text-black-500 capitalize">
          {subTitle}
        </p>
      )}
      {offerText && (
        <p className="flex items-end gap-1.5 text-xl font-arabic capitalize text-black-500">
          {offerText}
          <span className="text-2xl text-blue-300 font-arabicBold">
            {offer}
          </span>
        </p>
      )}
      {date && (
        <p className="leading-[19px] text-[13px] font-arabic text-[#4E4E4E] capitalize">
          {date}
        </p>
      )}
    </Link>
  );
};

export default NotificationDetails;
