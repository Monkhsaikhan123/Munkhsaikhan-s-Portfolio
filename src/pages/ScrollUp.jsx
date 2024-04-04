import React, { useEffect } from 'react'

const ScrollUp = () => {
    useEffect(() => {
        const handleScroll = () => {
          const scrollUp = document.querySelector('.scrollup');
          if (window.scrollY >= 560) {
            scrollUp.classList.add("show-scroll");
          } else {
            scrollUp.classList.remove("show-scroll");
          }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        // Cleanup
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []); 

      const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      };
    
  return (
    <a href='#' className='scrollup' onClick={scrollToTop}>
      <i className='uil uil-arrow-up scrollup_icon'></i>
    </a>
  )
}

export default ScrollUp