import { measurementContent } from "@/static/contents/size";
import useTranslator from "@/utils/useTranslator";
import { useRouter } from "next/router";
import React from "react";

const MeasurementCM = () => {
  const router = useRouter();
  let { locale } = router;
  const content: any = useTranslator(locale || "en", measurementContent);

  const isArabic = locale === "ar";

  return (
    <>
      <div className="w-full border border-black-primary rounded-lg overflow-hidden">
        <table className="min-w-full bg-[#FCFCFC] divide-y divide-black-primary text-xs md:text-base text-center text-black-primary">
          <thead>
            <tr className="divide-x divide-black-primary capitalize font-arabicBold">
              {isArabic ? (
                <>
                  <th className="py-1.5 px-2 md:py-3.5 md:px-9">
                    {content?.waist}
                  </th>
                  <th className="py-1.5 px-2 md:py-3.5 md:px-6 ">
                    {content?.hipSize}
                  </th>
                  <th className="py-1.5 px-2 md:py-3.5 md:px-7 ">
                    {content?.thigh}
                  </th>
                  <th className="py-1.5 px-2 md:py-3.5 md:px-7 ">
                    {content?.height}
                  </th>
                  <th className="py-1.5 px-2 md:py-3.5 md:px-8 ">
                    {content?.size}
                  </th>
                </>
              ) : (
                <>
                  <th className="py-1.5 px-2 md:py-3.5 md:px-8 ">
                    {content?.size}
                  </th>
                  <th className="py-1.5 px-2 md:py-3.5 md:px-7 ">
                    {content?.height}
                  </th>
                  <th className="py-1.5 px-2 md:py-3.5 md:px-7 ">
                    {content?.thigh}
                  </th>
                  <th className="py-1.5 px-2 md:py-3.5 md:px-6 ">
                    {content?.hipSize}
                  </th>
                  <th className="py-1.5 px-2 md:py-3.5 md:px-9">
                    {content?.waist}
                  </th>
                </>
              )}
            </tr>
          </thead>
          <tbody className="divide-y divide-black-primary bg-[#FCFCFC]">
            {content?.sizes.map((item: any, id: number) => (
              <tr
                key={id}
                className="divide-x divide-black-primary font-arabicMedium"
              >
                <td className="py-2 md:py-6">
                  {isArabic ? item.waist : item.size}
                </td>
                <td className="py-2 md:py-6 ">
                  {isArabic ? item.hipSize : item.height}
                </td>
                <td className="py-2 md:py-6 ">{item.thigh}</td>
                <td className="py-2 md:py-6 ">
                  {isArabic ? item.height : item.hipSize}
                </td>
                <td className="py-2 md:py-6">
                  {isArabic ? item.size : item.waist}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default MeasurementCM;
