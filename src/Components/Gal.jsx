import React, {useState } from 'react'
import { gallery } from '../Config/image.js'
import { AnimatePresence, motion} from 'framer-motion'
import { HashLink } from 'react-router-hash-link'

const Gal = () => {

    const [filters, setfilter] = useState('')

    const but = [
        {
            id: 1,
            name: 'All',
            key: '',
        },
        {
            id: 2,
            name: 'Artwork',
            key: 'a',
        },
        {
            id: 3,
            name: 'Proffessor',
            key: 'p',
        },
        {
            id: 4,
            name: 'Workshops',
            key: 'w',
        },
        {
            id: 5,
            name: 'Happy faces',
            key: 'h',
        },
    ]


    const handleCategoryChange = (category) => {
        setfilter(category);
    };


    const indexer = (data) => {
        return data.map((e, i) => {
            e.id = i;
            return e;
        });
    };
    const filteredImages = () => {
        if (filters) {
            const gal = gallery.filter((e) => e.type === filters)
            return indexer(gal)
        }
        else {
            return indexer(gallery)
        }

    }


    return (
        <div className='flex justify-center h-full bg-[#131312]'>
            <div id='gals'></div>

            <div className='w-[90%] h-fit flex justify-center items-center  '>


                <div className='w-full ss:px-8 px-2 bg-[#131312] rounded-md'>
                    <div className='flex sm:flex-row flex-col justify-between items-center py-4'>
                        <h2 className='text-[32px] text-white text-center font-poppins font-semibold py-4 mt-4'><span className='poo px-2'>#</span>Gallery</h2>

                        <div className='flex gap-2 flex-wrap justify-center'>
                            {
                                but.map((e) =>
                                    <button key={e.id} onClick={() => handleCategoryChange(e.key)} className={`border-2 border-[#b9b9b9] rounded-lg px-3 py-1  cursor-pointer font-poppins  hover:border-[#7b7b7b] ss:text-[16px] text-[12px] my-2 hover:bg-[#575656] ${filters === e.key ? 'border-[#7b7b7b] bg-[#575656]' : ''}`} ><span className='poo font-poppins font-medium'>{e.name}</span></button>
                                )
                            }


                        </div>

                        <HashLink to={'/#home'} className="border-2 border-[#7b7b7b] rounded-lg px-3 py-2 text-[#c8c8c8] cursor-pointer font-poppins  hover:bg-[#7b7b7b] hover:text-white my-2" >Back to home</HashLink>
                    </div>

                    <AnimatePresence>
                        <motion.div className='flex flex-wrap justify-center'>


                            {
                                filteredImages().map((gal) =>
                                    <motion.img
                                        initial='hidden'
                                        variants={{
                                            hidden: { opacity: 0, x: -30, y: -30 },
                                            visible: { opacity: 1, x: 0, y: 0 }

                                        }}
                                        transition={{ duration: 0.3, delay: 0.1 * gal.id }}
                                        animate={'visible'}

                                        className='ss:p-4 p-1 object-cover xs:w-[250px] w-[50%] py-3 rounded-md min-w-[120px] h-auto' key={gal.id} src={gal.images} alt="" />
                                )
                            }
                        </motion.div>
                    </AnimatePresence>


                </div>
            </div>
        </div>
    )
}
export default Gal