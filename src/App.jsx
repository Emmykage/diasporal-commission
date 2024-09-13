import { useState } from 'react'

import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Footer from './components/footer/Footer'
import About from './pages/about'
import Services from './pages/services/Services'
import Contact from './pages/contact'
import Blog from './pages/blog'

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

        </Routes>

        <Footer/>
                        
      </div>
     
    </>
  )
}

export default App
