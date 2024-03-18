import React, { useContext, useState } from 'react'
import SideBar from '../common/SideBar'
import AppContext from '@/context/appContext'
import Image from 'next/image';
import CloseButton from '../svg/CloseButton';
import Link from 'next/link';
import Button from '../base/Button';
import KtoroIcon from '../svg/KtoroIcon';
import Credit from '../svg/Credit';
import CheckCircleFill from '../svg/CheckCircleFill';
import Info from '../svg/Info';

type PaymentMethodProps = "wallet" | "bank"

const CancelEditSidebar = ({viewCart, actionCb}: any) => {
  const { cart, handleCancelSelectedItem } = useContext<any>(AppContext);
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethodProps>("wallet");
  const [acknowledge, setAcknowledge] = useState<boolean>(false);
  const [cancelSuccess, setCancelSuccess] = useState<boolean>(false);

  // console.log(cancelSuccess);

  return (
    <SideBar value={viewCart} setCart={actionCb}>
        <div className="p-4">
          <div className='space-y-8'>
            <div className="flex justify-between items-center">
          <h2 className="text-2xl text-black-secondary font-bold">
            Your Recent Purchases
          </h2>
          <button onClick={() => actionCb()}>
            <CloseButton />
          </button>
        </div>
        {cancelSuccess ? (
          <div>
            {cancelSuccess && paymentMethod === "wallet" && (
              <div className="space-y-12">
                <div className="flex items-center gap-4">
                  <div className="flex-1">
                    <CheckCircleFill fill="#16AD64" width="70" height="70" />
                  </div>
                  <h3 className="text-2xl lg:text-[34px] leading-10 text-black-primary">Your cancel request has been successfully submitted!</h3>
                </div>
                <div className="bg-ash-300 space-y-3 p-4">
                  <div className="flex items-center gap-2 text-red-500">
                    <Info fill="red" /> <p className="font-bold">INFO</p>
                  </div>
                  <p className="font-normal">If you use <b>store credit,</b> the money will be returned to your account automatically</p>
                </div>
                <Button btnText="Track Request" btnClass="bg-blue-400" />
              </div>
            )}

            {cancelSuccess && paymentMethod === "bank" && (
              <div className="space-y-12">
                <div className="flex items-center gap-4">
                  <div className="flex-1">
                    <CheckCircleFill fill="#16AD64" width="70" height="70" />
                  </div>
                  <h3 className="text-2xl lg:text-[34px] leading-10 text-black-primary">Your cancel request has been successfully submitted!</h3>
                </div>
                <div className="bg-ash-300 space-y-3 p-4">
                  <div className="flex items-center gap-2 text-red-500">
                    <Info fill="red" /> <p className="font-bold">INFO</p>
                  </div>
                  <p className="font-normal">If you use any of the payment methods: Visa or Master Card We are waiting for a review within <b>19 days</b> to return the amount to the card</p>
                </div>
                <Button btnText="Track Request" btnClass="bg-blue-400" />
              </div>
            )}
          </div>
        ): (
          <>
          <div className="space-y-3">
          {cart?.map((product: any, index: number) => {
            const { image, name, price, id } = product;
            return (
            <div className="flex items-center gap-4 p-4 bg-ash-300" key={index}>
              <div>
                <input type="checkbox" onChange={() => handleCancelSelectedItem(id)} />
              </div>
              <div>
                <Image src={image} alt={name} width={100} height={100} />
              </div>
              <div className="space-y-2">
                <h5 className="font-normal">{name}</h5>
                <p className="font-semibold">SAR {price}</p>
                <p className="font-normal">Jan 18, 2024</p>
              </div>
          </div>
          )
          })}
        </div>
        {/* Transaction Options */}
        <div className="divide-y divide-ash-200">
            <label htmlFor="wallet" className="flex items-center gap-4 p-4">
              <input type="radio" name="payment" id="wallet" onChange={() => setPaymentMethod("wallet")} />
              <span className="flex items-center gap-2"><KtoroIcon/> Store wallet</span>
            </label>
            <label htmlFor="bank" className="flex items-center gap-4 p-4">
              <input type="radio" name="payment" id="bank" onChange={() => setPaymentMethod("bank")} />
              <span className="flex items-center gap-2"><Credit /> Bank account</span>
            </label>
        </div>
        <div className="flex gap-2 items-start">
          <input type="checkbox" name="return-policy" id="return-policy" className="mt-2" onChange={() => setAcknowledge(!acknowledge)} />
          <label htmlFor="return-policy" className="font-normal">i acknowledge that i have read , understand , and agree to the return policy <Link href="#" className="text-blue-300 underline">return policy</Link></label>
      </div>
      <Button btnText="CREATE THE CANCEL REQUEST" btnType="submit" btnClass="bg-blue-400" disabled={!acknowledge} actionCb={() => setCancelSuccess(true)} />
          </>
        )}
          </div>
      </div>
    </SideBar>
  )
}

export default CancelEditSidebar
