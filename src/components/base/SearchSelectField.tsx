import { dropDowns } from "@/utils/type";
import { useRouter } from "next/router";
import React, { FC, useState } from "react";

type componentProps = {
  groupClass?: string;
  label?: string;
  currentItem: string;
  inlineLabel?: boolean;
  dropdownItems: dropDowns[];
  onChangeCb: (e: dropDowns) => void;
};

const SearchSelectField: FC<componentProps> = ({
  groupClass,
  dropdownItems,
  label,
  inlineLabel,
  currentItem,
  onChangeCb,
}) => {
  const [open, setOpen] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const router = useRouter();

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
          className={`py-3.5 px-6 relative z-10 flex items-center justify-between w-full border-ash-200 bg-white border text-base capitalize min-w-[130px] ${
            router.locale === "ar" ? " flex-row-reverse" : " flex-row"
          } ${groupClass} `}
          onClick={() => setOpen(!open)}
        >
          <span className="flex">
            {label && inlineLabel && (
              <>
                <p className="text-gray capitalize">{label}:</p>
              </>
            )}
            <p className="text-black-primary font-arabicMedium text-sm">
              {currentItem}{" "}
            </p>
          </span>
          <i
            className={`${
              open ? "fas fa-chevron-up" : "fas fa-chevron-down"
            }  text-black-primary`}
          ></i>
        </button>

        <div
          className={`dropDownShadow py-2.5 w-full bg-white rounded-xl transition absolute ${
            open
              ? "z-50 translate-y-0 opacity-100 "
              : "-z-20 translate-y-2 opacity-0 "
          }`}
        >
          <input
            type="text"
            className="w-full px-4 py-2 border-b border-ash-200"
            placeholder="Search..."
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {filteredItems.map((item: dropDowns, i: number) => (
            <p
              key={i}
              onClick={() => {
                onChangeCb(item);
                setOpen(false);
              }}
              className="cursor-pointer p-2.5 w-full text-sm hover:bg-ash capitalize font-arabicMedium"
            >
              {item.name}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchSelectField;
