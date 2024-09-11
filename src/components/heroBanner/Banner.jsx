import React from 'react'
import './slider.scss'
import serviceImg from '../../assets/images/services//service-banner.png'

const Banner = ({header}) => {

    const bannerTitle = (title) => {
        switch (title) {
            case "service":
                return "Our Services"                
            case "contact":
                return "Contact Us"

            case "about": 
                return "About Us"        
            default:
                return ""
        }
    }
  return (
    <div className={`${header} h-72 flex items-center justify-center  service-banner w-screen`}>
        <div className='border-[3px] border-gray-400 px-10 py-3'>
            <h3 className='text-3xl text-white'>{bannerTitle(header)}</h3>
        </div>
    </div>
  )
}

export default Banner