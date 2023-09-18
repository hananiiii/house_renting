import React from 'react';

const PriceRangeDropdown = () => {
  return (
    <div className='flex flex-row gap-4 border px-6 py-3 rounded-md'>
      <span className='text-2xl flex items-center text-text_color'>
        <ion-icon name="location-outline"></ion-icon>
      </span>
      <div className='flex flex-col'>
        <h2 className='text-lg font-bold text-text_color'>Prices</h2>
     
        <div className='relative'>
          <input
            type='text'
            className='rounded-md w-36 focus:outline-none'
            placeholder='choose a price'
            list='prices' 
          />
         <datalist id='prices'>
            <option value='$100 - $200' />
            <option value='$200 - $300' />
            <option value='$300 - $400' />
            <option value='$400 - $500' />
          </datalist>
        </div>
      </div>
    </div>
  );
};

export default PriceRangeDropdown;
