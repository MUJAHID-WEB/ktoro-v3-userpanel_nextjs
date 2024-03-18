import React, { FC, useContext, useState } from "react";
import Button from "../base/Button";
import SideBar from "../common/SideBar";
import { commonSideBarProps, dropDowns } from "@/utils/type";
import TextField from "../base/TextField";
import SelectField from "../base/SelectField";
import { cityDropDown, countryDropDown } from "@/static";
import SearchSelectField from "../base/SearchSelectField";
import NumberField from "../base/NumberField";
import { useRouter } from "next/router";
import { addAddressContent } from "@/static/contents/sidebar";
import useTranslator from "@/utils/useTranslator";
import AppContext from "@/context/appContext";
import GmapSvg from "../svg/GmapSvg";
import Map from "../Map";

const AddAddressSideBar: FC<commonSideBarProps> = ({ viewCart, actionCb }) => {
  const [selectedCountry, setSelectedCountry] = useState<dropDowns>(
    countryDropDown[0]
  );
  const [selectedCity, setSelectedCity] = useState<dropDowns>(cityDropDown[0]);
  const items = [
    "Riyadh",
    "Saudia Arabia",
    "Zeddah",
    "Al Marqab",
    "Ad Dar",
    "Al Malazz",
  ];
  const [filteredItems, setFilteredItems] = useState(items);
  const [searchValue, setSearchValue] = useState("");
  const [showSearchArea, setShowSearchArea] = useState(false);
  const [mapAreaSize, setMapAreaSize] = useState({
    large: false,
    small: false,
  });
  const {
    handleAddressFormSubmit,
    handleAddressFormInput,
    addressForm,
    setAddressForm,
    addresses,
    setAddresses,
    userAddress,
  } = useContext<any>(AppContext);

  const router = useRouter();
  let { locale } = router;
  const content: any = useTranslator(locale || "en", addAddressContent);
  const { address } = addressForm;
  const handleSearch = (searchTerm: string) => {
    setSearchValue(searchTerm);
    const filtered = items.filter((item) =>
      item.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredItems(filtered);
  };

  const handleSearchFocus = () => {
    setSearchValue("");
    setFilteredItems(items);
  };

  const handleChooseOnMapClick = () => {
    setShowSearchArea(!showSearchArea);
  };

  // Checking all address properties are filled for button enable or disable
  const allAddressPropertiesFullFilled =
    address && Object?.values(address).every((value) => !!value);

  return (
    <SideBar
      value={viewCart}
      setCart={actionCb}
      groupClass="!bg-white lg:w-[576px]"
    >
      <form
        onSubmit={(e) => handleAddressFormSubmit(e)}
        autoComplete="chrome-off"
      >
        <div
          className={`w-full flex flex-col justify-start items-center gap-[30px] relative min-h-screen ${
            showSearchArea ? "pt-[26px]" : "pt-11"
          }`}
        >
          {showSearchArea && (
            <button
              type="button"
              onClick={handleChooseOnMapClick}
              className={`w-fit flex items-center mx-5 gap-x-1 text-[18px] leading-[17px] font-arabicMedium ${
                locale === "ar"
                  ? " flex-row-reverse ml-auto"
                  : " flex-row mr-auto"
              }`}
            >
              <span>
                <i
                  className={`fa-solid ${
                    locale === "ar"
                      ? "fa-arrow-right pt-3.5"
                      : "fa-arrow-left pt-1.5 "
                  }`}
                ></i>
              </span>
              <span>{content?.btnBack3}</span>
            </button>
          )}
          <h5 className="text-xl font-arabicBold">
            {content?.titleAddAddress}
          </h5>
          {!address && !showSearchArea && (
            <button
              type="button"
              onClick={handleChooseOnMapClick}
              className={`flex justify-start items-center gap-x-2 rounded-full px-5 py-1 text-white text-xs font-arabicBold bg-black-primary ${
                locale === "ar" ? " flex-row-reverse" : " flex-row"
              }`}
            >
              <span>{content?.btnChooseMap}</span>
              <GmapSvg />
            </button>
          )}
          {/* heading ends  */}
          {/* map will implement here */}
          {showSearchArea && (
            <div className="w-full h-[493px] rounded-md relative">
              {/* <div className=" absolute top-4 left-1/2 -translate-x-1/2">
                <div className="w-[280px] sm:w-[372px] md:w-[410px] relative">
                  <SearchField
                    onChange={handleSearch}
                    onFocus={handleSearchFocus}
                    onBlur={() => {}}
                    value={searchValue}
                  />
                  {searchValue.length > 0 && (
                    <div className="absolute top-full w-full bg-white rounded-lg rounded-t-none z-50">
                      {filteredItems.map((item, index) => (
                        <div key={index} className="py-2 px-4 cursor-pointer">
                          {item}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div> */}
              <Map showSearchArea={showSearchArea} />
            </div>
          )}
          {address && !showSearchArea && (
            <div className="w-full">
              <Map showSearchArea={false} />
            </div>
          )}
          {!showSearchArea && (
            <div className="mx-auto w-full md:w-[560px] lg:w-full space-y-5 md:px-2 pt-8">
              <TextField
                identifier="name"
                onChangeCb={handleAddressFormInput}
                placeholder={content?.phAbdullahElz}
                inputClass="!text-[16px]"
              />
              <NumberField
                identifier="phone"
                onChangeCb={handleAddressFormInput}
                prefixIcon="fa-solid fa-caret-down"
                suffixIcon="fa-solid fa-caret-down"
                inputType="number"
                placeholder={content?.phMobNumber}
              />
              <NumberField
                identifier="phone"
                onChangeCb={handleAddressFormInput}
                prefixIcon="fa-solid fa-caret-down"
                suffixIcon="fa-solid fa-caret-down"
                inputType="number"
                placeholder={content?.phSecondNumber}
                option={content?.option}
              />
              <SelectField
                dropdownItems={countryDropDown}
                currentItem={selectedCountry?.name}
                onChangeCb={(item: dropDowns) => {
                  setSelectedCountry(item);
                  handleAddressFormInput(item);
                  console.log("select country", item);
                  setAddressForm({ ...addressForm, ["country"]: item.name });
                }}
              />
              <SearchSelectField
                dropdownItems={cityDropDown}
                currentItem={selectedCity?.name}
                onChangeCb={(item: dropDowns) => {
                  setSelectedCity(item);
                  handleAddressFormInput(item);
                  console.log("city", item);
                  setAddressForm({ ...addressForm, ["city"]: item.name });
                }}
              />
              <TextField
                identifier="city"
                onChangeCb={handleAddressFormInput}
                placeholder={content?.placeholderCity}
              />
              <TextField
                identifier="street"
                onChangeCb={handleAddressFormInput}
                placeholder={content?.neighborhoodPh}
              />
              <TextField
                identifier="specialPlace"
                onChangeCb={handleAddressFormInput}
                placeholder={content?.phSpecial}
              />
            </div>
          )}
          {showSearchArea ? (
            <Button
              btnClass={`!sticky !mt-auto !bottom-0 ${
                address ? "!bg-[#000] !text-white" : "bg-[#898989] !text-white"
              } !rounded-none !font-medium !text-sm !py-6 !z-30`}
              variant="primary"
              btnText={content?.btnAddress}
              btnType="submit"
              actionCb={() => {
                setShowSearchArea(!showSearchArea);
              }}
              disabled={address ? false : true}
            />
          ) : (
            <Button
              btnClass={`!sticky !mt-auto !bottom-0 ${
                allAddressPropertiesFullFilled
                  ? "!bg-[#000] !text-white"
                  : "bg-[#898989] !text-ash-500"
              } !rounded-none !font-medium !text-sm !py-6 !z-30`}
              variant="primary"
              btnText={content?.btnComplete}
              btnType="submit"
              actionCb={() => {
                actionCb(!viewCart);
              }}
            />
          )}
        </div>
      </form>
    </SideBar>
  );
};

export default AddAddressSideBar;
