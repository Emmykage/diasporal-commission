import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className='flex items-center top-0 left-0 fixed w-full z-10 justify-between px-10 bg-red-20 text-white'>
        <a href="" className='text-3xl font-medium'>ABAccount  </a>
        <ul className='flex font-medium text-white  basis-1/2'>
        <li className='px-4 py-2 cursor-pointer'><NavLink href=""> Home </NavLink></li>
        <li  className='px-4 py-2 cursor-pointer'><NavLink to="/about-us"> About Us </NavLink></li>
        <li  className='px-4 py-2 cursor-pointer'><NavLink to={'/services'} href=""> Service </NavLink></li>
        </ul>
        
    </nav>
  )
}

export default Nav