import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './Main.css'
import HomePage from './HomePage'
import ScrollUp from './ScrollUp'

const Main = () => {

  return (
    <>
        <Navbar/>
        <div>
            <HomePage/>
        </div>
        <Footer/>
        <ScrollUp/>
    </>
  )
}

export default Main