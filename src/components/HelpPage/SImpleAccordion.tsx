// import { useState } from "react";
// import classNames from "classnames";

// const SimpleAccordion = () => {
//  const [open, setOpen] = useState(false);

//  return (
//    <div className="w-full">
//      <input
//        id="expandCollapse"
//        type="checkbox"
//        checked={open}
//        className="peer sr-only"
//      />
//      <label
//        htmlFor="expandCollapse"
//        className={classNames(
//          "w-full flex justify-center items-center bg-blue-100"
//        )}
//        onClick={() => setOpen(!open)}
//      >
//        {open ? "Less information" : "More information"}
//      </label>
//      <div
//        className={classNames(
//          "overflow-hidden h-0 bg-slate-300",
//          "peer-checked:h-[300px] peer-checked:overflow-scroll ",
//        )}
//      >
//        <p className={classNames("text-black-700")}>
//          Lorem ipsum dolor sit amet, consectetur adipiscing elit. [...]
//        </p>
//      </div>
//    </div>
//  );
// };

// export { SimpleAccordion };
