import React, { useContext, useState } from "react";
import Phone from "@/components/svg/Phone";
import TicketRed from "@/components/svg/TicketRed";
import PlusCircle from "@/components/svg/PlusCircle";
import Support from "@/components/svg/Support";
import Link from "next/link";
import KtoroIcon from "@/components/svg/KtoroIcon";
import AlternateMail from "@/components/svg/AlternateMail";
import CheckCircleFill from "@/components/svg/CheckCircleFill";
import CheckCircle from "@/components/svg/CheckCircle";
import ArrowDownBlack from "@/components/svg/ArrowDownBlack";
import TicketSideBar from "@/components/Sidebar/TicketSideBar";
import Eye from "@/components/svg/Eye";
import Return from "@/components/svg/Return";
import ReturnSidebar from "@/components/Sidebar/ReturnSidebar";
import AppContext from "@/context/appContext";
import CancelReturnSidebar from "@/components/Sidebar/CancelReturnSidebar";
import CancelEditSidebar from "@/components/Sidebar/CancelEditSidebar";
import { useRouter } from "next/router";
import useTranslator from "@/utils/useTranslator";
import { myOrderDetailsContent } from "@/static/contents/myOrder";

const OrderDetails = ({ orderItem }: any) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [ticketIsOpen, setTicketIsOpen] = useState<boolean>(false);
  const [returnSidebar, setReturnSidebar] = useState<boolean>(false);
  const [cancelEditDrawerOpen, setCancelEditDrawerOpen] =
    useState<boolean>(false);
  const [ticketDrawerOpen, setTicketDrawerOpen] = useState<boolean>(false);
  const [cancelRequestDrawerOpen, setCancelRequestDrawerOpen] =
    useState<boolean>(false);
  const { returnFormStatus } = useContext<any>(AppContext);

  const router = useRouter();

  const { status } = orderItem;
  const { query, locale } = router;
  const { orderStatus } = query;
  const content: any = useTranslator(locale || "en", myOrderDetailsContent);
  return (
    <div className="border border-gray-200/60 rounded-md">
      {/* Card Header */}
      <div className="p-4 border-b border-gray-200/70">
        <h3 className="font-semibold text-xl">{content?.orderDetailsTitle}</h3>
      </div>
      {/* Card Content */}
      <div className="p-4 space-y-4 font-semibold">
        <div className="space-y-2">
          <div
            className={`flex ${
              locale === "ar" ? "flex-row-reverse" : "flex-row"
            } items-center gap-2`}
          >
            <span>
              <CheckCircleFill fill="#237A6E" />
            </span>
            <span>{content?.orderCreated}</span>
          </div>
          <div
            className={`flex ${
              locale === "ar" ? "flex-row-reverse" : "flex-row"
            } items-center gap-2`}
          >
            <span>
              <CheckCircle />
            </span>
            <span>{content?.orderConfirmation}</span>
          </div>
          <div
            className={`flex ${
              locale === "ar" ? "flex-row-reverse" : "flex-row"
            } items-center gap-2`}
          >
            <span>
              <CheckCircle />
            </span>
            <span>{content?.inProcessing}</span>
          </div>
          <div
            className={`flex ${
              locale === "ar" ? "flex-row-reverse" : "flex-row"
            } items-center gap-2`}
          >
            <span>
              <CheckCircle />
            </span>
            <span>{content?.withCourier}</span>
          </div>
          <div
            className={`flex ${
              locale === "ar" ? "flex-row-reverse" : "flex-row"
            } items-center gap-2`}
          >
            <span>
              <CheckCircle />
            </span>
            <span>{content?.delivered}</span>
          </div>
        </div>
      </div>
      {/* Ticket Request */}
      <div className="border-t border-gray-200/70 p-4 space-y-4 font-semibold">
        <p
          className={`text-sm text-gray-300 ${
            locale === "ar" ? "text-right" : "text-left"
          }`}
        >
          {content?.issuesWithOrder}
        </p>
        <button
          className={`flex ${
            locale === "ar" ? "flex-row-reverse ml-auto" : "flex-row mr-auto"
          } items-center gap-2 text-sky-500 text-sm`}
          onClick={() => setTicketDrawerOpen(!ticketDrawerOpen)}
        >
          <span>
            <PlusCircle fill="#0EA5E9" />
          </span>
          {content?.addNewTicketBtn}
        </button>
        <TicketSideBar
          viewCart={ticketDrawerOpen}
          actionCb={setTicketDrawerOpen}
        />
      </div>
      <div className="border-t border-gray-200/70 space-y-4 font-semibold">
        <button
          className={`w-full flex ${
            locale === "ar" ? "flex-row-reverse" : "flex-row"
          } justify-between items-center  p-4`}
          onClick={() => setTicketIsOpen(!ticketIsOpen)}
        >
          <div
            className={`flex ${
              locale === "ar" ? "flex-row-reverse" : "flex-row"
            } items-center gap-2`}
          >
            <span>
              <TicketRed />
            </span>
            <p className="text-sm text-gray-700">
              {content?.noTicketAvailable}
            </p>
            <span className="w-6 h-6 bg-blue-300 text-white flex justify-center items-center rounded-full">
              3
            </span>
          </div>
          <ArrowDownBlack />
        </button>
        {ticketIsOpen && (
          <div>
            <div className="flex justify-between items-center p-2 border-b border-ash-400">
              <p>
                <span className="text-blue-300">#15968</span>{" "}
                {content?.processing}
              </p>
              <Eye />
            </div>
            <div className="flex justify-between items-center p-2 border-b border-ash-400">
              <p>
                <span className="text-blue-300">#85745</span> {content?.pending}
              </p>
              <Eye />
            </div>
            <div className="flex justify-between items-center p-2 border-b border-ash-400">
              <p>
                <span className="text-blue-300">#36524</span>
                {content?.cancel}
              </p>
              <Eye />
            </div>
          </div>
        )}
      </div>
      {orderStatus === "With Courier" ? (
        <div className="border-t border-gray-200/70 space-y-4 font-semibold">
          <button
            className={`w-full flex ${
              locale === "ar" ? "flex-row-reverse" : "flex-row"
            } justify-between items-center p-4`}
            onClick={
              returnFormStatus
                ? () => setCancelRequestDrawerOpen(!cancelRequestDrawerOpen)
                : () => setReturnSidebar(!returnSidebar)
            }
          >
            <div
              className={`flex ${
                locale === "ar" ? "flex-row-reverse" : "flex-row"
              } items-center gap-2`}
            >
              <span>
                <Return fill="#EF4D62" />
              </span>
              <p className="text-sm text-red-500">
                {!returnFormStatus
                  ? content?.returnRequest
                  : content?.cancelReturnRequest}
              </p>
            </div>
          </button>
          <ReturnSidebar viewCart={returnSidebar} actionCb={setReturnSidebar} />
          <CancelReturnSidebar
            viewCart={cancelRequestDrawerOpen}
            actionCb={setCancelRequestDrawerOpen}
          />
        </div>
      ) : (
        <div className="border-t border-gray-200/70 space-y-4 font-semibold">
          <button
            className={`w-full flex ${
              locale === "ar" ? "flex-row-reverse" : "flex-row"
            } justify-between items-center p-4`}
            onClick={() => setCancelEditDrawerOpen(!cancelEditDrawerOpen)}
          >
            <div
              className={`flex ${
                locale === "ar" ? "flex-row-reverse" : "flex-row"
              } items-center gap-2`}
            >
              <span>
                <Return fill="#EF4D62" />
              </span>
              <p className="text-sm text-red-500">{content?.cancelOrEdit}</p>
            </div>
          </button>
          <CancelEditSidebar
            viewCart={cancelEditDrawerOpen}
            actionCb={setCancelEditDrawerOpen}
          />
        </div>
      )}
      {/* Cancel or edit */}

      {/* Card Footer */}
      <div className="border-t border-gray-200/70">
        <button
          className={`flex gap-2 ${
            locale === "ar" ? "flex-row-reverse" : "flex-row"
          } justify-between items-center font-semibold cursor-pointer w-full p-4`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <div
            className={`flex ${
              locale === "ar" ? "flex-row-reverse" : "flex-row"
            } gap-2`}
          >
            <span>
              <Support />
            </span>
            <p>{content?.contactCustomerCare}</p>
          </div>
          <ArrowDownBlack />
        </button>
        {isOpen && (
          <div className="mt-4">
            <div className="p-4 border-b border-gray-200/70">
              <Link
                href="tel:+1234567890"
                className="flex items-center gap-2 font-semibold"
              >
                <Phone /> +1234567890
              </Link>
            </div>
            <div className="p-4 border-b border-gray-200/70">
              <Link
                href="mailto:support@ktoro.com"
                className="flex items-center gap-2 font-semibold"
              >
                <KtoroIcon /> support@ktoro.com
              </Link>
            </div>
            <div className="p-4">
              <Link
                href="mailto:email@gmail.com"
                className="flex items-center gap-2 font-semibold"
              >
                <AlternateMail /> email@gmail.com
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderDetails;
