import { useState } from 'react'
import './index.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import Sidebar from './Components/Sidebar'
import Gallery from './Components/Gallery';
import Portfolio from './Components/Portfolio';
import { Vedioediter } from './Components/PortfolioComponents/Vedioediter';
import { Photographer } from './Components/PortfolioComponents/Photographer';
import { Contentcreater } from './Components/PortfolioComponents/Contentcreater';
import { Services } from './Components/Services';
import { All } from './Components/PortfolioComponents/All';
import { Skills } from './Components/About-component/Skills/Skills';
import { Experience } from './Components/About-component/Experience/Experience';

import { Education } from './Components/About-component/Education/Education';





function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <div className='main'>
        <div className='sidebar'>
          <Sidebar />
        </div>
        <div className='drawer'>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/about' element={<About />}>
              <Route index element={<Skills />} />
              <Route path="education" element={<Education />} />
              <Route path="experience" element={<Experience />} />
             
            </Route>
            <Route path='/services' element={<Services />}></Route>
            <Route path='/portfolio' element={<Portfolio />}>
              <Route index element={<All />} />
              <Route path="video-editing" element={<Vedioediter />} />
              <Route path="photo-shooting" element={<Photographer />} />
              <Route path="contents" element={<Contentcreater />} />
            </Route>
            <Route path='/contact' element={<Contact />}></Route>
            <Route path='/gallery' element={<Gallery />}></Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>


  )
}

export default App
