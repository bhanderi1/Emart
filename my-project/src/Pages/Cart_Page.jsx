import React from 'react'
import Cart_Navbar from '../Component_section/Cart/Cart_Navbar'
import Main_Navbar from '../Component_section/Navbar/Main_Nabar'
import Cart from '../Component_section/Cart/Cart'
import Footer3 from '../Component_section/Footer/Footer3'

const Cart_Page = () => {
  return (
    <div>
      <Cart_Navbar/>
      <Main_Navbar/>
      <Cart/>
      <Footer3/>
    </div>
  )
}

export default Cart_Page
