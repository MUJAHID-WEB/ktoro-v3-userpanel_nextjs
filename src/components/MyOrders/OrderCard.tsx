import React from "react";
import Link from "next/link";
import Image from "next/image";
import Steps from "./Steps";
import { useRouter } from "next/router";
import useTranslator from "@/utils/useTranslator";
import { orderProcessContent } from "@/static/contents/myOrder";

type OrderCardProps = {
  order: {
    id: number;
    orderId: string;
    orderDate: string;
    orderPrice: number;
    status: {
      name: string;
      process: boolean;
      active: boolean;
    }[];
    totalOrders: number;
    image: any;
  };
};

const OrderCard = ({ order }: OrderCardProps) => {
  const router = useRouter();
  const { locale } = router;
  const content: any = useTranslator(locale || "en", orderProcessContent);
  const { orderId, orderDate, orderPrice, status, totalOrders, image } = order;

  const activeStatus = status.find((status) => status.active);

  console.log(activeStatus);

  return (
    <div className="border border-gray-300 p-4 rounded-md">
      <div
        className={`flex ${
          locale === "ar" ? "flex-row-reverse" : "flex-row"
        } justify-between gap-4`}
      >
        <div className={`${locale === "ar" ? "text-right" : "text-left"}`}>
          <p className="font-semibold">{orderId}</p>
          <p className="text-gray-500">{orderDate}</p>
        </div>
        <div>
          <p className="font-semibold">SAR {orderPrice}</p>
        </div>
      </div>
      <hr className="my-4" />
      <div>
        <Steps steps={status} />
      </div>
      <hr className="my-4" />
      <div
        className={`flex ${
          locale === "ar" ? "flex-row-reverse" : "flex-row"
        } justify-between items-end gap-4`}
      >
        <div>
          <p className="mb-4 font-semibold">
            {totalOrders} {content?.itemText}
          </p>
          <Image
            src={image}
            alt="product"
            width={500}
            height={200}
            className="w-20 h-auto"
          />
        </div>
        <div>
          <Link
            href={`/dashboard/my-orders/${orderId}?orderStatus=${activeStatus?.name}`}
            className="text-sky-500 font-semibold underline"
          >
            {content?.orderDetailLinkText}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
