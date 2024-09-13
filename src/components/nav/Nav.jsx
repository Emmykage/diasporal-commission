import React, { useState } from 'react'
import { TfiMenuAlt } from 'react-icons/tfi'
import { NavLink } from 'react-router-dom'
import "./nav.scss";
const Nav = () => {
    const active = "text-alt"
    const [showMenu, setShowMenu] = useState(false)

    const toggleMenu = {

    }
  return (
    <nav className='flex items-center top-0 py-6 left-0 fixed w-full z-10 justify-between px-10 bg-red-20 text-white'>
        <a href="" className='text-3xl text-black md:text-white font-medium'>ABAccount  </a>
        <ul className={`${showMenu && "show"} font-medium text-blac md:text-white  basis-1/2`}>
            <li className='px-4 py-2 cursor-pointer'><NavLink to="/" className={({isActive}) => (isActive && "text-alt")}> Home </NavLink></li>
            <li  className='px-4 py-2 cursor-pointer'><NavLink to="/about-us" className={({isActive}) => (isActive && "text-alt")}> About Us </NavLink></li>
            <li  className='px-4 py-2 cursor-pointer'><NavLink to={'/services'} className={({isActive}) => (isActive && "text-alt")}> Service </NavLink></li>
            <li  className='px-4 py-2 cursor-pointer'><NavLink to={'/blog'} className={({isActive}) => (isActive && "text-alt")}> BLOG </NavLink></li>
            <li  className='px-4 py-2 cursor-pointer'><NavLink to={'/contact-us'} className={({isActive}) => (isActive && "text-alt")}> Contact Us </NavLink></li>
        </ul>

        <span className={`${showMenu && "z-50 text-white"} md:hidden`} onClick={() => setShowMenu(prev => !prev)}>
        <TfiMenuAlt className={`${showMenu && "z-50 text-white"} text-black`}/>
        </span>
        
    </nav>
  )
}

export default Nav