import React from 'react'
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo, useState } from "react";
// import { loadAll } from "@/tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
import HomePage from './HomePage';
import './About.css'
// import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.
import IMG from '../assets/avatar5.jpg'
import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";

const About = (props) => {
  const [init, setInit] = useState(false);
  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      await loadSlim(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: " #FAFAFA",
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "grab",
          },
          onHover: {
            enable: true,
            mode: 'push',
          },
        },
        modes: {
          push: {
            distance: 200,
            duration: 15,
          },
          grab: {
            distance: 150,
          },
        },
      },
      particles: {
        color: {
          value: "#000000",
        },
        links: {
          color: "#808080",
          distance: 150,
          enable: true,
          opacity: 0.3,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: true,
          speed: 1,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 150,
        },
        opacity: {
          value: 1.0,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 3 },
        },
      },
      detectRetina: true,
    }),
    [],
  );

  return (
    <div className='w-full h-screen bg-gray-100 about_container'  id='about'>
      <div className='flex w-full h-full bg-gray-white justify-center'>
        <div className='flex justify-center flex-col items-center bg-white w-2/5 h-full gap-6'>
          <div className='w-4/5 h-1/5'>
            <h2 className='text-orange-500 text-4xl'>Hello</h2>
            <h2 className='text-4xl mt-4 mb-4'>My Name is <span className='text-green-500'>Munkhsaikhan Baatar </span></h2>
            <p className=''>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque, ea odio. Odit laborum quam odio quo consequatur harum exercitationem aperiam?</p>
          </div>
         <div className='w-4/5'>
          <button className='btn btn-active btn-accent z-10'>Download CV</button>
  
         </div>
           
          <div className='w-4/5 flex  gap-3'>
            <button className='btn btn-active btn-accent rounded-full'><FaInstagram className='w-3/5 h-4/5'/></button>
            <button className='btn btn-active btn-accent rounded-full'><FaFacebook className='w-3/5 h-4/5'/></button>
            <button className='btn btn-active btn-accent rounded-full '><FaGithub  className='w-3/5 h-4/5'/></button>
          </div>


        </div>
        <div className='flex justify-center items-center w-2/5 h-full bg-white'>
          <div className='w-4/5 h-4/5 flex justify-center items-center img_about'>
            <img src={IMG}/>
          </div>
           
        </div>
      </div>
      <Particles id={props.id} init={particlesLoaded} options={options} className='particles'/>
      
    </div>
  )
}

export default About