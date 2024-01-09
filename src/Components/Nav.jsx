import React, { useState } from 'react'
import logo from '../assets/logo.png'
import { HashLink } from 'react-router-hash-link'
import Hamburger from 'hamburger-react'
import { useScroll, useMotionValueEvent, motion } from 'framer-motion'

const Nav = () => {

  const [open, setopen] = useState(false)
  const [hidden, sethidden] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (latestvalue) => {
    scrollY.getPrevious() > latestvalue ? sethidden(false) : sethidden(true)

  })

  const handler = () => {
    setopen(false)
  }

  return (
    <motion.div
      initial=''
      variants={{
        'hidden': { y: '-100%' },
        'visible': { y: 0 }
      }}
      animate={hidden ? 'hidden' : 'visible'}
      transition={{ duration: 0.4, ease: 'easeInOut' }}
      className='fixed w-full h-auto z-50 bg-[rgb(255,255,255,.5)]'>

      <div className='flex flex-row w-full h-[80px] items-center ss:justify-center justify-between px-4  font-poppins text-[#4a4a4a]'>
        <img src={logo} alt="" className='md:absolute block py-2 left-8 w-[154px] h-auto' />
        <ul className='ss:flex hidden gap-6 py-2'>
          <li><HashLink smooth to='#home' className=' hover:text-[#000] text-[16px] transition-all duration-200 '>HOME</HashLink></li>
          <li><HashLink smooth to='#about' className=' hover:text-[#000] text-[16px] transition-all duration-200 '>ABOUT</HashLink></li>
          <li><HashLink smooth to='#art' className=' hover:text-[#000] text-[16px] transition-all duration-200 '>DESIGN</HashLink></li>
          <li><HashLink smooth to='#act' className=' hover:text-[#000] text-[16px] transition-all duration-200 '>ACTIVITIES</HashLink></li>
          <li><HashLink smooth to='#contact' className=' hover:text-[#000] text-[16px] transition-all duration-200 '>CONTACTS</HashLink></li>
        </ul>
        <div className='ss:hidden block'>
          <Hamburger toggle={setopen} toggled={open}  size={25} />
        </div>
      </div>
      {/* <div className='bg-red-400 w-full h-[100vh] absolute'> */}
      <div
        className={`${open ? 'absolute' : 'hidden'} bg-[rgb(210,209,209)] top-[13vh] right-2 z-auto px-4 rounded-lg font-poppins py-3 sidebar`}>
        <ul className='flex flex-col py-2 gap-2'>
          <li><HashLink onClick={handler} smooth to='#home' className=' hover:text-[#000] text-[16px] transition-all duration-200 '>HOME</HashLink></li>
          <li><HashLink onClick={handler} smooth to='#about' className=' hover:text-[#000] text-[16px] transition-all duration-200 '>ABOUT</HashLink></li>
          <li><HashLink onClick={handler} smooth to='#art' className=' hover:text-[#000] text-[16px] transition-all duration-200 '>DESIGN</HashLink></li>
          <li><HashLink onClick={handler} smooth to='#act' className=' hover:text-[#000] text-[16px] transition-all duration-200 '>ACTIVITIES</HashLink></li>
          <li><HashLink onClick={handler} smooth to='#contact' className=' hover:text-[#000] text-[16px] transition-all duration-200 '>CONTACTS</HashLink></li>
        </ul>
      </div>
      {/* </div> */}
    </motion.div>





  )
}

export default Nav