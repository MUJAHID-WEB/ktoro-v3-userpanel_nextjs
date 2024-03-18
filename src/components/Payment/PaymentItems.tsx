import AppContext from "@/context/appContext";
import React, { useContext } from "react";
import ProductCart from "../cartItems/ProductCart";
import { useRouter } from "next/router";

const PaymentItems = () => {
  const { cart } = useContext<any>(AppContext);
  const router = useRouter();
  return (
    <div>
      <h3 className="font-semibold mb-2">
        {cart.length > 0 ? `${cart.length}` : "0"}{" "}
        {router.locale === "ar" ? "صنف" : "Items"}
      </h3>
      <ProductCart cartItems={cart} />
    </div>
  );
};

export default PaymentItems;
