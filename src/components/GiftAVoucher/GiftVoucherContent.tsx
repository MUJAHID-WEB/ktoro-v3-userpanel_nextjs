import React from "react";
import VoucherForm from "./VoucherForm";
import BalanceValueCard from "./BalanceValueCard";
import { useRouter } from "next/router";

const GiftVoucherContent = () => {
  const router = useRouter();
  const { locale } = router;
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className={`${locale === "ar" ? "order-last" : "order-first"}`}>
          <BalanceValueCard />
        </div>
        <div className={`${locale === "ar" ? "order-first" : "order-last"}`}>
          <VoucherForm />
        </div>
      </div>
    </section>
  );
};

export default GiftVoucherContent;
