import React, { useContext, useState } from "react";
import SideBar from "../common/SideBar";
import CloseButton from "../svg/CloseButton";
import AppContext from "@/context/appContext";
import Image from "next/image";
import ArrowDownBlack from "../svg/ArrowDownBlack";
import SelectField from "../base/SelectField";
import { dropDowns } from "@/utils/type";
import PhotoCamera from "../svg/PhotoCamera";
import Link from "next/link";
import Button from "../base/Button";
import CheckCircleFill from "../svg/CheckCircleFill";

const returnIssues = [
  {
    name: "Item not longer needed",
    value: "item not longer needed",
  },
  {
    name: "Received extra item i didn't order",
    value: "received extra item i didn't order",
  },
  {
    name: "I belive this item is fake",
    value: "i belive this item is fake",
  },
  {
    name: "Item deifferent to the image",
    value: "item deifferent to the image",
  },
];

const ReturnSuccessForm = () => {
    const { returnsItems, formStatus } = useContext<any>(AppContext);
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <div className="flex-1">
          <CheckCircleFill fill="#16AD64" width="70" height="70" />
        </div>
        <h3 className="text-2xl lg:text-[34px] leading-10 text-black-primary">Your return request has been successfully submitted!</h3>
      </div>
      <div className="bg-[#EBEBEB] p-2 space-y-2 max-h-48 overflow-y-auto">
        {returnsItems?.map((returnItem: any, index: number) => {
          return (
          <div key={index} className="bg-ash-300 p-4">
            {returnItem.name}
          </div>
        )
        })}
      </div>
      <div>
        <h5 className="text-xl text-black-secondary font-bold mb-3 inline-block">Return Status</h5>
        <p className="p-3 bg-blue-200 font-normal">This Confirms That We Have Received Your Return Request</p>
      </div>
      <div>
        <h5 className="text-xl text-black-secondary font-bold mb-3 inline-block">Return Reason</h5>
        <p className="p-2 font-normal">Item No Longer Needed</p>
      </div>
      <div>
        <h5 className="text-xl text-black-secondary font-bold mb-3 inline-block">Specific Reason</h5>
        <p className="p-2 font-normal">I Changed My Mind</p>
      </div>
      <div>
        <p className="text-xl text-black-secondary font-bold mb-3 inline-block">Images</p>
        <div className="flex flex-wrap gap-2">
          <div className="w-[115px] h-[110px] flex justify-center items-center bg-ash-200">
            <PhotoCamera width={"50"} height={"50"} />
          </div>
          <div className="w-[115px] h-[110px] flex justify-center items-center bg-ash-200">
            <PhotoCamera width={"50"} height={"50"} />
          </div>
          <div className="w-[115px] h-[110px] flex justify-center items-center bg-ash-200">
            <PhotoCamera width={"50"} height={"50"} />
          </div>
        </div>
      </div>
      <div className="bg-ash-300 p-4 space-y-2">
        <h4 className="font-bold">PICKUP ADDRESS</h4>
        <p className="font-normal">while send building flor 3 306,Dubai,United Arab Emirated +971-50-9623869</p>
      </div>
      <button className="!mt-10 bg-blue-400 text-white w-full p-4">TRACK REQUEST</button>
    </div>
  )
}

const ReturnBackForm = () => {
  const [returnFormData, setReturnFormData] = useState<any>({});
  const [selectedIssue, setSelectedIssue] = useState<any>(returnIssues[0]);
  const [acknowledge, setAcknowledge] = useState<boolean>(true);
  const [formStep, setFormStep] = useState<number>(1);
  const { returnsItems, returnFormStatus, setReturnFormStatus } = useContext<any>(AppContext);

  const handleFormData = (e: any) => {
    const name = e.target.name;
    const value = e.target.value;
    setReturnFormData({... returnFormData, [name]: value});
  }

  const handleFormSubmit = (e: any) => {
    e.preventDefault();
    setReturnFormData({...returnFormData, returnsItems})
    console.log(returnFormData);
  }

  return (
    <>
      {formStep === 1 && !returnFormStatus ? (
        <form className="space-y-6" onSubmit={handleFormSubmit}>
      <div className="bg-[#EBEBEB] p-2 space-y-2 max-h-48 overflow-y-auto">
        {returnsItems?.map((returnItem: any, index: number) => {
          return (
          <div key={index} className="bg-ash-300 p-4">
            {returnItem.name}
          </div>
        )
        })}
      </div>
      <div>
        <label className="text-2xl text-black-secondary font-bold mb-3 inline-block">Why do you want to return this items ?</label>
        <SelectField
          dropdownItems={returnIssues}
          currentItem={selectedIssue.name}
          onChangeCb={(item: dropDowns) => {
            setSelectedIssue(item);
            setReturnFormData({
              ...returnFormData,
              ["issue"]: item.name,
            });
          }}
        />
      </div>
      <div>
        <label className="text-2xl text-black-secondary font-bold mb-3 inline-block">Upload images (Optional)</label>
        <p className="font-normal text-sm mb-3 text-gray-200">Please upload photos of your retun’s packaging to show us the condition</p>
        <label htmlFor="upload" className="cursor-pointer flex justify-evenly items-center p-10 border-2 border-dashed">
          <PhotoCamera fill="#393333" width={"30"} height={"30"} />
          <p>UPLOAD</p>
          <input type="file" id="upload" className="hidden" name="photos" multiple accept="image/*" onChange={handleFormData} />
        </label>
      </div>
      <div className="bg-ash-300 p-4 space-y-2">
        <div className="flex justify-between items-center gap-4">
          <h4 className="font-bold text-black-primary">PICK ADDRESS</h4>
          <button className="text-blue-300">Change Address</button>
        </div>
        <p className="font-semibold">Home</p>
        <p className="font-normal">+9715244626516</p>
      </div>
      <div className="flex gap-2 items-start">
        <input type="checkbox" name="return-policy" id="return-policy" className="mt-2" onChange={() => setAcknowledge(!acknowledge)} />
        <label htmlFor="return-policy" className="font-normal">i acknowledge that i have read , understand , and agree to the return policy <Link href="#" className="text-blue-300 underline">return policy</Link></label>
      </div>
      <Button btnText="CREATE THE RETURN REQUEST" btnType="submit" btnClass="!mt-10" disabled={acknowledge} actionCb={() => {
        setFormStep(2);
        setReturnFormStatus(true);
      }} />
    </form>
      ): (
        <ReturnSuccessForm />
      )}
    </>
  );
};

const ProductCard = ({ product }: any) => {
  const { handleReturnSelectedItem } = useContext<any>(AppContext);
  const { image, name, price, id } = product;
  return (
    <div className="flex items-center gap-4 p-4 bg-ash-300">
      <div>
        <input type="checkbox" onChange={() => handleReturnSelectedItem(id)} />
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
  );
};

const ReturnSidebar = ({ viewCart, actionCb }: any) => {
  const [steps, setSteps] = useState<number>(1);
  const { cart, returnsItems, returnFormStatus } = useContext<any>(AppContext);
  // console.log(cart);
  return (
    <SideBar value={viewCart} setCart={actionCb}>
      <div className="p-4 space-y-8">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl text-black-secondary font-bold">
            Your Recent Purchases
          </h2>
          <button onClick={() => actionCb()}>
            <CloseButton />
          </button>
        </div>
        {steps === 1 ? (
          <>
            <div className="space-y-3">
              {cart?.map((product: any, index: number) => (
                <ProductCard key={index} product={product} />
              ))}
            </div>
            {returnsItems?.length > 0 && (
              <div>
                <button
                  className="text-blue-300 w-full p-3 text-left flex justify-between items-center"
                  onClick={() => setSteps(2)}
                >
                  <div>
                    <span>RETURN THIS ITEMS</span>
                    <span className="font-light">
                      {" "}
                      ({returnsItems?.length}) Items Select
                    </span>
                  </div>
                  <ArrowDownBlack />
                </button>
              </div>
            )}
          </>
        ) : (
          <ReturnBackForm />
        )}
      </div>
    </SideBar>
  );
};

export default ReturnSidebar;
