import { useAnimation,motion } from 'framer-motion';
import React, { useEffect } from 'react'
import {useInView} from 'react-intersection-observer'
import prof from '../assets/prof.jpg'
import curve from '../assets/curve.svg'



const Prof = () => {
    const controls = useAnimation();
    const { ref, inView } = useInView();

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    return (
        <div className='w-full min-h-[100vh] flex justify-center flex-col items-center prof pt-6'>
            <div className='flex md:flex-row flex-col bg-primary sm:w-[80%] w-[90%] h-[80%] my-10 rounded-xl p-6  items-center'>
                    <div className='flex flex-col sm:p-4'>
                        <h1 className='sm:text-[48px] text-[28px] font-rowdies text-primary'>The Maestro Behind the Studio</h1>
    
                        <motion.h2
                        ref={ref}
                        initial='hidden'
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0 }
    
                        }}
                        transition={{ duration: 1.2 }}
                        animate={controls}
                        
                        className='sm:text-[36px] text-[24px] font-rowdies font-medium my-2 text-[#373f3d]'>Meet Mr. Jaydeep Kotadiya</motion.h2>
                        <p className=' max-w-[560px] font-poppins sm:text-[17px] text-[14px] '>An accomplished Ceramic Art teacher with a Master of Fine Arts (M.F.A.) in Ceramic & Glass from Vishwa Bharti University, Santiniketan. Mr. Kotadiya brings a wealth of experience, both as an educator and an active participant in the art community. Currently holding a position in the sculpture department at Surat College of Fine Art, he is also the proud owner of Mudberry Pottery Studio.</p>
                    </div>
                <motion.img
                    src= {prof}
                    alt=""
                    className='md:w-[22vw] w-[100%] sm:h-auto h-[300px] rounded-xl object-cover mx-10 my-4' />
            </div>
        <img src={curve} className='dropshad mt-[50px] sm:hidden block w-full z-20' alt="" />

        </div>
    )
}

export default Prof