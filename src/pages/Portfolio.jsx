import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SwiperImg1 from '../assets/swiperimage.png'
import SwiperImg2 from '../assets/project2.png'

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import Divider from '../components/Divider';


const Portfolio = () => {
  return (
      <section id='portfolio'>
        <div className='w-full h-screen flex justify-center items-center flex-col'>
           <div className='w-4/5 h-2/4  flex justify-center items-center'>
              <div className='w-full h-full bg-white'>
                  <Swiper
                    cssMode={true}
                    navigation={true}
                    pagination={true}
                    mousewheel={true}
                    keyboard={true}
                    modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                    className="mySwiper"
                  >
                    <SwiperSlide className='flex w-full h-full '>
                            <div className='w-2/4 h-full flex justify-center items-center'>
                                  
                                  <div className='h-full w-3/4 flex justify-around items-center'>
                                        <div className='flex flex-col'>
                                            <h1 className='text-2xl font-serif'>FrontEnd</h1>
                                            <p className='text-gray-600 font-serif text-start'>React-router-dom</p>
                                            <p className='text-gray-600 font-serif text-start'>React-Icons</p>
                                            <p className='text-gray-600 font-serif text-start'>Tailwind</p>
                                            <p className='text-gray-600 font-serif text-start'>FlowBite</p>
                                            <p className='text-gray-600 font-serif text-start'>Daisyui</p>
                                            <p className='text-gray-400 font-serif text-start'>TanStack</p>
                                            <p className='text-gray-400 font-serif text-start'>Axios</p>
                                            <p className='text-gray-400 font-serif text-start'>Stripe</p>
                                            <p className='text-gray-400 font-serif text-start'>Chart.js</p>
                                            <p className='text-gray-400 font-serif text-start'>SweetAlert</p>
                                            <p className='text-gray-400 font-serif text-start'>Swiper</p>
                                            <p className='text-gray-400 font-serif text-start'>React-slick</p>
                                        </div>
                                        
                                        <div className='flex flex-col'>
                                            <h1 className='text-2xl font-serif'>BackEnd</h1>
                                            <p className='text-gray-600 font-serif text-start'>React-router-dom</p>
                                            <p className='text-gray-600 font-serif text-start'>React-Icons</p>
                                            <p className='text-gray-600 font-serif text-start'>Tailwind</p>
                                            <p className='text-gray-600 font-serif text-start'>FlowBite</p>
                                            <p className='text-gray-600 font-serif text-start'>Daisyui</p>
                                            <p className='text-gray-400 font-serif text-start'>TanStack</p>
                                            <p className='text-gray-400 font-serif text-start'>Axios</p>
                                            <p className='text-gray-400 font-serif text-start'>Stripe</p>
                                            <p className='text-gray-400 font-serif text-start'>Chart.js</p>
                                            <p className='text-gray-400 font-serif text-start'>SweetAlert</p>
                                            <p className='text-gray-400 font-serif text-start'>Swiper</p>
                                            <p className='text-gray-400 font-serif text-start'>React-slick</p>
                                        </div>
                                        
                                  </div>
                                  <div className='h-full w-1/4 flex flex-col  justify-center gap-3'>
                                        <button className='btn btn-primary'>
                                          Explore 
                                        </button>
                                        <button className='btn btn-primary'>
                                          SourceCode
                                        </button>
                                  </div>
                            </div>

                            <div className='w-2/4 h-full flex-col'>
                                <img src={SwiperImg1} className='relative'/>
                            </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        Slide2
                    </SwiperSlide>
                    <SwiperSlide>Slide 3</SwiperSlide>
                    <SwiperSlide>Slide 4</SwiperSlide>
                    <SwiperSlide>Slide 5</SwiperSlide>
                    <SwiperSlide>Slide 6</SwiperSlide>
                    <SwiperSlide>Slide 7</SwiperSlide>
                    <SwiperSlide>Slide 8</SwiperSlide>
                    <SwiperSlide>Slide 9</SwiperSlide>
                  </Swiper>
                  
              </div>
           </div>

           <div className='w-4/5 h-2/4 bg-gray-100'>
              <div className='w-full h-full bg-white'>
                  <Swiper
                    cssMode={true}
                    navigation={true}
                    pagination={true}
                    mousewheel={true}
                    keyboard={true}
                    modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                    className="mySwiper"
                  >
                    <SwiperSlide className='flex w-full h-full '>
                            <div className='w-2/4 h-full flex-col'>
                                <img src={SwiperImg2} className='relative'/>
                            </div>
                            <div className='w-2/4 h-full flex justify-center items-center'>
                                  <div className='h-full w-1/4 flex flex-col  justify-center gap-3'>
                                        <button className='btn btn-primary'>
                                          Explore 
                                        </button>
                                        <button className='btn btn-primary'>
                                          SourceCode
                                        </button>
                                  </div>
                                  <div className='h-full w-3/4 flex justify-around items-center'>
                                        <div className='flex flex-col'>
                                            <h1 className='text-2xl font-serif'>FrontEnd</h1>
                                            <p className='text-gray-600 font-serif text-start'>React-Icons</p>
                                            <p className='text-gray-600 font-serif text-start'>Tailwind</p>
                                            <p className='text-gray-600 font-serif text-start'>Daisyui</p>                                     
                                            <p className='text-gray-600 font-serif text-start'>SweetAlert</p>
                                            <p className='text-gray-600 font-serif text-start'>Swiper</p>
                                            <p className='text-gray-600 font-serif text-start'>EmailJS</p>
                                            <p className='text-gray-600 font-serif text-start'>TsParticles</p>
                                        </div>
                                        
                                       
                                        
                                  </div>
                                  
                            </div>

                           
                    </SwiperSlide>
                    <SwiperSlide>
                        Slide2
                    </SwiperSlide>
                    <SwiperSlide>Slide 3</SwiperSlide>
                    <SwiperSlide>Slide 4</SwiperSlide>
                    <SwiperSlide>Slide 5</SwiperSlide>
                    <SwiperSlide>Slide 6</SwiperSlide>
                    <SwiperSlide>Slide 7</SwiperSlide>
                    <SwiperSlide>Slide 8</SwiperSlide>
                    <SwiperSlide>Slide 9</SwiperSlide>
                  </Swiper>
                  
              </div>
           </div>

          
        </div>
    </section>
  )
}

export default Portfolio