import React from 'react'
import { FaPhoneAlt } from 'react-icons/fa'
import { FaHouse } from 'react-icons/fa6'
import { IoMailSharp } from 'react-icons/io5'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/images/logo/logo2.png'

const Footer = () => {
  return (
    <section>
        <footer className='bg-gray-900 py-20 px-4'>
        <div className='m-auto max-w-7xl grid gap-10 md:grid-cols-3'>
            <div className='md:px-12'>
                <h3 className='text-white text-3xl mb-o'><img src={logo} alt='ndpt logo' className='w-32'/></h3>
                <p className=' text-sm text-gray-300'>we are committed to delivering exceptional service by empowering Nigerians in the diaspora to engage meaningfully with their home country</p>

            </div>
            <div className='text-white text- md:px-10'>
                <h3 className='mb-6 text-lg'> Links</h3>
                <ul>
                <li className='hover:text-gray-400 cursor-pointer'><NavLink to={"/"}> Home</NavLink> </li>
                <li className='hover:text-gray-400 cursor-pointer'><NavLink to="/services"> Services</NavLink></li>
                <li className='hover:text-gray-400 cursor-pointer'> <NavLink to={"about-us"}> About Us</NavLink></li>
                <li className='hover:text-gray-400 cursor-pointer'><NavLink to={"contact-us"}> Contact US</NavLink></li>
                </ul>
                
            </div>
            <div className='text-white text-'>
                <h3>Contact Us</h3>
                <p></p>
                <div className='flex gap-5 my-4 items-center'>
                <FaHouse/> <address>18 Thricknells Close, Luton, LU3 3RP</address>

                </div><div className='flex gap-5 my-4 items-center'>
                <FaPhoneAlt/>       <a href="tel:+07405141694">07405141694</a>


                </div><div className='flex gap-5 my-4 items-center'>
                <IoMailSharp/> <a href="mailto:support@abfaccounting.com"> support@abfaccounting.com</a>

                </div>
                
                </div>
      
        </div>     
        
    </footer>
        <div className="text-center mt-20">
              <p className="text-sm text-gray-400">© 2024 NPDT – 18 Thricknells Close, Luton, LU3 3RP. Telephone: 07405141694
              </p>

              <ul className="text-sm my-4 text-red-500 m-auto md:justify-center flex flex-col md:flex-row max-w-4xl flex-wrap gap-3 md:gap-0">

                <li className="border-r border-gray-400 px-4"> <nuxt-link to="/privacy-policy" class="hover:text-theme" >Privacy Policy </nuxt-link> </li>
                <li className="border-r border-gray-400 px-4"> <nuxt-link to="/privacy-policy" class="hover:text-theme" >Cookie Policy</nuxt-link></li>
                <li className="border-r border-gray-400 px-4">Modern Slavery Statement</li>
                <li className=" border-gray-400 px-4"> Site Map</li>
              </ul>
          </div>

    </section>
  
  )
}

export default Footer