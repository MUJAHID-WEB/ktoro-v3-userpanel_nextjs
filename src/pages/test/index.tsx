import Layout from "@/components/Layout/Layout";
import AddedShoppingCart from "@/components/Sidebar/AddedShoppingCart";
import ForgetPassword from "@/components/Sidebar/ForgetPassword";
import LoginWithEmail from "@/components/Sidebar/LoginWithEmail";
import LoginWithPhone from "@/components/Sidebar/LoginWithPhone";
import NotificationSideBar from "@/components/Sidebar/NotificationSideBar";
import Register from "@/components/Sidebar/Register";
import ResetPassword from "@/components/Sidebar/ResetPassword";
import ShoppingCartSideBar from "@/components/Sidebar/ShoppingCartSideBar";
import VerificationCode from "@/components/Sidebar/VerificationCode";
import Button from "@/components/base/Button";
import Link from "next/link";
import React, { useState } from "react";

const Test = () => {
  const [notification, setNotification] = useState(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [addShoppingCart, setAddShoppingCart] = useState<boolean>(false);
  const [loginWithEmail, setLoginWithEmail] = useState<boolean>(false);
  const [loginWithPhone, setLoginWithPhone] = useState<boolean>(false);
  const [verificationCode, setVerificationCode] = useState<boolean>(false);
  const [register, setRegister] = useState<boolean>(false);
  const [forgetPass, setForgetPass] = useState<boolean>(false);
  const [resetPass, setResetPass] = useState<boolean>(false);
  return (
    <div className="w-full py-20">
      <div className=" space-y-5 mx-auto w-96">
        {/* <div className="relative group w-full">
          <input
            type="email"
            id="email"
            className="w-full p-5 border-2 border-gray-300 focus:border-yellow-500 outline-none transition-all duration-100"
          />
          <label
            htmlFor="email"
            className="absolute left-5 transition-all duration-100 bg-white p-1 transform translate-y-2/4 text-gray-500 group-focus-within:-translate-y-2/4"
          >
            Email Address
          </label>
        </div> */}
      </div>
      <div className="w-[500px] mx-auto space-y-5">
        <Button
          btnText="Notification"
          prefixIcon="fa-solid fa-plus"
          variant="outlined"
          btnClass="!rounded-md !font-arabicMedium !justify-start !py-4 !px-5 !border-[#B3B3B3]"
          actionCb={() => {
            setNotification(true);
          }}
        />
        <Button
          btnClass="!rounded-md !font-normal text-xl text-white"
          variant="primary"
          actionCb={() => {
            setIsOpen(true);
          }}
          btnText="Shopping Cart"
        />
        <Button
          btnText="Added Success"
          variant="outlined"
          btnClass="!rounded-md !font-arabicMedium !py-4 !px-5 !border-[#B3B3B3]"
          actionCb={() => {
            setAddShoppingCart(true);
          }}
        />
        <Button
          btnClass="!rounded-md !font-normal text-xl text-white"
          variant="primary"
          actionCb={() => {
            setLoginWithEmail(true);
          }}
          btnText="Login With Email"
        />
        <Button
          btnText="Login With Phone"
          variant="outlined"
          btnClass="!rounded-md !font-arabicMedium !py-4 !px-5 !border-[#B3B3B3]"
          actionCb={() => {
            setLoginWithPhone(true);
          }}
        />
        <Button
          btnClass="!rounded-md !font-normal text-xl text-white"
          variant="primary"
          actionCb={() => {
            setVerificationCode(true);
          }}
          btnText="Verification Code"
        />
        <Button
          btnText="Register"
          variant="outlined"
          btnClass="!rounded-md !font-arabicMedium !py-4 !px-5 !border-[#B3B3B3]"
          actionCb={() => {
            setRegister(true);
          }}
        />
        <Button
          btnClass="!rounded-md !font-normal text-xl text-white"
          variant="primary"
          actionCb={() => {
            setForgetPass(true);
          }}
          btnText="Forget Password"
        />
        <Button
          btnText="Reset Password"
          variant="outlined"
          btnClass="!rounded-md !font-arabicMedium !py-4 !px-5 !border-[#B3B3B3]"
          actionCb={() => {
            setResetPass(true);
          }}
        />
        <Link
          href={"/add-new-password"}
          className="py-4 block w-full text-center text-white font-arabicMedium text-sm bg-black-primary rounded-md"
        >
          Add New Password
        </Link>
      </div>
      <div className="">
        <NotificationSideBar
          viewCart={notification}
          actionCb={setNotification}
        />
        <ShoppingCartSideBar viewCart={isOpen} actionCb={setIsOpen} />
        <AddedShoppingCart
          viewCart={addShoppingCart}
          actionCb={setAddShoppingCart}
        />
        <LoginWithEmail
          viewCart={loginWithEmail}
          actionCb={setLoginWithEmail}
        />
        <LoginWithPhone
          viewCart={loginWithPhone}
          actionCb={setLoginWithPhone}
        />
        <VerificationCode
          viewCart={verificationCode}
          actionCb={setVerificationCode}
        />
        <Register viewCart={register} actionCb={setRegister} />
        <ForgetPassword viewCart={forgetPass} actionCb={setForgetPass} />
        <ResetPassword viewCart={resetPass} actionCb={setResetPass} />
      </div>
    </div>
  );
};
Test.getLayout = (page: any) => {
  return <Layout>{page}</Layout>;
};
export default Test;
