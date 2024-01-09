import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaWhatsapp } from "react-icons/fa";

import curve from '../assets/curve2.svg'
// import c2 from '../assets/c2.JPG'
// import c3 from '../assets/c3.JPG'

const Activities = () => {

  const [modal, setmodal] = useState(false)

  const [open1, setopen1] = useState(false)
  const handler1 = () => {
    setopen1(!open1)
    setopen2(false)
    setopen3(false)
  }

  const [open2, setopen2] = useState(false)
  const handler2 = () => {
    setopen2(!open2)
    setopen1(false)
    setopen3(false)
  }

  const [open3, setopen3] = useState(false)
  const handler3 = () => {
    setopen3(!open3)
    setopen2(false)
    setopen1(false)
  }

  const modalhandler = () => {
    setmodal(!modal);
  }

  return (
    <div id='act' className='flex flex-col justify-center items-center mb-20'>
      <img src={curve} className='w-full sm:hidden dropshad' alt="" />
      <h1 className='sm:text-[64px] text-[32px] mt-8 pb-3 font-rowdies'>Activities</h1>

      <motion.div layout className={`w-full text-white flex sm:flex-row flex-col justify-center items-center gap-6 font-poppins h-full px-6`}>




        <motion.div layout transition={{ layout: { type: 'spring' } }} onClick={handler1} className={`cursor-pointer  w-fit h-[80%] ${open1 ? 'flex-col sm:w-[500px]' : 'flex-row  '}   card1 rounded-3xl flex overflow-hidden p-4`}>
          <motion.div layout='position' className={`${open1 ? 'w-full h-fit' : 'w-[250px] h-full'} flex flex-col p-2 items-center  `}>
            <motion.h2 layout='position' className='sm:text-[26px] text-[20px] font-medium py-12'> Hand Building Techniques for Pottery</motion.h2>
            <motion.p layout='position' className='text-white sm:text-[16px] text-[14px]'>Dive into the world of pottery with our ongoing course. Ideal for beginners and those with a creative mindset.</motion.p>
            {
              !open1 &&
              <p className='sm:mt-[130px] mt-6 sm:text-[16px] text-[14px]'>Click to get more info</p>
            }
          </motion.div>
          {
            open1 &&
            <motion.div className='p w-full h-full flex flex-col p-2 items-center justify-between'>
              <p className='sm:text-[16px] text-[14px]'>This course explores hand building techniques. No need for expensive equipment—just your hands, basic tools, and the joy of creation.
                <br />
                Target Audience: Open to individuals of all ages and backgrounds, including students, sculptors, homemakers, and anyone seeking a fun and creative experience.</p>
                <a
                href="https://wa.me/9033282230?text=Hi%20Mudberry%20Studio%21%20%F0%9F%91%8B%20I%27m%20interested%20in%20the%20%22Hand%20Building%20Techniques%20for%20Pottery%22%20course.%20%F0%9F%8F%BA%20Can%20you%20provide%20more%20details%20on%20schedule%20and%20enrollment%3F%20%F0%9F%A4%94%0A"
                  className="group relative px-4 py-2 font-medium hover:text-green-400 text-slate-100 transition-colors duration-[400ms] my-4" >
                  <span className="flex items-center ">Book now <FaWhatsapp className="text-[22px]  ml-2" /></span>
                  <span className="absolute left-0 top-0 h-[2px] w-0 bg-white transition-all duration-100 group-hover:w-full" />
                  <span className="absolute right-0 top-0 h-0 w-[2px] bg-white transition-all delay-100 duration-100 group-hover:h-full" />
                  <span className="absolute bottom-0 right-0 h-[2px] w-0 bg-white transition-all delay-200 duration-100 group-hover:w-full" />
                  <span className="absolute bottom-0 left-0 h-0 w-[2px] bg-white transition-all delay-300 duration-100 group-hover:h-full" />
                </a>
            </motion.div>
          }
        </motion.div>




        <motion.div layout transition={{ layout: { type: 'spring' } }} onClick={handler2} className={`cursor-pointer  w-fit h-[80%] ${open2 ? 'flex-col sm:w-[500px]' : 'flex-row  '}  card2 rounded-3xl flex overflow-hidden p-4`}>
          <motion.div layout='position' className={`${open2 ? 'w-full h-fit' : 'w-[250px] h-full'} flex flex-col p-2 items-center  `}>
            <motion.h2 layout='position' className='sm:text-[26px] text-[20px] font-medium py-12'>  Pottery and Ceramic Introduction Course</motion.h2>
            <motion.p layout='position' className='text-white sm:text-[16px] text-[14px]'>Embark on a one-month journey of comprehensive exploration. Learn pottery wheel and hand-building techniques, including coiling, slab building, and pinching. </motion.p>
            {
              !open2 &&
              <p className='sm:mt-[130px] mt-6 sm:text-[16px] text-[14px]'>Click to get more info</p>
            }
          </motion.div>
          {
            open2 &&
            <motion.div className=' w-full h-full flex flex-col p-2 items-center justify-between p'>
              <p className='sm:text-[16px] text-[14px]'>This course explores hand building techniques. No need for expensive equipment—just your hands, basic tools, and the joy of creation.
                <br />
                Target Audience: Open to individuals of all ages and backgrounds, including students, sculptors, homemakers, and anyone seeking a fun and creative experience.</p>
                <a
                href="https://wa.me/9033282230?text=Hello%20Mudberry%20Studio%21%20%F0%9F%91%8B%20I%27m%20intrigued%20by%20the%20%22Pottery%20and%20Ceramic%20Introduction%20Course.%22%20%F0%9F%8E%A8%20Can%20you%20share%20details%20like%20schedule%2C%20fees%2C%20and%20what%20the%20course%20covers%3F%20%F0%9F%A4%94%0A"
                  className="group relative px-4 py-2 font-medium hover:text-green-400 text-slate-100 transition-colors duration-[400ms] my-4" >
                  <span className="flex items-center ">Book now <FaWhatsapp className="text-[22px]  ml-2" /></span>
                  <span className="absolute left-0 top-0 h-[2px] w-0 bg-white transition-all duration-100 group-hover:w-full" />
                  <span className="absolute right-0 top-0 h-0 w-[2px] bg-white transition-all delay-100 duration-100 group-hover:h-full" />
                  <span className="absolute bottom-0 right-0 h-[2px] w-0 bg-white transition-all delay-200 duration-100 group-hover:w-full" />
                  <span className="absolute bottom-0 left-0 h-0 w-[2px] bg-white transition-all delay-300 duration-100 group-hover:h-full" />
                </a>

  
            </motion.div>
          }
        </motion.div>






        <motion.div layout transition={{ layout: { type: 'spring' } }} onClick={handler3} className={`cursor-pointer  w-fit h-[80%] ${open3 ? 'flex-col sm:w-[500px]' : 'flex-row  '}  card3 rounded-3xl flex overflow-hidden p-4`}>
          <motion.div layout='position' className={`${open3 ? 'w-full h-fit' : 'w-[250px] h-full'} flex flex-col p-2 items-center  `}>
            <motion.h2 layout='position' className='sm:text-[26px] text-[20px] font-medium py-12'> Private Pottery Sessions
            </motion.h2>
            <motion.p layout='position' className='text-white sm:text-[16px] text-[14px]'>Immerse yourself in a one-hour clay session crafted to help you complete a unique clay creation.</motion.p>
            {
              !open3 &&
              <p className='sm:mt-[130px] mt-6 sm:text-[16px] text-[14px]'>Click to get more info</p>
            }
          </motion.div>
          {
            open3 &&
            <motion.div className=' text-white w-full h-full flex flex-col p-2 items-center justify-between'>
              <p className='sm:text-[16px] text-[14px]'>Covering hand-built techniques, pinching, and personalization, each session includes the first bisque firing. Materials and tools are provided.
                <br />
                Pricing: ₹1000 per person, with discounted rates for groups (minimum of 4 participants) and larger groups of 9 or more</p>
              <div className='flex gap-2'>

                <button onClick={modalhandler}>Pricing details</button>
                <a
                href="https://wa.me/9033282230?text=Hi%20Mudberry%20Studio%21%20%F0%9F%91%8B%20I%27m%20looking%20to%20book%20a%20private%20pottery%20session.%20%F0%9F%8C%9F%20Can%20you%20share%20availability%2C%20pricing%2C%20and%20any%20additional%20details%20I%20should%20know%3F%20%F0%9F%A4%94%0A%0A"
                  className="group relative px-4 py-2 font-medium hover:text-green-400 text-slate-100 transition-colors duration-[400ms] my-4" >
                  <span className="flex items-center ">Book now <FaWhatsapp className="text-[22px]  ml-2" /></span>
                  <span className="absolute left-0 top-0 h-[2px] w-0 bg-white transition-all duration-100 group-hover:w-full" />
                  <span className="absolute right-0 top-0 h-0 w-[2px] bg-white transition-all delay-100 duration-100 group-hover:h-full" />
                  <span className="absolute bottom-0 right-0 h-[2px] w-0 bg-white transition-all delay-200 duration-100 group-hover:w-full" />
                  <span className="absolute bottom-0 left-0 h-0 w-[2px] bg-white transition-all delay-300 duration-100 group-hover:h-full" />
                </a>
              </div>
            </motion.div>
          }
        </motion.div>


      </motion.div>
      {
        modal &&
        <motion.div layout='position' className='shad sm:w-[800px] w-[80%]  flex flex-col items-center font-rowdies p-6 rounded-2xl py-10 text-white bg-[#edededdf] z-5 modal'>
          <h1 className='sm:text-[30px] text-[#131312] text-[24px] sm:pb-6 pb-2 w-full text-center'>Private Pottery Sessions</h1>
          <p className='font-poppins flex flex-col sm:text-[16px] text-[14px] items-center text-[#373d3f]'>
            <span className='p-1 sm:m-3 m-2 bg-[#737373] px-2 flex w-fit text-white rounded-md sm:text-[18px] text-[16px] mr-2'>Pricing</span> ₹1000 per person, with discounted rates for groups (minimum of 4 participants) and larger groups of 9 or more.
            <br /><br />
            <span className='p-1 sm:m-3 m-2 bg-[#737373] px-2 flex w-fit text-white rounded-md sm:text-[16px] text-[16px] mr-2'>
              Discounted Rates
            </span>
            ₹900 each for a minimum of 4 participants.
            ₹800 each for groups of 9 or more.
            <br /><br />
            <span className='p-1 sm:m-3 m-2 bg-[#737373] px-2 flex w-fit text-white rounded-md sm:text-[18px] text-[16px] mr-2'>
              Session Availability
            </span>
            Weekdays with three time slots (3 pm - 4 pm, 6 pm - 7 pm, and 7 pm - 8 pm), excluding Wednesdays, and on Sundays from 11 am to 6 pm.
            <br /><br />
            <span className='p-1 sm:m-3 m-2 bg-[#737373] px-2 flex w-fit text-white rounded-md sm:text-[18px] text-[16px]'>
              Booking
            </span>
            Advance booking is essential, requiring a confirmation charge of ₹1000.

          </p>
          <button onClick={modalhandler} className='px-2 p-1 bg-red-500 sm:mt-4 mt-3 text-white hover:bg-red-700'>Close</button>
        </motion.div>
      }

    </div>
  )
}

export default Activities