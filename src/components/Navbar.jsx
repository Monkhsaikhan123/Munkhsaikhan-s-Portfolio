import React, { useEffect, useState } from 'react'
import './Navbar.css'

const Navbar = () => {
  const [activeNav, setActiveNav] = useState('#');

  useEffect(() => {
    const handleScroll = () => {
      const scrollUp = document.querySelector('.header');
      if (window.scrollY >= 80) {
        scrollUp.classList.add("scroll-header");
      } else {
        scrollUp.classList.remove("scroll-header");
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  

  return (
    <header className='header'>
    <div className='fixed top-0 z-20 w-full flex justify-center nav_container bg-gray-100'>
      <div className="navbar bg-base-100 w-4/5 flex justify-between">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl font-serif">Munkhsaikhan's Portfolio Web</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li><a href='#'  onClick={() => setActiveNav('#home')} className={activeNav === "#home" ? "nav_link active-link" : "nav-link"} >Home</a></li>
            <li><a href='#skills'  onClick={() => setActiveNav('#skills')} className={activeNav === "#skills" ? "nav_link active-link" : "nav-link"}>Skills</a></li>
            <li><a href='#portfolio' onClick={() => setActiveNav('#portfolio')}  className={activeNav === "#portfolio" ? "nav_link active-link" : "nav-link"} >Portfolio</a></li>
            <li><a href='#about' onClick={() => setActiveNav('#about')} className={activeNav === "#about" ? "nav_link active-link" : "nav-link"}>About</a></li>
            <li><a href='#contact' onClick={() => setActiveNav('#contact')} className={activeNav === "#contact" ? "nav_link active-link" : "nav-link"}>Contact</a></li>
          </ul>
        </div>

        <div>
          <a href='#sendemail' onClick={() => setActiveNav('#sendemail')} className={activeNav === "#sendemail" ? "nav_link active-button" : "nav-link"}><button className='btn btn-primary'>Send Email</button></a>
        </div>
      </div>
    </div>
  </header>
    
  )
}

export default Navbar