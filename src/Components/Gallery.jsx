import React, { useEffect } from 'react'
import { gallery } from '../Config/image.js'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { HashLink } from 'react-router-hash-link'


const Gallery = () => {

  const art = gallery.filter((e) => e.type === "a")

  art.map((e, i = 0) => {
    e.id = i;
    i++
  })

  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <div id='art' className='flex justify-start flex-col items-center sm:mb-6 sm:mt-20 z-20'>

      <div className='sm:w-[80%] w-full h-fit flex justify-center items-center sm:shad sm:mb-20 sm:rounded-3xl rounded-none z-20'>
        <div ref={ref} className='w-full px-6 pb-10 bg-[#f0ece4] shad sm:rounded-3xl'>
          <div className='flex sm:flex-row flex-col ss:px-20 px-6 justify-between items-center py-4'>
            <h2 className='text-[32px] sm:text-[38px] text-[#131312] text-center font-rowdies py-4 mt-4'><span className='poo px-2'>#</span>Designs</h2>

            <HashLink to={'/gallery/#gals'} className="border-2 border-[#7b7b7b] rounded-lg px-3 py-2 text-[#9f9e9e] cursor-pointer font-poppins  hover:bg-[#7b7b7b] hover:text-white my-2" >View Full Gallery</HashLink>
          </div>
          <div className='flex flex-wrap justify-center items-center'>
            {
              art.map((gal) =>
                gal.id < 16 &&
                <motion.img
                  initial='hidden'
                  variants={{
                    hidden: { opacity: 0, x: -30, y: -30 },
                    visible: { opacity: 1, x: 0, y: 0 }
                  }}
                  transition={{ duration: 0.3, delay: 0.1 * gal.id }}
                  animate={controls}

                  className='ss:m-4 m-2 object-contain xs:w-[200px] w-[40%] h-auto' key={gal.id} src={gal.images} alt="" />
              )
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Gallery