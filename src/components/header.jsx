import React from 'react'
import Nav from './nav'
import Logo from './logo'
import Button from './button'
import { Link } from 'react-router-dom'
const header = () => {
  return (
    <section className='  bg-body_color border border-b  flex-wrap px-8 py-5 sticky top-0 z-[20] mx-auto flex   w-full  items-center  justify-between  '>
       <Link to="/Home"><Logo/></Link> 
        {/* <Nav/> */}
    <div className ='lg:block hidden'> 
        <Link to='/Join'><Button ButtonText="Join us" /></Link>
        </div>
    </section>
  )
}

export default header