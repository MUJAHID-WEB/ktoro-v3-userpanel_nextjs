import DashboardLayout from "@/components/Layout/DashboardLayout";
import ProfileSection from "@/components/profile/ProfileSection";
import React from "react";

const UserProfilePage = () => {
    return <ProfileSection />;
};

UserProfilePage.getLayout = (page: any) => {
    return <DashboardLayout>{page}</DashboardLayout>;
};

export default UserProfilePage;
