import React from 'react';

const CountryDropdown = () => {
  return (
    <div className='flex flex-row gap-4 border px-6 py-3 rounded-md'>
      <span className='text-2xl flex items-center text-text_color'>
        <ion-icon name="location-outline"></ion-icon>
      </span>
      <div className='flex flex-col'>
        <h2 className='text-lg font-bold text-text_color'>Location</h2>
     
        <div className='relative'>
          <input
            type='text'
            className='rounded-md w-36 focus:outline-none'
            placeholder='Select your place'
            list='places' 
          />
          <datalist id='places'>
            <option value='London' />
            <option value='Seoul' />
            <option value='NYC' />
            <option value='Paris' />
           
          </datalist>
        </div>
      </div>
    </div>
  );
};

export default CountryDropdown;
