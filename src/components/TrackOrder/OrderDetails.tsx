import React, { useContext, useState } from "react";
import Button from "../base/Button";
import OrderDetailsCard from "./OrderDetailsCard";
import LoginWithEmail from "../Sidebar/LoginWithEmail";
import AppContext from "@/context/appContext";

const Login = () => {
    const [openLogin, setOpenLogin] = useState<boolean>(false);

    return (
        <div className="w-full h-[346px] flex flex-col items-center justify-center text-center">
            <h1 className="font-normal text-xl leading-[40px] text-black-primary capitalize mt-[32px]">
                First you need <b>login</b> for show <br /> details order
            </h1>
            <Button
                actionCb={() => setOpenLogin(true)}
                btnText="Login"
                btnClass="!w-[212px] !h-[45px] mt-[79px]"
            />
            {openLogin && (
                <LoginWithEmail viewCart={openLogin} actionCb={setOpenLogin} />
            )}
        </div>
    );
};

const OrderDetails = () => {
    const { auth } = useContext<any>(AppContext);
    return (
        <div className="w-full h-full flex flex-col">
            {auth ? (
                <>
                    {[1, 2, 3].map((item, i) => (
                        <OrderDetailsCard key={i} />
                    ))}
                </>
            ) : (
                <Login />
            )}
        </div>
    );
};

export default OrderDetails;
