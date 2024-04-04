import React from 'react'
import Divider from '../components/Divider'
import { FaApplePay, FaArrowAltCircleRight, FaCcPaypal, FaPaypal, FaStripe } from 'react-icons/fa'

const Skills = () => {

  const handleChange = (event) => {
    alert("thank you")
  };
  return (
    <section id='skills'>
       <div className='w-full h-screen bg-gray-100 flex flex-col justify-center items-center'>
        <div className='w-full h-2/5 flex justify-center items-center'>
            <div className='w-4/5 h-full bg-white'>
                  <div className='w-5/5 flex justify-between items-center bg-white mt-20'>
                    <ul className="steps w-full z-10">
                        <li data-content="✓" className="step">
                            <div className='about_box'>
                                <i className="uil uil-check-circle about_icon text-3xl"></i>
                                <h3 className='about_title font-bold text-xl'>Completed</h3>
                                <span className='about_subtitle'>10+ Projects</span>
                                <p className='text-gray-400'>2024-Present</p>
                                <button className="btn" onClick={()=>document.getElementById('my_modal_1').showModal()}>View More</button>
                                <dialog id="my_modal_1" className="modal">
                                    <div className="modal-box">
                                      <h3 className="font-bold text-lg">Hello!</h3>
                                      <p>React Portfolio Website Tutorial - Portfolio Website Using React - React JS Portfolio Website</p>
                                      <p>Build a Fullstack E-Commerce App using Next.js 13, MongoDB, Firebase, Strapi, Tailwind CSS [2023]</p>
                                      <p></p>
                                      <p></p>
                                      <div className="modal-action">
                                        <form method="dialog">
                                          {/* if there is a button in form, it will close the modal */}
                                          <button className="btn">Close</button>
                                        </form>
                                      </div>
                                    </div>
                                </dialog>
                            </div>
                        </li>
                        <li data-content="✓" className="step">
                            <div className='about_box'>
                                <i className="uil uil-check-circle about_icon text-3xl"></i>
                                <h3 className='about_title font-bold text-xl'>Learning</h3>
                                <span className='about_subtitle'>Udemy Course 2+</span>
                                <p className='text-gray-400'>Next.js React Ultimate</p>
                                <p className='text-gray-400'>The MERN Fullstack...</p>
                                <button className="btn" onClick={()=>document.getElementById('my_modal_2').showModal()}>View More</button>
                                <dialog id="my_modal_2" className="modal">
                                    <div className="modal-box">
                                      <h3 className="font-bold text-lg">Learning Projects</h3>
                                      <p>React, NodeJS, Express & MongoDB - The MERN Fullstack Guide</p>
                                      <p>MERN From Scratch 2023 | eCommerce Platform</p>
                                      <p>The Full Stack Web Development Bootcamp 2024 - MERN STACK</p>
                                      <p>Full stack MERN Real Estate App: A Modern MERN Marketplace</p>
                                      <div className="modal-action">
                                        <form method="dialog">
                                          {/* if there is a button in form, it will close the modal */}
                                          <button className="btn">Close</button>
                                        </form>
                                      </div>
                                    </div>
                                </dialog>
                            </div>
                        </li>
                        <li  data-content="✓" className="step"> 
                            <div className='about_box'>
                                  <i className="uil uil-check-circle about_icon text-3xl"></i>
                                  <h3 className='about_title font-bold text-xl'>Project</h3>
                                  <p className='text-gray-400'>E-Commerce</p>
                                  <p className='text-gray-400'>Blog App</p>
                                  <p className='text-gray-400'>Bidding System...</p>
                                  <button className="btn" onClick={()=>document.getElementById('my_modal_3').showModal()}>View More</button>
                                  <dialog id="my_modal_3" className="modal">
                                    <div className="modal-box">
                                      <h3 className="font-bold text-lg">Projects i made</h3>
                                      <div className='flex gap-10'>
                                        <FaArrowAltCircleRight/><a href='https://www.youtube.com/watch?v=4zp06fquZdo&t=17s' className='text-green-500'>E-Commerce</a>
                                      </div>
                                      <div className='flex gap-10'>
                                        <FaArrowAltCircleRight/><a href='https://www.youtube.com/watch?v=4zp06fquZdo&t=17s' className='text-green-500'>Bidding Blog</a>
                                      </div>
                                      <div className='flex gap-10'>
                                        <FaArrowAltCircleRight/><a href='https://www.youtube.com/watch?v=4zp06fquZdo&t=17s' className='text-green-500'>Blog App</a>
                                      </div>
                                      <div className='flex gap-10'>
                                        <FaArrowAltCircleRight/><a href='https://www.youtube.com/watch?v=4zp06fquZdo&t=17s' className='text-green-500'>Rental Service</a>
                                      </div>
                                      <div className='flex gap-10'>
                                        <FaArrowAltCircleRight/><a href='https://www.youtube.com/watch?v=4zp06fquZdo&t=17s' className='text-green-500'>Workers Data</a>
                                      </div>
                                      
                                      <div className="modal-action">
                                        <form method="dialog">
                                          {/* if there is a button in form, it will close the modal */}
                                          <button className="btn">Close</button>
                                        </form>
                                      </div>
                                    </div>
                                </dialog>
                            
                            </div>
                          
                        </li>
                        <li data-content="✓" className="step">
                            <div className='about_box'>
                                <i className="uil uil-check-circle about_icon text-3xl"></i>
                                <h3 className='about_title font-bold text-xl'>Payment</h3>
                                <div className='flex  w-full flex-col items-center'>
                                  <div className='flex gap-5'>
                                      <FaStripe className='text-2xl'/><p className=''>Stripe</p><br/>
                                  </div>
                                  <div className='flex gap-5'>
                                      <FaApplePay className='text-2xl'/><p className=''>ApplePay</p><br/>
                                  </div>
                                  <div className='flex gap-5'>
                                     <FaPaypal className='text-2xl'/><p className=''>Paypal</p><br/>
                                  </div>
                                </div> 
                                <button className="btn" onClick={()=>document.getElementById('my_modal_4').showModal()}>View More</button>
                                  <dialog id="my_modal_4" className="modal">
                                    <div className="modal-box">
                                      <h3 className="font-bold text-lg">Projects i made</h3>
                                      <a href='https://www.youtube.com/watch?v=4zp06fquZdo&t=17s'>E-Commerce</a>
                                      <div className="modal-action">
                                        <form method="dialog">
                                          {/* if there is a button in form, it will close the modal */}
                                          <button className="btn">Close</button>
                                        </form>
                                      </div>
                                    </div>
                                </dialog>
                               
                            </div>
                        </li>
                    </ul>
                    
                  </div>
              </div>
        </div>

        <div className='bg-gray-100 w-full flex justify-center'>
          <div className='w-4/5 bg-white'>
              <Divider/>
          </div>
        </div>
          

          <div className='w-full h-3/5 bg-orange-500 flex justify-center items-center'>
            <div className='w-full h-full flex justify-center items-center bg-gray-100'>
                <div className='w-4/5 bg-white h-full flex justify-center items-center'>
                  
                    <div className='w-2/4 bg-white h-full'>
                      <h1 className='text-center w-full text-4xl mb-10'>Front-End</h1>
                      <div className='flex flex-col justify-around mx-20'>
                        <div className='flex w-full justify-between'>
                            <img src='https://w7.pngwing.com/pngs/201/90/png-transparent-logo-html-html5-thumbnail.png' className='w-10 h-10 rounded-full'/>
                            <h1 className='w-10 font-serif'>HTML</h1>
                            <div className="rating">
                              <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" />
                              <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" />
                              <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" />
                              <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" checked onChange={handleChange}/>
                              <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" />
                            </div>
                        </div>

                        <div className='flex w-full justify-between'>

                            <img src='https://w7.pngwing.com/pngs/696/424/png-transparent-logo-css-css3-thumbnail.png' className='w-10 h-10 rounded-full'/>
                            <h1 className='w-10 font-serif'>CSSS</h1>
                            <div className="rating">
                              <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                              <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                              <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                              <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked onChange={handleChange} />
                              <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            </div>
                        </div>
                           
                        <div className='flex w-full justify-between'>
                            <img src='https://w7.pngwing.com/pngs/793/545/png-transparent-javascript-programmer-node-js-web-application-markup-language-thumbnail.png' className='w-10 h-10 rounded-full'/>
                            <h1 className='w-10 font-serif'>JavaScript</h1>
                            <div className="rating">
                              <input type="radio" name="rating-3" className="mask mask-star-2 bg-orange-400" />
                              <input type="radio" name="rating-3" className="mask mask-star-2 bg-orange-400" />
                              <input type="radio" name="rating-3" className="mask mask-star-2 bg-orange-400" />
                              <input type="radio" name="rating-3" className="mask mask-star-2 bg-orange-400"  checked onChange={handleChange}/>
                              <input type="radio" name="rating-3" className="mask mask-star-2 bg-orange-400" />
                            </div>
                        </div>
                        
                        <div className='flex w-full justify-between'>
                            <img src='https://w7.pngwing.com/pngs/79/518/png-transparent-js-react-js-logo-react-react-native-logos-icon-thumbnail.png' className='w-10 h-10 rounded-full'/>
                            <h1 className='w-10 font-serif'>React</h1>
                            <div className="rating">
                              <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-400" />
                              <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-400" />
                              <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-400" />
                              <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-400" checked onChange={handleChange} />
                              <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-400" />
                            </div>
                        </div>
                        
                        <div className='flex w-full justify-between'>
                            <img src='https://w7.pngwing.com/pngs/293/485/png-transparent-tailwind-css-hd-logo.png' className='w-10 h-10 rounded-full'/>
                            <h1 className='w-10 font-serif'>Tailwind</h1>
                            <div className="rating w-100">
                              <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                              <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                              <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                              <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" checked onChange={handleChange}/>
                              <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                            </div>
                        </div>
                        

                        <div className='flex w-full justify-between'>
                            <img src='https://w7.pngwing.com/pngs/1021/477/png-transparent-react-native-javascript-mobile-app-development-github-symmetry-mobile-app-development-electric-blue.png' className='w-10 h-10 rounded-full' />
                            <h1 className='w-10 font-serif'>React Native</h1>
                            <div className="rating w-100">
                              <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                              <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                              <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                              <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" checked onChange={handleChange} />
                              <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                            </div>
                        </div>
                      </div>
                        
                    </div>


                    <div className='w-2/4 bg-white h-full'>
                      
                        <h1 className='text-center w-full text-4xl mb-10'>Back-End</h1>
                        <div className='flex flex-col justify-around mx-20'>
                        <div className='flex w-full justify-between'>
                            <img src='https://e7.pngegg.com/pngimages/306/37/png-clipart-node-js-logo-node-js-javascript-web-application-express-js-computer-software-others-miscellaneous-text-thumbnail.png' className='w-10 h-10 rounded-full'/>
                            <h1 className='w-10 font-serif'>NodeJS</h1>
                            <div className="rating">
                              <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                              <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                              <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                              <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" checked onChange={handleChange} />
                              <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                            </div>
                        </div>

                        <div className='flex w-full justify-between'>
                            <img src='https://w7.pngwing.com/pngs/846/87/png-transparent-mean-solution-stack-express-js-node-js-javascript-github-text-trademark-logo.png' className=' rounded-full w-10 h-10'/>
                            <h1 className='w-10 font-serif'>ExpressJS</h1>
                            <div className="rating">
                              <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
                              <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
                              <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
                              <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" checked onChange={handleChange} />
                              <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
                            </div>
                        </div>
                           
                        <div className='flex w-full justify-between'>
                            <img src='https://w7.pngwing.com/pngs/429/921/png-transparent-mongodb-plain-wordmark-logo-icon.png' className='w-10 h-10 rounded-full'/>
                            <h1 className='w-10 font-serif'>MongoDB</h1>
                            <div className="rating">
                              <input type="radio" name="rating-9" className="mask mask-star-2 bg-orange-400" />
                              <input type="radio" name="rating-9" className="mask mask-star-2 bg-orange-400" />
                              <input type="radio" name="rating-9" className="mask mask-star-2 bg-orange-400" />
                              <input type="radio" name="rating-9" className="mask mask-star-2 bg-orange-400" checked onChange={handleChange}/>
                              <input type="radio" name="rating-9" className="mask mask-star-2 bg-orange-400" />
                            </div>
                        </div>
                        
                        <div className='flex w-full justify-between'>
                            <img src='https://w7.pngwing.com/pngs/751/3/png-transparent-logo-php-html-others-text-trademark-logo-thumbnail.png' className=' rounded-full w-10 h-10'/>
                            <h1 className='w-10 font-serif'>PHP</h1>
                            <div className="rating">
                              <input type="radio" name="rating-10" className="mask mask-star-2 bg-orange-400" />
                              <input type="radio" name="rating-10" className="mask mask-star-2 bg-orange-400" />
                              <input type="radio" name="rating-10" className="mask mask-star-2 bg-orange-400" />
                              <input type="radio" name="rating-10" className="mask mask-star-2 bg-orange-400" checked onChange={handleChange}  />
                              <input type="radio" name="rating-10" className="mask mask-star-2 bg-orange-400" />
                            </div>
                        </div>
                        
                        <div className='flex w-full justify-between'>
                            <img src='https://e7.pngegg.com/pngimages/747/798/png-clipart-mysql-mysql-thumbnail.png' className='w-10 h-10 rounded-full'/>
                            <h1 className='w-10 font-serif'>MySQL</h1>
                            <div className="rating w-100">
                              <input type="radio" name="rating-11" className="mask mask-star-2 bg-orange-400" />
                              <input type="radio" name="rating-11" className="mask mask-star-2 bg-orange-400" />
                              <input type="radio" name="rating-11" className="mask mask-star-2 bg-orange-400" />
                              <input type="radio" name="rating-11" className="mask mask-star-2 bg-orange-400" checked onChange={handleChange} />
                              <input type="radio" name="rating-11" className="mask mask-star-2 bg-orange-400" />
                            </div>
                        </div>
                        

                        <div className='flex w-full justify-between'>
                            <img src='https://w7.pngwing.com/pngs/246/288/png-transparent-firebase-hd-logo.png' className='w-10 h-10 rounded-full'/>
                            <h1 className='w-10 font-serif'>FireBase</h1>
                            <div className="rating w-100">
                              <input type="radio" name="rating-12" className="mask mask-star-2 bg-orange-400" />
                              <input type="radio" name="rating-12" className="mask mask-star-2 bg-orange-400" />
                              <input type="radio" name="rating-12" className="mask mask-star-2 bg-orange-400" />
                              <input type="radio" name="rating-12" className="mask mask-star-2 bg-orange-400" checked onChange={handleChange} />
                              <input type="radio" name="rating-12" className="mask mask-star-2 bg-orange-400" />
                            </div>
                        </div>
                      </div>
                     
                    
                    </div>
                </div>
            </div>
          </div>

      </div>
    </section>
  )
}

export default Skills