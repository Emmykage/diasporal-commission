import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-gray-900 py-20 px-4'>
        <div className='m-auto max-w-7xl grid gap-10 md:grid-cols-3'>
            <div className='md:px-12'>
                <h3 className='text-white text-3xl mb-4'>ABAccount</h3>
                <p className=' text-sm text-gray-300'>AB Accounting Services provides comprehensive accounting solutions for UK businesses of all sizes. <br/> <br/> Our team of professional accountants is dedicated to helping your business grow through tailored financial strategies and seamless compliance with UK regulations.</p>

            </div>
            <div className='text-white text- md:px-10'>
                <h3 className='mb-6 text-lg'> Links</h3>
                <ul>
                <li className='hover:text-gray-400 cursor-pointer'>Home</li>
                <li className='hover:text-gray-400 cursor-pointer'>Services</li>
                <li className='hover:text-gray-400 cursor-pointer'>About Us</li>
                <li className='hover:text-gray-400 cursor-pointer'>Contact</li>
                </ul>
                
            </div>
            <div className='text-white text-'>
                <h3>Contact Us</h3>
                <p></p>
                
                </div>
                <div>
                
                </div>
                <div>
                
                </div>
        </div>

        
    </footer>
  )
}

export default Footer