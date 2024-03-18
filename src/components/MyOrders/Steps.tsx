import React from "react";
import CheckCircleFill from "../svg/CheckCircleFill";
import { useRouter } from "next/router";

type Step = {
  name: string;
  process: boolean;
};

type StepsProps = {
  steps: Step[];
};

const StepsItem: React.FC<{ step: Step }> = ({ step }) => {
  const { name, process } = step;

  return (
    <div className="p-4 z-10">
      <div className="flex flex-col items-center gap-2">
        <span>
          {process ? (
            <CheckCircleFill fill="#47A6DC" width={"34"} height={"34"} />
          ) : (
            <span className="w-8 h-8 inline-block border border-blue-300 rounded-full bg-white"></span>
          )}
        </span>
        <p className="text-xs md:text-sm text-center">{name}</p>
      </div>
    </div>
  );
};

const Steps: React.FC<StepsProps> = ({ steps }) => {
  const router = useRouter();
  const { locale } = router;
  return (
    <div className="relative">
      <div className={`flex ${locale === "ar" ? "flex-row-reverse" : "flex-row"} justify-between`}>
        <span className="step-bar"></span>
        {steps.map((step, index) => (
          <StepsItem key={index} step={step} />
        ))}
      </div>
    </div>
  );
};

export default Steps;
