import React from "react";
import EditProfile from "./EditProfile";
import { profileSectionContent } from "@/static/contents/dashboard";
import useTranslator from "@/utils/useTranslator";
import { useRouter } from "next/router";

const ProfileSection = () => {
  const router = useRouter();
  let { locale } = router;
  const content: any = useTranslator(locale || "en", profileSectionContent);
  return (
    <section className="bg-white w-full p-9 xl:ps-9 lg:ps-9 ps-3 md:ps-[145px] rounded-md">
      {/* heading  */}
      <h1
        className={`${
          locale === "ar" ? "text-right" : "text-left"
        } font-bold text-base`}
      >
        {content?.profileTitle}
      </h1>
      {/* edit form  */}
      <EditProfile />
    </section>
  );
};

export default ProfileSection;
