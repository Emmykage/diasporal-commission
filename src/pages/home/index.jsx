import React from 'react'
import Nav from '../../components/nav/Nav'
import './home.scss'
import Services from './services/Services'
import Slider from '../../components/heroBanner/Slider'
import WWAImage from '../../assets/images/about/images-1-8.jpg'
import experts from '../../assets/images/home/account-experts.jpg'
import Capabilities from '../../components/capabilities/Capabilities'

const Home = () => {
  return (
    <div className='home'>
        <Nav/>
        <Slider/>

        <section className='py-20 px-4'>
            <div className='m-auto max-w-3xl text-center'>
                <h3 className='text-xl md:text-2xl px-3 py-2 w-max m-auto font-medium border-alt border-[4px]'>Welcome to Nigeria Diaspora Project Trust (NDPT)   <span className='font-semibold'></span></h3>
                <p className='italic'>Empowering Nigerians in the Diaspora to Invest, Build, and Own </p>
                <p className='text-black mt-4'> 
                    At Nigeria Diaspora Project Trust (NDPT), we believe in the power of connection—between 
                    Nigerians living abroad and the immense investment opportunities at home. Our mission is to 
                    provide a secure and reliable platform for Nigerians in the Diaspora to invest in high
                    potential sectors such as Agriculture, Real Estate, Industry, and Mining, fostering economic 
                    growth and long-term wealth creation.              
                </p>
            </div>

            <Services/>

            


        </section>

        
  <section className='px-5'>
    <div className='max-w-5xl m-auto text-center '>
        <p className='text-gray-600 font-medium leading-7'>
        NDPT is a ‘keep-safe’ mechanism designed to help Nigerians in Diaspora pursue their dream projects, investments, and other financial transactions back home in Nigeria, without tears having completely eliminated fraud and doubt that often bedevil the projects of Nigerians in Diaspora. Now Diasporans can have their projects run smoothly and transparently without the pressure to be physically present in Nigeria in order for the work to move along. NDPT facilitates transnational transactions, engagements and networking as bridge builders, based on our deep understanding of the operating environment. NDPT guarantees that value is procured to the last sum in every transaction.
        Want a solution like this?
        </p>



  </div>

  </section>
        <section className='who-we-are py-24 px-4'>
            <div className='grid gap-10 rounded shadow items-center bg-white md:grid-cols-2 max-w-7xl m-auto'>
                <div className='wwa-image p-4'>
                    <img src={WWAImage} alt="" />


                </div>

                <div className='wwa-text p-3'>
                    <h3 className='font-semibold text-2xl uppercase mb-10'>Our Vision 
                    </h3>
                    <p>
                    To empower Nigerians in the Diaspora to invest in their home country, creating wealth, 
                    building sustainable industries, and strengthening Nigeria's economy. 
                    </p>

                </div>
            </div>
        </section>

        <section className='py-20 px-5'>
            <div className='m-auto max-w-3xl text-center'>
                    <h3 className='text-2xl md:text-6xl px-3 py-2 w-max m-auto font-normal border-alt border-[4px]'>Our <span className='font-semibold'>Capabilities</span></h3>
                    <p className='text-black mt-4'>
                    At Nigeria Diaspora Project Trust (NDPT), we harness the power and potential of the Nigerian diaspora to create meaningful and sustainable development in Nigeria. Our broad capabilities span across a variety of sectors, enabling impactful contributions to the country's growth and progress
                    </p>
            </div>

           
           <Capabilities/>

        </section>
        
  <section className="bg-gray-950 text-white py-20 px-10 mission-section" >
    <div className="mx-auto max-w-7xl flex flex-col md:flex-row justify-between text-center">
      <div>
        <div className="bg-yellow-600 w-16 mx-auto h-16 flex items-center justify-center rounded-full">
          <span>
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="2rem" width="2rem" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke-linejoin="round" stroke-width="32" d="M408 64H104a56.16 56.16 0 0 0-56 56v192a56.16 56.16 0 0 0 56 56h40v80l93.72-78.14a8 8 0 0 1 5.13-1.86H408a56.16 56.16 0 0 0 56-56V120a56.16 56.16 0 0 0-56-56z"></path></svg>
          </span>

        </div>

        <h4 className="text-center my-4 text-3xl">
          Our Vision
        </h4>
        <p className="max-w-xl m-auto px-4 text-base ">
        To empower Nigerians in the Diaspora to invest in their home country, creating wealth, 
        building sustainable industries, and strengthening Nigeria's economy. 
        </p>
        <div className="relative">

        <a href="#" className="link relative  my-10 block  after:h-2 after:bg-gray-500 w-max m-auto py-4 ">Find Out More</a>
      </div>        </div>
      <div>
        <div className="bg-yellow-600 w-16 mx-auto h-16 flex items-center justify-center rounded-full">
          <span>
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="2rem" width="2rem" xmlns="http://www.w3.org/2000/svg"><path d="M3.5 8a5.5 5.5 0 1 1 8.596 4.547 9.005 9.005 0 0 1 5.9 8.18.751.751 0 0 1-1.5.045 7.5 7.5 0 0 0-14.993 0 .75.75 0 0 1-1.499-.044 9.005 9.005 0 0 1 5.9-8.181A5.496 5.496 0 0 1 3.5 8ZM9 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm8.29 4c-.148 0-.292.01-.434.03a.75.75 0 1 1-.212-1.484 4.53 4.53 0 0 1 3.38 8.097 6.69 6.69 0 0 1 3.956 6.107.75.75 0 0 1-1.5 0 5.193 5.193 0 0 0-3.696-4.972l-.534-.16v-1.676l.41-.209A3.03 3.03 0 0 0 17.29 8Z"></path></svg>
          </span>

        </div>

        <h4 className="text-center my-4 text-3xl">
        Our Mission 

        </h4>
        <p className="max-w-xl m-auto px-4 text-base ">
NDPT exists to bridge the gap between Diaspora Nigerians and local investment 
opportunities, ensuring secure, professionally-managed projects that deliver value and 
contribute to national growth. 

        </p>
        <div className="relative">

        <a href="#" className="link relative  my-10 block  after:h-2 after:bg-gray-500 w-max m-auto py-4 ">Find Out More</a>
      </div>        </div>


      
    </div>
  </section>

        <section>
            <div className='grid gap-6 md:grid-cols-2 p-5 max-w-7xl m-auto '>
            <div>
                <img src={experts} alt="" className='w-full rounded-xl'/>
            </div>
            <div> 
                <h3 className='text-4xl font-semibold'>Empowering the Diaspora to Make a Lasting Impact


                </h3>
                <p className='my-6'>
                We understand that making a meaningful impact from abroad can be challenging, but with Nigeria Diaspora Project Trust (NDPT), you're empowered to make a difference. Our services are designed to streamline your involvement in Nigeria’s development, foster collaboration, and maximize the impact of your contributions—whether through investment, mentorship, or community support. NDPT is here to help you bridge the gap, ensuring that your efforts lead to sustainable growth and positive change in Nigeria.                    </p>
            </div>
            </div>
        </section>

    </div>
  )
}

export default Home