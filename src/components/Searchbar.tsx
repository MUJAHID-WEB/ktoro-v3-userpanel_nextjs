import React, { useState } from 'react';
import { Transition } from '@headlessui/react';

import { useRouter } from "next/router";

import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from 'use-places-autocomplete';
import Search from './svg/Search';
import ArrowDown from './svg/ArrowDown';
import ArrowDownBlack from './svg/ArrowDownBlack';



const  SearchBar = ({ addresses, panTo, setModal }:any) => {
  // console.log("🚀 ~  SearchBar ~ addresses:", addresses)
  const router = useRouter();
  const [searchDropDown, setSearchDropDown] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      // @ts-ignore
      location: { lat: () => 43.6532, lng: () => -79.3832 },
      radius: 100 * 1000,
    },
  });
console.log("🚀 ~ SearchBar ~ data:", data)
  // https://developers.google.com/maps/documentation/javascript/reference/places-autocomplete-service#AutocompletionRequest

  const handleInput = (e:any) => {
    setSearchDropDown(true);
    setValue(e.target.value);
    // console.log("😡 =>", value);
    if (e.target.value.length <= 0) {
      setSearchDropDown(false);
    }
  };

  const handleSelect = async (address:any) => {
    console.log('😡😡😡 handleSelect ~ address:', address);
    setValue(address, false);
    clearSuggestions();
    setSearchDropDown(false);

    try {
      const results = await getGeocode({ address });
      const { lat, lng } = await getLatLng(results[0]);
      panTo({ lat, lng });
    } catch (error) {
      console.log(':----: Error: ', error);
    }
  };

  return (
    <div className='relative py-3 z-20 w-[340px] max-w-[552px] md:w-[350px] top-3 md:px-2 lg:px-0'>
      <div className='flex relative'>
        <span className='absolute p-4 left-0 flex items-center text-[#757575]'>
            <Search/>
          {/* search  search icon set here */}
        </span>
        <input
          type='text'
          className={`border border-r-0 rounded-md py-3 pl-12 pr-10 w-full ${router?.locale != 'en' && "!pr-16"}`}
          placeholder='Search for your address'
          value={value}
          onChange={handleInput}
        />
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className='absolute inset-y-0 right-0 flex items-center px-3 bg-white border border-l-2 border-[#CFCECA] rounded-r-md'
        >
          <ArrowDownBlack />
        </button>
      </div>
      {/* dropDown for searchbox  */}
      <Transition
        show={searchDropDown}
        enter='transition ease-out duration-100 transform opacity-0 scale-95'
        enterFrom='opacity-0 scale-95'
        enterTo='opacity-100 scale-100'
        leave='transition ease-in duration-75 transform opacity-100 scale-100'
        leaveFrom='opacity-100 scale-100'
        leaveTo='opacity-0 scale-95'
      >
        {(ref:any) => (
          <div
            ref={ref}
            className='absolute mt-2 rounded-md shadow-lg bg-white border border-t-0 w-full z-[60]'
          >
            <ul className='py-1 max-h-80 overflow-y-scroll'>
              {data.map(({ description, place_id }) => (
                <li
                  key={place_id}
                  onClick={() => handleSelect(description)}
                  className='cursor-pointer px-4 py-2 hover:bg-gray-100 mb-1 border-b'
                >
                  {description}
                </li>
              ))}
            </ul>
          </div>
        )}
      </Transition>

      {/* ========= dropDwon for History ===============  */}
      <Transition
        show={isDropdownOpen}
        enter='transition ease-out duration-100 transform opacity-0 scale-95'
        enterFrom='opacity-0 scale-95'
        enterTo='opacity-100 scale-100'
        leave='transition ease-in duration-75 transform opacity-100 scale-100'
        leaveFrom='opacity-100 scale-100'
        leaveTo='opacity-0 scale-95'
      >
        {(ref:any) => (
          <div
            ref={ref}
            className='absolute mt-2 rounded-md shadow-lg bg-white border border-t-0 w-full z-[60]'
          >
            <ul className='py-1 max-h-80 overflow-y-scroll'>
              {addresses.map((adrs:any) => (
                <li
                  key={adrs?.id}
                  onClick={() => {
                    // dispatch(createBilling(adrs));
                    setModal(false);
                  }}
                  className='cursor-pointer px-4 py-2 hover:bg-gray-100 mb-1 border-b'
                >
                  <div className='flex items-start space-x-3'>
                    <div className='flex items-start text-[#757575] text-sm space-x-2'>
                      <span className='text-[#2b8dc5] font-medium'>Name: </span>
                      <span>{adrs?.fullName}</span>
                    </div>
                    <div className='flex items-start text-[#757575] text-sm space-x-2'>
                      <span className='text-[#2b8dc5] font-medium'>
                        Adress:{' '}
                      </span>
                      <span>{adrs?.address}</span>
                    </div>
                    <div className='flex items-start text-[#757575] text-sm space-x-2'>
                      <span className='text-[#2b8dc5] font-medium'>
                        Mobile:{' '}
                      </span>
                      <span>{adrs?.phone}</span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </Transition>
    </div>
  );
};

export default SearchBar
