import React from 'react'
import Nav from '../../../components/nav/Nav'
import Banner from '../../../components/heroBanner/Banner'
import TitleBox from '../../../components/titleBox/TitleBox'
import bookkeeping from '../../../assets/images/services/bookkeeping_img.jpg'
import estateImage from "../../../assets/images/services/Nigerian-Estate.jpg"
import CTA from '../../../components/CTA/CAT'
const BookkeepingPayroll = () => {
  return (
    <div>
        <Nav/>
        <Banner header={"real-estate"}/>
                
        <section className='py-20 px-5'>
            <div className='max-w-7xl m-auto'>
                <div>
                    
                    <TitleBox title={"Real Estate Ventures"}/>
                </div>

                <div className='mt-6'>
                    <p> At NDPT, we understand that investing in real estate is a key driver of economic development and personal wealth. That’s why we offer comprehensive real estate investment opportunities tailored to meet the unique needs of diaspora investors looking to contribute to Nigeria’s urban growth, from residential projects to commercial developments.</p>
                    <h4 className='text-2xl font-semibold mt-2'>Explore</h4>
                    <p>

                        Invest in Nigeria’s burgeoning real estate market, ranging from residential 
                            properties to commercial developments. Secure land, build, and grow with 
                            confidence as you contribute to the country’s urban development. Property 
                            Development,  Property Sales and Marketing, Property Leasing and Renting, 
                            Property Management, Real Estate Investment and Advisory, Valuation and 
                            Appraisal, Mortgage and Financing Services, Real Estate Legal Services, 
                            Property Insurance, Real Estate Development Consulting                    </p>
                        <div className='grid md:grid-cols-2 gap-10 py-4'>
                        <div className='h-96 p-10'>
                            <img src={estateImage} alt="" className='h-full w-full' />

                        </div>
                        <div className='py-10'>
                        <p>
                        Nigeria’s real estate market offers significant opportunities for investment, driven by rapid urbanization, a growing population, and increasing demand for residential and commercial properties. At NDPT, we connect the Nigerian diaspora with strategic real estate investment opportunities that not only yield profitable returns but also contribute to the country’s urban development.
                        <br />
                        <br />
                        Our focus encompasses a wide range of sectors, including residential housing, commercial developments, and industrial projects. By partnering with local developers and communities, you can play a crucial role in addressing the housing shortage, enhancing infrastructure, and fostering sustainable urban growth.
                        <br />
                        <br />

                        We provide comprehensive support throughout the investment process, offering market insights, feasibility studies, and project management assistance. Whether you're looking to invest in new developments, rental properties, or real estate funds, NDPT is here to guide you in making informed decisions that align with your investment goals while positively impacting Nigeria’s future.     </p>
                                            
                        </div>
                    </div>
                   
                    <p className='max-w-2xl my-4'>Whether you're a startup or an established business, we can help you maintain a clear and accurate financial picture. </p>
                    
                </div>
  
            </div>

        

        </section>
        {/* <section className='uniquness py-20 px-5'>

            <div className='grid md:grid-cols-2 m-auto max-w-7xl'>

            <div className='max-w-7xl text-white leading-7'>
                <h3 className='text-3xl my-2 text-alt'> <span className='font-semibold'>Why Outsource Bookkeeping & Payroll?                </span></h3>
                <p>Outsourcing your bookkeeping and payroll services can offer several advantages:
                </p>
                <ul className='list-inside list-dis px-5'>
                <li className='flex items-cente gap-4 '> <span className='text-3xl'>&#8226;</span> 
                <p><span className='font-semibold text-nowrap'>Save Time:</span>  Focus on your business while we handle the day-to-day financial management.</p> </li>
                <li className='flex items-cente gap-4 '> <span className='text-3xl'>&#8226;</span> 
                <p><span className='font-semibold text-nowrap'>Reduce Errors:</span>  : Avoid costly payroll and accounting mistakes with professional oversight.</p> </li>
                <li className='flex items-cente gap-4 '> <span className='text-3xl'>&#8226;</span> 
                    <p><span className='font-semibold text-nowrap'>Ensure Compliance: </span> Stay up to date with UK tax regulations, payroll laws, and VAT submissions without hassle</p> 

                </li>
                <li className='flex items-cente gap-4 '> <span className='text-3xl'>&#8226;</span> 
                    <p><span className='font-semibold text-nowrap'>Improve Cash Flow: </span> Gain a clear picture of your finances to better manage your cash flow and business growth</p> 
                    
                </li>
                

                </ul>
            </div>
            </div>


            </section> */}
            <section className='px-5 py-20'> 
                <div className='max-w-7xl m-auto'>

                <h3 className='text-2xl text-center my-6 font-semibold '>

                Ready to Maximize Your Real Estate Investments?
                </h3>
                <p className='text-center max-w-4xl m-auto font-medium text-gray-600'>
                    At NDPT, we take pride in providing personalized, reliable, and strategic real estate investment solutions tailored to your goals. Whether you’re looking to invest in residential, commercial, or industrial properties, we’re here to assist you every step of the way.
                </p>
                </div>

            </section>

            <CTA text={"For a free consultation and learn how our real estate investment opportunities can help you grow your portfolio and contribute to Nigeria’s urban development."} buttonText={"Contact Us Today "}/>
        </div>
  )
}

export default BookkeepingPayroll