import React, { ChangeEvent, useRef, useState } from "react";
// export type searchFieldProps = {
//   actionCb: (e: ChangeEvent<HTMLInputElement>) => void;
// };
const SearchField = ({ onChange, onFocus }: any) => {
  const searchInputRef = useRef<HTMLInputElement>(null);
  const [searchValue, setSearchValue] = useState("");

  const handleSearchButtonClick = () => {
    searchInputRef.current!.focus();
  };
  const handleClearButtonClick = () => {
    setSearchValue("");
    searchInputRef.current!.focus();
  };
  const handleChange = (e: any) => {
    const value = e.target.value;
    setSearchValue(value);
    onChange(value);
  };
  return (
    <div className="w-full flex items-center bg-white rounded-md overflow-hidden border border-ash-400 focus-within:border-transparent px-3">
      <button
        onClick={handleSearchButtonClick}
        className=" text-gray-400 text-[24px] leading-6 font-bold "
      >
        <i className="fas fa-search"></i>
      </button>
      <input
        ref={searchInputRef}
        type="text"
        placeholder="search for your address"
        className="py-3 px-3 text-gray-400 w-[85%] rounded-md text-xs sm:text-sm lg:text-lg focus:outline-none placeholder:capitalize"
        value={searchValue}
        onChange={handleChange}
        onFocus={onFocus}
      />
      {searchValue.length > 0 && (
        <button
          className="text-gray-400 focus:outline-none ml-auto border-l pl-3.5"
          onClick={handleClearButtonClick}
        >
          {/* <i className="fas fa-times"></i> */}
          <i className="fa-solid fa-chevron-down"></i>
        </button>
      )}
    </div>
  );
};

export default SearchField;
