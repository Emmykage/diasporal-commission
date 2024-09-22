import React from 'react'
import Nav from '../../components/nav/Nav'
import Banner from '../../components/heroBanner/Banner'
import idea from '../../assets/images/idea.svg'
import briefcase from '../../assets/images/suitcase.svg'
import compliance from '../../assets/images/presentation.svg'
import chat from '../../assets/images/chat.svg'
import CTA from '../../components/CTA/CAT'
import Offers from '../../components/offers/Offers'
import { NavLink } from 'react-router-dom'
import './service.scss'
const Services = () => {
  return (
    <div className=''>
        <Nav/>
        <Banner header={"service"}/>


        <section className='py-16 px-4'>

            <h3 className='text-center text-3xl font-semibold mb-6'>Explore Our  Services at NDPT</h3>
            <p className='text-center max-w-5xl m-auto my-4'>At Nigeria Diaspora Project Trust (NDPT), we are committed to delivering exceptional service by empowering Nigerians in the diaspora to engage meaningfully with their home country. We provide a platform for collaboration, skill transfer, and investment, ensuring that the collective talents and resources of the Nigerian diaspora drive sustainable development in key sectors such as education, healthcare, infrastructure, and entrepreneurship. Through our strategic partnerships and innovative programs, we offer opportunities for individuals and organizations to make a lasting impact on Nigeria's future.
            </p>
            <div className='services grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl m-auto'>
        
        <div className='shadow text-center rounded-lg p-10'>
            <img src={idea} alt="" className='w-10 m-auto' />
            <NavLink to={"/mining-natural-resources"}>
            <p className='my-6 font-medium title'>Mining and Natural Resources</p>
            </NavLink>

           <p className='my-5'>
           Explore investment opportunities in Nigeria's rich mineral resources, including gold, coal, and limestone. Contribute to sustainable mining and refining projects that generate profits while promoting responsible practices.           </p>

        </div>

        <div className='shadow text-center rounded-lg p-10'>
            <img src={briefcase} alt="" className='w-10 m-auto' />
            <NavLink to="/investment-opportunities">
            <p className='my-6 font-medium title'>1. Investment Opportunities in Agriculture 
            </p>
            </NavLink>
            <p className='my-5'>Leverage Nigeria’s fertile agricultural landscape by investing in crop production, aquaculture, livestock, and agro-processing. Partner with local farmers to enhance the nation’s food security.
efforts. </p>

        </div>

        <div className='shadow text-center rounded-lg p-10'>
            <img src={compliance} alt="" className='w-10 m-auto' />

            <NavLink to="/real-estate">
            
            <p className='my-6 font-medium title'>Real Estate Ventures
            </p></NavLink>
            <p className='my-5'>Invest in Nigeria’s real estate market, from residential to commercial projects. Services include development, sales, leasing, management, and investment advisory.</p>

        </div>
        <div className='shadow text-center rounded-lg p-10'>
            <img src={chat} alt="" className='w-10 m-auto' />

            <NavLink to="/industrial-investments">
            <p className='my-6 font-medium title'>
            Industrial Investments                </p>

            </NavLink>

             <p className='my-5'>T
             Invest in Nigeria's industrial sector by supporting manufacturing and processing hubs that drive economic growth, create jobs, and boost the local economy.    </p>

        </div>
        
    </div>
        </section>
        <Offers/>

        
        <CTA text={"start optimizing your business finances today."} buttonText={"Get a Free Consultation"} title={"Ready to Take Control of Your Business Finances?"}/>


    </div>
  )
}

export default Services