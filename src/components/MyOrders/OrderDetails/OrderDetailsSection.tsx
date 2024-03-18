import React from "react";
import { useRouter } from "next/router";
import OrderDetails from "./OrderDetails";
import OrderAddress from "./OrderAddress";
import OrderPayment from "./OrderPayment";
import OrderSummary from "./OrderSummary";
import ShippingDetails from "./ShippingDetails";
import Link from "next/link";
import ArrowLeft from "@/components/svg/ArrowLeft";
import { orders } from "@/static";

const OrderDetailsSection = () => {
  const router = useRouter();
  const { orderId } = router.query;
  const orderItem = orders.find((order) => order.orderId === orderId);
  const { locale } = router;
  return (
    <section className="bg-white p-4">
      <button className="flex lg:hidden gap-2 mb-4 p-2 font-bold">
        <ArrowLeft />
        Back
      </button>
      <h2 className="text-xl font-semibold">Order Details #{orderId}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
        <div className={`${locale === "ar" ? "order-last" : "order-first"}`}>
          <OrderDetails orderItem={orderItem || " "} />
        </div>
        <div className="space-y-4">
          <OrderAddress orderItem={orderItem} />
          <OrderPayment orderItem={orderItem} />
          <OrderSummary orderItem={orderItem} />
        </div>
        <div
          className={`${
            locale === "ar" ? "order-first" : "order-last"
          } space-y-4`}
        >
          <OrderAddress orderItem={orderItem} />
          <ShippingDetails orderItem={orderItem} />
        </div>
      </div>
    </section>
  );
};

export default OrderDetailsSection;
