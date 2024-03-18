import React, { useContext } from 'react'
import SideBar from '../common/SideBar'
import Button from '../base/Button'
import AppContext from '@/context/appContext'
import Close from '../svg/Close'
import Info from '../svg/Info'
import CheckCircleFill from '../svg/CheckCircleFill'

const CancelReturnSidebar = ({ viewCart, actionCb }: any) => {
  const { setReturnFormStatus, cancelStatus, setCancelStatus } = useContext<any>(AppContext);
  return (
    <SideBar value={viewCart} setCart={actionCb}>
      <div className="p-4">
        {cancelStatus ? (
          <div>
          <div className='text-right mb-8'>
          <button onClick={() => actionCb()}>
            <Close/>
          </button>
        </div>
        <div className="flex items-center gap-4">
        <div className="flex-1">
          <CheckCircleFill fill="#16AD64" width="70" height="70" />
        </div>

      <h3 className="text-2xl lg:text-[34px] leading-10 text-black-primary">Your cancel return request has been successfully submitted!</h3>
      </div>
            <Button btnText='Track Request' btnClass='!mt-8 bg-blue-400' actionCb={() => {
                actionCb();
                setReturnFormStatus(false);
              }} />
          </div>
        ) : (
          <>
          <div className='text-right mb-8'>
          <button onClick={() => actionCb()}>
            <Close/>
          </button>
        </div>
        <div>
          <h2 className="text-2xl flex items-center gap-2 justify-center"><Info/> Do You Want Cancel Return Request</h2>
          <Button btnText='Confirm' btnClass='!mt-8 bg-blue-400' actionCb={() => {
            setCancelStatus(true);
          }} />
        </div>
          </>
        )}
      </div>
    </SideBar>
  )
}

export default CancelReturnSidebar
