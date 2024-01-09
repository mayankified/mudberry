import React from 'react'
import logo from '../assets/logo.svg'
import { MapContainer, TileLayer, useMap, Marker, Popup, Tooltip } from 'react-leaflet'
import { MdCall } from "react-icons/md";
import { FaInstagram, FaFacebook, FaTwitter, FaClock } from "react-icons/fa";


const Footer = () => {
    return (
        <div id='contact' className='w-full bg-[#fefeff80] flex flex-col justify-center items-center '>

            <div className='flex md:flex-row flex-col w-full p-6 shadoww'>

                <div className='md:w-[400px] ss:h-[250px] h-[150px] rounded-xl overflow-hidden m-2 map '>
                    <MapContainer className='w-full h-full' center={[21.152930026104787, 72.77593992233224]} zoom={15} scrollWheelZoom={false}>
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={[21.152930026104787, 72.77593992233224]}>
                            <Popup>
                                <img src={logo} alt="" className='w-[100px]' />
                            </Popup>
                            <Tooltip direction="right" offset={[0, 0]} opacity={1} permanent>MudBerry Studio</Tooltip>
                        </Marker>
                    </MapContainer>
                </div>
                <div className='w-full flex ss:flex-row flex-col justify-center px-6 text-[#373735] '>

                    <div className='mr-4 ss:border-r-2 flex ss:flex-row flex-col items-start h-full'>

                        <div className='flex flex-col justify-center px-2'>
                            <h2 className='font-semibold text-[18px] w-full rounded-md my-3'>Call us</h2>
                            <div className='flex items-center mr-4'>
                                <MdCall className='text-[20px] mr-2 ' />
                                <span>+91 9099747799</span>
                            </div>
                        </div>

                        <div className=''>
                            <h2 className='font-semibold text-[18px]  w-fit rounded-md my-3'>Location</h2>
                            <p className='max-w-[300px] ss:text-[16px] text-[14px]'>02, road, opposite to Homeland city, nearby hero showroom, Sai Kutir Society, Piplod, Surat, Gujarat 395007</p>
                        </div>

                    </div>
                    <div className='pl-2 flex ss:flex-row flex-col'>

                        <div >
                            <h2 className='font-semibold my-3 text-[18px]  w-fit rounded-md'>Opening Hours</h2>
                            <div className='flex items-center justify-between'>
                                <span >•  Mon-Sat</span>

                                <span className='bg-[#838080] text-white text-[14px] px-2 py-1 rounded-lg flex items-center m-2'><FaClock className='mr-1' />3pm to 8pm</span>
                            </div>
                            <div className='flex items-center justify-between'>
                                <span>•    Sunday</span>
                                <span className='bg-[#838080] text-white text-[14px] px-2 py-1 rounded-lg flex items-center m-2'><FaClock className='mr-1' />11am to 6pm</span>
                            </div>
                            <div className='flex items-center justify-between'>
                                <span>•  Wednesday</span>
                                <span className='bg-[#d64545] text-white text-[14px] px-2 py-1 rounded-lg flex items-center m-2'><FaClock className='mr-1' />Closed</span>
                            </div>
                        </div>

                        <div className='flex flex-col'>
                            <h2 className='font-semibold my-3 text-[18px] w-fit rounded-md'>Follow us</h2>
                            <div className='flex justify-around'>

                                <a className=' text-[#373735] hover:text-[#000]  p-2 transition-all text-[35px]' href="https://www.instagram.com/mudberry_studio/?hl=en"><FaInstagram /></a>
                                <a className=' text-[#373735] hover:text-[#000]  p-2 transition-all text-[35px]' href="#"><FaFacebook /></a>
                                <a className=' text-[#373735] hover:text-[#000]  p-2 transition-all text-[35px]' href="#"><FaTwitter /></a>
                            </div>

                        </div>
                    </div>


                </div>
            </div>

            <div className=" px-10 py-4 flex sm:flex-row flex-col items-center text-white bg-[#1a1a1a] w-full justify-center">
                <div className="items-center flex xs:flex-row flex-col text-white text-[14px] m-4">
                    <img src={logo} className='fotlog w-[100px] h-auto m-2' alt="" />
                    <p className='text-white ss:text-left text-center'>MudBerry Studio<br />© 2023 All Rights Reserved.</p>
                </div>
            </div>
        </div>
    )
}

export default Footer