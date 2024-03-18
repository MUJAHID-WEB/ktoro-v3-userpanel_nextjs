import React from "react";
import OrderCard from "./OrderCard";
import { ordersType } from "@/utils/type";
import orderImage from "/public/images/product/order-image.png";
import { useRouter } from "next/router";
import useTranslator from "@/utils/useTranslator";
import { orderProcessContent } from "@/static/contents/myOrder";
const MyOrderSection = () => {
  const router = useRouter();
  let { locale } = router;
  const content: any = useTranslator(locale || "en", orderProcessContent);
  const orders: ordersType[] = [
    {
      id: 1,
      orderId: "6514004d48d156e4658ac1f6",
      orderDate: "27 Sep 2023 11:11",
      orderPrice: 93.8,
      status: [
        {
          name: content?.orderCreated,
          process: true,
          active: false,
        },
        {
          name: content?.inProcessing,
          process: true,
          active: false,
        },
        {
          name: content?.withCourier,
          process: true,
          active: true,
        },
        {
          name: content?.delivered,
          process: false,
          active: false,
        },
      ],
      totalOrders: 1,
      image: orderImage,
    },
    {
      id: 2,
      orderId: "7514004d49d146e4258bd1k6",
      orderDate: "28 Sep 2023 11:11",
      orderPrice: 73.8,
      status: [
        {
          name: content?.orderCreated,
          process: true,
          active: false,
        },
        {
          name: content?.inProcessing,
          process: true,
          active: true,
        },
        {
          name: content?.withCourier,
          process: false,
          active: false,
        },
        {
          name: content?.delivered,
          process: false,
          active: false,
        },
      ],
      totalOrders: 2,
      image: orderImage,
    },
    {
      id: 3,
      orderId: "2914004n48b156d4658ak1f7",
      orderDate: "29 Sep 2023 11:11",
      orderPrice: 52.8,
      status: [
        {
          name: content?.orderCreated,
          process: true,
          active: true,
        },
        {
          name: content?.inProcessing,
          process: false,
          active: false,
        },
        {
          name: content?.withCourier,
          process: false,
          active: false,
        },
        {
          name: content?.delivered,
          process: false,
          active: false,
        },
      ],
      totalOrders: 5,
      image: orderImage,
    },
  ];
  return (
    <section className="bg-white p-4">
      <div className="flex flex-col gap-4">
        {orders.map((order) => (
          <OrderCard key={order.id} order={order} />
        ))}
      </div>
    </section>
  );
};

export default MyOrderSection;
