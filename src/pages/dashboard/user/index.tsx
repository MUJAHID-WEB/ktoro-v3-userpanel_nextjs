import DashboardLayout from "@/components/Layout/DashboardLayout";
import React from "react";

const UserDashboardPage = () => {
  return <div>User Dashboard Page</div>;
};

UserDashboardPage.getLayout = (page: any) => {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default UserDashboardPage;
