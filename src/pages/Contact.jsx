import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { MdOutlineEmail } from "react-icons/md";
import Swal from 'sweetalert2';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_wo70vfa', 'template_4yeuje2', form.current, {
        publicKey: 'rmdV-GkECzay7RnVP',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          e.target.reset()
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Email Sent Successfully",
            showConfirmButton: false,
            timer: 1500
          });
        },
        (error) => {
          console.log('FAILED...', error.text);
          e.target.reset()
        },
      );
  };
  return (
    <section>
    <div className='w-full h-screen flex justify-center items-center'>
      <div className='w-4/5 h-full bg-white flex justify-between items-center'>
          <div className='w-2/4 h-full  flex justify-center items-center '>
              <div className='w-full flex-col flex justify-center items-center h-full' id='sendemail'>
                    
                    <form className='w-full h-2/4 flex items-center flex-col gap-10' ref={form} onSubmit={sendEmail}>
                      <h1 className='font-bold text-4xl font-serif'>Lets work Together!</h1>
                        <div className=' w-4/6 h-10 flex flex-col border-2 border-indigo-400 rounded-xl'>
                            <label className=''></label>
                            <input type='text' name='name' className='rounded-xl h-full text-center' placeholder='Insert your name' defaultChecked/>
                        </div>

                        <div className=' w-4/6 h-10 flex flex-col border-2 border-indigo-400 rounded-xl'>
                            <label className=''></label>
                            <input type='email' name='email' className='rounded-xl h-full text-center' placeholder='Insert your email' defaultChecked/>
                        </div>

                        <div className=' w-4/6 h-20 flex flex-col border-2 border-indigo-400 rounded-xl'>
                            <label className=''></label>
                            <textarea type='text' name='project' rows='10' className='resize-none rounded-xl text-center'  defaultChecked placeholder='Write your text '></textarea>
                        </div>
                        <div className=' w-4/6 flex flex-col'>
                            <button className='btn btn-primary  text-white w-full rounded-full'>
                                Send Message
                            </button>
                        </div>
                    </form>

                   
              </div>
          </div>
          <div className='w-2/4 h-full  flex flex-col justify-center items-center' id='contact'>
              <div className='w-full h-2/4 '>
                    <div className='flex justify-center items-center w-full h-full flex-col'>
                        <h1 className='font-bold text-4xl font-serif mb-5'>Contact me</h1>
                        <div className='w-3/4 h-1/6 bg-white'>
                              <div className='flex flex-start gap-10 items-center'>
                                  <MdOutlineEmail className='font-base text-primary'/>
                                  <h3 className='font-serif'>Email: </h3>
                                  <span className='contact_card-data'>monkhsaikhan01@gmail.com</span>

                                  <a href='mailto:monkhsaikhan01@gmail.com' className='underline'>Link

                                  </a>
                              </div>
                        </div>
                        <div className='w-3/4 h-1/6 bg-white'>
                              <div className='flex flex-start gap-10  items-center'>
                                  <MdOutlineEmail className='font-base text-primary'/>
                                  <h3 className='font-serif'>PhoneNumber: </h3>
                                  <span className='font-serif'>99669660</span>

                                  <a href='mailto:monkhsaikhan01@gmail.com' className='underline'>Link
                                      
                                  </a>
                              </div>
                        </div>
                        <div className='w-3/4 h-1/6 bg-white'>
                              <div className='flex flex-start gap-10  items-center'>
                                  <MdOutlineEmail className='font-base text-primary'/>
                                  <h3 className='font-serif'>Messenger: </h3>
                                  <span className='contact_card-data'>/Munkhsaikhan123</span>

                                  <a href='https://www.facebook.com/munkhsaikhanbaatar123' className='underline'>Link
                                      
                                  </a>
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


export default Contact