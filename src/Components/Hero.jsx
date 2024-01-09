import React, { useRef } from 'react'
import hero from '../assets/bg.jpg'
import a from '../assets/1.png'
import b from '../assets/2.png'
import c from '../assets/3.png'
import { motion, useScroll, useTransform } from 'framer-motion'
import Nav from './Nav'



const Hero = () => {

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const ay = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const bx = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const cx = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const heroscale = useTransform(scrollYProgress, [0, 1], ["100%", "120%"]);



  return (<>
    <Nav />


    <div ref={ref} id='home' className='relative w-full h-[100vh] overflow-hidden'>

      <div className=' h-full w-full herobg absolute  bg-cover' >
        <motion.img
          style={{ scale: heroscale }}
          transition={{ duration: 1 }}
          src={hero} className='object-cover w-full absolute h-[100vh]' alt="" />
        <motion.img
          style={{ y: ay }}
          variants={{
            hidden: { opacity: 1, y: 70 },
            visible: { opacity: 1, y: 0 }
          }}
          initial='hidden'
          animate='visible'
          transition={{ duration: 1 }}
          src={a} className=' sm:w-full min-w-[700px] xs:left-0 left-[-90px] w-[100vw]  z-40 absolute h-auto bottom-0' alt="" />
        <motion.img
          style={{ x: bx }}
          variants={{
            hidden: { opacity: 1, x: -70 },
            visible: { opacity: 1, x: 0 }
          }}
          initial='hidden'
          animate='visible'
          transition={{ duration: 1 }}
          src={b} className='object-cover w-full absolute ' alt="" />
        <motion.img
          style={{ y: ay, x: cx }}
          variants={{
            hidden: { opacity: 1, x: 70, y: 30 },
            visible: { opacity: 1, x: 0, y: 0 }
          }}
          initial='hidden'
          animate='visible'
          transition={{ duration: 1 }}
          src={c} className='object-cover w-full absolute h-[100vh]' alt="" />
        <div className=' absolute h-[100vh] w-full z-40 vignet'></div>
        <div className='absolute top-0 left-0 flex flex-col justify-between  h-full w-full z-40'>
          <h2 className='w-full text-center herotext mt-[25vh] sm:text-[90px] text-[48px] tshad font-dm'>Mudberry Studio.</h2>
          <p className='text-[#fefeff] max-w-[700px] w-full mx-auto px-6 sm:mt-6 mb-20 sm:mb-0 xs:z-auto z-10 sm:text-[24px] text-center text-[18px] font-extralight tshad'>Where every touch of clay is a journey into boundless creativity. Our studio is more than a space</p>
          <motion.p
          initial='hidden'
          variants={{
            hidden:{opacity:0,y:10},
            visible:{opacity:1,y:0}
          }}
          animate='visible'
          transition={{duration:2}}
          
          className='text-[#fefeff] w-full mx-auto px-6 my-6 xs:z-auto z-50 sm:text-[18px] font-poppins tshad font-light text-center text-[16px] typewriter'>Join us in shaping moments, one masterpiece at a time.</motion.p>

          

        </div>
      </div>
    </div>
  </>
  )
}

export default Hero