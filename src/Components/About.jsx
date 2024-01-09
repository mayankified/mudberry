import React, { useEffect } from 'react'
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ab1 from '../assets/ab1.jpg'

const About = () => {

    const controls = useAnimation();
    const { ref, inView } = useInView();

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    return (
        <div id='about' className='w-full min-h-[100vh] my-6 flex justify-center flex-col items-center'>
            <div className='flex md:flex-row flex-col'>
                <motion.img
                    ref={ref}
                    initial='hidden'
                    variants={{
                        hidden: { opacity: 0, x: 200 },
                        visible: { opacity: 1, x: 0 }

                    }}
                    transition={{ duration: 1 }}
                    animate={controls}
                    src={ab1}
                    alt=""
                    className='md:w-[22vw] md:h-auto w-[80%] h-[200px] rounded-xl mx-10 object-cover' />
                <div className='flex flex-col px-6'>
                    <h1 className='sm:text-[52px] text-[32px] font-rowdies my-6 text-primary'>Welcome to Mudberry Studio</h1>

                    <p className=' max-w-[560px] font-poppins sm:text-[17px] text-[14px] '>At Mudberry Studio, we are more than just a pottery haven , we are a creative sanctuary where the art of molding clay meets the boundless possibilities of imagination. Established by the accomplished Ceramic Art teacher, Mr. Jaydeep Kotadiya, our studio is a fusion of expertise, passion, and the joy of artistic exploration.</p>
                    <h2 className='sm:text-[32px] text-[26px] font-rowdies mt-4 text-primary '>Our Vision</h2>
                    <p className=' max-w-[560px] font-poppins sm:text-[17px] text-[14px] '>Unleashing Creativity , Mudberry Studio is dedicated to providing a space where individuals of all ages and skill levels can explore the transformative power of clay. We believe in unleashing the innate creativity within, allowing every participant to mold and shape their artistic aspirations.</p>
                </div>
            </div>
        </div>
    )
}

export default About