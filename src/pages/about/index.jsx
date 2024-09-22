import React from 'react'
import Nav from '../../components/nav/Nav'
import Banner from '../../components/heroBanner/Banner'
import teamPhoto from "../../assets/images/about/team_building_san_antonio_0.jpg"
import './about.scss'
import CTA from '../../components/CTA/CAT'
const About = () => {
  return (
    <div className=''>
        <Nav/>
        <Banner header={"about"}/>
        <section className='py-16 px-4'>
          <div className='grid gap-4 md:grid-cols-2 m-auto max-w-7xl'>
            <div>
              <h3 className='text-3xl font-semibold'>WHO  <span className='font-bold'>WE ARE</span> </h3>
              <p>
              At Nigeria Diaspora Project Trust (NDPT), we believe in the power of connection—between 
Nigerians living abroad and the immense investment opportunities at home. Our mission is to 
provide a secure and reliable platform for Nigerians in the Diaspora to invest in high
potential sectors such as Agriculture, Real Estate, Industry, and Mining, fostering economic 
growth and long-term wealth creation.              <br/> <br/>


              </p>
            </div>
            <div>
              <img src={teamPhoto} alt=""  className='w-full h-full' />
            </div>

          </div>
        </section>

        <section className='uniquness py-20 px-5'>

          <div className='grid md:grid-cols-2 m-auto max-w-7xl'>

            <div className='max-w-7xl text-white leading-7'>
              <h3 className='text-3xl my-2 text-alt'>WE <span className='font-semibold'>Why Choose NDPT? 
              </span></h3>
              <ul className='list-inside list-dis px-5'>
                <li className='flex items-cente gap-4 '> <span className='text-3xl'>&#8226;</span> 
                <p><span className='font-semibold text-nowrap'>Secure Investments: </span> Your investments are safe with us. We partner with renowned 
institutions like Macedonia Group, Hilltop & Strongbrooke, Sunnykem Properties, 6th 
& 9th Real Estate, and the Federal Mortgage Bank to ensure the highest standards of 
integrity and accountability.</p> </li>
                <li className='flex items-cente gap-4 '> <span className='text-3xl'>&#8226;</span> 
                <p><span className='font-semibold text-nowrap'>Expert Management:</span> All projects are developed and managed by industry 
                professionals, ensuring profitability and long-term success.</p> </li>
                <li className='flex items-cente gap-4 '> <span className='text-3xl'>&#8226;</span> 
                  <p><span className='font-semibold text-nowrap'>Diverse Opportunities: </span>  From Agriculture and Real Estate to Industry and Mining, 
                  NDPT offers diversified investment portfolios tailored to match your financial goals. 
                  </p> 
                </li>
                <li className='flex items-cente gap-4 '> <span className='text-3xl'>&#8226;</span> 
                  <p><span className='font-semibold text-nowrap'>Supporting National Development: </span>  By investing through NDPT, you are not just 
growing your wealth, but also contributing to Nigeria’s food security, housing 
development, and industrial expansion.
                  </p> 
                </li>
                

              </ul>
            </div>
          </div>


        </section>

        <section className=''>
          <CTA/>
        </section>
    </div>
  )
}

export default About