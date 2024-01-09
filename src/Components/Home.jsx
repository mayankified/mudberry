import React from 'react'
import Hero from './Hero'
import About from './About'
import Gallery from './Gallery'
import Prof from './Prof'
import Activities from './Activities'


const Home = () => {
    return (
        <>
            <Hero />
            {/* <Loader/> */}
            <About />
            <Prof />
            <Gallery />
            <Activities />
        </>
    )
}

export default Home