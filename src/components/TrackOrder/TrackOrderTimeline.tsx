import React, { useState } from "react";
import Image from "next/image";
import { trackOrderSteps, trackOrderStepsAr } from "@/static";
import TimelineCompleteIcon from "../svg/TimelineCompleteIcon";
import TimelineInCompleteIcon from "../svg/TimelineInCompleteIcon";
import { useRouter } from "next/router";

const TrackOrderTimeline = () => {
    const router = useRouter();
    let { locale } = router;
    const [currentStep, setCurrentStep] = useState(2);
    const [complete, setComplete] = useState(false);
    return (
        <>
            <div
                className={`flex justify-between xl:mt-52 lg:mt-52 md:mt-52 mt-48`}
            >
                {locale === "ar" ? (
                    <>
                        {trackOrderStepsAr?.map((step, i) => (
                            <div
                                key={i}
                                className={`step-item relative${
                                    currentStep === i + 1 && "active"
                                } ${
                                    (i + 1 < currentStep || complete) &&
                                    "complete"
                                } `}
                            >
                                <div className="absolute -top-36 flex flex-col items-center gap-2">
                                    <div className="xl:h-[72px] xl:w-[72px] lg:h-[72px] lg:w-[72px] md:w-[72px] md:h-[72px] w-14 h-14">
                                        <Image src={step.icon} alt="" />
                                    </div>
                                    <div className="text-ash-500 text-center font-bold xl:text-base lg:text-base text-xs capitalize">
                                        {locale === "ar"
                                            ? step.titleAr
                                            : step.titleEn}
                                    </div>
                                </div>
                                <div className="step">
                                    {i + 1 < currentStep || complete ? (
                                        <TimelineCompleteIcon />
                                    ) : (
                                        <TimelineInCompleteIcon />
                                    )}
                                </div>
                            </div>
                        ))}
                    </>
                ) : (
                    <>
                        {trackOrderSteps?.map((step, i) => (
                            <div
                                key={i}
                                className={`step-item relative${
                                    currentStep === i + 1 && "active"
                                } ${
                                    (i + 1 < currentStep || complete) &&
                                    "complete"
                                } `}
                            >
                                <div className="absolute -top-36 flex flex-col items-center gap-2">
                                    <div className="xl:h-[72px] xl:w-[72px] lg:h-[72px] lg:w-[72px] md:w-[72px] md:h-[72px] w-14 h-14">
                                        <Image src={step.icon} alt="" />
                                    </div>
                                    <div className="text-ash-500 text-center font-bold xl:text-base lg:text-base text-xs capitalize">
                                        {locale === "ar"
                                            ? step.titleAr
                                            : step.titleEn}
                                    </div>
                                </div>
                                <div className="step">
                                    {i + 1 < currentStep || complete ? (
                                        <TimelineCompleteIcon />
                                    ) : (
                                        <TimelineInCompleteIcon />
                                    )}
                                </div>
                            </div>
                        ))}
                    </>
                )}
            </div>
        </>
    );
};

export default TrackOrderTimeline;
