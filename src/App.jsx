import { useState } from 'react'

import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Footer from './components/footer/Footer'
import About from './pages/about'
import Services from './pages/services/Services'
import Contact from './pages/contact'
import Blog from './pages/blog'
import BookApointment from './pages/book-appointment'
import BookkeepingPayroll from './pages/services/real-estate'
import BusinessConsultancy from './pages/services/resources'
import FinancialReporting from './pages/services/industrial-investment'
import TaxPlanning from './pages/services/opportunities'
import BlogPost from './pages/blog/blogPost/BlogPost'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about-us' element={<About/>}/>
          <Route path='/services' element={<Services/>}/>
          <Route path='/contact-us' element={<Contact/>}/>
          <Route path="/Blog" element={<Blog/>}/>
          <Route path="/blog-post/:id" element={<BlogPost/>}/>
          
          <Route path='/book-appointment' element={<BookApointment/>}/>
          <Route path='/real-estate' element={<BookkeepingPayroll/>}/>
          <Route path='/mining-natural-resources' element={<BusinessConsultancy/>}/>
          <Route path='/industrial-investments' element={<FinancialReporting/>}/>
          <Route path='/investment-opportunities' element={<TaxPlanning/>}/>
        </Routes>

        <Footer/>
                        
      </div>
     
    </>
  )
}

export default App
