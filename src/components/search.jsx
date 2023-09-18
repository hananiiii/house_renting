import React from 'react'
import CountryDropdown from './CountryDropdown'
import PropertyDropdown from './PropertyDropdown'
import PriceRangeDropdown from './PriceRangeDropdown'
const search = () => {
  return (
    <div className=' lg:px-32 sm:px-20 px-8 p-8 py-8 gap-4  mx-auto flex flex-col lg:flex-row justify-between  relative lg:-top-4   rounded-lg '>
        <CountryDropdown/>
         <PriceRangeDropdown/> 
         <PropertyDropdown/> 
         <button className='bg-title_color gap-4 hover:opacity-50 w-full lg:max-w-[162px] h-16 rounded-lg flex justify-center items-center text-white text-lg '>
         <ion-icon name="search-outline"></ion-icon>
         Search
         </button>
  </div>
  )
}

export default search