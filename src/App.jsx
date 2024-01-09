import React from 'react'
import Home from './Components/Home'
import Footer from './Components/Footer'
import Loader from './Components/Loader'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Gal from './Components/Gal'
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/gallery' element={<Gal/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App