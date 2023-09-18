import React from 'react'
import Home_1 from '../assets/hotel1.jpg'
import Home_2 from '../assets/hotel2.jpg'
import Button from './button'
import Search from './search'
const hero = () => {
  return (
   <section>
         <div className="container flex flex-wrap  items-center justify-center mx-auto mt-10 lg:px-24 px-8 md:flex-row mb-8">
               <div className="mb-14 lg:mb-0 lg:w-1/2   ">
                <div className='lg:mx-8 flex flex-col gap-10 lg:text-start text-center '>
                  <h1 className='text-text_color text-4xl font-bold leading-[50px] '>Welcome to<span className='text-title_color'>  Theaver -</span>  Where Your Dream Home Awaits!</h1>
                  <p className='text-text_color opacity-50 text-md font-medium  leading-8'>
                  "Discover your perfect home with our user-friendly house renting website, where you can browse a diverse selection of rental listings, explore detailed property information, and connect with trusted landlords effortlessly."
                       </p>
                      
                  <div className=' flex lg:justify-start items-center lg:mx-0 justify-center mx-auto'>
                    <Button ButtonText="View more"/>
                    <span className='flex gap-6 ml-12 text-2xl text-text_color '>
                        <a><ion-icon name="logo-instagram"></ion-icon></a>
                        <a><ion-icon name="logo-facebook"></ion-icon></a>
                        <ion-icon name="logo-twitter"></ion-icon>
                  </span>
                    
                    </div>
                 
                 </div>
                </div>
                <div className="lg:w-1/2  ">
                <img src={Home_1} className='w-full h-full rounded-md rounded-tr-[250px]'/>
               
                 
                </div>

         </div>
         <Search/>
         
   </section>
  )
}

export default hero