import React, { FC, useContext } from "react";
import Button from "../base/Button";
import SideBar from "../common/SideBar";
import { commonSideBarProps } from "@/utils/type";
import AppContext from "@/context/appContext";
import ProductCart from "../cartItems/ProductCart";
import Link from "next/link";

const CartSideBar: FC<commonSideBarProps> = ({ viewCart, actionCb }) => {
  const { cart } = useContext<any>(AppContext);
  return (
    <SideBar value={viewCart} setCart={actionCb}>
      <div className="w-full">
        <span className="bg-white w-full flex justify-between items-center p-4 border-b border-ash" />
        {/* empty bag  */}
        {cart?.length <= 0 && (
          <div className="flex flex-col justify-center items-center w-full gap-6 py-10">
            <div className="h-32 w-32 rounded-full bg-slate-50 overflow-hidden flex justify-center items-end">
              <i className="fas fa-shopping-cart text-[80px] text-black-primary"></i>
            </div>
            <p className="font-normal capitalize lg:text-base 3xl:text-lg text-center text-gray">
              Your Shopping Bag Is Empty
            </p>
            <Button
              variant="primary"
              btnText="Test"
              actionCb={() => {}}
              btnClass="!w-[448px]"
            />
          </div>
        )}
        {cart?.length > 0 && <ProductCart cartItems={cart} />}
        <div className="flex flex-col items-center justify-between h-[92vh]">
          <div className="bg-white pb-2 w-full"></div>
          <div className="w-full bg-white sticky mt-auto bottom-0">
            <Link href="/address">
              <Button
                btnClass="!uppercase !font-bold"
                variant="primary"
                btnText="CHECKOUT"
              />
            </Link>
            <Button
              btnClass="!uppercase !bg-white !text-black-700 !font-bold"
              variant="primary"
              btnText="VIEW CART"
            />
          </div>
        </div>
      </div>
    </SideBar>
  );
};

export default CartSideBar;
