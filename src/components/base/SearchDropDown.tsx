import { dropDowns } from "@/utils/type";
import React, { FC, useState } from "react";

type componentProps = {
  groupClass?: string;
  label?: string;
  currentItem: string;
  inlineLabel?: boolean;
  dropdownItems: dropDowns[];
  onChangeCb: (e: dropDowns) => void;
};

const SearchDroopDown: FC<componentProps> = ({
  groupClass,
  dropdownItems,
  label,
  inlineLabel,
  currentItem,
  onChangeCb,
}) => {
  const [open, setOpen] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const filteredItems = dropdownItems.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="relative w-full">
      {!inlineLabel && label && (
        <label className="text-[12px] leading-[15px] font-semibold uppercase text-gray pb-1">
          {label}
        </label>
      )}
      <div className="relative">
        <button
          type="button"
          className={`py-3.5 px-6 relative z-10 flex flex-row items-center justify-between w-full border-ash-200 bg-white border text-base capitalize min-w-[130px] ${groupClass} `}
          onClick={() => setOpen(!open)}
        >
          <span className="flex">
            {label && inlineLabel && (
              <>
                <p className="text-gray capitalize">{label}:</p>
              </>
            )}
            <input
              type="text"
              className="w-full text-black-primary placeholder:text-black-primary"
              placeholder="Country"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </span>
          <i
            className={`${
              open ? "fas fa-chevron-up" : "fas fa-chevron-down"
            }  text-black-primary`}
          ></i>
        </button>

        <div
          className={`dropDownShadow py-2.5 w-full bg-white transition absolute ${
            open
              ? "z-50 translate-y-0 opacity-100 "
              : "-z-20 translate-y-2 opacity-0 "
          }`}
        >
          {filteredItems.map((item: dropDowns, i: number) => (
            <p
              key={i}
              onClick={() => {
                onChangeCb(item);
                setOpen(false);
              }}
              className="cursor-pointer p-2.5 w-full text-sm hover:bg-ash capitalize font-normal "
            >
              {item.name}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchDroopDown;
