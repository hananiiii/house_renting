import React from 'react';

const PropertyDropdown = () => {
  return (
    <div className='flex flex-row gap-4 border px-6 py-3 rounded-md'>
      <span className='text-2xl flex items-center text-text_color'>
        <ion-icon name="location-outline"></ion-icon>
      </span>
      <div className='flex flex-col'>
        <h2 className='text-lg font-bold text-text_color'>Types</h2>
     
        <div className='relative'>
          <input
            type='text'
            className='rounded-md w-36 focus:outline-none'
            placeholder='choose a price'
            list='types' 
          />
         <datalist id='types'>
            <option value="single home" />
            <option value='Townhouse' />
            <option value='Apartement' />
            <option value='Duplex' />
          </datalist>
        </div>
      </div>
    </div>
  );
};

export default PropertyDropdown;
