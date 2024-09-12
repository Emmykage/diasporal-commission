import React from 'react'
import Nav from '../../components/Nav'
import Banner from '../../components/heroBanner/Banner'
import { FaHouse } from 'react-icons/fa6'
import { FaPhoneAlt } from 'react-icons/fa'
import { IoMailSharp } from 'react-icons/io5'

const Contact = () => {
  return (
    <div>
      <Nav/>
      <Banner header="contact"/>

      <section className='py-10'>
        <div>
          <h3 className='py-5 px-4 border-[3px] m-auto border-alt w-max text-3xl font-semibold'>Contact Us</h3>
          <p className='text-center max-w-4xl m-auto my-6'>Whether you need help with tax planning, payroll, or business consultancy, we’re here to support your accounting needs. Our team of experts is available to provide personalized advice and support for your business</p>
          <div className='grid md:grid-cols-3 max-w-7xl m-auto gap-8'>
          <div className='text-center shadow p-8'>
            <span className='block m-auto text-center w-max my-3'><FaHouse className='text-3xl' /></span>
            <h4 className='text-xl font-medium text-gray-600 uppercase'>office address</h4>
            <p className='text-lg'>13/2 Elizabeth Street Melbourne
            VIC 3000, USA</p>
          </div>
          <div className='text-center shadow md:p-8'>
            <span className='block m-auto text-center w-max my-3'><FaPhoneAlt className='text-3xl' /></span>
            <h4 className='text-xl font-medium text-gray-600 uppercase'>contact number</h4>
            <p className='text-lg'>1-4343-3435-5343
            VIC 3000, USA</p>
          </div>
          <div className='text-center shadow p-8'>
            <span className='block m-auto text-center w-max my-3'><IoMailSharp className='text-3xl'/></span>
            <h4 className='text-xl font-medium text-gray-600 uppercase'>
            email id</h4>
            <p className='text-lg'>info@abfaccounting.com
            VIC 3000, USA</p>
          </div>
          <div></div>
          <div></div>
          </div>
        </div>
      </section>

      <section className='get-in-touch'>
        <h3>Get IN Touch</h3>
      </section>
    </div>
  )
}

export default Contact