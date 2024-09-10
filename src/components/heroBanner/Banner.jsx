import React from 'react'
import './slider.scss'
import serviceImg from '../../assets/images/services//service-banner.png'

const Banner = ({header}) => {
  return (
    <div className={`${header == "service" ? "service" : "about"} h-72 flex items-center justify-center  service-banner w-screen`}>
            <div className='border-[3px] border-gray-400 px-10 py-3'>
                <h3 className='text-3xl text-white'>{header == "service" ? "Our Service" : "About Us"}</h3>
            </div>

        </div>
  )
}

export default Banner