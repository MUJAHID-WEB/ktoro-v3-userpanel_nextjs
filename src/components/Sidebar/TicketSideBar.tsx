import React, { FC, useState } from 'react'
import { commonSideBarProps, dropDowns } from '@/utils/type'
import SideBar from '../common/SideBar'
import CloseButton from '../svg/CloseButton'
import SelectField from '../base/SelectField'
import imagePlaceholder from "../../../public/images/image-placeholder.png"
import Image from 'next/image'
import Button from '../base/Button'
import CheckCircleFill from '../svg/CheckCircleFill'

const issuesDropdowns = [
  {
    name: "Missing items",
    value: "missing_items",
  },
  {
    name: "Wrong items",
    value: "wrong_items",
  },
  {
    name: "Broken items",
    value: "broken_items",
  }
]

const TicketSideBar: FC<commonSideBarProps> = ({viewCart, actionCb}: any) => {
  const [formData, setFormData] = useState<any>({});
  const [success, setSuccess] = useState<boolean>(false);
  const [selectIssue, setSelectIssue] = useState<dropDowns>(issuesDropdowns[0]);

  const handleIssueInput = (e: any) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData({...formData, [name]: value});
  }

  const handleIssueSubmit = (e: any) => {
    e.preventDefault();
    console.log(formData);
    setSuccess(true);
  }

  return (
    <SideBar value={viewCart} setCart={actionCb}>
      <div className="p-8">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl text-gray-300 font-semibold">Issue with the order</h2>
          <button onClick={() => actionCb()}>
            <CloseButton/>
          </button>
        </div>
        <div className="mt-8">
          {!success ? (
            <form onSubmit={(e) => handleIssueSubmit(e)} className="space-y-8">
            <SelectField dropdownItems={issuesDropdowns} currentItem={selectIssue.name} onChangeCb={(item: dropDowns) => {
              setSelectIssue(item);
              setFormData({...formData, "issue": item.value})
            }} label="What kind of problem do you have? *" />
            <div className="flex flex-col gap-2">
              <label htmlFor="details" className="text-[12px] leading-[15px] font-semibold uppercase text-gray pb-1">Add Details</label>
              <textarea name="details" id="" cols={30} rows={10} className="p-4 border border-ash-200 rounded-md" onChange={handleIssueInput} />
            </div>
            <div>
              <label htmlFor="file" className="cursor-pointer">
                <Image src={imagePlaceholder} alt="My SVG" className="relative" />
                <input type="file" className="hidden" id="file" name="file" onChange={handleIssueInput} />
              </label>
            </div>
            <Button btnType='submit' btnText='Send' />
          </form>
          ) : (
            <div className="flex items-center gap-2">
              <CheckCircleFill fill="#16AD64" width={"70"} height={"70"} />
              <p className="text-xl">Your ticket request has been successfully submitted! <span className="text-blue-300">#96852</span></p>
            </div>
          )}
        </div>
      </div>
    </SideBar>
  )
}

export default TicketSideBar
