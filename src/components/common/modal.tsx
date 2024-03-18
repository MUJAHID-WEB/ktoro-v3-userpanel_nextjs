import React, { FC, ReactElement, useEffect, useRef, useState } from "react";
type modalProps = {
  visible: boolean;
  modalClass?: string;
  title?: string;
  hasEditBtn?: boolean;
  children: ReactElement;
  closeCb: () => void;
};

const Modal: FC<modalProps> = ({
  title,
  children,
  closeCb,
  visible,
  modalClass,
}) => {
  const modalBody = useRef<HTMLDivElement>(null);

  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event: any) {
      if (modalBody.current && !modalBody.current.contains(event.target)) {
        closeCb();
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [modalBody, closeCb]);
  return (
    <section
      className={`w-screen h-screen fixed inset-0 z-[9999] flex justify-center items-center transition bg-black-primary/30 duration-300 delay-150 ${
        visible ? "scale-100" : "scale-0"
      } `}
    >
      <div
        ref={modalBody}
        className={`w-[950px] max-h-screen overflow-y-auto rounded-md flex flex-col bg-white transition-all duration-300 delay-100 ${
          visible ? "opacity-100" : "opacity-0"
        } ${modalClass} `}
      >
        <div className="w-full flex flex-row justify-between px-5 items-center py-7">
          <div className="capitalize text-black-primary text-[18px] font-semibold leading-[22px] ">
            {title}
          </div>
          <div className="flex flex-row items-center">
            <button
              type="button"
              onClick={closeCb}
              className="w-8 h-8 rounded-full flex justify-center items-center"
            >
              <i className="fas fa-times-circle text-[30px] text-center text-gray"></i>
            </button>
          </div>
        </div>
        {/* header ends */}
        {children}
      </div>
    </section>
  );
};

export default Modal;
