import React from 'react';
import { Link } from 'react-router-dom';
const Logo = () => {
  return (
    <Link to='/Home'><div className='cursor-pointer flex flex-row  gap-2 text-title_color'>
      <span className='text-3xl text-center flex items-center '>
      <ion-icon name="home-outline"></ion-icon>
      </span>
      <h5 className=' text-2xl font-semibold text-center flex items-center  '>Theaven</h5>
    </div>
    </Link>
  );
};

export default Logo;
