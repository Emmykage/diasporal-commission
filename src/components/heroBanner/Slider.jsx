import React from 'react'
import './slider.scss'

const Slider = () => {
  return (
    <div className=' h-screen  hero-banner w-screen'>
      <div className='slider flex'>

      <div className='slide slide-1 w-full flex justify-center items-center'>
        <div className='bg-black/20 px-3 py-2 rounded text-center text-white'>
            <p className='text-4xl text-white font-medium'>We Provide Real </p>
            <h3 className='text-3xl md:text-7xl font-semibold'>WORLD SOLUTION</h3>
            <a href="" className='hover:bg-purple-100/80 hover:text-gray-900 border-[3px] w-max m-auto border-alt block px-6 py-3 text-lg font-semibold'>Get Started</a>
        </div>


      </div>

      <div className='slide slide-2 w-full flex justify-center items-center'>
        <div className='bg-black/20 px-3 py-2 rounded text-center text-white'>
            <p className='text-4xl text-white font-medium'>We Provide Real </p>
            <h3 className='text-3xl md:text-7xl font-semibold'>WORLD SOLUTION</h3>
        </div>


      </div>

      <div className='slide slide-3 w-full flex justify-center items-center'>
        <div className='bg-black/20 px-3 py-2 rounded text-center text-white'>
            <p className='text-4xl text-white font-medium'>We Provide Real </p>
            <h3 className='text-3xl md:text-7xl font-semibold'>WORLD SOLUTION</h3>
        </div>


      </div>
      <div className='slide slide-4 w-full flex justify-center items-center'>
        <div className='bg-black/20 px-3 py-2 rounded text-center text-white'>
            <p className='text-4xl text-white font-medium'>We Provide Real </p>
            <h3 className='text-3xl md:text-7xl font-semibold'>WORLD SOLUTION</h3>
        </div>


      </div>
      <div className='slide slide-5 w-full flex justify-center items-center'>
        <div className='bg-black/20 px-3 py-2 rounded text-center text-white'>
            <p className='text-4xl text-white font-medium'>We Provide Real </p>
            <h3 className='text-7xl font-semibold'>WORLD SOLUTION</h3>
        </div>


      </div>

      </div>

    </div>
  )
}

export default Slider