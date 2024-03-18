import React from "react";
import FavoriteCard from "./FavoriteCard";
import { favoriteSectionContent } from "@/static/contents/dashboard";
import useTranslator from "@/utils/useTranslator";
import { useRouter } from "next/router";

const FavoriteSection = () => {
  const router = useRouter();
  let { locale } = router;
  const content: any = useTranslator(locale || "en", favoriteSectionContent);
  return (
    <section className="bg-white p-4">
      <div className="container">
        <h2 className="text-lg font-semibold mb-4">{content?.myFavorite}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[1, 2, 3, 4, 5].map((item) => (
            <FavoriteCard key={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FavoriteSection;
