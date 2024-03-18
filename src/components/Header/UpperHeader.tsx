'use client';
import React, { useEffect, useState } from 'react';
import ArrowDown from '../svg/ArrowDown';
import Sms from '../svg/Sms';
import Calling from '../svg/Calling';
import ArabicFlag from '../svg/ArabicFlag';
import { useRouter } from 'next/router';

export const UpperHeader = () => {
  const router = useRouter();
  const [selectedLanguage, setSelectedLanguage] = useState('');

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'ar', name: 'العربيه' },
    // More languages
  ];

  useEffect(() => {
    setSelectedLanguage(router.locale || 'en');
    // eslint-disable-next-line
  }, []);

  const handleChangeLanguage = (event: any) => {
    setSelectedLanguage(event.target.value);
    router.push(router.pathname, '', { locale: event.target.value == 'en' ? 'en' : 'ar' });
  };

  return (
    <>
      <header className='bg-[#3D3D3D] w-full sm:hidden md:block'>
        <div className='container flex flex-row justify-between items-center bg-[#3D3D3D] text-white py-3 font-normal text-sm'>
          {/* Language Selection */}
          <div className='flex flex-row justify-start items-center gap-1.5'>
            <ArrowDown />
            <select
              value={selectedLanguage}
              onChange={handleChangeLanguage}
              className='appearance-none bg-transparent border-none'
            >
              {languages.map((language) => (
                <option key={language.code} value={language.code}>
                  {language.name}
                </option>
              ))}
            </select>
            {/* <ArrowDown />
            <p className=''>العربيه</p>
            <ArabicFlag /> */}
          </div>

          {/* Support mail */}
          <div className='flex flex-row justify-start items-center gap-1.5'>
            <p className='text-sm text-white font-normal'>
              support@domainstore.com
            </p>
            <Sms />
          </div>

          {/* Phone Number */}
          <div className='flex flex-row justify-start items-center gap-1.5'>
            <p className='text-sm text-white font-normal'>+96658574785</p>
            <Calling />
          </div>
        </div>
      </header>
    </>
  );
};
