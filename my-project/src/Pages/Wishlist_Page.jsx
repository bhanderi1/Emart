import React from 'react'
import Wislist_navbar from '../Component_section/Wishlist/Wislist_navbar'
import Main_Navbar from '../Component_section/Navbar/Main_Nabar'
import Footer2 from '../Component_section/Footer/Footer2'
import Wishlist from '../Component_section/Wishlist/Wishlist'

const Wishlist_Page = () => {
  return (
    <div>
      <Wislist_navbar />
      <div className='bg-gradient-to-l from-[#e8f3fc]  to-[#f8fafc]'>
        <Main_Navbar />
        <Wishlist />
      </div>
      <Footer2 />
    </div>
  )
}

export default Wishlist_Page
