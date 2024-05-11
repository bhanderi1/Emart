import React from 'react'
import CheckOut_Navbar from '../Component_section/CheckOut/CheckOut_Navbar'
import Main_Navbar from '../Component_section/Navbar/Main_Nabar'
import Footer from '../Component_section/Footer/Footer'
import Cart from '../Component_section/Cart/Cart'

const ChechOut_Page = () => {
  return (
    <div>
      <CheckOut_Navbar/>
      <Main_Navbar/>
      <Cart/>
      <Footer/>
    </div>
  )
}

export default ChechOut_Page
