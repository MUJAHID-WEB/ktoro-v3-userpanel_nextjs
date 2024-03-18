import React from 'react'
import { ProductCard } from '../ProductCard/ProductCard'
import Link from 'next/link'
import { AdsComponent } from './AdsComponent'
import { ProductSection } from './ProductSection'
import { AddsTwo } from './AddsTwo'

export const ProductSectionTwo = () => {
  return (
    <>
      <section className='container md:pt-[60px] sm:pt-6'>
        {/* Section Heading */}
        <div className='xl:flex flex-row-reverse justify-between items-center font-medium md:text-2xl sm:text-lg pb-6 lg:hidden md:hidden sm:hidden'>
          <h3 className=''> الاكثر مبيعا </h3>
          <Link href={'/'} className=''>عرض الكل</Link>
        </div>

        <div className='flex flex-row justify-start items-start xl:gap-6'>
          {/* Product List */}
          <div className='xl:flex flex-col justify-start items-start gap-6 lg:hidden md:hidden sm:hidden'>
            <div className='flex flex-row justify-start items-start gap-6'>
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </div>
            <div className='flex flex-row justify-start items-start gap-6'>
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </div>
          </div>

          {/* Ads */}
          <AdsComponent
            className='xl:!w-[22.61%] xl:aspect-[292/936] lg:!w-full lg:aspect-[976/300] md:!w-full md:aspect-[750/300] sm:!w-full sm:aspect-[350/150]'
            adsImage='/images/product/01.png'
            adsAlt='Album' />
            
          <div className='xl:hidden lg:hidden md:block'>
            <ProductSection sectionTitle={'الاكثر مبيعا'} sectionUrl={'/'} />
          </div>
          {/* Product List */}
          {/* <div className='flex flex-row justify-start items-start gap-6 xl:invisible lg:visible'>
            <ProductCard />
            <ProductCard />
          <ProductCard />
          <ProductCard />
          </div> */}



        </div>
      </section>

    </>

  )
}

