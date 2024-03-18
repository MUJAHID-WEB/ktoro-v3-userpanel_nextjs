import React from "react";
import DashboardLayout from "@/components/Layout/DashboardLayout";
import FavoriteSection from "@/components/Favorite/FavoriteSection";

const FavoritePage = () => {
  return <FavoriteSection />;
};

FavoritePage.getLayout = (page: React.ReactNode) => {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default FavoritePage;
