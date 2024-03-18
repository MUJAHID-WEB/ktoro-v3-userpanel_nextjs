import React, { useState } from "react";
import Check from "../svg/Check";
import { paymentMethods } from "@/static";
import { paymentMethodsContent } from "@/static/contents/payment";
import useTranslator from "@/utils/useTranslator";
import { useRouter } from "next/router";
import Image from "next/image";
import HandMoney from "/public/images/paymentway/hand-money.png";
import Cards from "/public/images/paymentway/cards.png";
import MyWallet from "/public/images/paymentway/my-wallet.png";
import KNet from "/public/images/paymentway/k-net.png";
import Tamara from "/public/images/paymentway/tamara.png";
import Tabby from "/public/images/paymentway/tabby.png";
import PayPal from "/public/images/paymentway/paypal.png";
import IPay from "/public/images/paymentway/apple-pay.png";
import GPay from "/public/images/paymentway/google-pay.png";

const PaymentMethodSection = () => {
  const router = useRouter();
  let { locale } = router;
  const content: any = useTranslator(locale || "en", paymentMethodsContent);
  const [activePaymentMethod, setActivePaymentMethod] = useState<number>(0);
  const paymentMethods = [
    {
      id: 1,
      title: content?.paymentWhenRecieving,
      icon: HandMoney,
      price: content?.sAR28,
    },
    {
      id: 2,
      title: content?.debitCreditCard,
      icon: Cards,
    },
    {
      id: 3,
      title: content?.myWallet,
      icon: MyWallet,
    },
    {
      id: 4,
      title: content?.kNet,
      icon: KNet,
    },
    {
      id: 5,
      title: content?.tamara,
      icon: Tamara,
    },
    {
      id: 6,
      title: content?.payIn4Payments,
      icon: Tabby,
    },
    {
      id: 7,
      title: content?.payPal,
      icon: PayPal,
    },
    {
      id: 8,
      title: content?.applePay,
      icon: IPay,
    },
    {
      id: 9,
      title: content?.googlePay,
      icon: GPay,
    },
  ];
  return (
    <div className={`${locale === "ar" ? " text-right" : " text-left"}`}>
      <h3 className="font-semibold mb-2">{content?.paymentMethodTitle}</h3>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {paymentMethods.map((paymentMethod) => (
            <div
              key={paymentMethod.id}
              className={`h-36 bg-white cursor-pointer border border-ash-300 p-4 shadow-md rounded-md flex flex-col justify-center items-center gap-2 hover:border-green-400 relative ${
                activePaymentMethod == paymentMethod.id && "border-green-400"
              }`}
              onClick={() => setActivePaymentMethod(paymentMethod.id)}
            >
              {activePaymentMethod === paymentMethod.id && (
                <div className="bg-green-400 p-1 absolute -top-2 -right-2 rounded-full">
                  <Check />
                </div>
              )}
              <Image
                src={paymentMethod.icon}
                alt={paymentMethod.title}
                width={800}
                height={800}
                className="w-auto h-10"
              />
              <h3 className="font-semibold text-center">
                {paymentMethod.title}{" "}
                <span className="text-green-400">{paymentMethod.price}</span>
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PaymentMethodSection;
