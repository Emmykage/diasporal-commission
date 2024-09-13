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
              At AB Accounting Services, we pride ourselves on delivering accounting services for businesses in the UK that are tailored to each client's unique needs. 
              <br/> <br/>
              With years of experience supporting industries ranging from retail to tech startups, we ensure your business stays compliant and financially sound.


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
              <h3 className='text-3xl my-2 text-alt'>WE <span className='font-semibold'>ARE DIFFERENT</span></h3>
              <ul className='list-inside list-dis px-5'>
                <li className='flex items-cente gap-4 '> <span className='text-3xl'>&#8226;</span> 
                <p><span className='font-semibold text-nowrap'>Tailored Solutions:</span>  Every business is unique, so we offer customized accounting strategies that align with your specific needs</p> </li>
                <li className='flex items-cente gap-4 '> <span className='text-3xl'>&#8226;</span> 
                <p><span className='font-semibold text-nowrap'>Expertise You Can Trust:</span>  Our accountants are certified professionals with extensive experience in UK tax regulations and financial reporting.</p> </li>
                <li className='flex items-cente gap-4 '> <span className='text-3xl'>&#8226;</span> 
                  <p><span className='font-semibold text-nowrap'>Business Growth Focus: </span> More than just compliance, we help businesses scale through strategic financial planning and consultancy.
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