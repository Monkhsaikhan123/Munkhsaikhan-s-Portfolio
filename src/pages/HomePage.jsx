import React from 'react'
import About from './About'
import Portfolio from './Portfolio'
import Skills from './Skills'
import Contact from './Contact'
import './Main.css'
import Divider from '../components/Divider'

const HomePage = () => {
  return (
    <section>
        <About/>
        <Skills/>
        <Portfolio/>
       
       <Contact/>
    </section>
      
   
  )
}

export default HomePage