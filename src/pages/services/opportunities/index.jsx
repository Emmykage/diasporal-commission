import React from 'react'
import Banner from '../../../components/heroBanner/Banner'
import TitleBox from '../../../components/titleBox/TitleBox'
import Nav from '../../../components/nav/Nav'
import CTA from '../../../components/CTA/CAT'
import taxComplianceImg from '../../../assets/images/services/tax-compliance.webp'
import benefitIcon from '../../../assets/images/svgs/benefits-icon.svg'
import farmingPic from '../../../assets/images/services/agriculture.jpg'
const TaxPlanning = () => {
  return (
    <div>
      
      <Nav/>
        <Banner header={"investment-opportunities"}/>
                
        <section className='py-20 px-5'>
            <div className='max-w-7xl m-auto'>
                <div>
                    
                    <TitleBox title={"Investment Opportunities in Agriculture"}/>
                </div>

                <div className='mt-6'>
                    <p className='text-center'> 
                    At NDPT, we understand that unlocking Nigeria's agricultural potential requires more than just farming. Our expertise in agriculture investment is designed to help you make strategic decisions, promote sustainable practices, and maximize returns. Whether you’re entering the agricultural sector or expanding your operations, our team provides tailored solutions and insights to help you navigate the complexities of modern farming, agro-processing, and food security initiatives. By investing in agriculture, you can drive both profitability and positive social impact, contributing to Nigeria's sustainable growth and rural development.
                    </p>
                    <h4 className='text-2xl font-semibold mt-2 text-center'>Explore          </h4>
                    <p className='text-center'>
                    Take advantage of Nigeria’s rich agricultural landscape by investing in crop production, aquaculture, livestock farming, and agro-processing. Partner with local farmers and cooperatives to revolutionize the nation's food security efforts.
                    </p>
                    <div className='grid md:grid-cols-2 gap-10 py-4'>
                        <div className='h-96 p-10 '>
                            <img src={farmingPic} alt="" className='h-full rounded-xl overflow-hidden border w-full' />

                        </div>
                        <div className='py-10'>
                            <h3 className='text-3xl font-medium'>Opportunities In Agriculture             </h3>
                        <p>
                         Nigeria's agricultural sector offers vast potential for impactful investments, driven by the country's fertile lands and a growing demand for food security. At NDPT, we help you explore lucrative opportunities in crop production, livestock farming, aquaculture, and agro-processing.
                        <br />
                        <br />

                        By partnering with local farmers, cooperatives, and agribusinesses, you can play a key role in modernizing Nigeria's agricultural landscape while boosting productivity and sustainability. Investments in agriculture not only yield profitable returns but also contribute to job creation, poverty alleviation, and the enhancement of food security across the nation.
                        <br />
                        <br />
                        Whether you're interested in large-scale farming, processing plants, or agricultural technology, NDPT is here to guide you in making strategic, high-impact investments that benefit both you and Nigeria’s agricultural future.                                            </p>

                       
                    
                        </div>

                        
                                    
                    </div>

                  

                    {/* <div>
                    <h4 className='font-semibold text-xl text-center'>Our Tax Planning Services             </h4>
                    <p className='text-center max-w-xl m-auto my-6'>At AB Accounting Services, we offer a range of services to support your business’s tax planning and compliance needs:
                    </p>
                    <div className='grid gap-10 md:grid-cols-3'>
                        <div className='bg-red-5'>
                        <img src={benefitIcon} alt="" className='w-10 m-auto'/>

                            <h4 className='text-lg font-medium text-center'>Corporate Tax Planning</h4>
                            <p  className='text-center'>We’ll help you minimize your corporate tax liabilities through careful planning and utilization of government schemes and reliefs, such as Annual Investment Allowance (AIA) and R&D tax credits.
                            </p>
                        </div>
                        <div> 
                        <img src={benefitIcon} alt="" className='w-10 m-auto'/>

                            <h4 className='text-lg font-medium text-center'>Personal Tax Planning for Business Owners </h4>
                            < p className='text-center'>If you’re a business owner, managing your personal tax alongside your business tax can be tricky. We offer tax-efficient strategies to help you maximize your income and reduce personal tax burdens.</p>
                        </div>
                        <div>
                        <img src={benefitIcon} alt="" className='w-10 m-auto'/>

                            <h4 className='text-lg font-medium text-center'>VAT Planning and Compliance</h4>
                            <p className='text-center'>	We assist with VAT registration, preparation, and submission to ensure you’re compliant with UK VAT laws. We also offer advice on VAT schemes that might reduce your liabilities.</p>
                        </div>
                        <div>
                        <img src={benefitIcon} alt="" className='w-10 m-auto'/>

                            <h4 className='text-lg font-medium text-center'>    Capital Gains Tax (CGT) </h4>
                            <p className='text-center'>	We’ll guide you through the complexities of Capital Gains Tax on the sale of business assets, helping you plan your disposals in a tax-efficient manner.
                            inancial reports builds confidence among investors, lenders, and stakeholders, making it easier to secure funding or attract partnerships.

                            </p>
                        </div>
                        <div>
                        <img src={benefitIcon} alt="" className='w-10 m-auto'/>

                            <h4 className='text-lg font-medium text-center'>Inheritance Tax (IHT) Planning</h4>
                            <p className='text-center'>
                            Ensure your wealth is passed on efficiently. We offer inheritance tax planning solutions for business owners who want to secure their legacy </p>

                        </div>
                        <div>
                        <img src={benefitIcon} alt="" className='w-10 m-auto'/>

                            <h4 className='text-lg font-medium text-center'>Tax Relief and Allowances</h4>
                            <p className='text-center'>
                            	Take advantage of various tax relief schemes available to businesses, such as entrepreneurs’ relief, and patent box relief, which can significantly reduce your tax liabilities.


                            </p>
                        </div>
                        
                        </div>
                        </div> */}
                    
                        
                    </div>
  
            </div>

            {/* <div className='grid gap-6 my-20 md:grid-cols-2 m-auto max-w-7xl items-center'>
                <div className='h-96 p-10 '>
                    <img src={taxComplianceImg} alt="" className=' h-full rounded-xl overflow-hidden border w-full' />
                </div>
                <div>
                <h4 className='text-3xl font-medium'>Tax Compliance Services</h4>
                <p>In addition to tax planning, we provide comprehensive tax compliance services to ensure your business meets all of its HMRC obligations: </p>
                <ul className='px-4'>
                    <li>  ⦁
                    Preparing and filing corporation tax returns
                    </li>
                    <li>
                    ⦁	Managing PAYE and NIC submissions
                    </li>
                    <li>
                    ⦁	Handling VAT returns and compliance checks
                    </li>
                    <li>
                    ⦁	Assistance with HMRC audits and inquiries
                    </li>
                    <li>
                    ⦁	Ensuring your business is compliant with Making Tax Digital (MTD) requirements

                    </li>
                </ul>
            </div>

            </div> */}

        </section>
        {/* <section className='uniquness py-20 px-5'>

            <div className=' m-auto max-w-7xl'>

                <div className='max-w-7xl text-white leading-7'>
                    <h3 className='text-3xl my-2 text-alt'> <span className='font-semibold'>Why Choose AB Accounting Services for Tax Planning?                 </span></h3>
                    <div className='grid sm:grid-cols-2'>

                    <ul className='list-inside list-dis px-5'>
                    <li className='flex items-cente gap-4 '> <span className='text-3xl'>&#8226;</span> 
                    <p><span className='font-semibold text-nowrap'>Tailored Tax Strategies: </span>	Every business is different, and so are its tax obligations. We offer personalized tax planning strategies that align with your business goals and financial needs.  </p> </li>
                    <li className='flex items-cente gap-4 '> <span className='text-3xl'>&#8226;</span> 
                    <p><span className='font-semibold text-nowrap'>	Expert Knowledge of UK Tax Law:                 </span> ⦁	Our team of experienced accountants stays up to date with the latest changes in UK tax legislation, ensuring that your business is always compliant and fully benefiting from available tax reliefs </p> </li>
                    <li className='flex items-cente gap-4 '> <span className='text-3xl'>&#8226;</span> 
                        <p><span className='font-semibold text-nowrap'>Proactive Tax Advice:                        </span>	We don’t just file your taxes—we work with you year-round to identify opportunities for tax savings and ensure you are fully prepared for upcoming deadlines.
                        </p> 

                    </li>
                    

                    </ul>
                    <ul className='list-inside list-dis px-5'>
                   
                    <li className='flex items-cente gap-4 '> <span className='text-3xl'>&#8226;</span> 
                        <p><span className='font-semibold text-nowrap'>Timely and Accurate: </span> 
                        We ensure that your financial reports are delivered on time and with precision, helping you meet deadlines and stay on top of your business’s financial performance.

                        </p> 
                        
                    </li>
                    <li className='flex items-cente gap-4 '> <span className='text-3xl'>&#8226;</span> 
                        <p><span className='font-semibold text-nowrap'>	Peace of Mind: </span>                  With AB Accounting Services handling your tax planning and compliance, you can focus on running your business, knowing that your taxes are in expert hands.</p> 
                        
                    </li>

                    </ul>
                    </div>

                </div>

            </div>


            </section> */}
            <section className='px-5 py-20'> 
                <div className='max-w-7xl m-auto'>

                <h3 className='text-2xl text-center my-6 font-semibold '>
                Ready to Grow Your Agricultural Investments?
                </h3>
                <p className='text-center max-w-4xl m-auto font-medium text-gray-600'>

                    At NDPT, we are committed to helping you maximize your impact in Nigeria’s thriving agricultural sector. Contact us today to schedule a free consultation and discover how our tailored agricultural investment opportunities can benefit both you and the future of Nigeria’s food security.

               </p>
                </div>

            </section>

            <CTA text={"For a free consultation and learn how our investment opportunities can help you achieve your financial goals while contributing to Nigeria’s economic growth and development."}   buttonText={"Get a Free Consultation Now "}/>
        
    </div>
  )
}

export default TaxPlanning