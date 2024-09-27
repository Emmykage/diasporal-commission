import React, { useEffect, useState } from 'react'
import { TfiMenuAlt } from 'react-icons/tfi'
import { NavLink } from 'react-router-dom'
import "./nav.scss";
import logo from "../../assets/images/logo/logo2.png"
const Nav = () => {
    const active = "text-alt"
    const [showMenu, setShowMenu] = useState(false)
    const [navBg, setNavBg] = useState("")

    const toggleMenu = {

    }

    useEffect(()=> {
      const scrollNav = (event) => {
        if(window.scrollY > 120){
          console.log("first")
          setNavBg("md:bg-gray-900/60")
        }
        else{
          setNavBg("")
        }
      }
      window.addEventListener("scroll", scrollNav)
    }, [])
  return (
    <nav className={`${navBg} flex items-center top-0 py-1 left-0 fixed w-full z-10 justify-between px-10 bg-red-20 text-white`}>
        <NavLink to="/" className='text-3xl text-black w-20 md:text-white font-medium'>
        <img src={logo} alt="" className='w-full h-full'/> 
        </NavLink>
        <ul className={`${showMenu && "show"} font-medium text-blac md:text-white  basis-1/2`}>
            <li className='px-4 py-2 cursor-pointer'><NavLink to="/" className={({isActive}) => (isActive && "text-alt")}> Home </NavLink></li>
            <li  className='px-4 py-2 cursor-pointer'><NavLink to="/about-us" className={({isActive}) => (isActive && "text-alt")}> About Us </NavLink></li>
            <li  className='px-4 py-2 cursor-pointer'><NavLink to={'/services'} className={({isActive}) => (isActive && "text-alt")}> Service </NavLink>
            
              <ul className=''>
                <div className='bg-black'>

                <li> <NavLink to={"/mining-natural-resources"}>Mining and Natural Resources </NavLink></li>
                <li> <NavLink to={"/investment-opportunities"}> Investment Opportunities </NavLink></li>
                <li> <NavLink to={"/real-estate"}>Real Estate Ventures </NavLink></li>
                <li> <NavLink to={"/industrial-investments"}>    Industrial Investments   </NavLink></li>
                </div>

              </ul>
            </li>
            {/* <li  className='px-4 py-2 cursor-pointer'><NavLink to={'/blog'} className={({isActive}) => (isActive && "text-alt")}> BLOG </NavLink></li> */}
            <li  className='px-4 py-2 cursor-pointer'><NavLink to={'/contact-us'} className={({isActive}) => (isActive && "text-alt")}> Contact Us </NavLink></li>
        </ul>

        <span className={`${showMenu && "z-50 text-white"} md:hidden`} onClick={() => setShowMenu(prev => !prev)}>
        <TfiMenuAlt className={`${showMenu && "z-50 text-white"} text-black`}/>
        </span>
        
    </nav>
  )
}

export default Nav