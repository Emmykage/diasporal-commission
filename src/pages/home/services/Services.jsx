import React from 'react'
import idea from '../../../assets/images/idea.svg'
import briefcase from '../../../assets/images/suitcase.svg'
import compliance from '../../../assets/images/presentation.svg'
import chat from '../../../assets/images/chat.svg'
import './services.scss'
const Services = () => {
  return (
    <div className='services grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl m-auto'>
        
        <div className='shadow text-center rounded-lg p-10'>
            <img src={idea} alt="" className='w-10 m-auto' />
            <p className='my-6 font-medium title'>Accurate Accounting Solutions</p>
            {/* <p className='my-5'>Duis a est tincidunt, consectetur ex id, mollis tellus mauris feugiat elit.</p> */}

        </div>

        <div className='shadow text-center rounded-lg p-10'>
            <img src={briefcase} alt="" className='w-10 m-auto' />
            <p className='my-6 font-medium title'>Strategic Tax Planning            </p>
            {/* <p className='my-5'>Duis a est tincidunt, consectetur ex id, mollis tellus mauris feugiat elit.</p> */}

        </div>

        <div className='shadow text-center rounded-lg p-10'>
            <img src={compliance} alt="" className='w-10 m-auto' />
            <p className='my-6 font-medium title'>Bookkeeping & Payroll Services
            </p>
            {/* <p className='my-5'>Duis a est tincidunt, consectetur ex id, mollis tellus mauris feugiat elit.</p> */}

        </div>
        <div className='shadow text-center rounded-lg p-10'>
            <img src={chat} alt="" className='w-10 m-auto' />
            <p className='my-6 font-medium title'>Financial Consultancy for Business Growth

            </p>
            {/* <p className='my-5'>Duis a est tincidunt, consectetur ex id, mollis tellus mauris feugiat elit.</p> */}

        </div>
        
    </div>
  )
}

export default Services