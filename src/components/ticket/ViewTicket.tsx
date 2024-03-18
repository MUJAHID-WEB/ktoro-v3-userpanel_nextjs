import React from "react";
import MessageCard from "./MessageCard";
import Button from "../base/Button";
import CloseButton from "../svg/CloseButton";

interface Props {
    setViewTicket: (value: boolean) => void;
}

const ViewTicket = ({ setViewTicket }: Props) => {
    return (
        <div className="w-[401px]  border border-[#B3B3B3] rounded-md p-5 h-[540px] flex flex-col justify-between relative">
            {/* message section  */}
            <div>
                <MessageCard />
            </div>
            {/* if ticket is not active the hidden textarea section  */}
            {/* text area  */}
            <div className="mb-14">
                <textarea
                    className="border w-full rounded-md p-3 placeholder:text-ash-600"
                    placeholder="Add reply here"
                    rows={3}
                />
                <Button
                    btnText="Replay"
                    btnClass="!px-16 !py-1 !w-[50px] !bg-blue-400 !text-sm !font-bold mt-3"
                />
            </div>
            {/* close button  */}
            <div
                className="absolute -top-4 -right-4 cursor-pointer"
                onClick={() => setViewTicket(false)}
            >
                <CloseButton />
            </div>
        </div>
    );
};

export default ViewTicket;
